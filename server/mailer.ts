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
 * Classifies a Nodemailer error into a standardized safe error code
 */
export function classifySmtpError(err: any): { errorCode: string; userMessage: string } {
  const code = err?.code || '';
  const message = String(err?.message || '');
  const responseCode = Number(err?.responseCode) || 0;
  const response = String(err?.response || '');

  if (
    code === 'EAUTH' ||
    responseCode === 535 ||
    /auth|invalid login|credentials|username and password not accepted|535/i.test(message) ||
    /535/i.test(response)
  ) {
    return {
      errorCode: 'SMTP_AUTH_FAILED',
      userMessage: 'Échec d’authentification SMTP : les identifiants utilisateur ou mot de passe ont été refusés par Hostinger.',
    };
  }

  if (code === 'ETIMEDOUT' || /timeout|timed out|greeting timeout/i.test(message)) {
    return {
      errorCode: 'SMTP_TIMEOUT',
      userMessage: 'Délai d’attente dépassé lors de la communication avec le serveur SMTP Hostinger.',
    };
  }

  if (
    code === 'ECONNREFUSED' ||
    code === 'ESOCKET' ||
    code === 'ENOTFOUND' ||
    code === 'EDNS' ||
    code === 'ECONNRESET' ||
    code === 'EHOSTUNREACH' ||
    /connect|network|socket|closed|getaddrinfo/i.test(message)
  ) {
    return {
      errorCode: 'SMTP_CONNECTION_FAILED',
      userMessage: 'Impossible d’établir la connexion réseau avec le serveur SMTP Hostinger.',
    };
  }

  if (responseCode >= 500 && responseCode < 600) {
    return {
      errorCode: 'SMTP_REJECTED',
      userMessage: `L’e-mail a été rejeté par le serveur de messagerie (Code ${responseCode}).`,
    };
  }

  return {
    errorCode: code || 'SMTP_REJECTED',
    userMessage: 'Une erreur est survenue lors de l’envoi de votre demande via le serveur SMTP.',
  };
}

export interface VerifiedTransporterResult {
  transporter: Transporter;
  usedConfig: {
    host: string;
    port: number;
    secure: boolean;
    requireTLS?: boolean;
  };
}

/**
 * Creates and verifies Nodemailer transporter using primary config (port 465, secure: true)
 * and falls back to port 587 (secure: false, requireTLS: true) if connection to 465 fails.
 */
