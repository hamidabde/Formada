import multer from 'multer';
import type { Request, Response } from 'express';
import { handleDevisRoute, getSmtpConfigStatus, verifySmtpConnection } from '../server/mailer';

// Disable default Vercel body parser to allow multer to parse multipart/form-data with attachments
export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const status = getSmtpConfigStatus();
    const shouldVerify = req.query?.verify === '1' || req.query?.test === '1';

    let verificationResult = null;
    if (shouldVerify) {
      verificationResult = await verifySmtpConnection();
    }

    return res.status(200).json({
      service: 'IndustrielTech Devis Mailer (Vercel Serverless Function)',
      smtpHost: status.host,
      smtpPort: status.port,
      smtpUser: status.user,
      hasPasswordConfigured: status.hasPass,
      contactRecipient: status.contactEmail,
      verification: verificationResult,
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({
      success: false,
      error: 'Méthode non autorisée. Seul POST est accepté pour l’envoi de devis.',
    });
  }

  upload.single('attachment')(req, res, (err: any) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          success: false,
          error: 'Le fichier joint dépasse la taille maximale autorisée de 10 Mo.',
        });
      }
      return res.status(400).json({
        success: false,
        error: `Erreur de traitement du fichier joint : ${err.message}`,
      });
    }

    return handleDevisRoute(req as unknown as Request, res as unknown as Response);
  });
}
