import { ContactFormData } from '../types';

export const WHATSAPP_NUMBER_RAW = '212723033508';
export const WHATSAPP_NUMBER_FORMATTED = '+212 723033508';
export const OFFICIAL_EMAIL = 'INFO@INDUSTRIELTECH.COM';

/**
 * Format phone number to clean international number for WhatsApp URL (e.g. 212723033508)
 */
export function formatWhatsAppNumber(phone: string): string {
  if (!phone) return WHATSAPP_NUMBER_RAW;
  let cleaned = phone.replace(/[^\d]/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '212' + cleaned.substring(1);
  }
  if (!cleaned.startsWith('212')) {
    cleaned = '212' + cleaned;
  }
  return cleaned || WHATSAPP_NUMBER_RAW;
}

/**
 * Build pre-filled WhatsApp link with formatted text
 */
export function buildWhatsAppLink(data: Partial<ContactFormData>, targetPhone: string = WHATSAPP_NUMBER_RAW): string {
  const number = formatWhatsAppNumber(targetPhone);
  
  let text = `Bonjour INDUSTRIELTECH,\n\n`;
  text += `Je souhaite effectuer une demande :\n`;
  if (data.requestType) text += `• Type : ${data.requestType}\n`;
  if (data.relatedSubject) text += `• Sujet / Intitulé : ${data.relatedSubject}\n`;
  if (data.fullName) text += `• Nom / Prénom : ${data.fullName}\n`;
  if (data.companyName) text += `• Entreprise : ${data.companyName}\n`;
  if (data.phone) text += `• Téléphone : ${data.phone}\n`;
  if (data.email) text += `• E-mail : ${data.email}\n`;
  if (data.urgency) text += `• Urgence : ${data.urgency}\n`;
  if (data.description) text += `\nDescription du besoin :\n${data.description}\n`;
  if (data.attachedFileName) text += `\n(Document / Schéma : ${data.attachedFileName})`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Build pre-filled Gmail Web link to INFO@INDUSTRIELTECH.COM
 */
export function buildGmailLink(data: Partial<ContactFormData>, targetEmail: string = OFFICIAL_EMAIL): string {
  const subjectStr = data.relatedSubject
    ? `[Demande INDUSTRIELTECH] ${data.requestType || 'Devis'} - ${data.relatedSubject}`
    : `[Demande INDUSTRIELTECH] ${data.requestType || 'Devis'}`;

  let body = `Bonjour l'équipe INDUSTRIELTECH,\n\n`;
  body += `Voici les détails de ma demande :\n\n`;
  if (data.requestType) body += `• Type de demande : ${data.requestType}\n`;
  if (data.relatedSubject) body += `• Formation / Service concerné : ${data.relatedSubject}\n`;
  if (data.fullName) body += `• Nom et prénom : ${data.fullName}\n`;
  if (data.companyName) body += `• Nom de l'entreprise : ${data.companyName}\n`;
  if (data.phone) body += `• Téléphone : ${data.phone}\n`;
  if (data.email) body += `• E-mail client : ${data.email}\n`;
  if (data.urgency) body += `• Niveau d'urgence : ${data.urgency}\n`;
  if (data.description) body += `\nDescription détaillée :\n${data.description}\n`;
  if (data.attachedFileName) body += `\nFichier joint indiqué : ${data.attachedFileName}\n`;

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subjectStr)}&body=${encodeURIComponent(body)}`;
}

/**
 * Build pre-filled Outlook Web link to INFO@INDUSTRIELTECH.COM
 */
export function buildOutlookLink(data: Partial<ContactFormData>, targetEmail: string = OFFICIAL_EMAIL): string {
  const subjectStr = data.relatedSubject
    ? `[Demande INDUSTRIELTECH] ${data.requestType || 'Devis'} - ${data.relatedSubject}`
    : `[Demande INDUSTRIELTECH] ${data.requestType || 'Devis'}`;

  let body = `Bonjour l'équipe INDUSTRIELTECH,\n\n`;
  body += `Voici les détails de ma demande :\n\n`;
  if (data.requestType) body += `• Type de demande : ${data.requestType}\n`;
  if (data.relatedSubject) body += `• Formation / Service concerné : ${data.relatedSubject}\n`;
  if (data.fullName) body += `• Nom et prénom : ${data.fullName}\n`;
  if (data.companyName) body += `• Nom de l'entreprise : ${data.companyName}\n`;
  if (data.phone) body += `• Téléphone : ${data.phone}\n`;
  if (data.email) body += `• E-mail client : ${data.email}\n`;
  if (data.urgency) body += `• Niveau d'urgence : ${data.urgency}\n`;
  if (data.description) body += `\nDescription détaillée :\n${data.description}\n`;
  if (data.attachedFileName) body += `\nFichier joint indiqué : ${data.attachedFileName}\n`;

  return `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(targetEmail)}&subject=${encodeURIComponent(subjectStr)}&body=${encodeURIComponent(body)}`;
}

/**
 * Build pre-filled Mailto link to INFO@INDUSTRIELTECH.COM
 */
export function buildMailtoLink(data: Partial<ContactFormData>, targetEmail: string = OFFICIAL_EMAIL): string {
  const subjectStr = data.relatedSubject
    ? `[Demande INDUSTRIELTECH] ${data.requestType || 'Devis'} - ${data.relatedSubject}`
    : `[Demande INDUSTRIELTECH] ${data.requestType || 'Devis'}`;

  let body = `Bonjour l'équipe INDUSTRIELTECH,\n\n`;
  body += `Voici les détails de ma demande :\n\n`;
  if (data.requestType) body += `• Type de demande : ${data.requestType}\n`;
  if (data.relatedSubject) body += `• Formation / Service concerné : ${data.relatedSubject}\n`;
  if (data.fullName) body += `• Nom et prénom : ${data.fullName}\n`;
  if (data.companyName) body += `• Nom de l'entreprise : ${data.companyName}\n`;
  if (data.phone) body += `• Téléphone : ${data.phone}\n`;
  if (data.email) body += `• E-mail client : ${data.email}\n`;
  if (data.urgency) body += `• Niveau d'urgence : ${data.urgency}\n`;
  if (data.description) body += `\nDescription détaillée :\n${data.description}\n`;
  if (data.attachedFileName) body += `\nFichier joint indiqué : ${data.attachedFileName}\n`;

  return `mailto:${targetEmail}?subject=${encodeURIComponent(subjectStr)}&body=${encodeURIComponent(body)}`;
}
