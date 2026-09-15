import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import multer from 'multer';
import dotenv from 'dotenv';
import { handleDevisRoute, verifySmtpConnection, getSmtpConfigStatus } from './server/mailer';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing for JSON and form fields
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Multer setup with in-memory buffer storage (max 10MB per attachment)
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 },
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Status & diagnostic endpoint for SMTP configuration (no secrets exposed)
  app.get('/api/devis', async (req, res) => {
    const status = getSmtpConfigStatus();
    const shouldVerify = req.query?.verify === '1' || req.query?.test === '1';

    let verificationResult = null;
    if (shouldVerify) {
      verificationResult = await verifySmtpConnection();
    }

    res.json({
      status: 'ok',
      service: 'IndustrielTech Devis Mailer',
      smtpHost: status.host,
      smtpPort: status.port,
      smtpUser: status.user,
      hasPasswordConfigured: status.hasPass,
      contactRecipient: status.contactEmail,
      verification: verificationResult,
    });
  });

  // Main Devis submission endpoint via Hostinger SMTP
  app.post('/api/devis', (req, res) => {
    upload.single('attachment')(req, res, (err) => {
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
      handleDevisRoute(req, res);
    });
  });

  // Vite integration: middleware in development, static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] IndustrielTech full-stack server running on http://0.0.0.0:${PORT}`);
    // Run non-blocking SMTP diagnostic check
    verifySmtpConnection().catch((err) => {
      console.warn('[Server] Non-blocking SMTP verification note:', err);
    });
  });
}

startServer();
