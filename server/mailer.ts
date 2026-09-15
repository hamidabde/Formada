import nodemailer from 'nodemailer';
import type { Transporter, SendMailOptions } from 'nodemailer';
import type { Request, Response } from 'express';

export interface DevisPayload {
  fullName: string;
  companyName?: string;
  phone: string;
  email: string;
  requestType: string;
  relatedSubject?: string;
  urgency?: string;
  description: string;
  transmissionMode?: string;
  dataConsent?: boolean | string;
}

export interface SmtpConfigStatus {
  hasHost: boolean;
  hasPort: boolean;
  hasUser: boolean;
  hasPass: boolean;
  hasContactEmail: boolean;
  host: string;
  port: number;
  user: string;
  contactEmail: string;
}

/**
 * Returns current SMTP configuration status without exposing secrets
 */
export function getSmtpConfigStatus(): SmtpConfigStatus {
  const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER || 'info@industrieltech.com';
  const pass = process.env.SMTP_PASS || '';
  const contactEmail = process.env.CONTACT_EMAIL || user;

  return {
    hasHost: Boolean(process.env.SMTP_HOST),
    hasPort: Boolean(process.env.SMTP_PORT),
    hasUser: Boolean(process.env.SMTP_USER),
    hasPass: Boolean(pass.trim()),
    hasContactEmail: Boolean(process.env.CONTACT_EMAIL),
    host,
    port,
    user,
    contactEmail,
  };
}

/**
 * Creates Nodemailer transporter using Hostinger SMTP settings
 */
export function createTransporter(): Transporter {
  const status = getSmtpConfigStatus();
  const isSecure = status.port === 465;

  return nodemailer.createTransport({
    host: status.host,
    port: status.port,
    secure: isSecure, // true for 465, false for 587/other
    auth: {
      user: status.user,
      pass: process.env.SMTP_PASS || '',
    },
    tls: {
      rejectUnauthorized: true,
    },
    connectionTimeout: 12000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });
}

/**
 * Tests SMTP connection and logs status
 */
export async function verifySmtpConnection(): Promise<{ ok: boolean; message: string }> {
  const status = getSmtpConfigStatus();
  console.log(`[SMTP Init] Verifying Hostinger SMTP configuration:`);
  console.log(`  - Host: ${status.host}`);
  console.log(`  - Port: ${status.port}`);
  console.log(`  - User: ${status.user}`);
  console.log(`  - Password provided: ${status.hasPass ? 'YES' : 'NO'}`);
  console.log(`  - Destination contact email: ${status.contactEmail}`);

  if (!status.hasPass) {
    const msg = 'SMTP_PASS environment variable is missing. Real email delivery will be paused until configured in Vercel/environment.';
    console.warn(`[SMTP Warning] ${msg}`);
    return { ok: false, message: msg };
  }

  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('[SMTP Success] Hostinger SMTP server connection and authentication verified successfully.');
    return { ok: true, message: 'Connexion SMTP Hostinger validée avec succès.' };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error('[SMTP Error] Hostinger SMTP verification failed:', errorMsg);
    return { ok: false, message: errorMsg };
  }
}

const ALLOWED_EXTENSIONS = ['.pdf', '.png', '.jpg', '.jpeg', '.doc', '.docx'];
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/pjpeg',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/octet-stream',
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

/**
 * Core handler for Devis form submission
 */
