import { CompanyInfo } from '../types';

export const DEFAULT_COMPANY_INFO: CompanyInfo = {
  name: 'INDUSTRIELTECH',
  phone: '+212 723033508',
  email: 'INFO@INDUSTRIELTECH.COM',
  whatsapp: '+212 723033508',
  address: 'Casablanca',
  interventionZone: 'Sur site',
  openingHours: 'Du lundi au samedi (8H30 - 17H30)',
  region: 'Casablanca, Maroc',
  slogan: 'Formations et solutions techniques pour l’industrie',
};

const LOCAL_STORAGE_KEY = 'industrial_site_company_info';

export function getStoredCompanyInfo(): CompanyInfo {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.name === '[NOM DE L’ENTREPRISE]' || !parsed.name) {
        parsed.name = 'INDUSTRIELTECH';
      }
      if (parsed.phone === '[TÉLÉPHONE]' || parsed.phone === '0723033508' || !parsed.phone) {
        parsed.phone = '+212 723033508';
      }
      if (parsed.email === '[ADRESSE E-MAIL]' || parsed.email?.toLowerCase().includes('example') || !parsed.email) {
        parsed.email = 'INFO@INDUSTRIELTECH.COM';
      }
      if (parsed.whatsapp === '[NUMÉRO WHATSAPP]' || parsed.whatsapp === '0723033508' || !parsed.whatsapp) {
        parsed.whatsapp = '+212 723033508';
      }
      if (parsed.address === '[ADRESSE]' || !parsed.address) {
        parsed.address = 'Casablanca';
      }
      if (parsed.interventionZone === '[ZONE D’INTERVENTION]' || !parsed.interventionZone) {
        parsed.interventionZone = 'Sur site';
      }
      if (parsed.openingHours === '[HORAIRES]' || !parsed.openingHours) {
        parsed.openingHours = 'Du lundi au samedi (8H30 - 17H30)';
      }
      return { ...DEFAULT_COMPANY_INFO, ...parsed };
    }
  } catch (e) {
    console.error('Failed to parse saved company info', e);
  }
  return DEFAULT_COMPANY_INFO;
}

export function saveCompanyInfo(info: CompanyInfo): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(info));
  } catch (e) {
    console.error('Failed to save company info', e);
  }
}
