export interface SeoMetadata {
  title: string;
  description: string;
}

export const PAGE_SEO_DATA: Record<string, SeoMetadata> = {
  '/': {
    title: 'INDUSTRIELTECH | Automatisme, Maintenance & Formation au Maroc',
    description: 'INDUSTRIELTECH propose au Maroc des formations et services en automatisme industriel, maintenance, variateurs de vitesse, électricité et énergie.',
  },
  '/formations': {
    title: 'Formations Industrielles au Maroc | Automatisme, Maintenance & Énergie',
    description: 'Découvrez nos formations professionnelles au Maroc en automatisme, PLC, SCADA, variateurs de vitesse, maintenance, électricité et énergie.',
  },
  '/services': {
    title: "Services d'Automatisme & Maintenance Industrielle au Maroc",
    description: 'INDUSTRIELTECH propose au Maroc des services en automatisme, programmation PLC, maintenance, variateurs et diagnostic électronique industriel.',
  },
  '/realisations': {
    title: 'Réalisations en Automatisme & Maintenance au Maroc | INDUSTRIELTECH',
    description: 'Découvrez les réalisations INDUSTRIELTECH en automatisme, maintenance, électricité, variateurs de vitesse et solutions industrielles au Maroc.',
  },
  '/a-propos': {
    title: 'INDUSTRIELTECH | Expertise en Automatisme & Industrie au Maroc',
    description: "Découvrez INDUSTRIELTECH, spécialisé au Maroc dans l'automatisme, la maintenance industrielle, la formation technique, l'électricité et l'énergie.",
  },
  '/contact': {
    title: 'Contact INDUSTRIELTECH Maroc | Formation & Services Industriels',
    description: 'Contactez INDUSTRIELTECH au Maroc pour vos besoins en formation, automatisme industriel, maintenance, variateurs et assistance technique.',
  },
};

export const TOPIC_SEO_DATA: Record<string, SeoMetadata> = {
  // 13 Formations principales
  'automatisme-plc': {
    title: 'Formation Automatisme Industriel & PLC au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique en automatisme industriel au Maroc : automates PLC/API, Grafcet, programmation, capteurs, actionneurs et diagnostic.',
  },
  'ihm-hmi': {
    title: 'Formation IHM HMI au Maroc | Interfaces Homme-Machine Industrielles',
    description: "Formation IHM/HMI au Maroc : conception et programmation d'interfaces opérateur pour piloter, visualiser et diagnostiquer les automatismes.",
  },
  'supervision-scada': {
    title: 'Formation SCADA au Maroc | WinCC, InTouch & PC Vue',
    description: 'Formation SCADA au Maroc sur WinCC, InTouch et PC Vue : supervision, alarmes, tendances, acquisition de données et pilotage industriel.',
  },
  'reseaux-industriels': {
    title: 'Formation Réseaux Industriels au Maroc | PROFINET & Modbus TCP',
    description: 'Formation aux réseaux industriels au Maroc : PROFINET, Ethernet/IP, Modbus TCP, configuration, communication et diagnostic des équipements.',
  },
  'diagnostic-automatismes': {
    title: 'Formation Diagnostic des Systèmes Automatisés au Maroc',
    description: 'Formation pratique au diagnostic des systèmes automatisés : recherche de pannes, analyse PLC, capteurs, actionneurs et réduction des arrêts.',
  },
  'variateurs-vitesse': {
    title: 'Formation Variateurs de Vitesse au Maroc | Paramétrage & Maintenance',
    description: 'Formation variateurs de vitesse au Maroc : fonctionnement, paramétrage, mise en service, diagnostic, dépannage et maintenance des VFD.',
  },
  'photovoltaique-solaire': {
    title: 'Formation Photovoltaïque au Maroc | Dimensionnement & Installation PV',
    description: 'Formation photovoltaïque au Maroc : étude, dimensionnement, installation, câblage, mise en service et maintenance des systèmes solaires PV.',
  },
  'electricite-industrielle': {
    title: 'Formation Électricité Industrielle au Maroc | Installations BT',
    description: 'Formation en électricité industrielle au Maroc : installations BT, protections, moteurs, schémas électriques, câblage et diagnostic.',
  },
  'efficacite-energetique-iso50001': {
    title: 'Formation ISO 50001 & Efficacité Énergétique au Maroc',
    description: "Formation ISO 50001 au Maroc : management de l'énergie, performance énergétique, usages significatifs, indicateurs EnPI et optimisation industrielle.",
  },
  'maintenance-industrielle': {
    title: 'Formation Maintenance Industrielle au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique en maintenance industrielle au Maroc : maintenance préventive, corrective, diagnostic et dépannage des équipements.',
  },
  'electronique-industrielle': {
    title: 'Formation Diagnostic Cartes Électroniques Industrielles au Maroc',
    description: 'Formation au diagnostic des cartes électroniques industrielles : mesures, composants, oscilloscope, identification des défauts et contrôle.',
  },
  'habilitation-electrique': {
    title: 'Formation Habilitation Électrique au Maroc | Sécurité Électrique',
    description: 'Formation en habilitation et sécurité électrique au Maroc : risques électriques, prévention, consignation et interventions en sécurité.',
  },
  'qhse': {
    title: 'Formation QHSE au Maroc | Qualité, Sécurité & Environnement',
    description: 'Formation QHSE au Maroc : qualité, hygiène, sécurité au travail, prévention des risques professionnels et management environnemental.',
  },
  // Services spécifiques
  'automatisme': {
    title: 'Programmation Automates PLC au Maroc | INDUSTRIELTECH',
    description: "Programmation, modification et diagnostic d'automates PLC au Maroc pour machines, procédés industriels et systèmes d'automatisation.",
  },
  'diagnostic': {
    title: 'Maintenance & Réparation Variateurs de Vitesse au Maroc',
    description: 'Diagnostic, maintenance, paramétrage et dépannage de variateurs de vitesse pour machines et installations industrielles au Maroc.',
  },
  'reparation': {
    title: 'Réparation Cartes Électroniques Industrielles au Maroc',
    description: 'Diagnostic et réparation de cartes électroniques industrielles au Maroc pour variateurs, machines, automatismes et équipements de production.',
  },
  'installation': {
    title: 'Maintenance Électrique & Industrielle au Maroc | INDUSTRIELTECH',
    description: 'Services de maintenance industrielle, diagnostic électrique, dépannage et assistance technique pour machines et équipements industriels au Maroc.',
  },
};

/**
 * Updates DOM document title and meta description tag
 */
export function updateDocumentMetadata(title: string, description: string, pathname?: string) {
  // 1. Update Title
  document.title = title;

  // 2. Update or create Meta Description
  let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  // 3. Update or create Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.content = title;

  let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.content = description;

  // 4. Update or create Open Graph & Twitter Image
  let ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
  if (!ogImage) {
    ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    document.head.appendChild(ogImage);
  }
  ogImage.content = 'https://industrieltech.com/icon-512.png';

  let twImage = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null;
  if (!twImage) {
    twImage = document.createElement('meta');
    twImage.name = 'twitter:image';
    document.head.appendChild(twImage);
  }
  twImage.content = 'https://industrieltech.com/icon-512.png';

  // 5. Update or create Canonical link
  if (pathname !== undefined) {
    const cleanPath = pathname === '/' ? '' : pathname;
    const canonicalUrl = `https://industrieltech.com${cleanPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }
}
