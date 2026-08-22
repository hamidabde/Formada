import { TechService } from '../types';

export const TECHNICAL_SERVICES: TechService[] = [
  {
    id: 'reparation',
    title: 'Réparation de Cartes Électroniques Industrielles',
    shortDescription: 'Diagnostic et réparation de cartes électroniques industrielles pour variateurs, machines, automatismes et équipements de production au Maroc.',
    fullDescription: 'Diagnostic de précision et réparation au composant de cartes électroniques industrielles, variateurs de vitesse et cartes de commande d’automates pour prolonger la durée de vie de vos équipements.',
    subFeatures: [
      'Réparation de cartes électroniques de variateurs de vitesse (puissance & commande)',
      'Réparation de cartes électroniques industrielles et cartes d’E/S pour automates PLC',
      'Diagnostic au composant : remplacement IGBT, condensateurs de filtrage, optocoupleurs et drivers',
      'Nettoyage par ultrasons, désoxydation, contrôle thermique et vernissage tropicalisé',
      'Tests fonctionnels sur banc d’essai sous charge réelle avant réexpédition au Maroc',
      'Remise en état de cartes électroniques devenues obsolètes ou introuvables'
    ],
    equipmentTypes: [
      'Variateurs de fréquence (Siemens Sinamics, Schneider Altivar, Danfoss VLT, ABB ACS)',
      'Modules d’alimentation à découpage & hacheurs de puissance',
      'Cartes d’axes, cartes d’asservissement & cartes d’E/S',
      'Pupitres opérateurs & écrans tactiles industriels'
    ],
    iconName: 'Cpu',
    ctaText: 'Demander une réparation'
  },
  {
    id: 'automatisme',
    title: 'Programmation Automates PLC & Automatisme Industriel',
    shortDescription: 'Programmation, modification, diagnostic et optimisation d\'automates industriels PLC pour machines, procédés et installations industrielles au Maroc.',
    fullDescription: 'Programmation d’automates industriels PLC, rétrofit d’installations obsolètes, création d’IHM et supervision SCADA pour fiabiliser vos lignes de production au Maroc.',
    subFeatures: [
      'Programmation d’automates PLC (Siemens TIA Portal S7-1200/1500, Schneider Modicon, Rockwell)',
      'Modification, optimisation de cycle et diagnostic de programmes d’automatisme existants',
      'Rétrofit et migration d’anciens automates (ex: Siemens S7-300 vers S7-1500)',
      'Sauvegarde préventive (Backup) et archivage sécurisé des programmes PLC et IHM',
      'Conception d’écrans tactiles IHM/HMI ergonomiques et synoptiques SCADA',
      'Configuration et diagnostic des réseaux de terrain (PROFINET, Ethernet/IP, Modbus TCP)',
      'Assistance technique à la mise au point et au démarrage d’usines au Maroc'
    ],
    equipmentTypes: [
      'Automates Siemens S7-1200 / S7-1500 / S7-300 / LOGO!',
      'Schneider Modicon M221 / M241 / M258 / Premium',
      'Rockwell ControlLogix / CompactLogix / MicroLogix',
      'Écrans tactiles Siemens Comfort Panel, Schneider Magelis, Weintek'
    ],
    iconName: 'Bot',
    ctaText: 'Demander une étude d’automatisme'
  },
  {
    id: 'diagnostic',
    title: 'Maintenance & Réparation Variateurs de Vitesse et Diagnostic sur Site',
    shortDescription: 'Diagnostic, paramétrage, maintenance et réparation de variateurs de vitesse pour moteurs, machines et installations industrielles au Maroc.',
    fullDescription: 'Intervention d’urgence, dépannage industriel et maintenance de variateurs de vitesse pour minimiser les arrêts de production sur l’ensemble du territoire marocain.',
    subFeatures: [
      'Diagnostic, dépannage et maintenance de variateurs de vitesse multi-marques',
      'Recherche méthodique de pannes électriques, électroniques et d’automatisme sur site',
      'Analyse des alarmes (surtension, surintensité, défaut IGBT, surcharge thermique)',
      'Paramétrage sur mesure, auto-tuning et optimisation du contrôle vectoriel moteur',
      'Intervention rapide sur site client au Maroc pour dépannage industriel urgent',
      'Contrôle préventif de l’échauffement, des ventilateurs et des condensateurs DC'
    ],
    equipmentTypes: [
      'Lignes de conditionnement, convoyeurs & presses',
      'Groupes de pompage, surpresseurs & ventilation industrielle',
      'Extrudeuses, mélangeurs & malaxeurs industriels',
      'Ponts roulants & entraînements synchrones/asynchrones'
    ],
    iconName: 'Wrench',
    ctaText: 'Demander une intervention d’urgence'
  },
  {
    id: 'installation',
    title: 'Maintenance Électrique & Industrielle, Installation et Mise en Service',
    shortDescription: 'Services de maintenance industrielle, diagnostic électrique, dépannage et assistance technique pour machines et équipements industriels au Maroc.',
    fullDescription: 'Maintenance électrique industrielle, intégration de coffrets d’automatisme, raccordement et mise en service d’équipements industriels dans le respect des normes.',
    subFeatures: [
      'Maintenance électrique industrielle préventive et corrective sur armoires de commande',
      'Installation physique, câblage et raccordement de nouvelles armoires d’automatisme',
      'Vérification méthodique point par point des Entrées/Sorties (I/O Check)',
      'Essais à vide et tests en conditions réelles de production industrielle',
      'Diagnostic électrique et analyse de la qualité du réseau (harmoniques, déséquilibres)',
      'Formation sur le terrain des équipes de maintenance interne',
      'Accompagnement technique continu et assistance au démarrage au Maroc'
    ],
    equipmentTypes: [
      'Armoires de distribution électrique & tableaux généraux basse tension (TGBT)',
      'Armoires de variation de vitesse et coffrets d’automatisme PLC',
      'Systèmes de contrôle-commande et de régulation thermique/pression',
      'Postes de distribution et installations de puissance'
    ],
    iconName: 'Settings',
    ctaText: 'Demander une mise en service'
  }
];
