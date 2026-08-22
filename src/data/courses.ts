import { Course } from '../types';
import imgAutomatisme from '../assets/images/industrial-automation.webp';
import imgHmi from '../assets/images/hmi-training.webp';
import imgScada from '../assets/images/scada-training.webp';
import imgReseaux from '../assets/images/industrial-networks.webp';
import imgDiagnostic from '../assets/images/automated-system-diagnostics.webp';
import imgVariateurs from '../assets/images/variable-speed-drives.webp';
import imgPhotovoltaique from '../assets/images/photovoltaic-systems.webp';
import imgElectricite from '../assets/images/industrial-electricity.webp';
import imgEnergie from '../assets/images/energy-efficiency-iso50001.webp';
import imgMaintenance from '../assets/images/industrial-maintenance.webp';
import imgElectronique from '../assets/images/industrial-electronics.webp';
import imgHabilitation from '../assets/images/electrical-safety.webp';
import imgQhse from '../assets/images/qhse.webp';

export const COURSES_DATA: Course[] = [
  // 1 — Formation Automatisme Industriel & Automates Programmables
  {
    id: 'automatisme-plc',
    title: 'Formation Automatisme Industriel & Automates Programmables (API / PLC)',
    category: 'automatisme',
    categoryLabel: 'AUTOMATISME INDUSTRIEL',
    shortDescription: 'Formation pratique couvrant les fondamentaux de l’automatisme industriel, la programmation des automates PLC/API, le Grafcet, les capteurs, les actionneurs, le diagnostic et les applications industrielles.',
    image: imgAutomatisme,
    imageWebp: imgAutomatisme,
    imageJpg: '/images/industrial-automation.jpg',
    imageAlt: "Formation pratique en automatisme industriel et programmation d'automates PLC Siemens TIA Portal et Schneider au Maroc",
    seoFileName: 'industrial-automation.webp',
    objectives: [
      'Comprendre l’architecture matérielle et logicielle des automates programmables industriels (API / PLC).',
      'Maîtriser les langages de programmation standardisés (Ladder, Grafcet / SFC, FBD, Structured Text).',
      'Configurer et câbler les entrées/sorties numériques (TOR) et analogiques (4-20 mA, 0-10 V).',
      'Diagnostiquer les dysfonctionnements, tester les variables en ligne et assurer la maintenance des programmes.'
    ],
    levelsInfo: 'Cette formation peut être proposée aux niveaux initiation, intermédiaire, avancé ou expert. Le programme, les travaux pratiques et le niveau de difficulté sont adaptés au profil des participants, à leurs prérequis et aux besoins de l’entreprise (Initiation : bases de l’automatisme, logique combinatoire, capteurs et actionneurs ; Intermédiaire : programmation PLC, Grafcet et traitement des signaux ; Avancé : programmation structurée, diagnostic et communication industrielle ; Expert : architecture avancée, optimisation, maintenance et diagnostic des systèmes automatisés).',
    program: [
      {
        moduleTitle: 'Module 1 : Architecture des automates & principes de contrôle-commande',
        topics: [
          'Structure d’un automate industriel : CPU, mémoires, alimentations et bus fond de panier',
          'Raccordement et protection des cartes d’entrées/sorties TOR et analogiques',
          'Cycle d’exécution du processeur (Scrutation, Traitement, Mise à jour des sorties)'
        ]
      },
      {
        moduleTitle: 'Module 2 : Programmation et structuration selon la norme CEI 61131-3',
        topics: [
          'Méthodologie Grafcet (étapes, transitions, actions associées, divergences/convergences)',
          'Langages Ladder (schéma à contacts) et Logigramme (FBD)',
          'Introduction au Texte Structuré (ST) et blocs de fonctions réutilisables (FB, FC, DB)',
          'Temporisateurs, compteurs, mémoires internes et fonctions arithmétiques'
        ]
      },
      {
        moduleTitle: 'Module 3 : Diagnostic en ligne, forçage et dépannage',
        topics: [
          'Connexion en ligne avec la console de programmation (Siemens TIA Portal / Schneider / Omron)',
          'Visualisation dynamique des variables, tables d’animation et forçage sécurisé',
          'Gestion des alarmes et analyse des défauts matériels CPU'
        ]
      }
    ],
    targetAudience: 'Techniciens de maintenance, automaticiens, électromécaniciens, ingénieurs débutants ou confirmés souhaitant monter en compétences.',
    prerequisites: 'Notions de base en électricité industrielle ou en logique technique.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Initiation à Expert — Adaptable',
    modalities: 'Présentiel en nos locaux, sur site client au Maroc (intra-entreprise) ou classe virtuelle.',
    practicalWork: '70% de travaux pratiques sur bancs réels équipés d’automates PLC et de parties opératives industrielles.',
    equipmentAndSoftware: ['Bancs d’essai API (Siemens S7-1200 / S7-1500, Schneider Modicon M221/M241)', 'Logiciels TIA Portal, EcoStruxure Machine Expert', 'Consoles de test et outillage de diagnostic'],
    certification: 'Attestation de fin de formation et fiche d’évaluation des compétences professionnelles.',
    price: 'Sur devis (Selon format et nombre de participants)',
    featuredHome: true
  },

  // 2 — Programmation des Interfaces Homme-Machine (IHM / HMI)
  {
    id: 'ihm-hmi',
    title: 'Programmation des Interfaces Homme-Machine (IHM / HMI)',
    category: 'supervision',
    categoryLabel: 'AUTOMATISME & SUPERVISION',
    shortDescription: 'Conception, configuration et programmation d’interfaces opérateur permettant la visualisation, la commande, le diagnostic et le suivi des équipements automatisés.',
    image: imgHmi,
    imageWebp: imgHmi,
    imageJpg: '/images/hmi-training.jpg',
    imageAlt: "Formation en développement et programmation d'interfaces homme-machine tactiles IHM HMI Siemens et Schneider au Maroc",
    seoFileName: 'hmi-training.webp',
    objectives: [
      'Concevoir des interfaces tactiles ergonomiques et intuitives pour pupitres opérateurs industriels.',
      'Établir et paramétrer la communication de données entre l’IHM et les automates programmables.',
      'Créer des synoptiques animés, boutons de commande, voyants d’état et champs de saisie.',
      'Configurer la gestion des alarmes temps réel, des historiques d’événements et des courbes de tendance.'
    ],
    levelsInfo: 'Cette formation peut être proposée aux niveaux initiation, intermédiaire ou avancé. Le programme et les projets sur pupitres tactiles industriels sont adaptés aux technologies utilisées par votre entreprise (Siemens Comfort Panels, WinCC Unified, Schneider Magelis/Harmony, etc.).',
    program: [
      {
        moduleTitle: 'Module 1 : Principes d’ergonomie et configuration du matériel IHM',
        topics: [
          'Sélection et dimensionnement de l’écran opérateur selon l’environnement industriel',
          'Configuration matérielle et liaisons de communication (Ethernet/PROFINET, Modbus)',
          'Charte graphique, hiérarchie visuelle et navigation intuitive entre les vues'
        ]
      },
      {
        moduleTitle: 'Module 2 : Développement des synoptiques et animations dynamiques',
        topics: [
          'Création d’objets graphiques, jauges, bargraphes et animations conditionnelles',
          'Gestion des variables (Tags IHM) et synchronisation avec les blocs de données PLC',
          'Gestion des niveaux d’accès utilisateurs et sécurité par mot de passe'
        ]
      },
      {
        moduleTitle: 'Module 3 : Alarmes, courbes de tendance et recettes de fabrication',
        topics: [
          'Configuration du journal des alarmes (alarmes discrètes et analogiques)',
          'Tracé de courbes d’évolution en temps réel et archivage des données',
          'Création et gestion des recettes de fabrication pour changement de format'
        ]
      }
    ],
    targetAudience: 'Techniciens en automatisme, développeurs d’équipements, services de maintenance industrielle.',
    prerequisites: 'Connaissances de base de la logique d’automatisation et des variables automates.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Tous niveaux / Adaptable',
    modalities: 'Présentiel en atelier ou sur site industriel client au Maroc.',
    practicalWork: 'Création intégrale d’une interface de supervision sur écran tactile industriel connecté à un automate en fonctionnement.',
    equipmentAndSoftware: ['Siemens WinCC Unified / WinCC Flexible', 'Schneider Vijeo Designer / EcoStruxure Operator Terminal Expert', 'Pupitres tactiles industriels réels'],
    certification: 'Attestation de fin de formation professionnelle.',
    price: 'Sur devis (Programme sur mesure possible)',
    featuredHome: false
  },

  // 3 — Supervision Industrielle SCADA (WinCC / InTouch / PC Vue)
  {
    id: 'supervision-scada',
    title: 'Supervision Industrielle SCADA (WinCC / InTouch / PC Vue)',
    category: 'scada',
    categoryLabel: 'SUPERVISION INDUSTRIELLE',
    shortDescription: 'Formation à la conception, au déploiement et à l’exploitation de systèmes SCADA pour la supervision, l’acquisition des données, les alarmes, les tendances et le pilotage des installations industrielles.',
    image: imgScada,
    imageWebp: imgScada,
    imageJpg: '/images/scada-training.jpg',
    imageAlt: "Formation en supervision industrielle SCADA, synoptiques temps réel, télémétrie et acquisition de données usine au Maroc",
    seoFileName: 'scada-training.webp',
    objectives: [
      'Maîtriser l’architecture client/serveur des systèmes de supervision SCADA industriels.',
      'Concevoir des synoptiques de procédé multipages animés en liaison avec des parcs d’automates hétérogènes.',
      'Gérer l’archivage massif des données de production dans des bases relationnelles SQL.',
      'Configurer les serveurs d’alarmes, la traçabilité des lots et la génération automatique de rapports.'
    ],
    levelsInfo: 'Cette formation peut être dispensée de l’initiation à l’expertise avancée. Le contenu traite des architectures client/serveur, des liaisons OPC UA, de l’archivage SQL et des synoptiques de conduite adaptés à vos procédés.',
    program: [
      {
        moduleTitle: 'Module 1 : Architecture SCADA & acquisition de données temps réel',
        topics: [
          'Topologie serveur SCADA, postes clients de conduite et passerelles de communication',
          'Communication via drivers natifs et serveurs OPC UA / OPC DA',
          'Création de synoptiques de procédé avec composants industriels avancés'
        ]
      },
      {
        moduleTitle: 'Module 2 : Traitement des données, historiques et bases SQL',
        topics: [
          'Archivage périodique et événementiel des variables de process',
          'Interconnexion avec bases de données SQL Server / MySQL',
          'Création de vues de tendances comparatives et exports automatisés'
        ]
      },
      {
        moduleTitle: 'Module 3 : Gestion d’alarmes, redondance & cybersécurité industrielle',
        topics: [
          'Hiérarchisation des alarmes, consignation d’événements et astreintes',
          'Mise en place de serveurs SCADA redondants avec basculement automatique',
          'Bonnes pratiques de sécurisation des accès et des flux de données de supervision'
        ]
      }
    ],
    targetAudience: 'Ingénieurs d’études, responsables informatique industrielle, chefs de projets automatismes et superviseurs de production.',
    prerequisites: 'Bonnes connaissances en automatisme et réseaux informatiques industriels.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Tous niveaux / Adaptable',
    modalities: 'Présentiel ou formule mixte (présentiel + accompagnement projet).',
    practicalWork: 'Déploiement complet d’une application SCADA multi-postes avec acquisition de données réelles.',
    equipmentAndSoftware: ['Siemens WinCC Professional / SCADA', 'Wonderware InTouch / System Platform', 'PcVue', 'Serveurs OPC UA et bases SQL'],
    certification: 'Attestation de fin de formation technique.',
    price: 'Sur devis',
    featuredHome: false
  },

  // 4 — Réseaux de Communication Industriels (PROFINET, Ethernet/IP, Modbus TCP...)
  {
    id: 'reseaux-industriels',
    title: 'Réseaux de Communication Industriels (PROFINET, Ethernet/IP, Modbus TCP...)',
    category: 'reseaux',
    categoryLabel: 'RÉSEAUX INDUSTRIELS',
    shortDescription: 'Formation consacrée à la configuration, au diagnostic et à la maintenance des réseaux de communication utilisés pour connecter automates, variateurs, IHM et équipements industriels.',
    image: imgReseaux,
    imageWebp: imgReseaux,
    imageJpg: '/images/industrial-networks.jpg',
    imageAlt: "Formation aux réseaux et bus de terrain industriels PROFINET, Ethernet/IP et Modbus TCP au Maroc",
    seoFileName: 'industrial-networks.webp',
    objectives: [
      'Comprendre le fonctionnement et les spécificités des protocoles Ethernet industriels temps réel.',
      'Configurer et déployer les réseaux PROFINET IO, Ethernet/IP et Modbus TCP / RTU.',
      'Paramétrer les switchs industriels administrables, les topologies en anneau (MRP/DLR) et les VLANs.',
      'Utiliser des analyseurs de réseau et outils de diagnostic pour identifier les pertes de trames et dysfonctionnements.'
    ],
    levelsInfo: 'Cette formation peut être proposée aux niveaux initiation, intermédiaire ou avancé. Le programme et les travaux pratiques de diagnostic réseau sont adaptés aux topologies installées sur vos sites de production (PROFINET, Modbus TCP, Ethernet/IP, switchs administrés, capture et analyse de trames).',
    program: [
      {
        moduleTitle: 'Module 1 : Fondamentaux des réseaux Ethernet industriels',
        topics: [
          'Différences entre réseau bureautique et réseau industriel de terrain',
          'Couche physique : câblage blindé Cat 6/7, connectique M12/RJ45 industrielle, fibre optique',
          'Adressage IP, masques de sous-réseau et attribution des noms d’appareils industriels'
        ]
      },
      {
        moduleTitle: 'Module 2 : Mise en œuvre des protocoles PROFINET, Modbus & Ethernet/IP',
        topics: [
          'Configuration d’un réseau PROFINET IO avec contrôleur et périphériques déportés',
          'Échange de données en Modbus TCP / RTU (registres de lecture/écriture, tables d’échange)',
          'Intégration d’E/S déportées, variateurs et îlots de distribution pneumatique'
        ]
      },
      {
        moduleTitle: 'Module 3 : Diagnostic réseau approfondi et analyse de trafic',
        topics: [
          'Utilisation d’outils d’analyse de trames (Wireshark, PRONETA, outils constructeurs)',
          'Diagnostic des erreurs de communication, collisions de paquets et temps de gigue (jitter)',
          'Règles de compatibilité électromagnétique (CEM) et mise à la terre des blindages'
        ]
      }
    ],
    targetAudience: 'Techniciens réseaux industriels, automaticiens, ingénieurs maintenance et intégrateurs de systèmes.',
    prerequisites: 'Notions fondamentales en automatisme et informatique.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Tous niveaux / Adaptable',
    modalities: 'Présentiel sur bancs d’essai avec équipements communicants multi-marques.',
    practicalWork: 'Mise en réseau de variateurs, automates et périphériques avec simulation d’incidents réseau et capture de trames.',
    equipmentAndSoftware: ['Switchs administrables Scalance / Hirschmann / Moxa', 'Analyseurs de réseau et logiciel Wireshark', 'Bancs multi-protocoles PROFINET / Modbus TCP'],
    certification: 'Attestation de fin de formation professionnelle.',
    price: 'Sur devis',
    featuredHome: false
  },

  // 5 — Diagnostic des Systèmes Automatisés en Production
  {
    id: 'diagnostic-automatismes',
    title: 'Diagnostic des Systèmes Automatisés en Production',
    category: 'diagnostic',
    categoryLabel: 'DIAGNOSTIC & MAINTENANCE',
    shortDescription: 'Méthodologie pratique pour analyser rapidement les dysfonctionnements des automatismes, identifier l’origine des pannes et réduire les temps d’arrêt des équipements de production.',
    image: imgDiagnostic,
    imageWebp: imgDiagnostic,
    imageJpg: '/images/automated-system-diagnostics.jpg',
    imageAlt: "Formation au diagnostic, dépannage et recherche méthodique de pannes sur systèmes automatisés de production",
    seoFileName: 'automated-system-diagnostics.webp',
    objectives: [
      'Appliquer une méthodologie rigoureuse et structurée de recherche de pannes industrielles.',
      'Distinguer rapidement l’origine d’un défaut : capteur, actionneur, câblage, réseau ou programme PLC.',
      'Exploiter efficacement les outils logiciels de diagnostic en ligne pour cibler le blocage.',
      'Remplacer les composants défectueux et relancer l’équipement en respectant les consignes de sécurité.'
    ],
    levelsInfo: 'Cette formation est adaptée aux techniciens de maintenance, électromécaniciens et équipes d’intervention de quart. Les scénarios de pannes et les exercices pratiques sont construits autour des typologies d’installations de vos lignes de production.',
    program: [
      {
        moduleTitle: 'Module 1 : Méthodologie d’analyse et sécurité des interventions',
        topics: [
          'Arbre des causes, analyse des symptômes et historique des défauts machine',
          'Consignation électrique et mécanique avant toute intervention',
          'Vérification des chaînes de sécurité (arrêts d’urgence, barrières immatérielles, relais de sécurité)'
        ]
      },
      {
        moduleTitle: 'Module 2 : Diagnostic de la chaîne d’information et de puissance',
        topics: [
          'Contrôle des capteurs (inductifs, photoélectriques, codeurs) et cartes d’entrées',
          'Vérification des pré-actionneurs (contacteurs, distributeurs électropneumatiques, variateurs)',
          'Mesures électriques au multimètre et contrôle des alimentations 24 VDC'
        ]
      },
      {
        moduleTitle: 'Module 3 : Dépannage assisté par logiciel d’automatisme',
        topics: [
          'Lecture et suivi pas à pas des conditions de marche / Grafcet bloqué',
          'Recherche de références croisées et forçage temporaire sécurisé',
          'Sauvegarde et restauration de programmes sans perte de paramètres de calibration'
        ]
      }
    ],
    targetAudience: 'Techniciens de maintenance industrielle, agents de maîtrise, conducteurs de ligne qualifiés, automaticiens de quart.',
    prerequisites: 'Pratique de base de l’environnement industriel et lecture de schémas électriques.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Tous niveaux / Adaptable',
    modalities: 'Présentiel en laboratoire technique ou directement sur vos lignes de production au Maroc.',
    practicalWork: 'Mises en situation réelles sur bancs piégés avec pannes électriques, mécaniques et logicielles à résoudre sous contrainte de temps.',
    equipmentAndSoftware: ['Bancs d’entraînement piégés avec pannes réelles', 'Multimètres industriels et consoles de diagnostic', 'Kits de simulation de défauts'],
    certification: 'Attestation de fin de formation professionnelle.',
    price: 'Sur devis',
    featuredHome: false
  },

  // 6 — Formation Variateurs de Vitesse Industriels
  {
    id: 'variateurs-vitesse',
    title: 'Formation Variateurs de Vitesse Industriels — Paramétrage, Dépannage & Maintenance',
    category: 'variateurs',
    categoryLabel: 'VARIATEURS DE VITESSE',
    shortDescription: 'Formation pratique consacrée au fonctionnement, au paramétrage, à la mise en service, au diagnostic et à la maintenance des variateurs de vitesse industriels.',
    image: imgVariateurs,
    imageWebp: imgVariateurs,
    imageJpg: '/images/variable-speed-drives.jpg',
    imageAlt: "Formation pratique au paramétrage, contrôle moteur et dépannage des variateurs de vitesse Siemens Sinamics et Schneider Altivar au Maroc",
    seoFileName: 'variable-speed-drives.webp',
    objectives: [
      'Comprendre les principes physiques de la variation de fréquence sur moteurs asynchrones et synchrones.',
      'Câbler en toute conformité la partie puissance (filtres, selfs, réseau, moteur) et la partie commande.',
      'Paramétrer les lois de commande (U/f, contrôle vectoriel de flux avec ou sans capteur), rampes et protections.',
      'Diagnostiquer les pannes récurrentes (surintensités, surtensions, défauts thermiques) et réaliser la maintenance.'
    ],
    levelsInfo: 'Cette formation peut être proposée aux niveaux initiation, intermédiaire ou avancé. Le programme est ajusté aux marques et gammes de variateurs présentes dans vos usines (Siemens Sinamics, Schneider Altivar, ABB, Danfoss, Omron, etc.).',
    program: [
      {
        moduleTitle: 'Module 1 : Principes de l’électronique de puissance et association moteur-variateur',
        topics: [
          'Redressement, filtrage du bus continu et onduleur à transistors IGBT (modulation MLI/PWM)',
          'Caractéristiques des moteurs électriques et lecture critique des plaques signalétiques',
          'Phénomènes d’ondes réfléchies, surtensions aux bornes du moteur et solutions de filtrage'
        ]
      },
      {
        moduleTitle: 'Module 2 : Câblage, mise en service et paramétrage guidé',
        topics: [
          'Raccordement des entrées/sorties logiques, analogiques et potentiomètres de consigne',
          'Procédure d’identification automatique des paramètres moteur (Auto-tuning)',
          'Paramétrage des rampes d’accélération/décélération, freinage par injection de courant ou résistance externe',
          'Lois de commande scalaires (U/f quadratique/linéaire) et vectorielles (Sensorless Vector Control)'
        ]
      },
      {
        moduleTitle: 'Module 3 : Diagnostic de défauts, maintenance et communication de terrain',
        topics: [
          'Interprétation des codes d’erreurs : surintensité (Overcurrent), surtension DC (Overvoltage), défaut terre',
          'Contrôle des étages de puissance à l’ohmmètre (test des ponts de diodes et modules IGBT)',
          'Pilotage du variateur via réseau industriel (PROFINET, Modbus, Profibus) et sauvegarde des paramètres'
        ]
      }
    ],
    targetAudience: 'Électriciens industriels, techniciens de maintenance, électromécaniciens, automaticiens et chefs d’ateliers.',
    prerequisites: 'Notions de base sur les moteurs électriques triphasés et habilitation électrique.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Initiation à Avancé — Adaptable',
    modalities: 'Présentiel sur nos bancs d’essai multi-marques ou sur site client au Maroc.',
    practicalWork: '80% de manipulations directes sur variateurs réels attelés à des bancs d’essais moteurs et charges freinées.',
    equipmentAndSoftware: ['Variateurs Siemens Sinamics G120/V20, Schneider Altivar ATV630/ATV320, Danfoss, ABB', 'Logiciels Starter/Startdrive, SoMove, Drive Composer', 'Bancs moteurs avec charge'],
    certification: 'Attestation de fin de formation professionnelle.',
    price: 'Sur devis (Tarif adapté aux entreprises)',
    featuredHome: true
  },

  // 7 — Systèmes Photovoltaïques
  {
    id: 'photovoltaique-solaire',
    title: 'Étude, Dimensionnement et Installation des Systèmes Photovoltaïques',
    category: 'solaire',
    categoryLabel: 'ÉNERGIE SOLAIRE',
    shortDescription: 'Formation couvrant l’étude, le dimensionnement, l’installation, le câblage, la mise en service et les principes de maintenance des installations photovoltaïques.',
    image: imgPhotovoltaique,
    imageWebp: imgPhotovoltaique,
    imageJpg: '/images/photovoltaic-systems.jpg',
    imageAlt: "Formation à l'étude, au dimensionnement et à l'installation de centrales solaires photovoltaïques industrielles au Maroc",
    seoFileName: 'photovoltaic-systems.webp',
    objectives: [
      'Comprendre le principe de conversion photovoltaïque et les technologies de modules solaires.',
      'Dimensionner une installation solaire raccordée au réseau ou en autoconsommation industrielle.',
      'Maîtriser le câblage DC/AC, le choix des onduleurs solaires et les systèmes de protection.',
      'Appliquer les règles de mise en service, de contrôle de performance et de maintenance des centrales PV.'
    ],
    levelsInfo: 'Cette formation peut être proposée aux techniciens et ingénieurs aux niveaux initiation, intermédiaire ou perfectionnement selon les projets photovoltaïques de l’entreprise (toitures solaires industrielles, pompage solaire ou centrales au sol).',
    program: [
      {
        moduleTitle: 'Module 1 : Gisement solaire et technologies photovoltaïques',
        topics: [
          'Rayonnement solaire, inclinaison, orientation et calcul du productible au Maroc',
          'Technologies de panneaux solaires (monocristallin, polycristallin, bifacial) et courbes I-V',
          'Effets de température, masque d’ombrage et dégradation des modules'
        ]
      },
      {
        moduleTitle: 'Module 2 : Dimensionnement électrique et choix des composants',
        topics: [
          'Calcul du nombre de modules par chaîne (strings) et compatibilité avec les plages MPPT de l’onduleur',
          'Choix et dimensionnement des onduleurs solaires (onduleurs de chaîne vs onduleurs centraux)',
          'Dimensionnement des câbles solaires DC, fusibles, disjoncteurs et parafoudres spécifiques DC/AC'
        ]
      },
      {
        moduleTitle: 'Module 3 : Mise en service, contrôle de conformité et maintenance',
        topics: [
          'Procédure de mise sous tension sécurisée et contrôle d’isolement de la chaîne DC',
          'Mesures de performance (rendement du système, ratio de performance PR)',
          'Maintenance préventive, inspection thermographique des points chauds et nettoyage optimisé'
        ]
      }
    ],
    targetAudience: 'Ingénieurs énergéticiens, techniciens d’installation électrique, responsables d’infrastructures industrielles, bureaux d’études.',
    prerequisites: 'Connaissances générales en électricité générale ou industrielle.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Tous niveaux / Adaptable',
    modalities: 'Présentiel avec manipulations d’équipements et exercices de dimensionnement.',
    practicalWork: 'Dimensionnement complet d’un projet solaire industriel et mesures réelles sur banc PV avec onduleur.',
    equipmentAndSoftware: ['Bancs solaires réels, onduleurs solaires industriels, coffrets DC/AC', 'Logiciels de dimensionnement solaire', 'Appareils de mesure d’ensoleillement et caméras thermiques'],
    certification: 'Attestation de fin de formation professionnelle.',
    price: 'Sur devis',
    featuredHome: false
  },

  // 8 — Électricité Industrielle
  {
    id: 'electricite-industrielle',
    title: 'Formation Électricité Industrielle & Installations Électriques BT',
    category: 'electricite',
    categoryLabel: 'ÉLECTRICITÉ INDUSTRIELLE',
    shortDescription: 'Formation pratique sur les installations électriques basse tension, les schémas électriques, les protections, les moteurs, le câblage, les mesures et le diagnostic des circuits industriels.',
    image: imgElectricite,
    imageWebp: imgElectricite,
    imageJpg: '/images/industrial-electricity.jpg',
    imageAlt: "Formation pratique en électricité industrielle basse tension, armoires électriques et normes de câblage NF C 15-100",
    seoFileName: 'industrial-electricity.webp',
    objectives: [
      'Lire et interpréter couramment des schémas électriques industriels complexes (normes CEI / NF C 15-100).',
      'Comprendre le principe et le dimensionnement des appareillages de coupure, de commande et de protection.',
      'Réaliser le câblage méthodique de circuits de commande et de puissance (démarrage direct, étoile-triangle, inverseur).',
      'Diagnostiquer efficacement les pannes électriques dans les armoires de distribution et machines industrielles.'
    ],
    levelsInfo: 'Cette formation peut être proposée aux niveaux initiation, intermédiaire ou perfectionnement. Le programme s’adapte aux profils des participants (monteurs-câbleurs, électromécaniciens ou techniciens de maintenance).',
    program: [
      {
        moduleTitle: 'Module 1 : Schémas électriques industriels & symbolisation normalisée',
        topics: [
          'Repérage des folios, borniers, câbles et composants dans les dossiers constructeurs',
          'Circuits de puissance, circuits de commande 24 VDC / 230 VAC et circuits de signalisation',
          'Chaînes de sécurité, relais d’arrêt d’urgence et circuits de coupure'
        ]
      },
      {
        moduleTitle: 'Module 2 : Appareillages de protection et de commande des moteurs',
        topics: [
          'Régimes de neutre (TT, TN, IT) et protection des personnes contre les contacts indirects',
          'Disjoncteurs magnéto-thermiques, fusibles, contacteurs et relais thermiques de surcharge',
          'Techniques de démarrage des moteurs asynchrones (Direct, Étoile-Triangle, Électronique)'
        ]
      },
      {
        moduleTitle: 'Module 3 : Mesures électriques, vérifications et dépannage',
        topics: [
          'Utilisation sécurisée du multimètre, de la pince ampèremétrique et du contrôleur d’isolement',
          'Méthode de recherche de coupure, de court-circuit et de défaut d’isolement',
          'Bonnes pratiques de serrage, repérage et mise en conformité des armoires BT'
        ]
      }
    ],
    targetAudience: 'Électriciens industriels, monteurs-câbleurs, techniciens de maintenance polyvalents, opérateurs régleurs.',
    prerequisites: 'Aucun prérequis spécifique pour le niveau initiation. Connaissances de base pour les niveaux avancés.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Initiation à Perfectionnement — Adaptable',
    modalities: 'Présentiel avec ateliers pratiques de câblage et diagnostic.',
    practicalWork: '70% de travaux pratiques sur armoires électriques réelles et maquettes de commande de moteurs.',
    equipmentAndSoftware: ['Armoires industrielles basse tension complètes', 'Appareillages Schneider, ABB, Siemens', 'Multimètres, pinces ampèremétriques, mégohmmètres'],
    certification: 'Attestation de fin de formation professionnelle.',
    price: 'Sur devis',
    featuredHome: false
  },

  // 9 — Efficacité Énergétique et ISO 50001
  {
    id: 'efficacite-energetique-iso50001',
    title: 'Efficacité Énergétique dans l’Industrie & ISO 50001',
    category: 'efficacite',
    categoryLabel: 'EFFICACITÉ ÉNERGÉTIQUE',
    shortDescription: 'Formation permettant de comprendre les principes du management de l’énergie, d’identifier les usages énergétiques significatifs, de définir des indicateurs de performance énergétique et d’appliquer les principes de l’ISO 50001.',
    image: imgEnergie,
    imageWebp: imgEnergie,
    imageJpg: '/images/energy-efficiency-iso50001.jpg',
    imageAlt: "Formation en efficacité énergétique industrielle, audit thermique et management ISO 50001 au Maroc",
    seoFileName: 'energy-efficiency-iso50001.webp',
    objectives: [
      'Comprendre les exigences et la méthodologie du système de management de l’énergie selon la norme ISO 50001.',
      'Identifier et cartographier les Usages Énergétiques Significatifs (UES) d’un site de production industrielle.',
      'Établir la situation énergétique de référence (SER) et définir les Indicateurs de Performance Énergétique (IPÉ / EnPI).',
      'Identifier les gisements d’économie d’énergie sur les utilités industrielles (moteurs, air comprimé, vapeur, froid).'
    ],
    levelsInfo: 'Cette formation s’adresse aux responsables énergie, directeurs d’usine, ingénieurs maintenance et consultants souhaitant structurer la démarche énergétique de leur entreprise ou préparer la certification ISO 50001.',
    program: [
      {
        moduleTitle: 'Module 1 : Cadre normatif ISO 50001 & revue énergétique',
        topics: [
          'Structure High Level Structure (HLS) et exigences clés de l’ISO 50001',
          'Méthodologie de la revue énergétique : collecte, fiabilisation et analyse des données de consommation',
          'Détermination des Usages Énergétiques Significatifs (UES) et facteurs pertinents'
        ]
      },
      {
        moduleTitle: 'Module 2 : Indicateurs de performance énergétique (IPÉ) & plan de mesurage',
        topics: [
          'Établissement de la Situation Énergétique de Référence (SER) et normalisation des données',
          'Construction d’indicateurs EnPI pertinents (par tonne produite, par heure de fonctionnement)',
          'Conception du plan de comptage énergétique (compteurs d’électricité, débitmètres, capteurs de gaz/vapeur)'
        ]
      },
      {
        moduleTitle: 'Module 3 : Plans d’action et optimisation des utilités industrielles',
        topics: [
          'Optimisation des entraînements électriques et récupération d’énergie par variateurs',
          'Chasse aux fuites d’air comprimé, régulation de pression et optimisation des compresseurs',
          'Suivi, audits internes du Système de Management de l’Énergie (SMÉ) et calcul du retour sur investissement (ROI)'
        ]
      }
    ],
    targetAudience: 'Responsables énergie, directeurs techniques, ingénieurs maintenance, responsables QHSE, auditeurs énergétiques.',
    prerequisites: 'Connaissances générales des procédés et utilités industrielles.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Professionnel & Décisionnel — Adaptable',
    modalities: 'Présentiel ou à distance (classe virtuelle interactive avec études de cas réels).',
    practicalWork: 'Audit énergétique guidé, élaboration de bilans de puissance et construction de tableaux de bord EnPI.',
    equipmentAndSoftware: ['Outils d’analyse et de modélisation énergétique', 'Analyseurs de puissance triphasée et enregistreurs de données'],
    certification: 'Attestation de fin de formation professionnelle.',
    price: 'Sur devis',
    featuredHome: false
  },

  // 10 — Maintenance Industrielle
  {
    id: 'maintenance-industrielle',
    title: 'Formation en Maintenance Industrielle',
    category: 'maintenance',
    categoryLabel: 'MAINTENANCE INDUSTRIELLE',
    shortDescription: 'Formation destinée au développement des compétences en maintenance préventive, corrective et diagnostique des machines et équipements industriels.',
    image: imgMaintenance,
    imageWebp: imgMaintenance,
    imageJpg: '/images/industrial-maintenance.jpg',
    imageAlt: "Formation pratique en maintenance industrielle préventive, corrective, alignement laser et GMAO au Maroc",
    seoFileName: 'industrial-maintenance.webp',
    objectives: [
      'Maîtriser les différentes stratégies de maintenance : préventive systématique, conditionnelle, prédictive et corrective.',
      'Organiser et planifier les interventions techniques pour maximiser le Taux de Rendement Synthétique (TRS / OEE).',
      'Appliquer les méthodes d’analyse de défaillances et d’amélioration continue (5 Pourquoi, Ishikawa, AMDEC).',
      'Développer une approche pluridisciplinaire (mécanique, électrique, pneumatique, hydraulique) du dépannage.'
    ],
    levelsInfo: 'Cette formation peut être proposée aux niveaux initiation, intermédiaire ou perfectionnement. Le contenu et les études de cas sont adaptés aux typologies de machines et aux processus de production de votre secteur.',
    program: [
      {
        moduleTitle: 'Module 1 : Organisation, typologie et indicateurs clés de la maintenance',
        topics: [
          'Concepts et normes de la maintenance industrielle (NF EN 13306)',
          'Indicateurs de performance : MTBF (temps moyen entre pannes), MTTR (temps moyen de réparation), Disponibilité et TRS',
          'Élaboration d’un plan de maintenance préventive et gestion des pièces de rechange'
        ]
      },
      {
        moduleTitle: 'Module 2 : Méthodologie d’analyse de pannes et fiabilité',
        topics: [
          'Méthodes de résolution de problèmes : Arbre des causes, diagramme d’Ishikawa, méthode des 5 Pourquoi',
          'Introduction à l’AMDEC machine (Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité)',
          'Maintenance conditionnelle : analyse vibratoire de base, thermographie infrarouge et analyse d’huile'
        ]
      },
      {
        moduleTitle: 'Module 3 : Pratique d’intervention pluridisciplinaire',
        topics: [
          'Vérification et lignage des transmissions mécaniques (poulies, courroies, réducteurs, accouplements)',
          'Maintenance des circuits pneumatiques et hydrauliques (filtres, régulateurs, vérins, étanchéité)',
          'Rédaction de comptes-rendus d’intervention clairs et alimentation de la GMAO'
        ]
      }
    ],
    targetAudience: 'Techniciens de maintenance, électromécaniciens, chefs d’équipe maintenance, agents de maîtrise et responsables d’ateliers.',
    prerequisites: 'Expérience générale ou formation technique en milieu industriel.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Tous niveaux / Adaptable',
    modalities: 'Présentiel en atelier technique ou directement au sein de vos installations industrielles.',
    practicalWork: 'Exercices pratiques d’inspection mécanique, de réglage de guidages et d’analyse de défaillances réelles.',
    equipmentAndSoftware: ['Bancs d’essais électromécaniques et transmissions industrielles', 'Appareils de contrôle d’alignement et outillage de maintenance'],
    certification: 'Attestation de fin de formation professionnelle.',
    price: 'Sur devis',
    featuredHome: true
  },

  // 11 — Diagnostic et Contrôle des Cartes Électroniques Industrielles
  {
    id: 'electronique-industrielle',
    title: 'Diagnostic et Contrôle des Cartes Électroniques Industrielles',
    category: 'electronique',
    categoryLabel: 'ÉLECTRONIQUE INDUSTRIELLE',
    shortDescription: 'Formation pratique sur les méthodes de contrôle, de mesure, de diagnostic et d’identification des défauts des cartes électroniques utilisées dans les équipements industriels.',
    image: imgElectronique,
    imageWebp: imgElectronique,
    imageJpg: '/images/industrial-electronics.jpg',
    imageAlt: "Formation pratique au diagnostic, contrôle à l'oscilloscope et réparation de cartes électroniques industrielles au Maroc",
    seoFileName: 'industrial-electronics.webp',
    objectives: [
      'Identifier la fonction et le principe des composants électroniques discrets et CMS (diodes, transistors, MOSFET, IGBT, optocoupleurs).',
      'Tester les composants hors tension et sous tension avec un multimètre, un oscilloscope et des alimentations de laboratoire.',
      'Analyser l’architecture typique des alimentations à découpage et des cartes de commande industrielle.',
      'Localiser avec précision les composants défaillants sans endommager le circuit imprimé.'
    ],
    levelsInfo: 'Cette formation s’adresse aux techniciens en électronique, électromécaniciens et agents de maintenance souhaitant acquérir une autonomie pratique de contrôle et diagnostic des cartes électroniques de variateurs, d’automates et d’alimentations.',
    program: [
      {
        moduleTitle: 'Module 1 : Composants électroniques industriels & méthodes de test',
        topics: [
          'Composants passifs (résistances, condensateurs électrolytiques et film, inductances) et mesure d’ESR',
          'Semi-conducteurs de puissance : diodes de redressement, ponts de diodes, transistors bipolaires, MOSFETs et IGBTs',
          'Circuits d’isolation et de commande de grille (Optocoupleurs, drivers de gate)'
        ]
      },
      {
        moduleTitle: 'Module 2 : Analyse des sous-ensembles électroniques clés',
        topics: [
          'Structure des alimentations à découpage (Flyback, Forward) : étage primaire, hacheur, transformateur HF, régulation',
          'Étages d’entrées/sorties analogiques et numériques des cartes industrielles',
          'Circuits de filtrage CEM et protections contre les surtensions (Varistances/MOV, diodes Transil)'
        ]
      },
      {
        moduleTitle: 'Module 3 : Pratique du banc de mesure et techniques de dépannage',
        topics: [
          'Utilisation avancée de l’oscilloscope numérique (analyse de signaux PWM, ondulation de tension, bruit)',
          'Générateurs de signaux et traçage de signaux de commande',
          'Précautions contre les décharges électrostatiques (ESD) et bonnes pratiques de soudage/dessoudage'
        ]
      }
    ],
    targetAudience: 'Techniciens en électronique, agents de maintenance industrielle, techniciens de SAV et de banc de test.',
    prerequisites: 'Connaissances élémentaires en électricité (tension, courant, loi d’Ohm).',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Technique / Atelier — Adaptable',
    modalities: 'Présentiel en laboratoire d’électronique industrielle.',
    practicalWork: '80% de pratique sur cartes électroniques réelles (cartes de variateurs, alimentations industrielles, cartes d’automates défectueuses).',
    equipmentAndSoftware: ['Oscilloscopes numériques à mémoire', 'Multimètres TRMS de précision', 'Testeurs de composants et ESR-mètres', 'Stations de brasage / débrasage professionnelles'],
    certification: 'Attestation de fin de formation professionnelle.',
    price: 'Sur devis',
    featuredHome: false
  },

  // 12 — Habilitation Électrique
  {
    id: 'habilitation-electrique',
    title: 'Formation en Habilitation Électrique',
    category: 'securite',
    categoryLabel: 'SÉCURITÉ ÉLECTRIQUE',
    shortDescription: 'Formation consacrée aux règles de sécurité, aux risques électriques, aux procédures d’intervention, de consignation et aux bonnes pratiques relatives aux opérations sur ou à proximité des installations électriques.',
    image: imgHabilitation,
    imageWebp: imgHabilitation,
    imageJpg: '/images/electrical-safety.jpg',
    imageAlt: "Formation et certification en habilitation électrique B1V B2V BR BC basse et haute tension selon la norme NF C 18-510 au Maroc",
    seoFileName: 'electrical-safety.webp',
    objectives: [
      'Identifier les dangers du courant électrique, les effets physiologiques de l’électrisation et les risques d’arc flash.',
      'Maîtriser les zones d’environnement électrique et les distances de sécurité selon la réglementation.',
      'Exécuter rigoureusement les étapes de la consignation électrique en basse tension (séparation, condamnation, VAT).',
      'Choisir, vérifier et utiliser correctement les Équipements de Protection Individuelle (EPI) et outillages isolés.'
    ],
    levelsInfo: 'Cette formation prépare le personnel aux exigences de sécurité pour les interventions en environnement électrique. Le programme et les mises en situation pratiques sont adaptés selon les opérations visées (interventions non-électriciens d’entretien, réarmement, travaux d’électriciens, consignation et dépannage).',
    program: [
      {
        moduleTitle: 'Module 1 : Risques électriques & réglementation de sécurité',
        topics: [
          'Effets du courant sur le corps humain (électrisation, électrocution, brûlures thermiques)',
          'Risques de court-circuit, projection et arc électrique (Arc Flash)',
          'Définition des titres et niveaux d’habilitation (personnel non-électricien et électricien)',
          'Zones d’environnement électrique en basse tension et distances de sécurité'
        ]
      },
      {
        moduleTitle: 'Module 2 : Équipements de protection & outillage de sécurité',
        topics: [
          'Équipements de Protection Individuelle (EPI) : gants isolants, écran facial anti-arc, casque, vêtements ininflammables',
          'Équipements de Protection Collective (EPC) : tapis isolants, balisage de zone, écrans de protection',
          'Vérification périodique et limites d’utilisation du matériel de sécurité et outillage isolé 1000 V'
        ]
      },
      {
        moduleTitle: 'Module 3 : Procédures de consignation et conduite en cas d’accident',
        topics: [
          'Les 5 étapes incontournables de la consignation électrique en basse tension',
          'Utilisation du Vérificateur d’Absence de Tension (VAT) avec test avant et après usage',
          'Documents de sécurité : autorisation de travail, certificat de consignation, avis de fin de travail',
          'Conduite à tenir en cas d’accident corporel électrique ou de départ d’incendie sur armoire électrique'
        ]
      }
    ],
    targetAudience: 'Électriciens, techniciens de maintenance, mécaniciens, agents de production et opérateurs intervenant à proximité d’installations électriques.',
    prerequisites: 'Aucun prérequis pour les non-électriciens ; compétences en électricité requises pour les profils électriciens.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Conformité & Sécurité — Adaptable',
    modalities: 'Présentiel avec ateliers pratiques et simulations réelles de consignation.',
    practicalWork: 'Mises en situation pratiques sur armoires pédagogiques : procédures réelles de consignation, utilisation des VAT et port des EPI.',
    equipmentAndSoftware: ['Armoires électriques pédagogiques de consignation', 'Kits complets de consignation (cadenas, moraillons, étiquettes)', 'EPI diélectriques et vérificateurs d’absence de tension (VAT)'],
    certification: 'Attestation de fin de formation et avis d’habilitation remis à l’employeur.',
    price: 'Sur devis (Formules intra-entreprise disponibles)',
    featuredHome: false
  },

  // 13 — Formation en QHSE
  {
    id: 'qhse',
    title: 'Formation en QHSE — Qualité, Hygiène, Sécurité & Environnement',
    category: 'qhse',
    categoryLabel: 'QHSE',
    shortDescription: 'Formation sur les fondamentaux de la qualité, de la santé et sécurité au travail, de la prévention des risques et de la maîtrise des impacts environnementaux en milieu professionnel.',
    image: imgQhse,
    imageWebp: imgQhse,
    imageJpg: '/images/qhse.jpg',
    imageAlt: "Formation professionnelle en management QHSE, prévention des risques et sécurité industrielle au travail au Maroc",
    seoFileName: 'qhse.webp',
    objectives: [
      'Comprendre les enjeux transversaux d’un système intégré Qualité, Hygiène, Sécurité et Environnement (QHSE).',
      'Identifier et évaluer les risques professionnels au poste de travail (Document Unique / Évaluation des Risques).',
      'Connaître les protocoles d’hygiène industrielle, de gestion des déchets et de conformité environnementale.',
      'Conduire des audits terrain de sécurité, analyser les presqu’accidents et promouvoir la culture sécurité.'
    ],
    levelsInfo: 'Cette formation est adaptée aux responsables QHSE, chefs d’équipe, animateurs sécurité et membres de comités d’hygiène et sécurité d’entreprises industrielles de toutes tailles.',
    program: [
      {
        moduleTitle: 'Module 1 : Fondamentaux de la Santé, Sécurité au Travail (SST) & réglementation',
        topics: [
          'Principes généraux de prévention des risques professionnels en entreprise',
          'Méthodologie d’évaluation des risques aux postes de travail et plan d’action',
          'Ergonomie des postes, manutention manuelle et prévention des Troubles Musculosquelettiques (TMS)'
        ]
      },
      {
        moduleTitle: 'Module 2 : Maîtrise environnementale & hygiène en milieu industriel',
        topics: [
          'Gestion, tri et traçabilité des déchets industriels banals et dangereux',
          'Prévention des pollutions accidentelles et gestion des produits chimiques (Fiches de Données de Sécurité - FDS)',
          'Règles d’hygiène industrielle, aération des locaux et protection contre les poussières et solvants'
        ]
      },
      {
        moduleTitle: 'Module 3 : Démarche Qualité, audits terrain & culture sécurité',
        topics: [
          'Sensibilisation aux exigences des référentiels de management (ISO 9001, ISO 45001, ISO 14001)',
          'Méthode d’analyse des accidents du travail et presqu’accidents (Arbre des causes)',
          'Animation de causeries sécurité (Safety Talks), visites comportementales de sécurité (VCS) et affichage'
        ]
      }
    ],
    targetAudience: 'Responsables QHSE, animateurs sécurité, managers de proximité, directeurs d’usine, membres du comité SST.',
    prerequisites: 'Sensibilité aux questions de sécurité et d’organisation industrielle.',
    duration: 'Selon le niveau des participants et les besoins',
    level: 'Sensibilisation & Management — Adaptable',
    modalities: 'Présentiel en entreprise au Maroc ou classe virtuelle interactive.',
    practicalWork: 'Études de cas réels : analyse d’incidents avec arbre des causes, rédaction de fiches de sécurité et réalisation d’une grille d’audit terrain.',
    equipmentAndSoftware: ['Supports pédagogiques réglementaires', 'Fiches de contrôle SST et grilles d’audit ISO 45001 / ISO 14001'],
    certification: 'Attestation de fin de formation professionnelle QHSE.',
    price: 'Sur devis (Tarif groupe entreprise)',
    featuredHome: false
  }
];
