export interface SeoMetadata {
  title: string;
  description: string;
}

export const PAGE_SEO_DATA: Record<string, SeoMetadata> = {
  '/': {
    title: 'INDUSTRIELTECH | Automatisme, Maintenance & Formation au Maroc',
    description: 'INDUSTRIELTECH propose des formations et services en automatisme industriel, maintenance, variateurs de vitesse, électricité et énergie au Maroc.',
  },
  '/formations': {
    title: 'Formations en Automatisme, Maintenance & Énergie | INDUSTRIELTECH',
    description: 'Formations professionnelles en automatisme, automates PLC, IHM, SCADA, réseaux industriels, variateurs de vitesse, électricité BT et QHSE au Maroc.',
  },
  '/services': {
    title: 'Services en Automatisme & Maintenance Industrielle | INDUSTRIELTECH',
    description: 'Services en automatisme, programmation PLC, maintenance industrielle, variateurs de vitesse et réparation de cartes électroniques au Maroc.',
  },
  '/realisations': {
    title: 'Réalisations en Automatisme & Maintenance | INDUSTRIELTECH',
    description: 'Découvrez les réalisations INDUSTRIELTECH en automatisme, maintenance industrielle, électricité, variateurs de vitesse et formation technique.',
  },
  '/a-propos': {
    title: "À propos d'INDUSTRIELTECH | Expertise Industrielle au Maroc",
    description: 'Découvrez INDUSTRIELTECH et son expertise en automatisme, maintenance industrielle, électricité, formation technique et énergie au Maroc.',
  },
  '/contact': {
    title: 'Contact INDUSTRIELTECH | Formation & Services Industriels',
    description: 'Contactez INDUSTRIELTECH pour vos besoins en formation, automatisme, maintenance industrielle, variateurs de vitesse et assistance technique.',
  },
};

export const TOPIC_SEO_DATA: Record<string, SeoMetadata> = {
  // 13 Formations principales
  'automatisme-plc': {
    title: 'Formation Automatisme Industriel & PLC au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique couvrant les fondamentaux de l’automatisme industriel, la programmation des automates PLC/API, le Grafcet, les capteurs et le diagnostic.',
  },
  'ihm-hmi': {
    title: 'Formation IHM & Écrans Opérateurs Industriels | INDUSTRIELTECH',
    description: 'Conception, configuration et programmation d’interfaces opérateur IHM / HMI pour la visualisation, le pilotage et les alarmes d’installations.',
  },
  'supervision-scada': {
    title: 'Formation Supervision Industrielle SCADA au Maroc | INDUSTRIELTECH',
    description: 'Formation à la conception, au déploiement et à l’exploitation de systèmes SCADA (WinCC, InTouch, PcVue) pour la supervision industrielle.',
  },
  'reseaux-industriels': {
    title: 'Formation Réseaux Industriels PROFINET & Modbus | INDUSTRIELTECH',
    description: 'Formation à la configuration, au diagnostic et à la maintenance des réseaux industriels PROFINET, Ethernet/IP et Modbus TCP.',
  },
  'diagnostic-automatismes': {
    title: 'Formation Diagnostic des Systèmes Automatisés | INDUSTRIELTECH',
    description: 'Méthodologie pratique pour analyser rapidement les dysfonctionnements des automatismes et réduire les temps d’arrêt machine.',
  },
  'variateurs-vitesse': {
    title: 'Formation Variateurs de Vitesse Industriels | INDUSTRIELTECH',
    description: 'Formation pratique sur les variateurs de vitesse : paramétrage, commande moteur, diagnostic de pannes et maintenance industrielle.',
  },
  'photovoltaique-solaire': {
    title: 'Formation Systèmes Photovoltaïques & Énergie Solaire | INDUSTRIELTECH',
    description: 'Formation couvrant l’étude, le dimensionnement, l’installation, le câblage et la maintenance des installations photovoltaïques.',
  },
  'electricite-industrielle': {
    title: 'Formation Électricité Industrielle & Installations BT | INDUSTRIELTECH',
    description: 'Formation pratique sur les installations électriques basse tension, les schémas électriques, les protections et la maintenance électrique.',
  },
  'efficacite-energetique-iso50001': {
    title: 'Formation Efficacité Énergétique & ISO 50001 | INDUSTRIELTECH',
    description: 'Comprendre le management de l’énergie, identifier les usages énergétiques significatifs et appliquer les principes de la norme ISO 50001.',
  },
  'maintenance-industrielle': {
    title: 'Formation en Maintenance Industrielle au Maroc | INDUSTRIELTECH',
    description: 'Développement des compétences en maintenance préventive, corrective et diagnostique des équipements industriels.',
  },
  'electronique-industrielle': {
    title: 'Formation Diagnostic des Cartes Électroniques | INDUSTRIELTECH',
    description: 'Formation pratique sur les méthodes de test, de mesure et de diagnostic des cartes électroniques industrielles au composant.',
  },
  'habilitation-electrique': {
    title: 'Formation en Habilitation Électrique | INDUSTRIELTECH',
    description: 'Formation aux règles de sécurité, risques électriques, procédures d’intervention et consignation sur installations électriques.',
  },
  'qhse': {
    title: 'Formation en QHSE Qualité Sécurité Environnement | INDUSTRIELTECH',
    description: 'Formation sur les fondamentaux de la qualité, de la santé-sécurité au travail et de la maîtrise des impacts environnementaux.',
  },
  // Services spécifiques
  'automatisme': {
    title: 'Programmation Automates PLC au Maroc | INDUSTRIELTECH',
    description: "Programmation, modification, diagnostic et optimisation d'automates industriels PLC pour machines, procédés et installations industrielles.",
  },
  'reparation': {
    title: 'Réparation Cartes Électroniques Industrielles au Maroc',
    description: 'Diagnostic et réparation de cartes électroniques industrielles pour variateurs, machines, automatismes et équipements de production.',
  },
  'diagnostic': {
    title: 'Maintenance & Réparation Variateurs de Vitesse au Maroc',
    description: 'Diagnostic, paramétrage, maintenance et réparation de variateurs de vitesse pour moteurs, machines et installations industrielles.',
  },
  'installation': {
    title: 'Maintenance Électrique & Industrielle au Maroc | INDUSTRIELTECH',
    description: 'Services de maintenance industrielle, diagnostic électrique, dépannage et assistance technique pour machines et équipements industriels.',
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

  // 4. Update or create Canonical link
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
