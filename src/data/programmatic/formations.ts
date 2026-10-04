import { ProgrammaticPage } from '../../types/programmatic';

export const FORMATION_PAGES: ProgrammaticPage[] = [
  // 1. Formation Siemens TIA Portal au Maroc
  {
    slug: 'formation-siemens-tia-portal-maroc',
    type: 'formation',
    status: 'published',
    primaryKeyword: 'formation Siemens TIA Portal Maroc',
    searchIntent: 'commerciale',
    title: 'Formation Siemens TIA Portal au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique Siemens TIA Portal au Maroc (V16 à V19). Programmation S7-1200/S7-1500, Ladder, SCL, diagnostic et mise en service sur bancs réels.',
    h1: 'Formation Siemens TIA Portal au Maroc',
    badgeText: 'Automatisme Siemens • TIA Portal',
    introduction: 'La plateforme Totally Integrated Automation (TIA Portal) de Siemens centralise la programmation des automates S7-1200, S7-1500, des écrans tactiles HMI et des variateurs Sinamics. INDUSTRIELTECH propose au Maroc une formation axée sur la pratique d’atelier et le dépannage terrain pour les techniciens et ingénieurs industriels.',
    heroImage: 'https://i.postimg.cc/9McsRV5D/Formation-Automatisme-Industriel-Automates-Programmables-(API-PLC).webp',
    heroImageAlt: 'Formation Siemens TIA Portal au Maroc sur bancs S7-1200 et S7-1500',
    formationData: {
      audience: [
        'Techniciens de maintenance industrielle et automaticiens',
        'Électromécaniciens et électriciens en reconversion vers le contrôle-commande',
        'Ingénieurs méthodes, travaux neufs et intégrateurs de lignes de production'
      ],
      prerequisites: [
        'Notions de base en électricité industrielle ou logique combinatoire',
        'Utilisation habituelle d’un PC sous environnement Windows'
      ],
      skillsAquired: [
        'Créer, configurer et documenter un projet matériel complet sous TIA Portal',
        'Programmer en langages Ladder (CONT), Logigramme (LOG) et Texte Structuré (SCL)',
        'Structurer le code à l’aide de blocs organisationnels (OB), blocs de fonctions (FB) et blocs de données (DB)',
        'Se connecter en ligne à la CPU via PROFINET, visualiser dynamiquement les variables et forcer les entrées/sorties en sécurité',
        'Interpréter le tampon de diagnostic (Diagnostic Buffer) pour localiser immédiatement un arrêt automate'
      ],
      confirmedHardwareAndSoftware: [
        'Automates réels Siemens SIMATIC S7-1200 (CPU 1214C/1215C) et S7-1500',
        'Logiciel officiel Siemens Totally Integrated Automation Portal (V16, V17, V18, V19)',
        'Platines de simulation avec entrées numériques TOR, potentiomètres analogiques 0-10V et voyants',
        'Consoles de programmation industrielles avec interfaces PROFINET / Ethernet'
      ],
      programModules: [
        {
          title: 'Module 1 : Prise en main de l’environnement TIA Portal et configuration matérielle',
          durationEstimate: 'Jour 1',
          topics: [
            'Architecture de la suite logicielle (Step 7 Professional, WinCC, Startdrive)',
            'Configuration matérielle (Device & Networks), insertion de racks et cartes E/S TOR/Analogiques',
            'Attribution des adresses IP et noms de périphériques PROFINET'
          ]
        },
        {
          title: 'Module 2 : Programmation et structuration selon la norme CEI 61131-3',
          durationEstimate: 'Jours 2 & 3',
          topics: [
            'Types de données standard (Bool, Byte, Word, DWord, Int, Real, Time)',
            'Création et appel de Blocs de Fonctions (FB avec DB d’instance) et Fonctions (FC)',
            'Temporisateurs IEC (TP, TON, TOF) et compteurs (CTU, CTD)',
            'Introduction pratique au langage SCL pour les calculs et boucles'
          ]
        },
        {
          title: 'Module 3 : Diagnostic en ligne, forçage et résolution d’incidents',
          durationEstimate: 'Jour 4',
          topics: [
            'Connexion en ligne, comparaison offline/online du projet',
            'Tables de visualisation et de forçage (Watch tables / Force tables)',
            'Analyse du tampon de diagnostic et gestion des coupures de communication PROFINET',
            'Sauvegarde complète (Upload) et restauration de projet sur CPU'
          ]
        }
      ],
      pedagogicalModalities: 'Formation 70% pratique sur bancs d’essai industriels réels. Disponible en présentiel dans notre centre ou en intra-entreprise sur votre site industriel au Maroc.',
      certificationNote: 'Délivrance d’une attestation de formation professionnelle INDUSTRIELTECH avec bilan d’évaluation des compétences acquises.'
    },
    sections: [
      {
        title: 'Pourquoi se former sur TIA Portal dans l’industrie marocaine ?',
        content: 'Siemens est le standard dominant dans l’agroalimentaire, l’automobile (écosystèmes Tanger Med et Kénitra), la chimie et la pharmacie au Maroc. Une maîtrise opérationnelle de TIA Portal permet aux équipes de maintenance de réduire considérablement la durée des arrêts non planifiés et d’effectuer des modifications de programmes en toute autonomie.'
      },
      {
        title: 'Bancs d’essais et méthode pédagogique',
        content: 'Chaque participant dispose d’un poste de travail avec automate S7-1200 ou S7-1500 dédié. Aucun simulateur virtuel exclusif : les exercices confrontent les stagiaires aux vrais signaux électriques, aux modules E/S physiques et aux aléas de communication réseau.'
      }
    ],
    faq: [
      {
        question: 'Quelle version de TIA Portal est utilisée lors des sessions ?',
        answer: 'Nos bancs sont équipés des versions V16 à V19 pour correspondre aux parcs installés dans les usines au Maroc.'
      },
      {
        question: 'La formation peut-elle être organisée directement dans notre usine ?',
        answer: 'Oui, nous intervenons sur l’ensemble du territoire marocain (Casablanca, Tanger, Kénitra, Fès, Agadir, Jorf Lasfar) avec notre matériel pédagogique mobile.'
      },
      {
        question: 'Faut-il savoir programmer avant de suivre ce cursus ?',
        answer: 'Des notions de base en schéma électrique et logique industrielle suffisent. Le premier module consolide les fondamentaux avant d’aborder les blocs avancés.'
      }
    ],
    relatedSlugs: [
      'formation-automate-siemens-s7-1200-maroc',
      'formation-automate-siemens-s7-1500-maroc',
      'diagnostic-automates-siemens-maroc',
      's7-1200-ou-s7-1500-choisir-formation'
    ],
    cta: {
      label: 'Recevoir le programme détaillé TIA Portal',
      subtext: 'Devis sous 24h ouvrées • Sessions inter et intra-entreprises au Maroc',
      actionType: 'training',
      prefilledSubject: 'Demande de programme : Formation Siemens TIA Portal Maroc',
      prefilledType: 'Formation'
    },
    sourcesOrBusinessInfo: 'Programmes et bancs confirmés INDUSTRIELTECH (Casablanca). Conforme aux spécifications constructeur Siemens SIMATIC Step 7 v16-v19.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 2. Formation automate Siemens S7-1200 au Maroc
  {
    slug: 'formation-automate-siemens-s7-1200-maroc',
    type: 'formation',
    status: 'published',
    primaryKeyword: 'formation Siemens S7-1200 Maroc',
    searchIntent: 'commerciale',
    title: 'Formation Automate Siemens S7-1200 au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique sur automate Siemens SIMATIC S7-1200 au Maroc. Câblage, programmation TIA Portal, entrées TOR/analogiques, communication et diagnostic.',
    h1: 'Formation Automate Siemens S7-1200 au Maroc',
    badgeText: 'SIMATIC S7-1200 • Contrôleur Compact',
    introduction: 'L’automate programmable compact Siemens S7-1200 est omniprésent dans les machines autonomes, stations de pompage et petites lignes de production au Maroc. Cette formation pratique vous transmet les méthodes de configuration, de programmation et de dépannage directement applicables sur vos installations.',
    heroImage: 'https://i.postimg.cc/9McsRV5D/Formation-Automatisme-Industriel-Automates-Programmables-(API-PLC).webp',
    heroImageAlt: 'Banc d’essai automate Siemens SIMATIC S7-1200 en formation au Maroc',
    formationData: {
      audience: [
        'Électriciens d’usine et techniciens de quart',
        'Techniciens de maintenance électromécanique',
        'Installateurs de coffrets d’automatisme et régulation'
      ],
      prerequisites: [
        'Connaissances en électrotechnique de base (relais, capteurs, électrovannes)',
        'Familiarité avec l’outil informatique'
      ],
      skillsAquired: [
        'Câbler et vérifier les modules d’entrées/sorties TOR et analogiques de la CPU 1214C/1215C',
        'Créer un projet Step 7 Basic sous TIA Portal pour S7-1200',
        'Écrire des cycles de fonctionnement séquentiels en Ladder et Grafcet',
        'Configurer les signaux de mesure analogique 4-20 mA et 0-10 V (mise à l’échelle NORM_X et SCALE_X)',
        'Assurer la sauvegarde de la CPU sur carte mémoire SIMATIC Memory Card (SMC)'
      ],
      confirmedHardwareAndSoftware: [
        'Automates Siemens S7-1200 CPU 1214C DC/DC/DC et 1215C',
        'Cartes de signaux additionnelles (Signal Board SB et Signal Module SM)',
        'Logiciel TIA Portal Step 7 Basic / Professional',
        'Parties opératives simulées (moteurs miniatures, capteurs inductifs, convoyeurs didactiques)'
      ],
      programModules: [
        {
          title: 'Module 1 : Matériel S7-1200 et câblage industriel',
          durationEstimate: '1 jour',
          topics: [
            'Gamme des CPU 1211C à 1217C, alimentation 24VDC, raccordement PNP/NPN',
            'Modules de signaux TOR et analogiques, précautions de blindage',
            'Cartes mémoire MMC/SMC et gestion du firmware'
          ]
        },
        {
          title: 'Module 2 : Programmation élémentaire sous TIA Portal',
          durationEstimate: '1.5 jour',
          topics: [
            'Instructions booléennes, fronts montants/descendants (P_TRIG, N_TRIG)',
            'Temporisations (TON, TOF) et comptage pour cadencement machine',
            'Traitement analogique : blocs NORM_X et SCALE_X avec capteurs de pression/température réels'
          ]
        },
        {
          title: 'Module 3 : Diagnostic de défauts et maintenance du S7-1200',
          durationEstimate: '1.5 jour',
          topics: [
            'Signification des voyants LED (RUN/STOP, ERROR, MAINT)',
            'Dépannage par visualisation dynamique et forçage temporaire',
            'Remplacement de CPU à l’identique et rechargement de programme'
          ]
        }
      ],
      pedagogicalModalities: 'Travaux pratiques intensifs sur valises didactiques professionnelles. Formations dispensées à Casablanca ou sur site client dans toutes les régions du Maroc.',
      certificationNote: 'Attestation nominative de formation technique avec attestation de validation des acquis.'
    },
    sections: [
      {
        title: 'Le contrôleur le plus répandu au Maroc',
        content: 'Grâce à son excellent rapport performances/coût, le S7-1200 équipe des milliers de machines au Maroc : conditionneuses, stations d’épuration, presses, groupes de froid et convoyeurs. Savoir intervenir sur cette CPU est un prérequis incontournable pour tout technicien de maintenance.'
      }
    ],
    faq: [
      {
        question: 'Quelle est la différence entre la formation S7-1200 et S7-1500 ?',
        answer: 'Le S7-1200 s’adresse aux machines compactes autonomes avec TIA Portal Basic. Le S7-1500 est dédié aux lignes complexes nécessitant une vitesse élevée, des calculs SCL avancés, de la sécurité Safety intégrée et des réseaux étendus.'
      },
      {
        question: 'Le matériel manipulé est-il réel ?',
        answer: 'Oui, 100% du temps pratique se fait sur de vraies CPU Siemens S7-1200 reliées à des composants électriques et capteurs industriels.'
      }
    ],
    relatedSlugs: [
      'formation-siemens-tia-portal-maroc',
      'formation-automate-siemens-s7-1500-maroc',
      's7-1200-ou-s7-1500-choisir-formation',
      'sauvegarde-programmes-automates-plc-maroc'
    ],
    cta: {
      label: 'Recevoir le programme S7-1200',
      subtext: 'Prochaine session disponible à Casablanca et en intra-entreprise',
      actionType: 'training',
      prefilledSubject: 'Demande de devis formation automate Siemens S7-1200 Maroc',
      prefilledType: 'Formation'
    },
    sourcesOrBusinessInfo: 'Bancs d’essais S7-1200 confirmés INDUSTRIELTECH. Données conformes au manuel système SIMATIC S7-1200 Siemens.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 3. Formation automate Siemens S7-1500 au Maroc
  {
    slug: 'formation-automate-siemens-s7-1500-maroc',
    type: 'formation',
    status: 'published',
    primaryKeyword: 'formation Siemens S7-1500 Maroc',
    searchIntent: 'commerciale',
    title: 'Formation Automate Siemens S7-1500 au Maroc | INDUSTRIELTECH',
    description: 'Formation perfectionnement Siemens SIMATIC S7-1500 au Maroc. Programmation avancée, SCL, PROFINET IO, écran de diagnostic CPU et optimisation des cycles.',
    h1: 'Formation Automate Siemens S7-1500 au Maroc',
    badgeText: 'SIMATIC S7-1500 • Hautes Performances',
    introduction: 'Contrôleur de référence pour les usines modernes et les lignes automatisées à haute cadence, le Siemens SIMATIC S7-1500 offre une puissance de traitement inégalée et un écran de diagnostic intégré. Cette formation avancée s’adresse aux techniciens et ingénieurs désireux de maîtriser ses architectures complexes.',
    heroImage: 'https://i.postimg.cc/9McsRV5D/Formation-Automatisme-Industriel-Automates-Programmables-(API-PLC).webp',
    heroImageAlt: 'Banc didactique Siemens S7-1500 avec écran de diagnostic en formation au Maroc',
    formationData: {
      audience: [
        'Automaticiens confirmés et chefs de projet en automatisme',
        'Ingénieurs et techniciens de maintenance d’usines de grande série (automobile, agroalimentaire, chimie)',
        'Équipes techniques gérant des îlots robotisés ou des machines multi-axes'
      ],
      prerequisites: [
        'Avoir une pratique avérée de la programmation d’automates industriels',
        'Connaissance préalable de l’environnement TIA Portal (ou avoir suivi le module S7-1200 / initiation)'
      ],
      skillsAquired: [
        'Exploiter l’architecture matérielle avancée S7-1500 (CPU standard, compactes et technologiques)',
        'Utiliser l’écran d’affichage frontal de la CPU pour consulter l’état, les adresses IP et le tampon de diagnostic sans console PC',
        'Programmer en langage Texte Structuré (SCL) des algorithmes de calcul, de gestion de tables et de recettes',
        'Déployer et dépanner des réseaux d’E/S déportées ET 200SP / ET 200MP en PROFINET temps réel (IRT)',
        'Mettre en œuvre les mécanismes de sécurité matérielle et de gestion des alarmes système'
      ],
      confirmedHardwareAndSoftware: [
        'Automates Siemens SIMATIC S7-1500 (CPU 1511 / 1515 / 1516)',
        'Îlots de périphérie décentralisée SIMATIC ET 200SP',
        'Suite TIA Portal Step 7 Professional V17/V18/V19',
        'Réseau PROFINET commuté avec switchs Scalance'
      ],
      programModules: [
        {
          title: 'Module 1 : Spécificités matérielles et configuration du S7-1500',
          durationEstimate: '1 jour',
          topics: [
            'Architecture fond de panier ultra-rapide et gammes de CPU S7-1500',
            'Exploitation complète du display couleur de la CPU (lecture défauts, changement IP, statut)',
            'Configuration de la périphérie décentralisée ET 200SP via PROFINET'
          ]
        },
        {
          title: 'Module 2 : Programmation avancée et langage SCL',
          durationEstimate: '2 jours',
          topics: [
            'Blocs de données optimisés (DB) et gestion de la mémoire de travail',
            'Syntaxe SCL : boucles FOR, WHILE, instructions CASE, tableaux (Arrays) et structures (UDT)',
            'Création de blocs réutilisables pour le pilotage de vannes, moteurs et variateurs'
          ]
        },
        {
          title: 'Module 3 : Diagnostic système intégré et traçabilité',
          durationEstimate: '1 jour',
          topics: [
            'Activation du System Diagnostics sans programmation supplémentaire',
            'Fonctions de traçage de variables (Trace) pour l’analyse de signaux rapides',
            'Serveur Web intégré à la CPU pour la maintenance à distance'
          ]
        }
      ],
      pedagogicalModalities: 'Atelier pratique sur bancs industriels S7-1500 avec périphérie décentralisée ET 200SP. Sessions disponibles à Casablanca ou sur site d’exploitation client.',
      certificationNote: 'Attestation de perfectionnement technique délivrée par INDUSTRIELTECH.'
    },
    sections: [
      {
        title: 'L’automate des grands projets industriels au Maroc',
        content: 'De la chaîne d’assemblage automobile aux usines de dessalement et de valorisation des phosphates, le S7-1500 est le standard de l’industrie 4.0 au Maroc. Cette formation apporte la maîtrise indispensable pour fiabiliser ces contrôleurs haut de gamme.'
      }
    ],
    faq: [
      {
        question: 'Cette formation aborde-t-elle la sécurité machine (Safety) ?',
        answer: 'Le cursus se concentre sur l’architecture standard et le diagnostic système. Une initiation aux principes Safety (CPU Failsafe) peut être intégrée en session intra-entreprise sur mesure.'
      },
      {
        question: 'Peut-on utiliser le S7-1500 pour migrer d’anciens automates S7-300 ?',
        answer: 'Oui, nous étudions les équivalences matérielles et les outils de migration de code Step 7 Classic vers TIA Portal.'
      }
    ],
    relatedSlugs: [
      'formation-siemens-tia-portal-maroc',
      'formation-automate-siemens-s7-1200-maroc',
      's7-1200-ou-s7-1500-choisir-formation',
      'formation-reseaux-industriels-profinet-maroc'
    ],
    cta: {
      label: 'Demander le programme S7-1500',
      subtext: 'Programme sur mesure pour techniciens et ingénieurs au Maroc',
      actionType: 'training',
      prefilledSubject: 'Demande de programme formation automate Siemens S7-1500 Maroc',
      prefilledType: 'Formation'
    },
    sourcesOrBusinessInfo: 'Bancs d’essais S7-1500 et ET 200SP confirmés INDUSTRIELTECH. Données validées avec la documentation constructeur SIMATIC S7-1500.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 4. Formation automate Schneider Modicon au Maroc (Brouillon technique documenté)
  {
    slug: 'formation-automate-schneider-modicon-maroc',
    type: 'formation',
    status: 'draft',
    draftReason: 'En attente de confirmation du calendrier de renouvellement des licences logicielles EcoStruxure Machine Expert vs Unity Pro et de disponibilité des maquettes dédiées M340/M580 en atelier permanent.',
    missingRequirements: [
      'Validation de la dotation matérielle définitive (M221 vs M241 vs M340/M580)',
      'Arbitrage entre les environnements logiciels EcoStruxure Machine Expert - Basic et Control Expert',
      'Confirmation de la date d’ouverture des inscriptions publiques au Maroc'
    ],
    primaryKeyword: 'formation automate Schneider Modicon Maroc',
    searchIntent: 'commerciale',
    title: 'Formation Automate Schneider Modicon au Maroc | INDUSTRIELTECH (En préparation)',
    description: 'Formation dédiée aux automates programmables Schneider Electric Modicon au Maroc (M221, M241, M258). Programmation, maintenance et diagnostic.',
    h1: 'Formation Automate Schneider Modicon au Maroc',
    badgeText: 'Schneider Electric • Modicon • Cursus en préparation',
    introduction: 'Les gammes Schneider Electric Modicon (M221, M241, M258, M340) constituent un parc historique et moderne majeur dans l’industrie marocaine. Ce cursus spécialisé est en cours de structuration au sein de notre catalogue pour proposer des travaux pratiques ciblés.',
    heroImage: 'https://i.postimg.cc/9McsRV5D/Formation-Automatisme-Industriel-Automates-Programmables-(API-PLC).webp',
    heroImageAlt: 'Automate Schneider Electric Modicon en atelier technique',
    formationData: {
      audience: [
        'Techniciens de maintenance opérant sur des lignes équipées en automates Schneider Electric',
        'Électriciens et intégrateurs de machines spéciales'
      ],
      prerequisites: [
        'Notions élémentaires d’automatisme et schémas électriques'
      ],
      skillsAquired: [
        'Identifier la structure matérielle des automates Modicon et des modules d’extension TM3/TM4',
        'Créer un projet sous EcoStruxure Machine Expert (ou Machine Expert - Basic pour M221)',
        'Programmer en Ladder et Grafcet selon la norme CEI 61131-3',
        'Diagnostiquer les pannes de communication Modbus RTU / Modbus TCP'
      ],
      confirmedHardwareAndSoftware: [
        'Bancs d’essais Schneider Modicon M221 / M241 (en dotation partagée)',
        'Logiciels EcoStruxure Machine Expert - Basic et SoMachine'
      ],
      programModules: [
        {
          title: 'Module 1 : Gammes Modicon et matériel',
          topics: ['Présentation des CPU Modicon compactes et modulaires', 'Raccordement des entrées/sorties et protections']
        },
        {
          title: 'Module 2 : Programmation et mise en service',
          topics: ['Langages Ladder, Grafcet, variables et tables d’animation', 'Mise en service et forçage']
        }
      ],
      pedagogicalModalities: 'Travaux pratiques sur bancs réels. Formations proposées sur demande spécifique en intra-entreprise.',
      certificationNote: 'Attestation de formation technique INDUSTRIELTECH.'
    },
    sections: [
      {
        title: 'Statut du programme Schneider Modicon',
        content: 'Cette formation est actuellement disponible sur demande spécifique pour les groupes intra-entreprises disposant d’un parc Modicon. Les sessions inter-entreprises régulières seront ouvertes dès finalisation des bancs permanents M340/M580.'
      }
    ],
    faq: [
      {
        question: 'Peut-on déjà réserver une formation intra-entreprise sur automates Schneider ?',
        answer: 'Oui, nos ingénieurs peuvent concevoir un programme sur mesure directement adapté à vos automates Modicon sur votre site au Maroc.'
      }
    ],
    relatedSlugs: [
      'programmation-automates-schneider-maroc',
      'formation-siemens-tia-portal-maroc',
      'sauvegarde-programmes-automates-plc-maroc'
    ],
    cta: {
      label: 'Demander une session Schneider sur mesure',
      subtext: 'Programme adapté à votre parc Modicon existant',
      actionType: 'quote',
      prefilledSubject: 'Demande formation sur mesure Schneider Modicon Maroc',
      prefilledType: 'Formation'
    },
    sourcesOrBusinessInfo: 'Offre en cours de consolidation technique. Contacter notre équipe pour étude de faisabilité.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 5. Formation programmation Ladder au Maroc
  {
    slug: 'formation-programmation-ladder-maroc',
    type: 'formation',
    status: 'published',
    primaryKeyword: 'formation programmation Ladder Maroc',
    searchIntent: 'commerciale',
    title: 'Formation Programmation Ladder au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique au langage de programmation Ladder (schéma à contacts) pour automates industriels au Maroc. Méthodologie, temporisateurs, compteurs et dépannage.',
    h1: 'Formation Programmation Ladder pour Automates au Maroc',
    badgeText: 'Langage CEI 61131-3 • Schéma à Contacts',
    introduction: 'Le langage Ladder (schéma à contacts) reste le langage le plus utilisé dans le monde industriel pour les automatismes séquentiels et les circuits de sécurité. Cette formation permet aux électriciens et techniciens de transposer facilement un schéma électromécanique en programme automate fiable et clair.',
    heroImage: 'https://i.postimg.cc/9McsRV5D/Formation-Automatisme-Industriel-Automates-Programmables-(API-PLC).webp',
    heroImageAlt: 'Réseaux de programmation Ladder affichés sur console de programmation industrielle',
    formationData: {
      audience: [
        'Électriciens d’équipement et câbleurs désirant évoluer vers la programmation automate',
        'Techniciens de maintenance industrielle polyvalents',
        'Opérateurs régleurs et conducteurs de lignes automatisées'
      ],
      prerequisites: [
        'Compréhension des symboles électriques fondamentaux (contacts NO/NF, bobines de relais)',
        'Aucune connaissance préalable en programmation requise'
      ],
      skillsAquired: [
        'Traduire un cahier des charges fonctionnel en équations logiques et réseaux Ladder',
        'Maîtriser les contacts normalement ouverts, normalement fermés, bobines simples, Set et Reset',
        'Programmer des temporisateurs (retard à la montée, retard à la chute, impulsions) et compteurs d’objets',
        'Structurer un programme en réseaux lisibles et documentés pour faciliter la maintenance ultérieure',
        'Diagnostiquer une panne machine en suivant l’état des barreaux Ladder en temps réel'
      ],
      confirmedHardwareAndSoftware: [
        'Automates industriels Siemens (S7-1200) et Schneider (Modicon)',
        'Logiciels TIA Portal et EcoStruxure Machine Expert',
        'Bancs didactiques avec capteurs de présence, vérins et voyants témoins'
      ],
      programModules: [
        {
          title: 'Module 1 : Des relais physiques aux barreaux Ladder',
          durationEstimate: '1 jour',
          topics: [
            'Analogie entre schéma de câblage traditionnel et réseaux de contacts Ladder',
            'Cycle automate : lecture des entrées, évaluation des réseaux de gauche à droite, écriture des sorties',
            'Instructions Set / Reset, mémoires internes (bits / mémentos)'
          ]
        },
        {
          title: 'Module 2 : Temporisations, comptage et fonctions numériques',
          durationEstimate: '1.5 jour',
          topics: [
            'Programmation de cycles cadencés avec temporisateurs TON / TOF',
            'Comptage de pièces, gestion de lots et réinitialisation',
            'Comparateurs de valeurs (égal, supérieur, inférieur) et opérations arithmétiques simples'
          ]
        },
        {
          title: 'Module 3 : Méthodologie d’automatisation séquentielle et dépannage',
          durationEstimate: '1.5 jour',
          topics: [
            'Méthode des bascules (séquenceur pas à pas en Ladder)',
            'Gestion des modes de marche (Automatique, Manuel, Réarmement)',
            'Dépannage par suivi dynamique des lignes de contacts coupées'
          ]
        }
      ],
      pedagogicalModalities: 'Formation très concrète avec exercices progressifs sur pupitres d’automatisme réels.',
      certificationNote: 'Attestation de compétences professionnelles en programmation d’automates industriels.'
    },
    sections: [
      {
        title: 'Le pont idéal entre l’électricité et l’automatisme',
        content: 'Pour les professionnels familiers des armoires électriques, le Ladder est la porte d’entrée la plus naturelle et la plus intuitive vers le contrôle-commande. Les concepts de contact et de bobine y sont directement transposés sans barrière mathématique complexe.'
      }
    ],
    faq: [
      {
        question: 'Le Ladder est-il encore pertinent avec l’arrivée du langage texte (SCL/ST) ?',
        answer: 'Absolument. Plus de 70% des lignes de production au Maroc utilisent le Ladder pour la logique combinatoire et séquentielle, car il est le seul langage immédiatement déchiffrable par un technicien de maintenance de quart lors d’une panne.'
      }
    ],
    relatedSlugs: [
      'formation-siemens-tia-portal-maroc',
      'formation-automate-siemens-s7-1200-maroc',
      'formation-diagnostic-pannes-industrielles-maroc',
      'formation-lecture-schemas-electriques-maroc'
    ],
    cta: {
      label: 'Recevoir le programme Formation Ladder',
      subtext: 'Adapté aux débutants et techniciens en reconversion',
      actionType: 'training',
      prefilledSubject: 'Demande de programme formation programmation Ladder Maroc',
      prefilledType: 'Formation'
    },
    sourcesOrBusinessInfo: 'Standard CEI 61131-3. Formations pratiques sur bancs Siemens et Schneider au centre INDUSTRIELTECH Casablanca.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 6. Formation IHM et supervision WinCC au Maroc
  {
    slug: 'formation-ihm-supervision-wincc-maroc',
    type: 'formation',
    status: 'published',
    primaryKeyword: 'formation WinCC Maroc',
    searchIntent: 'commerciale',
    title: 'Formation IHM et Supervision WinCC au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique Siemens WinCC au Maroc (WinCC Comfort, Advanced et Unified). Conception d’écrans tactiles industriels, alarmes, courbes et synoptiques.',
    h1: 'Formation IHM et Supervision Siemens WinCC au Maroc',
    badgeText: 'Siemens WinCC • Écrans Tactiles & SCADA',
    introduction: 'L’interface homme-machine (IHM) est le poste de pilotage par lequel les opérateurs contrôlent les machines, suivent les cadences et acquittent les alarmes. INDUSTRIELTECH forme vos techniciens à la création et à la maintenance d’écrans tactiles Siemens sous WinCC dans l’environnement TIA Portal.',
    heroImage: 'https://i.postimg.cc/bJLW1MpH/Programmation-des-Interfaces-Homme-Machine-(IHM.webp',
    heroImageAlt: 'Écran tactile opérateur industriel Siemens Simatic Comfort Panel en programmation WinCC',
    formationData: {
      audience: [
        'Automaticiens, techniciens de bureau d’études et techniciens de maintenance',
        'Responsables de conduite de ligne souhaitant moderniser leurs pupitres opérateurs'
      ],
      prerequisites: [
        'Connaissances de base de l’environnement TIA Portal et des variables automates (Tags)'
      ],
      skillsAquired: [
        'Créer un projet IHM et configurer la liaison de communication Ethernet/PROFINET avec la CPU',
        'Dessiner des vues ergonomiques avec boutons animés, voyants d’état, afficheurs numériques et bargraphes',
        'Paramétrer le journal des alarmes (alarmes discrètes et analogiques) avec historique et acquittement',
        'Tracer des courbes d’évolution en temps réel (Trends) pour surveiller températures, pressions ou vitesses',
        'Mettre en place des niveaux de sécurité et des mots de passe utilisateurs pour protéger les paramètres machine'
      ],
      confirmedHardwareAndSoftware: [
        'Pupitres tactiles réels Siemens SIMATIC Basic Panels et Comfort Panels',
        'Logiciel Siemens WinCC dans TIA Portal (Basic, Comfort, Unified)',
        'Automates S7-1200 et S7-1500 communicants'
      ],
      programModules: [
        {
          title: 'Module 1 : Configuration matérielle IHM et liaison réseau',
          durationEstimate: '1 jour',
          topics: [
            'Choix des pupitres opérateurs (Basic vs Comfort Panels vs PC industriel)',
            'Liaison HMI-PLC dans TIA Portal et synchronisation des variables (HMI Tags)',
            'Modèle de navigation et ergonomie industrielle des écrans'
          ]
        },
        {
          title: 'Module 2 : Graphismes, dynamisation et synoptiques animés',
          durationEstimate: '1.5 jour',
          topics: [
            'Champs d’entrée/sortie numériques et alphanumériques',
            'Animations conditionnelles (changement de couleur, clignotement, visibilité selon défaut)',
            'Utilisation de bibliothèques d’objets industriels (moteurs, vannes, réservoirs)'
          ]
        },
        {
          title: 'Module 3 : Alarmes, courbes, recettes et transfert de projet',
          durationEstimate: '1.5 jour',
          topics: [
            'Classes d’alarmes, bannières d’alerte et fenêtres d’événements',
            'Configuration de courbes de tendance et archivage local sur clé USB/SD',
            'Gestion des recettes de production et procédure de transfert (Download) vers le pupitre'
          ]
        }
      ],
      pedagogicalModalities: 'Travaux pratiques sur pupitres tactiles réels connectés à des automates en fonctionnement.',
      certificationNote: 'Attestation de fin de formation professionnelle INDUSTRIELTECH.'
    },
    sections: [
      {
        title: 'L’importance d’une IHM claire en production',
        content: 'Une interface mal conçue induit des erreurs d’exploitation et retarde le diagnostic en cas d’anomalie. Former ses équipes à WinCC garantit des écrans lisibles, des messages d’alarme explicites et une meilleure productivité des opérateurs.'
      }
    ],
    faq: [
      {
        question: 'Quelle est la différence entre WinCC Basic et WinCC Comfort ?',
        answer: 'WinCC Basic prend en charge uniquement les écrans d’entrée de gamme SIMATIC Basic Panels. WinCC Comfort permet de programmer l’ensemble des pupitres tactiles, y compris les Comfort Panels multi-touch et fonctions avancées (recettes, scripts, archives étendues).'
      }
    ],
    relatedSlugs: [
      'formation-siemens-tia-portal-maroc',
      'formation-automate-siemens-s7-1200-maroc',
      'formation-automate-siemens-s7-1500-maroc'
    ],
    cta: {
      label: 'Recevoir le programme WinCC',
      subtext: 'Bancs pupitres tactiles réels Siemens à Casablanca et sur site au Maroc',
      actionType: 'training',
      prefilledSubject: 'Demande de programme formation IHM et WinCC Maroc',
      prefilledType: 'Formation'
    },
    sourcesOrBusinessInfo: 'Matériel didactique Siemens Comfort Panels confirmé chez INDUSTRIELTECH. Données conformes à la documentation Siemens WinCC TIA Portal.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 7. Formation réseaux industriels PROFINET au Maroc
  {
    slug: 'formation-reseaux-industriels-profinet-maroc',
    type: 'formation',
    status: 'published',
    primaryKeyword: 'formation réseaux industriels PROFINET Maroc',
    searchIntent: 'commerciale',
    title: 'Formation Réseaux Industriels PROFINET au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique aux réseaux industriels PROFINET au Maroc : architecture, switchs administrables Scalance, diagnostic de trames et résolution de coupures.',
    h1: 'Formation Réseaux Industriels PROFINET au Maroc',
    badgeText: 'Ethernet Industriel • PROFINET IO',
    introduction: 'PROFINET s’est imposé comme l’épine dorsale de la communication entre automates, variateurs de vitesse et îlots d’entrées/sorties décentralisées. Cette formation technique transmet les méthodes de configuration, de topologie d’anneau (MRP) et de diagnostic rapide avec Wireshark et PRONETA.',
    heroImage: 'https://i.postimg.cc/vBXk5jb0/Reseaux-de-Communication-Industriels-(PROFINET-Ethernet.webp',
    heroImageAlt: 'Switch industriel et câblage réseau PROFINET blindé en atelier de formation au Maroc',
    formationData: {
      audience: [
        'Techniciens réseaux industriels et informaticiens industriels (OT)',
        'Automaticiens et techniciens de maintenance d’installations automatisées complexes'
      ],
      prerequisites: [
        'Connaissances générales en automatisme et principes du câblage Ethernet RJ45'
      ],
      skillsAquired: [
        'Distinguer les spécificités de PROFINET RT (Real-Time) et IRT (Isochronous Real-Time) par rapport à l’Ethernet bureautique',
        'Attribuer correctement les noms d’appareils (Device Name) et adresses IP industrielles',
        'Paramétrer les switchs industriels administrables (Siemens Scalance) et les anneaux de redondance MRP',
        'Utiliser les logiciels de diagnostic gratuits et professionnels (PRONETA, Wireshark)',
        'Localiser les perturbations électromagnétiques (CEM), défauts de blindage et pertes de paquets'
      ],
      confirmedHardwareAndSoftware: [
        'Switchs industriels administrables Siemens Scalance',
        'Automates S7-1200 / S7-1500 avec périphérie décentralisée ET 200SP',
        'Variateurs de vitesse communicants PROFINET',
        'Logiciels PRONETA, Wireshark, TIA Portal Hardware Diagnostic'
      ],
      programModules: [
        {
          title: 'Module 1 : Principes physiques et protocoles Ethernet temps réel',
          durationEstimate: '1 jour',
          topics: [
            'Couche physique industrielle (câbles Cat 6/7 blindés, connecteurs FastConnect, fibre optique)',
            'Protocole PROFINET IO (contrôleur IO, périphériques IO, superviseur IO)',
            'Règles strictes de CEM et de reprise de blindage 360°'
          ]
        },
        {
          title: 'Module 2 : Configuration et intégration d’équipements hétérogènes',
          durationEstimate: '1.5 jour',
          topics: [
            'Fichiers GSDML : importation et intégration de variateurs ou îlots tiers dans TIA Portal',
            'Configuration de la topologie réseau physique et assignation automatique des noms',
            'Topologie en anneau et protocole de redondance des supports (MRP)'
          ]
        },
        {
          title: 'Module 3 : Diagnostic de pannes réseau et capture de trames',
          durationEstimate: '1.5 jour',
          topics: [
            'Mise en œuvre de PRONETA pour la découverte automatique et le test d’E/S sans automate',
            'Capture de trames avec Wireshark et analyse des alarmes de diagnostic réseau',
            'Interprétation des erreurs de collisions, perte de paquets et coupures intermittentes'
          ]
        }
      ],
      pedagogicalModalities: 'Travaux pratiques sur banc multi-équipements avec simulation d’incidents réseau.',
      certificationNote: 'Attestation de formation technique professionnelle délivrée par INDUSTRIELTECH.'
    },
    sections: [
      {
        title: 'En finir avec les coupures réseau inexpliquées',
        content: 'Dans une usine automatisée, une micro-coupure réseau de quelques millisecondes peut déclencher l’arrêt d’urgence de toute une ligne de fabrication. Cette formation fournit la rigueur méthodologique pour éliminer les causes profondes de ces arrêts intermittents.'
      }
    ],
    faq: [
      {
        question: 'Qu’est-ce que l’outil PRONETA et pourquoi l’apprendre ?',
        answer: 'PRONETA est un outil gratuit de Siemens permettant de scanner le réseau PROFINET, de vérifier le câblage et de tester physiquement les entrées/sorties sans avoir besoin d’ouvrir TIA Portal ni de programmer la CPU. C’est l’outil de prédilection de la maintenance.'
      }
    ],
    relatedSlugs: [
      'formation-siemens-tia-portal-maroc',
      'formation-automate-siemens-s7-1500-maroc',
      'diagnostic-automates-siemens-maroc'
    ],
    cta: {
      label: 'Demander le programme PROFINET',
      subtext: 'Bancs communicants multi-marques disponibles au Maroc',
      actionType: 'training',
      prefilledSubject: 'Demande de programme formation réseaux PROFINET Maroc',
      prefilledType: 'Formation'
    },
    sourcesOrBusinessInfo: 'Normes PI (PROFIBUS & PROFINET International). Bancs d’essai Scalance et ET 200SP confirmés chez INDUSTRIELTECH.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 8. Formation variateurs de vitesse au Maroc
  {
    slug: 'formation-variateurs-de-vitesse-maroc',
    type: 'formation',
    status: 'published',
    primaryKeyword: 'formation variateur de vitesse Maroc',
    searchIntent: 'commerciale',
    title: 'Formation Variateurs de Vitesse au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique sur variateurs de vitesse industriels au Maroc (Siemens, Schneider, ABB, Danfoss). Câblage, paramétrage, contrôle vectoriel, dépannage VFD.',
    h1: 'Formation Variateurs de Vitesse Industriels au Maroc',
    badgeText: 'Électronique de Puissance • VFD Multi-Marques',
    introduction: 'Les variateurs de fréquence pilotent la vitesse et le couple des moteurs asynchrones dans l’ensemble des industries du Maroc (pompage, ventilation, convoyage, broyage). Cette formation pragmatique vous apprend à raccorder, paramétrer, optimiser et dépanner les variateurs des plus grands constructeurs.',
    heroImage: 'https://i.postimg.cc/j5RBwK0H/Formation-Variateurs-de-Vitesse-Industriels-Parametrage-Depannage-Maintenance.webp',
    heroImageAlt: 'Technicien paramétrant un variateur de vitesse sur banc d’essai moteur en formation au Maroc',
    formationData: {
      audience: [
        'Électriciens et électromécaniciens de maintenance industrielle',
        'Techniciens d’ateliers de bobinage et maintenance moteur',
        'Installateurs de systèmes de pompage et de climatisation industrielle'
      ],
      prerequisites: [
        'Notions fondamentales sur les moteurs triphasés asynchrones (plaques signalétiques, couplages étoile/triangle)'
      ],
      skillsAquired: [
        'Comprendre l’architecture interne d’un variateur (redresseur, bus continu DC, onduleur IGBT)',
        'Réaliser le câblage sécurisé de puissance et de commande (potentiomètre, marche avant/arrière, défaut)',
        'Paramétrer les lois de commande (scalaire U/f pour pompes/ventilateurs, contrôle vectoriel sans capteur pour convoyeurs et levage)',
        'Exécuter l’identification automatique des paramètres moteur (Auto-tuning / Identification statique)',
        'Diagnostiquer les défauts récurrents (surintensité F001/OC, surtension DC, défaut thermique moteur, court-circuit)'
      ],
      confirmedHardwareAndSoftware: [
        'Variateurs réels multi-marques : Schneider Altivar (ATV320/ATV630), Siemens Sinamics (G120), ABB (ACS580), Danfoss (FC302)',
        'Moteurs asynchrones accouplés à des charges mécaniques',
        'Consoles de commande (BOP/IOP, Display graphique) et logiciels PC constructeurs (SoMove, Starter/Startdrive, Drive Composer)'
      ],
      programModules: [
        {
          title: 'Module 1 : Fonctionnement et câblage de puissance/commande',
          durationEstimate: '1 jour',
          topics: [
            'Principe physique de la variation de fréquence et modulation MLI/PWM',
            'Raccordement réseau, selfs de ligne, filtres CEM et câbles moteur blindés',
            'Bornier de commande : entrées logiques programmables, entrées analogiques 0-10V/4-20mA et relais de défaut'
          ]
        },
        {
          title: 'Module 2 : Paramétrage guidé et modes de régulation',
          durationEstimate: '1.5 jour',
          topics: [
            'Saisie des paramètres de plaque moteur et procédure d’Auto-tuning',
            'Réglage des rampes d’accélération/décélération et gestion du freinage par injection DC ou résistance externe',
            'Lois de commande : comparaison entre mode scalaire U/f et contrôle vectoriel de flux (SVC)'
          ]
        },
        {
          title: 'Module 3 : Diagnostic de pannes, dépannage et maintenance',
          durationEstimate: '1.5 jour',
          topics: [
            'Interprétation méthodique de l’historique des défauts et alarmes',
            'Mesures au multimètre de l’étage de puissance (test des diodes du redresseur et des transistors IGBT hors tension)',
            'Sauvegarde et restauration des jeux de paramètres via console et logiciel PC'
          ]
        }
      ],
      pedagogicalModalities: '70% d’exercices pratiques sur bancs d’essais avec moteurs tournants sous charge.',
      certificationNote: 'Attestation professionnelle de compétences en variation de vitesse délivrée par INDUSTRIELTECH.'
    },
    sections: [
      {
        title: 'Une approche multi-constructeurs concrète',
        content: 'Contrairement aux formations théoriques limitées à une seule marque, nos bancs regroupent les marques majeures présentes au Maroc : Schneider, Siemens, ABB et Danfoss. Les stagiaires apprennent la logique universelle des paramètres avant de manipuler les consoles spécifiques.'
      }
    ],
    faq: [
      {
        question: 'Comment tester les composants de puissance d’un variateur en panne ?',
        answer: 'La formation inclut un module complet de test à l’ohmmètre (test diodes) des ponts redresseurs et des modules IGBT, permettant de déterminer immédiatement si le variateur est réparable ou s’il doit passer en atelier de réparation de cartes électroniques.'
      }
    ],
    relatedSlugs: [
      'reparation-variateurs-siemens-sinamics-maroc',
      'reparation-variateurs-schneider-altivar-maroc',
      'variateur-vitesse-en-defaut-diagnostic',
      'reparer-ou-remplacer-variateur-vitesse'
    ],
    cta: {
      label: 'Recevoir le programme Variateurs de vitesse',
      subtext: 'Bancs d’essais Schneider, Siemens, ABB et Danfoss à Casablanca',
      actionType: 'training',
      prefilledSubject: 'Demande de programme formation variateurs de vitesse Maroc',
      prefilledType: 'Formation'
    },
    sourcesOrBusinessInfo: 'Bancs d’essais multi-constructeurs confirmés chez INDUSTRIELTECH (Casablanca). Manuels constructeurs Altivar, Sinamics, ACS et VLT.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 9. Formation diagnostic de pannes industrielles au Maroc
  {
    slug: 'formation-diagnostic-pannes-industrielles-maroc',
    type: 'formation',
    status: 'published',
    primaryKeyword: 'formation diagnostic pannes industrielles Maroc',
    searchIntent: 'commerciale',
    title: 'Formation Diagnostic de Pannes Industrielles au Maroc | INDUSTRIELTECH',
    description: 'Formation méthodique au diagnostic et dépannage de pannes industrielles au Maroc. Recherche de dysfonctionnements électriques, capteurs, actionneurs et automates.',
    h1: 'Formation Diagnostic de Pannes Industrielles au Maroc',
    badgeText: 'Maintenance & Dépannage • Méthodologie Terrain',
    introduction: 'Lors d’un arrêt machine inopiné, chaque minute compte. Remplacer des composants au hasard coûte cher et aggrave souvent la panne. INDUSTRIELTECH propose une formation méthodologique intensive pour apprendre aux équipes techniques à localiser rapidement la cause racine d’un dysfonctionnement.',
    heroImage: 'https://i.postimg.cc/ZRJXBZtR/Diagnostic-des-Systemes-Automatises-en-Production.webp',
    heroImageAlt: 'Technicien de maintenance effectuant des mesures de diagnostic électrique avec multimètre',
    formationData: {
      audience: [
        'Techniciens de maintenance industrielle de quart',
        'Électromécaniciens et électriciens d’intervention',
        'Chefs d’équipe maintenance et responsables techniques'
      ],
      prerequisites: [
        'Connaissances générales des machines industrielles et habilitation électrique minimale'
      ],
      skillsAquired: [
        'Appliquer une démarche de diagnostic structurée (constater, analyser l’historique, émettre des hypothèses, tester)',
        'Distinguer méthodiquement une panne de partie opérative (mécanique/pneumatique), de partie commande (capteurs/câblage) ou de programme automate',
        'Utiliser efficacement les appareils de mesure (multimètre TRMS, pince ampèremétrique, testeur d’isolement)',
        'Interroger l’automate pour identifier les conditions logiques bloquantes sans modifier le programme',
        'Remplacer le composant incriminé et valider le redémarrage sécurisé de l’équipement'
      ],
      confirmedHardwareAndSoftware: [
        'Bancs d’entraînement industriels équipés de générateurs de pannes réelles',
        'Multimètres industriels TRMS Fluke / Chauvin Arnoux',
        'Consoles de diagnostic avec automates et logiciels TIA Portal / Machine Expert'
      ],
      programModules: [
        {
          title: 'Module 1 : Méthodologie d’investigation et sécurité',
          durationEstimate: '1 jour',
          topics: [
            'Arbre des causes et questionnement de l’opérateur de machine',
            'Consignation électrique et consignation des énergies résiduelles (pneumatique/hydraulique)',
            'Contrôle méthodique de la chaîne de sécurité (arrêts d’urgence, relais de sécurité, barrières immatérielles)'
          ]
        },
        {
          title: 'Module 2 : Diagnostic de la chaîne de puissance et des capteurs',
          durationEstimate: '1.5 jour',
          topics: [
            'Vérification des alimentations 24VDC stabilisées et détection des chutes de tension',
            'Contrôle des capteurs (inductifs, photoélectriques, fins de course) et cartes d’entrées automate',
            'Contrôle des pré-actionneurs : bobines d’électrovannes, contacteurs, variateurs et relais thermiques'
          ]
        },
        {
          title: 'Module 3 : Résolution de pannes sous contrainte de temps',
          durationEstimate: '1.5 jour',
          topics: [
            'Suivi du Grafcet bloqué à l’écran ou par voyants pour cibler la transition non validée',
            'Recherche de références croisées et consultation du journal des défauts',
            'Mises en situation réelles sur bancs piégés : diagnostic sous chrono et débriefing technique'
          ]
        }
      ],
      pedagogicalModalities: 'Atelier de simulation de pannes réelles. Les stagiaires résolvent des scénarios concrets préparés par nos formateurs.',
      certificationNote: 'Attestation de compétences professionnelles en diagnostic et dépannage industriel.'
    },
    sections: [
      {
        title: 'Remplacer l’improvisation par la méthode',
        content: 'La majorité des retards de redémarrage en usine ne proviennent pas de la complexité de la réparation elle-même, mais du temps perdu à chercher la panne au mauvais endroit. Cette formation ancre des réflexes rigoureux pour réduire immédiatement le MTTR (temps moyen de réparation).'
      }
    ],
    faq: [
      {
        question: 'Comment les pannes sont-elles simulées pendant la formation ?',
        answer: 'Nos bancs disposent de modules d’injection de pannes dissimulés : coupures franches, mauvais contacts, décalages de capteurs, défauts d’isolement et variables logiques bloquantes.'
      }
    ],
    relatedSlugs: [
      'formation-siemens-tia-portal-maroc',
      'formation-variateurs-de-vitesse-maroc',
      'formation-lecture-schemas-electriques-maroc',
      'variateur-vitesse-en-defaut-diagnostic'
    ],
    cta: {
      label: 'Recevoir le programme Diagnostic de pannes',
      subtext: 'Bancs d’entraînement piégés et mises en situation à Casablanca ou sur votre site',
      actionType: 'training',
      prefilledSubject: 'Demande de devis formation diagnostic de pannes industrielles Maroc',
      prefilledType: 'Formation'
    },
    sourcesOrBusinessInfo: 'Méthodologie standard de maintenance industrielle NF EN 13306. Bancs d’essai avec simulateurs d’incidents INDUSTRIELTECH.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 10. Formation lecture de schémas électriques industriels au Maroc
  {
    slug: 'formation-lecture-schemas-electriques-maroc',
    type: 'formation',
    status: 'published',
    primaryKeyword: 'formation lecture schémas électriques Maroc',
    searchIntent: 'commerciale',
    title: 'Formation Lecture de Schémas Électriques au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique à la lecture et à l’exploitation de schémas électriques industriels au Maroc. Symboles normalisés, folios, borniers et repérage en armoire.',
    h1: 'Formation Lecture de Schémas Électriques Industriels au Maroc',
    badgeText: 'Électrotechnique • Schémas & Borniers',
    introduction: 'Le schéma électrique est le plan d’architecte de toute machine industrielle. Savoir lire un dossier de plusieurs dizaines de folios, repérer instantanément un fil ou un contacteur dans une armoire et comprendre les circuits de sécurité est la compétence de base indispensable pour tout intervenant technique.',
    heroImage: 'https://i.postimg.cc/mDTKzRfc/Formation-Electricite-Industrielle-Installations-Electriques-BT.webp',
    heroImageAlt: 'Technicien étudiant un dossier de schémas électriques industriels devant une armoire de commande',
    formationData: {
      audience: [
        'Électriciens débutants et monteurs-câbleurs',
        'Techniciens mécaniciens et électromécaniciens',
        'Opérateurs de production et agents de maîtrise technique'
      ],
      prerequisites: [
        'Aucun prérequis technique avancé requis. Cursus ouvert aux débutants.'
      ],
      skillsAquired: [
        'Identifier la symbolisation normalisée (CEI / NF C) des appareillages de coupure, commande et protection',
        'Naviguer avec aisance entre les folios à l’aide des renvois de colonnes et références croisées',
        'Interpréter les plans de borniers (X1, X2, etc.), câbles multipaires et raccordements extérieurs',
        'Comprendre la structure d’un circuit de puissance (départs moteurs, variateurs) et d’un circuit de commande 24VDC',
        'Faire le lien physique immédiat entre un composant sur le papier et son emplacement réel dans l’armoire'
      ],
      confirmedHardwareAndSoftware: [
        'Dossiers complets de schémas constructeurs réels de machines industrielles en service au Maroc',
        'Armoires électriques didactiques conformes aux dossiers papier',
        'Appareillages industriels réels (disjoncteurs, contacteurs, relais thermiques, alimentations)'
      ],
      programModules: [
        {
          title: 'Module 1 : Normalisation et symbolisation des composants',
          durationEstimate: '1 jour',
          topics: [
            'Symboles électriques normalisés : contacteurs (KM), disjoncteurs (QM), fusibles (FU), transformateurs (TC)',
            'Numérotation et repérage alphanumérique des composants selon la norme CEI 81346',
            'Repérage des conducteurs et codification des couleurs de fils'
          ]
        },
        {
          title: 'Module 2 : Structure des folios, renvois et borniers',
          durationEstimate: '1.5 jour',
          topics: [
            'Compréhension du cartouche, découpage en colonnes et système de renvois entre folios',
            'Tableaux de références croisées sous les bobines de contacteurs et relais',
            'Lecture méthodique des carnets de câbles et plans de borniers'
          ]
        },
        {
          title: 'Module 3 : Exercices de traçage physique en armoire réelle',
          durationEstimate: '1.5 jour',
          topics: [
            'Exercices pratiques : retrouver un contact de défaut depuis le schéma jusqu’à la borne dans l’armoire',
            'Analyse d’un circuit de chaîne de sécurité (Arrêt d’Urgence et module de surveillance)',
            'Vérification de concordance au voltmètre et contrôle de tension'
          ]
        }
      ],
      pedagogicalModalities: 'Alternance d’études de dossiers techniques constructeurs et d’exercices pratiques sur armoires réelles.',
      certificationNote: 'Attestation de formation technique professionnelle délivrée par INDUSTRIELTECH.'
    },
    sections: [
      {
        title: 'Un gain de temps immédiat sur le terrain',
        content: 'Un technicien capable d’exploiter rapidement le dossier constructeur localise un composant défectueux en quelques minutes, là où une personne sans formation passera des heures à suivre manuellement des goulottes encombrées de câbles.'
      }
    ],
    faq: [
      {
        question: 'Les schémas étudiés sont-ils récents ?',
        answer: 'Nous travaillons sur des dossiers industriels récents issus de logiciels de CAO répandus (ePlan, See Electrical, AutoCAD Electrical) pour garantir une parfaite adéquation avec la réalité des usines marocaines.'
      }
    ],
    relatedSlugs: [
      'formation-programmation-ladder-maroc',
      'formation-diagnostic-pannes-industrielles-maroc',
      'formation-variateurs-de-vitesse-maroc'
    ],
    cta: {
      label: 'Recevoir le programme Schémas électriques',
      subtext: 'Sessions pratiques sur armoires réelles à Casablanca et au Maroc',
      actionType: 'training',
      prefilledSubject: 'Demande de programme formation lecture de schémas électriques Maroc',
      prefilledType: 'Formation'
    },
    sourcesOrBusinessInfo: 'Normes internationales CEI 60617 et CEI 81346. Dossiers et armoires confirmés chez INDUSTRIELTECH.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  }
];