export async function handleDevisRoute(req: Request, res: Response) {
  try {
    const body: DevisPayload = req.body || {};
    const file = req.file;

    const fullName = (body.fullName || '').trim();
    const companyName = (body.companyName || '').trim();
    const phone = (body.phone || '').trim();
    const email = (body.email || '').trim().toLowerCase();
    const requestType = (body.requestType || '').trim();
    const relatedSubject = (body.relatedSubject || '').trim();
    const urgency = (body.urgency || 'Normal').trim();
    const description = (body.description || '').trim();
    const transmissionMode = (body.transmissionMode || 'Via E-mail').trim();
    const consent = body.dataConsent;

    // 1. Validate required fields
    const errors: string[] = [];
    if (!fullName || fullName.length < 2) {
      errors.push('Le nom et prénom sont obligatoires.');
    }
    if (!phone || phone.length < 6) {
      errors.push('Le numéro de téléphone est obligatoire.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.push('Une adresse e-mail valide est obligatoire.');
    }
    if (!requestType) {
      errors.push('Le type de demande est obligatoire.');
    }
    if (!description || description.length < 5) {
      errors.push('La description de votre besoin est obligatoire (au moins 5 caractères).');
    }
    const isConsentGiven = consent === true || consent === 'true' || consent === '1' || consent === 'on';
    if (!isConsentGiven) {
      errors.push('L’acceptation du traitement des données personnelles est requise.');
    }

    // 2. Validate optional attachment
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        errors.push('Le fichier joint dépasse la taille maximale autorisée de 10 Mo.');
      }
      const extension = ('.' + (file.originalname.split('.').pop() || '')).toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(extension)) {
        errors.push(`Extension de fichier non autorisée (${extension}). Formats acceptés : PDF, PNG, JPG, DOC, DOCX.`);
      }
      if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
        errors.push(`Type MIME non autorisé (${file.mimetype}).`);
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: errors.join(' '),
        details: errors,
      });
    }

    // 3. Check SMTP Configuration
    const smtpStatus = getSmtpConfigStatus();
    if (!smtpStatus.hasPass) {
      console.error('[SMTP Error] Cannot deliver email: SMTP_PASS is not configured in environment variables.');
      return res.status(500).json({
        success: false,
        error: 'Le service d’envoi d’e-mail n’est pas configuré sur le serveur (SMTP_PASS manquant). Veuillez configurer les variables d’environnement.',
      });
    }

    // 4. Build Email Content
    const nowStr = new Date().toLocaleString('fr-FR', {
      timeZone: 'Africa/Casablanca',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const subject = `Nouvelle demande IndustrielTech — ${requestType} — ${fullName}`;
    const fromAddress = `IndustrielTech <${smtpStatus.user}>`;
    const toAddress = smtpStatus.contactEmail;
    const replyToAddress = email;

    // Plain text fallback
    const plainText = `
=====================================================
NOUVELLE DEMANDE INDUSTRIELTECH
=====================================================

Date : ${nowStr}
Mode de transmission : ${transmissionMode}

INFORMATIONS DU CLIENT :
• Nom et prénom : ${fullName}
• Entreprise    : ${companyName || 'Non spécifiée'}
• Téléphone     : ${phone}
• Adresse e-mail: ${email}

DÉTAILS DE LA DEMANDE :
• Type de demande : ${requestType}
${relatedSubject ? `• Sujet / Formation : ${relatedSubject}\n` : ''}• Niveau d'urgence: ${urgency}

DESCRIPTION DÉTAILLÉE :
-----------------------------------------------------
${description}
-----------------------------------------------------
${file ? `FICHIER JOINT : ${file.originalname} (${(file.size / 1024).toFixed(1)} Ko)\n` : ''}
Ce message a été envoyé depuis le formulaire du site officiel INDUSTRIELTECH.
Pour répondre au client, répondez directement à cet e-mail.
    `.trim();

    // HTML email
    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: #1a365d; padding: 28px 32px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase; color: #f97316; }
    .header p { margin: 6px 0 0 0; font-size: 13px; color: #cbd5e1; }
    .content { padding: 32px; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase; }
    .badge-urgent { background: #fee2e2; color: #991b1b; }
    .badge-prioritaire { background: #ffedd5; color: #9a3412; }
    .badge-normal { background: #e0f2fe; color: #075985; }
    .badge-type { background: #fef3c7; color: #92400e; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px; vertical-align: top; }
    .table td.label { width: 35%; font-weight: 600; color: #64748b; background: #f8fafc; }
    .table td.val { width: 65%; color: #0f172a; font-weight: 500; }
    .desc-box { background: #f8fafc; border-left: 4px solid #f97316; padding: 16px; border-radius: 8px; font-size: 13px; line-height: 1.6; white-space: pre-wrap; color: #1e293b; margin-bottom: 24px; }
    .attachment-box { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px 16px; border-radius: 8px; font-size: 12px; color: #166534; margin-bottom: 24px; }
    .footer { background: #f8fafc; padding: 20px 32px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>INDUSTRIELTECH</h1>
      <p>Nouvelle demande reçue depuis le site web • ${nowStr}</p>
    </div>
    <div class="content">
      <table class="table">
        <tr>
          <td class="label">Nom et prénom</td>
          <td class="val"><strong>${escapeHtml(fullName)}</strong></td>
        </tr>
        <tr>
          <td class="label">Entreprise</td>
          <td class="val">${companyName ? escapeHtml(companyName) : '<em>Non spécifiée</em>'}</td>
        </tr>
        <tr>
          <td class="label">Téléphone</td>
          <td class="val"><a href="tel:${escapeHtml(phone)}" style="color: #f97316; text-decoration: none; font-weight: 700;">${escapeHtml(phone)}</a></td>
        </tr>
        <tr>
          <td class="label">Adresse e-mail</td>
          <td class="val"><a href="mailto:${escapeHtml(email)}" style="color: #1a365d; text-decoration: underline; font-weight: 600;">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td class="label">Type de demande</td>
          <td class="val"><span class="badge badge-type">${escapeHtml(requestType)}</span></td>
        </tr>
        ${
          relatedSubject
            ? `<tr><td class="label">Sujet / Formation</td><td class="val"><strong>${escapeHtml(relatedSubject)}</strong></td></tr>`
            : ''
        }
        <tr>
          <td class="label">Niveau d'urgence</td>
          <td class="val">
            <span class="badge ${
              urgency.includes('critique')
                ? 'badge-urgent'
                : urgency === 'Prioritaire'
                ? 'badge-prioritaire'
                : 'badge-normal'
            }">${escapeHtml(urgency)}</span>
          </td>
        </tr>
        <tr>
          <td class="label">Mode de transmission</td>
          <td class="val"><strong>${escapeHtml(transmissionMode)}</strong></td>
        </tr>
        <tr>
          <td class="label">Date de soumission</td>
          <td class="val">${nowStr}</td>
        </tr>
      </table>

      <h3 style="font-size: 14px; font-weight: 700; color: #1a365d; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">
        Description détaillée du besoin :
      </h3>
      <div class="desc-box">${escapeHtml(description)}</div>

      ${
        file
          ? `<div class="attachment-box">
              📎 <strong>Fichier joint :</strong> ${escapeHtml(file.originalname)} (${(file.size / 1024).toFixed(1)} Ko)
            </div>`
          : ''
      }
    </div>
    <div class="footer">
      Cet e-mail a été généré automatiquement par le serveur INDUSTRIELTECH via Hostinger SMTP.<br>
      Vous pouvez répondre directement à cet e-mail pour contacter <strong>${escapeHtml(fullName)}</strong> (${escapeHtml(email)}).
    </div>
  </div>
</body>
</html>
    `.trim();

    // 5. Send Email via Nodemailer
    const transporter = createTransporter();

    const mailOptions: SendMailOptions = {
      from: fromAddress,
      to: toAddress,
      replyTo: replyToAddress,
      subject: subject,
      text: plainText,
      html: htmlContent,
      attachments: file
        ? [
            {
              filename: file.originalname,
              content: file.buffer,
              contentType: file.mimetype,
            },
          ]
        : [],
    };

    console.log(`[SMTP Sending] Attempting to send quote/intervention request from "${email}" to "${toAddress}"...`);
    const info = await transporter.sendMail(mailOptions);
    console.log(`[SMTP Sent] Message delivered successfully! Message ID: ${info.messageId}`);

    return res.status(200).json({
      success: true,
      message: 'Votre demande a bien été envoyée.',
      messageId: info.messageId,
    });
  } catch (err: unknown) {
    // 6. Log detailed error without revealing passwords
    const error = err as { code?: string; command?: string; response?: string; responseCode?: number; message?: string };
    console.error('[SMTP Fatal Error] Failed to send email via Hostinger SMTP:', {
      code: error?.code,
      command: error?.command,
      response: error?.response,
      responseCode: error?.responseCode,
      message: error?.message,
    });

    // Helpful error guidance based on common SMTP issues
    let userFriendlyError = 'Une erreur est survenue lors de l’envoi. Veuillez réessayer.';
    if (error?.code === 'EAUTH' || error?.responseCode === 535) {
      console.error('[SMTP Auth Failure] Hostinger rejected SMTP credentials. Please check SMTP_USER and SMTP_PASS in Vercel.');
    } else if (error?.code === 'ESOCKET' || error?.code === 'ETIMEDOUT') {
      console.error('[SMTP Network Timeout] Unable to connect to Hostinger SMTP port 465.');
    }

    return res.status(500).json({
      success: false,
      error: userFriendlyError,
      errorCode: error?.code || 'SMTP_ERROR',
    });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
