export type PageRoute = '/' | '/formations' | '/services' | '/realisations' | '/a-propos' | '/contact';

export type CategoryId =
  | 'all'
  | 'automatisme'
  | 'supervision'
  | 'scada'
  | 'reseaux'
  | 'diagnostic'
  | 'variateurs'
  | 'solaire'
  | 'electricite'
  | 'efficacite'
  | 'maintenance'
  | 'electronique'
  | 'securite'
  | 'qhse';

export interface Course {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  shortDescription: string;
  image: string;
  imageWebp?: string;
  imageJpg?: string;
  imageAlt: string;
  seoFileName?: string;
  objectives: string[];
  program: {
    moduleTitle: string;
    topics: string[];
  }[];
  levelsInfo?: string;
  targetAudience: string;
  prerequisites: string;
  duration: string; // e.g. "Selon le niveau des participants et les besoins"
  level: string; // e.g. "Initiation à Expert" / "Tous niveaux / Adaptable"
  modalities: string; // "Présentiel, En entreprise (Sur site client) ou Classe virtuelle"
  practicalWork: string; // "70% Travaux Pratiques sur bancs de test et équipements réels"
  equipmentAndSoftware: string[];
  certification: string; // "Attestation de fin de formation et d'évaluation des compétences"
  price: string; // "Sur devis (Selon besoins et format)"
  featuredHome?: boolean;
}

export type ServiceId = 'reparation' | 'automatisme' | 'diagnostic' | 'installation';

export interface TechService {
  id: ServiceId;
  title: string;
  shortDescription: string;
  fullDescription: string;
  subFeatures: string[];
  equipmentTypes: string[];
  iconName: string;
  ctaText: string;
}

export interface InterventionProject {
  id: string;
  title: string;
  equipmentType: string;
  sector: string;
  problem: string;
  diagnosis: string;
  solution: string;
  result: string;
  hasPhotosPlaceholder?: boolean;
  isModelExample?: boolean;
}

export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  interventionZone: string;
  openingHours: string;
  region: string;
  slogan: string;
}

export type RequestType = 
  | 'Formation'
  | 'Réparation d’une carte électronique'
  | 'Diagnostic ou dépannage'
  | 'Programmation d’un automate'
  | 'Mise en service'
  | 'Demande de devis'
  | 'Autre demande';

export type UrgencyLevel = 'Normal' | 'Prioritaire' | 'Urgence critique (Arrêt de production)';

export interface ContactFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  requestType: RequestType;
  relatedSubject: string; // course title or service title if prefilled
  description: string;
  urgency: UrgencyLevel;
  attachedFileName?: string;
  dataConsent: boolean;
}
