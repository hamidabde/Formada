import { InterventionProject } from '../types';

export const REALIZATIONS_DATA: InterventionProject[] = [
  {
    id: 'proj-01',
    title: 'Diagnostic & Réparation de Variateur 160 kW',
    equipmentType: 'Variateur de vitesse triphasé 160 kW (Pompage haute pression)',
    sector: 'Traitement de l’eau & Environnement',
    problem: 'Mise en sécurité intempestive avec alarme "Surtension Bus DC" et "Défaut IGBT" entraînant le blocage de la station de pompage principal.',
    diagnosis: 'Diagnostic au composant révélant un dessèchement critique des condensateurs de filtrage de la carte de puissance et le court-circuit d’un bras d’onduleur IGBT.',
    solution: 'Remplacement des modules IGBT de puissance, remplacement préventif des condensateurs électrolytiques du bus DC, réfection de la pâte thermique et contrôle sous charge sur banc d’essai.',
    result: 'Remise en service complète sous 48 heures sans remplacement du variateur complet, générant une économie financière significative pour le client.',
    hasPhotosPlaceholder: true,
    isModelExample: true
  },
  {
    id: 'proj-02',
    title: 'Rétrofit Automate S7-300 vers S7-1500 & Écran Tactile',
    equipmentType: 'Ligne de conditionnement automatique (40 éléments d’E/S)',
    sector: 'Agroalimentaire',
    problem: 'Obsolescence de l’ancien API S7-300 avec indisponibilité des pièces de rechange et risque d’arrêt de production prolongé.',
    diagnosis: 'Analyse du programme existant sous Step7, relevé de l’implantation des cartes d’E/S et étude du câblage d’interface.',
    solution: 'Migration matérielle vers Siemens CPU S7-1512, conversion du programme sous TIA Portal V18, intégration d’un nouvel écran IHM 12 pouces et reconfiguration du réseau PROFINET.',
    result: "Ligne modernisée avec baisse de 15% des temps de cycle, visibilité accrue des alarmes et sécurisation de l'approvisionnement en composants.",
    hasPhotosPlaceholder: true,
    isModelExample: true
  },
  {
    id: 'proj-03',
    title: 'Réparation de Carte Électronique de Commande de Presse',
    equipmentType: 'Carte électronique multicouche intégrée à une presse hydraulique',
    sector: 'Plasturgie & Transformation des matériaux',
    problem: 'Absence d’affichage et blocage complet des commandes manuelles et automatiques de la presse.',
    diagnosis: 'Recherche de pannes sur banc de laboratoire révélant une défaillance de la régulation à découpage 24V/5V et un optocoupleur d’isolation grillé.',
    solution: 'Remplacement des composants de la chaîne d’alimentation, réparation de deux pistes de cuivre altérées et test fonctionnel en boucle fermée.',
    result: 'Carte rétablie dans son état nominal de fonctionnement. Évite le remplacement de la machine spéciale.',
    hasPhotosPlaceholder: true,
    isModelExample: true
  },
  {
    id: 'proj-04',
    title: 'Formation Intra-Entreprise & Paramétrage de Variateurs',
    equipmentType: 'Parc de 15 variateurs de vitesse répartis sur convoyeurs industriels',
    sector: 'Logistique & Manutention',
    problem: 'Manque d’autonomie des techniciens internes lors des remplacements de variateurs en cas de panne sur poste de nuit.',
    diagnosis: 'Évaluation des besoins des équipes de maintenance et analyse des références de variateurs installés sur le site.',
    solution: 'Session de formation pratique de 3 jours sur site client avec paramétrage réel, sauvegarde des fichiers de configuration et création d’un guide de remplacement rapide.',
    result: 'Équipes de maintenance autonomes, réduction prouvée du temps moyen de réparation (MTTR) de 45 minutes par intervention.',
    hasPhotosPlaceholder: true,
    isModelExample: true
  }
];
