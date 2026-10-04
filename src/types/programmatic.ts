export type ProgrammaticType = 'formation' | 'service' | 'guide';

export type SearchIntent = 'commerciale' | 'informationnelle' | 'transactionnelle';

export type PublicationStatus = 'published' | 'draft';

export interface CatalogSection {
  title: string;
  badge?: string;
  content?: string;
  items?: string[];
  subsections?: {
    subtitle: string;
    description: string;
    details?: string[];
  }[];
  callout?: {
    type: 'info' | 'warning' | 'tip';
    title: string;
    text: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedLink {
  title: string;
  url: string;
  description?: string;
  type: ProgrammaticType;
}

export interface LocationTarget {
  city?: string;
  region?: string;
  isNationalCoverage: boolean;
  notes?: string;
}

export interface FormationSpecifics {
  audience: string[];
  prerequisites: string[];
  skillsAquired: string[];
  confirmedHardwareAndSoftware: string[];
  programModules: {
    title: string;
    durationEstimate?: string;
    topics: string[];
  }[];
  pedagogicalModalities: string;
  certificationNote: string;
}

export interface ServiceSpecifics {
  targetedEquipments: string[];
  triggerSituations: string[];
  confirmedScope: string[];
  requiredCustomerInfo: {
    item: string;
    description: string;
  }[];
  serviceModalities: string[];
  turnaroundNote: string;
}

export interface GuideSpecifics {
  quickAnswer: string;
  preparationChecklist?: string[];
  technicalSteps?: {
    stepNumber: number;
    title: string;
    explanation: string;
    safetyRule?: string;
  }[];
  professionalBoundaries: string[];
  targetAudience: string;
}

export interface ProgrammaticPage {
  slug: string;
  type: ProgrammaticType;
  status: PublicationStatus;
  draftReason?: string;
  missingRequirements?: string[];
  primaryKeyword: string;
  searchIntent: SearchIntent;
  title: string;
  description: string;
  h1: string;
  introduction: string;
  heroImage?: string;
  heroImageAlt?: string;
  badgeText: string;
  
  // Specific sections by template type
  formationData?: FormationSpecifics;
  serviceData?: ServiceSpecifics;
  guideData?: GuideSpecifics;

  // General modular sections
  sections: CatalogSection[];

  // FAQ
  faq: FaqItem[];

  // Internal linking
  relatedSlugs: string[];

  // CTA configuration
  cta: {
    label: string;
    subtext: string;
    actionType: 'quote' | 'training' | 'diagnostic' | 'contact';
    prefilledSubject: string;
    prefilledType: 'Formation' | 'Diagnostic ou dépannage' | 'Demande de devis' | 'Autre';
  };

  // Editorial & Verification
  sourcesOrBusinessInfo: string;
  updatedAt: string;
  location?: LocationTarget;
}