export async function getVerifiedTransporter(): Promise<VerifiedTransporterResult> {
  const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';

  // 1. Primary Configuration (port 465, secure: true)
  const primaryConfig = {
    host,
    port,
    secure: true,
    auth: {
      user,
      pass,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  };

  console.log(`[SMTP Verify] Testing Primary Config (host: ${host}, port: ${port}, secure: true)...`);
  const primaryTransporter = nodemailer.createTransport(primaryConfig);

  try {
    await primaryTransporter.verify();
    console.log(`[SMTP Verify Success] Primary transporter verified successfully on port ${port} (secure: true).`);
    return {
      transporter: primaryTransporter,
      usedConfig: { host, port, secure: true },
    };
  } catch (err465: any) {
    // 1. In the server-side email code, log the real Nodemailer error:
    console.error('[SMTP Error on Primary Config (Port 465)]:', {
      code: err465?.code,
      command: err465?.command,
      response: err465?.response,
      responseCode: err465?.responseCode,
      message: err465?.message,
    });

    const isConnIssue =
      err465?.code === 'ETIMEDOUT' ||
      err465?.code === 'ECONNREFUSED' ||
      err465?.code === 'ESOCKET' ||
      err465?.code === 'ENOTFOUND' ||
      err465?.code === 'ECONNRESET' ||
      /timeout|connect|socket/i.test(err465?.message || '');

    // 5. If port 465 fails to connect, test fallback configuration: port 587, secure: false, requireTLS: true
    console.warn(`[SMTP Fallback] Port 465 verify failed. Testing fallback configuration on port 587 (secure: false, requireTLS: true)...`);

    const fallbackConfig = {
      host,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    };

    const fallbackTransporter = nodemailer.createTransport(fallbackConfig);

    try {
      await fallbackTransporter.verify();
      console.log('[SMTP Fallback Success] Fallback transporter verified successfully on port 587 (secure: false, requireTLS: true).');
      return {
        transporter: fallbackTransporter,
        usedConfig: { host, port: 587, secure: false, requireTLS: true },
      };
    } catch (err587: any) {
      console.error('[SMTP Error on Fallback Config (Port 587)]:', {
        code: err587?.code,
        command: err587?.command,
        response: err587?.response,
        responseCode: err587?.responseCode,
        message: err587?.message,
      });

      // Throw the most relevant error (or fallback error if connection issue)
      const finalError = isConnIssue ? err587 : err465;
      throw finalError;
    }
  }
}

/**
 * Tests SMTP connection and logs status
 */
export async function verifySmtpConnection(): Promise<{
  ok: boolean;
  message: string;
  envCheck: Record<string, boolean>;
  primaryError?: any;
  fallbackError?: any;
}> {
  const envCheck = {
    SMTP_HOST: Boolean(process.env.SMTP_HOST),
    SMTP_PORT: Boolean(process.env.SMTP_PORT),
    SMTP_USER: Boolean(process.env.SMTP_USER),
    SMTP_PASS: Boolean(process.env.SMTP_PASS && process.env.SMTP_PASS.trim().length > 0),
    CONTACT_EMAIL: Boolean(process.env.CONTACT_EMAIL),
  };

  console.log('[SMTP Env Check]', envCheck);

  if (!envCheck.SMTP_HOST || !envCheck.SMTP_PORT || !envCheck.SMTP_USER || !envCheck.SMTP_PASS) {
    const msg = 'Variables d’environnement SMTP manquantes. Veuillez configurer SMTP_HOST, SMTP_PORT, SMTP_USER et SMTP_PASS.';
    console.warn(`[SMTP Warning] ${msg}`);
    return { ok: false, message: msg, envCheck };
  }

  try {
    const { usedConfig } = await getVerifiedTransporter();
    return {
      ok: true,
      message: `Connexion SMTP Hostinger validée avec succès via le port ${usedConfig.port} (secure: ${usedConfig.secure}).`,
      envCheck,
    };
  } catch (err: any) {
    return {
      ok: false,
      message: err?.message || 'Échec de vérification SMTP',
      envCheck,
      primaryError: {
        code: err?.code,
        command: err?.command,
        response: err?.response,
        responseCode: err?.responseCode,
        message: err?.message,
      },
    };
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

    // 2. Before sending, log only whether each environment variable exists (no secret values)
    const envStatus = {
      SMTP_HOST: Boolean(process.env.SMTP_HOST),
      SMTP_PORT: Boolean(process.env.SMTP_PORT),
      SMTP_USER: Boolean(process.env.SMTP_USER),
      SMTP_PASS: Boolean(process.env.SMTP_PASS && process.env.SMTP_PASS.trim().length > 0),
      CONTACT_EMAIL: Boolean(process.env.CONTACT_EMAIL),
    };
    console.log('[SMTP Env Check]', envStatus);

    if (!envStatus.SMTP_HOST || !envStatus.SMTP_PORT || !envStatus.SMTP_USER || !envStatus.SMTP_PASS) {
      console.error('[SMTP Config Error] Missing required SMTP environment variables:', envStatus);
      return res.status(500).json({
        success: false,
        error: 'Variables d’environnement SMTP manquantes sur le serveur [MISSING_ENV]',
        errorCode: 'MISSING_ENV',
        envStatus,
      });
    }

    // 5. Get verified transporter (attempts port 465 first, then falls back to 587 if connection fails)
    const { transporter, usedConfig } = await getVerifiedTransporter();

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

    console.log(`[SMTP Sending] Sending quote request from "${email}" to "${toAddress}" via port ${usedConfig.port} (secure: ${usedConfig.secure})...`);
    const info = await transporter.sendMail(mailOptions);
    console.log(`[SMTP Sent] Message delivered successfully via Hostinger SMTP! Message ID: ${info.messageId}`);

    return res.status(200).json({
      success: true,
      message: 'Votre demande a bien été envoyée.',
      messageId: info.messageId,
      usedPort: usedConfig.port,
    });
  } catch (err: unknown) {
    // 1. In the server-side email code, log the real Nodemailer error:
    const error = err as {
      code?: string;
      command?: string;
      response?: string;
      responseCode?: number;
      message?: string;
    };

    console.error('[SMTP Real Error]:', {
      code: error?.code,
      command: error?.command,
      response: error?.response,
      responseCode: error?.responseCode,
      message: error?.message,
    });

    const { errorCode, userMessage } = classifySmtpError(error);

    return res.status(500).json({
      success: false,
      error: `${userMessage} [${errorCode}]`,
      errorCode: errorCode,
      smtpDetails: {
        code: error?.code || null,
        command: error?.command || null,
        responseCode: error?.responseCode || null,
        response: error?.response || null,
        message: error?.message || null,
      },
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
