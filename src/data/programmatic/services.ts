import { ProgrammaticPage } from '../../types/programmatic';

export const SERVICE_PAGES: ProgrammaticPage[] = [
  // 11. Réparation variateurs Siemens SINAMICS au Maroc
  {
    slug: 'reparation-variateurs-siemens-sinamics-maroc',
    type: 'service',
    status: 'published',
    primaryKeyword: 'réparation variateur Siemens SINAMICS Maroc',
    searchIntent: 'commerciale',
    title: 'Réparation Variateurs Siemens SINAMICS au Maroc | INDUSTRIELTECH',
    description: 'Diagnostic et réparation au composant de variateurs Siemens SINAMICS (G120, S120, V20) au Maroc. Remplacement IGBT, cartes de commande et banc d’essai sous charge.',
    h1: 'Réparation de Variateurs Siemens SINAMICS au Maroc',
    badgeText: 'Siemens Sinamics • Diagnostic & Réparation',
    introduction: 'Les variateurs de vitesse Siemens SINAMICS (G120, S120, V20, Micromaster 440) sont des organes critiques dans l’industrie marocaine. Lorsqu’une panne survient, le remplacement à neuf est coûteux et les délais de réapprovisionnement peuvent immobiliser votre usine pendant des semaines. INDUSTRIELTECH assure le diagnostic et la réparation au composant avec test dynamique sous charge.',
    heroImage: 'https://i.postimg.cc/Jhg331v9/maintenance-et-reparation-variateurs-de-vitesse-et-diagnostique-sur-site.webp',
    heroImageAlt: 'Réparation et test d’un variateur Siemens Sinamics G120 en atelier électronique au Maroc',
    serviceData: {
      targetedEquipments: [
        'Siemens SINAMICS G120 (modules de puissance PM240, PM240-2 et unités de contrôle CU240E-2 / CU250S-2)',
        'Siemens SINAMICS S120 (modules Booksize, Smart Line Modules, Motor Modules)',
        'Siemens SINAMICS V20 (variateurs compacts)',
        'Gamme historique Siemens Micromaster 420 / 440 / 430'
      ],
      triggerSituations: [
        'Défaut de surintensité ou court-circuit interne (ex: F30001, F07800)',
        'Défaut de surtension ou sous-tension du bus continu (F30002, F30003)',
        'Variateur qui ne s’allume plus du tout (alimentation interne défaillante)',
        'Erreur de communication PROFINET avec l’automate (F01910)',
        'Déclenchement intempestif des protections au démarrage du moteur'
      ],
      confirmedScope: [
        'Contrôle statique hors tension au multimètre des ponts redresseurs et modules IGBT',
        'Inspection au microscope thermique et remplacement des composants électroniques dégradés (condensateurs de filtrage, optocoupleurs de commande de grille, drivers de puissance)',
        'Réparation ou reconfiguration de la Control Unit (CU)',
        'Nettoyage cryogénique ou ultrasons des radiateurs et remplacement systématique de la pâte thermique',
        'Test dynamique sur banc d’essai avec moteur sous charge réelle et relevé des signaux MLI'
      ],
      requiredCustomerInfo: [
        {
          item: 'Référence complète constructeur',
          description: 'Numéro de référence Siemens (MLFB, ex: 6SL3210-1PE21-8UL0) visible sur la plaque signalétique.'
        },
        {
          item: 'Code d’erreur et historique',
          description: 'Code d’alarme affiché sur le panneau opérateur BOP-2/IOP ou dans TIA Portal (ex: F30001).'
        },
        {
          item: 'Photos nettes de l’appareil',
          description: 'Vue d’ensemble, plaque signalétique et état visible des borniers de puissance.'
        },
        {
          item: 'Symptômes précis constatés',
          description: 'Préciser si la disjonction survient dès la mise sous tension ou seulement lors de la mise en marche moteur.'
        }
      ],
      serviceModalities: [
        'Prise en charge à notre atelier technique de Casablanca (dépôt direct ou expédition transporteur depuis toutes les villes du Maroc)',
        'Possibilité de déplacement d’un ingénieur sur votre site industriel pour diagnostic initial'
      ],
      turnaroundNote: 'Diagnostic technique établi sous 24 à 48 heures ouvrées après réception du matériel en atelier.'
    },
    sections: [
      {
        title: 'Pourquoi réparer un variateur SINAMICS plutôt que de le remplacer ?',
        content: 'Un variateur Siemens neuf de moyenne ou forte puissance représente un investissement très lourd, sans compter les délais actuels de livraison qui dépassent souvent plusieurs semaines. La remise en état par des techniciens spécialisés permet de restaurer 100% des fonctionnalités pour une fraction du prix d’origine, tout en conservant vos paramètres existants.'
      },
      {
        title: 'Bancs de tests sous charge réelle',
        content: 'Nous ne nous contentons pas de tester l’allumage des voyants à vide. Chaque variateur Siemens réparé subit un cycle de montée en fréquence et en charge sur notre banc moteur pour valider la stabilité du bus DC et l’équilibrage des courants de phase.'
      }
    ],
    faq: [
      {
        question: 'Conservez-vous le paramétrage du variateur lors de la réparation ?',
        answer: 'Oui, dans la mesure où la mémoire de l’unité de contrôle (CU) est intacte, nous effectuons une sauvegarde intégrale des paramètres avant intervention et les réinjectons avant les tests.'
      },
      {
        question: 'Comment vous envoyer un variateur depuis Tanger, Agadir ou Fès ?',
        answer: 'Nous réceptionnons quotidiennement des équipements expédiés par messagerie express (SDTM, CTM Messagerie, Ghazala, Amana) depuis tout le Maroc.'
      }
    ],
    relatedSlugs: [
      'variateur-vitesse-en-defaut-diagnostic',
      'reparer-ou-remplacer-variateur-vitesse',
      'formation-variateurs-de-vitesse-maroc',
      'reparation-cartes-electroniques-industrielles-maroc'
    ],
    cta: {
      label: 'Demander un diagnostic pour votre Sinamics',
      subtext: 'Devis de prise en charge sous 24h • Expédition depuis tout le Maroc',
      actionType: 'diagnostic',
      prefilledSubject: 'Demande de réparation variateur Siemens Sinamics',
      prefilledType: 'Diagnostic ou dépannage'
    },
    sourcesOrBusinessInfo: 'Atelier de réparation électronique INDUSTRIELTECH Casablanca. Procédures conformes aux spécifications Siemens Sinamics.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 12. Réparation variateurs Schneider Altivar au Maroc
  {
    slug: 'reparation-variateurs-schneider-altivar-maroc',
    type: 'service',
    status: 'published',
    primaryKeyword: 'réparation variateur Schneider Altivar Maroc',
    searchIntent: 'commerciale',
    title: 'Réparation Variateurs Schneider Altivar au Maroc | INDUSTRIELTECH',
    description: 'Service de réparation pour variateurs Schneider Electric Altivar au Maroc (ATV320, ATV630, ATV930, ATV71). Diagnostic électronique et test sous charge.',
    h1: 'Réparation de Variateurs Schneider Electric Altivar au Maroc',
    badgeText: 'Schneider Altivar • Dépannage & Électronique',
    introduction: 'Leader historique de l’entraînement industriel au Maroc, Schneider Electric équipe des milliers d’installations avec ses gammes Altivar. Qu’il s’agisse d’un défaut OCF, SCF ou d’un écran Graphic Display noir, INDUSTRIELTECH diagnostique et répare vos variateurs Altivar à Casablanca avec prise en charge sur tout le territoire national.',
    heroImage: 'https://i.postimg.cc/Jhg331v9/maintenance-et-reparation-variateurs-de-vitesse-et-diagnostique-sur-site.webp',
    heroImageAlt: 'Atelier de réparation électronique pour variateurs Schneider Altivar au Maroc',
    serviceData: {
      targetedEquipments: [
        'Schneider Altivar Process ATV600 (ATV630, ATV650 pour pompage et ventilation)',
        'Schneider Altivar Process ATV900 (ATV930, ATV950 pour process lourds)',
        'Schneider Altivar Machine ATV320 et ATV340',
        'Gammes historiques : Altivar 71 (ATV71), Altivar 61 (ATV61) et Altivar 312 (ATV312)'
      ],
      triggerSituations: [
        'Défaut de court-circuit moteur ou IGBT (défaut SCF1, SCF2, SCF3)',
        'Défaut de surintensité en accélération ou régime établi (défaut OCF)',
        'Défaut de surtension bus continu (défaut OSF ou ObF)',
        'Affichage de l’erreur interne InF1 à InF9 (défaut carte contrôle ou carte puissance)',
        'Ventilateurs internes bloqués et mise en défaut thermique (OHF)'
      ],
      confirmedScope: [
        'Démontage complet et nettoyage industriel de la poussière conductrice',
        'Contrôle de l’état des condensateurs du bus continu et ESR',
        'Remplacement des modules semi-conducteurs de puissance (pont triphasé, IGBTs de commande)',
        'Réparation des circuits d’alimentation auxiliaire à découpage (SMPS)',
        'Test dynamique complet avec logiciel SoMove et moteur triphasé'
      ],
      requiredCustomerInfo: [
        {
          item: 'Référence complète du variateur',
          description: 'Exemple : ATV630U55N4 ou ATV71HD11N4 figurant sur l’étiquette latérale.'
        },
        {
          item: 'Code d’anomalie affiché',
          description: 'Le code à 3 ou 4 lettres présent sur l’afficheur (ex: SCF3).'
        },
        {
          item: 'Contexte d’apparition',
          description: 'Surcharge mécanique, orage, coupure de courant ou fonctionnement normal continu.'
        }
      ],
      serviceModalities: [
        'Dépôt direct à notre atelier de Casablanca ou envoi par transporteur express depuis tout le Maroc',
        'Intervention d’urgence sur site pour les puissances industrielles supérieures à 55 kW'
      ],
      turnaroundNote: 'Devis de réparation sous 24 à 48 heures.'
    },
    sections: [
      {
        title: 'Prolonger la vie des parcs Altivar 71 et 61',
        content: 'Bien que Schneider Electric ait arrêté la commercialisation de la gamme légendaire ATV71/ATV61 au profit d’Altivar Process, des centaines d’usines au Maroc continuent de les exploiter. Plutôt que de financer une modification lourde d’armoire et de programmation, la réparation de vos ATV71 existants reste la solution la plus économique et rapide.'
      }
    ],
    faq: [
      {
        question: 'Que signifie l’erreur SCF sur un variateur Altivar ?',
        answer: 'L’erreur SCF (Short Circuit Fault) indique un court-circuit franc détecté en sortie du variateur. Elle peut provenir du câble ou du moteur, mais si l’erreur persiste même avec le moteur déconnecté, cela confirme que le module de puissance IGBT interne est en court-circuit et doit être remplacé en atelier.'
      }
    ],
    relatedSlugs: [
      'variateur-vitesse-en-defaut-diagnostic',
      'reparer-ou-remplacer-variateur-vitesse',
      'reparation-variateurs-siemens-sinamics-maroc',
      'reparation-cartes-electroniques-industrielles-maroc'
    ],
    cta: {
      label: 'Demander la prise en charge d’un Altivar',
      subtext: 'Diagnostic rapide et devis gratuit pour les entreprises au Maroc',
      actionType: 'diagnostic',
      prefilledSubject: 'Demande de réparation variateur Schneider Altivar',
      prefilledType: 'Diagnostic ou dépannage'
    },
    sourcesOrBusinessInfo: 'Expertise atelier confirmée INDUSTRIELTECH. Données conformes aux manuels de dépannage Schneider Electric Altivar.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 13. Réparation variateurs ABB au Maroc
  {
    slug: 'reparation-variateurs-abb-maroc',
    type: 'service',
    status: 'published',
    primaryKeyword: 'réparation variateur ABB Maroc',
    searchIntent: 'commerciale',
    title: 'Réparation Variateurs ABB au Maroc | INDUSTRIELTECH',
    description: 'Maintenance et réparation de variateurs de fréquence ABB au Maroc (ACS380, ACS580, ACS880, ACS550). Réparation électronique, pièces d’origine et test.',
    h1: 'Réparation de Variateurs de Fréquence ABB au Maroc',
    badgeText: 'ABB Drives • Réparation & Maintenance',
    introduction: 'Réputés pour leur robustesse dans les cimenteries, mines, carrières et stations de traitement d’eau au Maroc, les variateurs ABB (ACS550, ACS580, ACS880) demandent un savoir-faire spécifique en maintenance préventive et curative. INDUSTRIELTECH prend en charge la remise en état de vos entraînements ABB.',
    heroImage: 'https://i.postimg.cc/Jhg331v9/maintenance-et-reparation-variateurs-de-vitesse-et-diagnostique-sur-site.webp',
    heroImageAlt: 'Technicien vérifiant un variateur de fréquence ABB ACS880 sur banc d’essai',
    serviceData: {
      targetedEquipments: [
        'ABB ACS880 (entraînements industriels monocommande et multiconvertisseurs)',
        'ABB ACS580 (variateurs standards polyvalents pour l’industrie)',
        'ABB ACS380 / ACS355 (variateurs machines compacts)',
        'Gamme historique ABB ACS550 (très présente sur les installations marocaines)'
      ],
      triggerSituations: [
        'Défauts de surintensité Overcurrent (Code 2310)',
        'Défauts de court-circuit Short Circuit (Code 2340)',
        'Défauts de communication réseau FBA A / FBA B (Code 7510)',
        'Perte d’affichage sur le panneau de commande Assistant CP'
      ],
      confirmedScope: [
        'Contrôle approfondi des cartes d’alimentation et de commande de grille',
        'Remplacement des condensateurs électrolytiques du circuit intermédiaire DC',
        'Contrôle et remplacement des modules de puissance IGBT et thyristors de charge',
        'Nettoyage des canaux de ventilation et vérification des ventilateurs tachymétriques',
        'Validation sur banc sous charge avec le logiciel ABB Drive Composer'
      ],
      requiredCustomerInfo: [
        {
          item: 'Code type complet',
          description: 'Désignation complète ABB (ex: ACS580-01-045A-4) sur la plaque métallique.'
        },
        {
          item: 'Code de défaut relevé',
          description: 'Numéro hexadécimal ou libellé textuel de l’assistant de commande.'
        }
      ],
      serviceModalities: [
        'Réparation en atelier centralisé à Casablanca avec bancs de test sous charge',
        'Intervention sur site pour les variateurs de forte puissance en armoire'
      ],
      turnaroundNote: 'Devis sous 24 à 48 heures ouvrées.'
    },
    sections: [
      {
        title: 'Fiabilité pour les environnements sévères',
        content: 'Les variateurs ABB fonctionnent souvent dans des conditions poussiéreuses et chaudes au Maroc. Lors de nos réparations, nous appliquons un vernis de tropicalisation protecteur sur les circuits imprimés pour prévenir l’oxydation et garantir une durée de vie prolongée.'
      }
    ],
    faq: [
      {
        question: 'Réparez-vous les anciens variateurs ABB ACS550 ?',
        answer: 'Oui, nous disposons des composants électroniques clés pour remettre en service les variateurs de la série ACS550 devenus indisponibles chez le fabricant.'
      }
    ],
    relatedSlugs: [
      'variateur-vitesse-en-defaut-diagnostic',
      'reparer-ou-remplacer-variateur-vitesse',
      'reparation-variateurs-siemens-sinamics-maroc',
      'reparation-variateurs-schneider-altivar-maroc'
    ],
    cta: {
      label: 'Demander un devis réparation variateur ABB',
      subtext: 'Prise en charge rapide pour l’industrie marocaine',
      actionType: 'diagnostic',
      prefilledSubject: 'Demande de réparation variateur ABB Maroc',
      prefilledType: 'Diagnostic ou dépannage'
    },
    sourcesOrBusinessInfo: 'Bancs de test et outillage confirmés INDUSTRIELTECH Casablanca. Manuels ABB ACS Drives.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 14. Réparation variateurs Danfoss au Maroc
  {
    slug: 'reparation-variateurs-danfoss-maroc',
    type: 'service',
    status: 'published',
    primaryKeyword: 'réparation variateur Danfoss Maroc',
    searchIntent: 'commerciale',
    title: 'Réparation Variateurs Danfoss VLT au Maroc | INDUSTRIELTECH',
    description: 'Dépannage et réparation de variateurs Danfoss VLT au Maroc (FC302, FC202, FC102, Micro Drive FC51). Remplacement composants et banc d’essai.',
    h1: 'Réparation de Variateurs Danfoss VLT au Maroc',
    badgeText: 'Danfoss Drives • VLT AutomationDrive',
    introduction: 'Très largement employés dans le secteur agroalimentaire, les stations de pompage agricole et les centrales de traitement d’air au Maroc, les variateurs Danfoss VLT sont réputés pour leur efficacité énergétique. INDUSTRIELTECH propose une prise en charge complète pour réparer vos variateurs Danfoss en panne.',
    heroImage: 'https://i.postimg.cc/Jhg331v9/maintenance-et-reparation-variateurs-de-vitesse-et-diagnostique-sur-site.webp',
    heroImageAlt: 'Réparation d’un variateur de fréquence Danfoss VLT AutomationDrive en atelier',
    serviceData: {
      targetedEquipments: [
        'Danfoss VLT AutomationDrive FC 301 / FC 302',
        'Danfoss VLT AQUA Drive FC 202 (spécialisé pompage et irrigation)',
        'Danfoss VLT HVAC Drive FC 102 (ventilation et froid industriel)',
        'Danfoss VLT Micro Drive FC 51'
      ],
      triggerSituations: [
        'Alarme 14 (Ground Fault / Défaut à la terre)',
        'Alarme 16 (Short Circuit / Court-circuit)',
        'Alarme 8 (DC undervoltage) ou Alarme 7 (DC overvoltage)',
        'Panneau LCP éteint malgré une tension réseau présente à l’entrée'
      ],
      confirmedScope: [
        'Contrôle à l’ohmmètre des diodes de redressement et pont onduleur IGBT',
        'Remplacement des composants de l’alimentation auxiliaire à découpage',
        'Vérification des condensateurs électrolytiques du bus intermédiaire',
        'Remise en état du bornier de commande et liaison de bus (Modbus RTU / PROFINET)',
        'Essais sur banc sous charge réelle avec le logiciel Danfoss MCT 10'
      ],
      requiredCustomerInfo: [
        {
          item: 'Numéro de type complet (Type Code)',
          description: 'Code alphanumérique Danfoss (ex: FC-302P11KT4E20H1BXCXXXSXXXXA0BXCXXXXDX) sur l’étiquette.'
        },
        {
          item: 'Numéro d’alarme affiché sur l’écran LCP',
          description: 'Exemple : Alarm 14 ou Alarm 16.'
        }
      ],
      serviceModalities: [
        'Réception en atelier à Casablanca ou expédition par messagerie',
        'Prise en charge prioritaire pour les équipements critiques de pompage'
      ],
      turnaroundNote: 'Diagnostic communiqué sous 24 à 48 heures.'
    },
    sections: [
      {
        title: 'Spécialistes du pompage et du froid au Maroc',
        content: 'La gamme Danfoss AQUA Drive FC 202 équipe de nombreux périmètres irrigués et stations de pompage à Souss-Massa, Gharb et Tadla. Nous assurons la réparation de ces équipements dans les meilleurs délais pour limiter l’impact sur les récoltes et la distribution d’eau.'
      }
    ],
    faq: [
      {
        question: 'Que signifie l’Alarme 14 sur un variateur Danfoss ?',
        answer: 'L’Alarme 14 indique une fuite de courant vers la terre. Si le moteur et le câble sont vérifiés et sains, le défaut se situe dans le circuit interne de mesure de courant (capteurs à effet Hall) du variateur, qui peut être réparé en atelier.'
      }
    ],
    relatedSlugs: [
      'variateur-vitesse-en-defaut-diagnostic',
      'reparer-ou-remplacer-variateur-vitesse',
      'formation-variateurs-de-vitesse-maroc',
      'reparation-cartes-electroniques-industrielles-maroc'
    ],
    cta: {
      label: 'Demander un diagnostic variateur Danfoss',
      subtext: 'Service réactif pour les industriels et exploitants agricoles au Maroc',
      actionType: 'diagnostic',
      prefilledSubject: 'Demande de réparation variateur Danfoss Maroc',
      prefilledType: 'Diagnostic ou dépannage'
    },
    sourcesOrBusinessInfo: 'Atelier certifié pour l’électronique de puissance. Manuels d’exploitation Danfoss VLT.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 15. Réparation cartes électroniques industrielles au Maroc
  {
    slug: 'reparation-cartes-electroniques-industrielles-maroc',
    type: 'service',
    status: 'published',
    primaryKeyword: 'réparation cartes électroniques industrielles Maroc',
    searchIntent: 'commerciale',
    title: 'Réparation Cartes Électroniques Industrielles au Maroc | INDUSTRIELTECH',
    description: 'Atelier spécialisé dans le diagnostic et la réparation au composant de cartes électroniques industrielles au Maroc. Désoxydation, microsoudure CMS, bancs de test.',
    h1: 'Réparation de Cartes Électroniques Industrielles au Maroc',
    badgeText: 'Électronique Industrielle • Réparation au Composant',
    introduction: 'Lorsqu’une carte électronique de machine spéciale, d’alimentation à découpage ou d’automate tombe en panne, le fabricant de la machine impose souvent de changer l’ensemble du sous-système, voire déclare le matériel obsolète. L’atelier d’électronique industrielle d’INDUSTRIELTECH intervient directement au niveau des composants pour restaurer vos cartes.',
    heroImage: 'https://i.postimg.cc/50fDY1df/Diagnostic-de-precision-et-reparation-au-composant-de-cartes-electroniques-industrielles-variateurs.webp',
    heroImageAlt: 'Technicien en microsoudure sous microscope de cartes électroniques industrielles au Maroc',
    serviceData: {
      targetedEquipments: [
        'Cartes de commande et de puissance pour variateurs de vitesse et servo-variateurs',
        'Alimentations à découpage industrielles (24VDC, multi-sorties)',
        'Cartes d’entrées/sorties numériques et analogiques pour automates PLC',
        'Cartes de contrôle de machines-outils CNC, presses, lignes d’extrusion et de packaging',
        'Pupitres tactiles industriels et cartes d’affichage d’écrans IHM'
      ],
      triggerSituations: [
        'Composant carbonisé ou piste de circuit imprimé coupée suite à une surtension',
        'Condensateurs électrolytiques gonflés ou présentant une fuite d’électrolyte',
        'Composant CMS défectueux provoquant un court-circuit sur le rail 24V ou 5V',
        'Pannes intermittentes liées aux variations de température d’atelier',
        'Oxydation due à l’humidité ou aux vapeurs chimiques en environnement industriel'
      ],
      confirmedScope: [
        'Inspection optique haute résolution sous microscope stéréoscopique',
        'Analyse thermique par caméra infrarouge pour détecter les composants en surchauffe anormale',
        'Mesures de précision : ESR des condensateurs, contrôle dynamique des semi-conducteurs, analyse de signaux à l’oscilloscope',
        'Dessoudage et brasage propre de composants CMS (QFP, SOIC, DFN) et traversants',
        'Nettoyage par ultrasons, traitement anticorrosion et vernissage de tropicalisation'
      ],
      requiredCustomerInfo: [
        {
          item: 'Photos nettes recto/verso de la carte',
          description: 'Pour repérer immédiatement des zones brûlées, composants éclatés ou références.'
        },
        {
          item: 'Machine d’origine et référence de la carte',
          description: 'Marque et modèle de la machine hôte et référence sérigraphiée sur le PCB.'
        },
        {
          item: 'Symptômes de la panne',
          description: 'Comportement observé : absence de démarrage, fusible qui saute, perte d’un signal d’entrée/sortie.'
        }
      ],
      serviceModalities: [
        'Atelier d’électronique basé à Casablanca avec réception des colis de tout le Maroc',
        'Traçabilité et rapport de test fourni avec chaque carte réparée'
      ],
      turnaroundNote: 'Diagnostic initial et devis sous 48h ouvrées.'
    },
    sections: [
      {
        title: 'L’antidote à l’obsolescence programmée des machines',
        content: 'De nombreuses machines industrielles au Maroc sont mécaniquement parfaites mais risquent la mise au rebut simplement parce qu’une petite carte électronique n’est plus fournie par le constructeur. Notre savoir-faire en réparation au composant permet de maintenir ces équipements en service pendant de nombreuses années supplémentaires.'
      }
    ],
    faq: [
      {
        question: 'Pouvez-vous réparer une carte sans le schéma électronique de la machine ?',
        answer: 'Oui. Dans la grande majorité des cas, les constructeurs refusent de fournir leurs schémas internes. Nos techniciens analysent la carte par rétro-ingénierie fonctionnelle en isolant l’alimentation, les étages d’isolation optocouplée, les circuits de commande et les commutateurs de puissance.'
      },
      {
        question: 'Toutes les cartes électroniques sont-elles réparables ?',
        answer: 'Si le microcontrôleur central propriétaire est détruit ou si le circuit imprimé multi-couches est carbonisé en profondeur, la réparation peut s’avérer impossible. Dans ce cas, nous vous informons dès le diagnostic sans engager de frais inutiles.'
      }
    ],
    relatedSlugs: [
      'carte-electronique-industrielle-panne-diagnostic',
      'reparation-variateurs-siemens-sinamics-maroc',
      'reparation-variateurs-schneider-altivar-maroc',
      'formation-diagnostic-pannes-industrielles-maroc'
    ],
    cta: {
      label: 'Demander un diagnostic pour votre carte',
      subtext: 'Envoyez vos photos pour un pré-diagnostic gratuit',
      actionType: 'diagnostic',
      prefilledSubject: 'Demande de réparation de carte électronique industrielle',
      prefilledType: 'Diagnostic ou dépannage'
    },
    sourcesOrBusinessInfo: 'Laboratoire d’électronique industrielle confirmé INDUSTRIELTECH Casablanca. Stations de brasage professionnelles et oscilloscopes certifiés.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 16. Diagnostic automates Siemens au Maroc
  {
    slug: 'diagnostic-automates-siemens-maroc',
    type: 'service',
    status: 'published',
    primaryKeyword: 'diagnostic automate Siemens Maroc',
    searchIntent: 'commerciale',
    title: 'Diagnostic Automates Siemens au Maroc | INDUSTRIELTECH',
    description: 'Service d’intervention et diagnostic d’urgence sur automates Siemens (S7-1200, S7-1500, S7-300) au Maroc. CPU en STOP, analyse buffer, dépannage sur site.',
    h1: 'Diagnostic et Dépannage d’Automates Siemens au Maroc',
    badgeText: 'Siemens SIMATIC • Dépannage & Diagnostic',
    introduction: 'Un automate Siemens qui bascule en STOP ou qui perd ses liaisons PROFINET provoque l’arrêt immédiat de votre chaîne de fabrication. INDUSTRIELTECH met à disposition des automaticiens expérimentés pour intervenir sur votre site industriel au Maroc, analyser le tampon de diagnostic, forcer les signaux en sécurité et rétablir le fonctionnement.',
    heroImage: 'https://i.postimg.cc/1tM2DTsG/Programmation-d-automates-industriels-PLC-retrofit-d-installations-obsoletes-creation-d-IHM-et-sup.webp',
    heroImageAlt: 'Automaticien connectant une console de programmation TIA Portal sur une armoire Siemens',
    serviceData: {
      targetedEquipments: [
        'Automates Siemens SIMATIC S7-1200 (CPU 1211C à 1217C)',
        'Automates Siemens SIMATIC S7-1500 et CPU compactes/technologiques',
        'Anciennes générations Siemens SIMATIC S7-300 / S7-400 (Step 7 Classic)',
        'Îlots de périphérie décentralisée ET 200SP / ET 200M / ET 200S'
      ],
      triggerSituations: [
        'Voyant STOP allumé rouge fixe ou clignotant sur la CPU',
        'Voyant SF (System Fault) ou ERROR actif signalant un défaut matériel',
        'Voyant BF (Bus Fault) indiquant une coupure de réseau PROFINET ou PROFIBUS',
        'Machine bloquée en milieu de cycle sans alarme explicite sur le pupitre opérateur',
        'Perte de programme ou batterie CPU déchargée'
      ],
      confirmedScope: [
        'Connexion en ligne via TIA Portal ou Step 7 Classic à la CPU',
        'Extraction et interprétation détaillée du tampon de diagnostic (Diagnostic Buffer)',
        'Vérification des cartes d’entrées/sorties en défaut et des alimentations de capteurs 24VDC',
        'Contrôle de l’intégrité du réseau PROFINET et des commutateurs Scalance',
        'Sauvegarde intégrale (Backup en ligne) du programme et des valeurs de mémoire actuelles (DB)'
      ],
      requiredCustomerInfo: [
        {
          item: 'Modèle exact de la CPU Siemens',
          description: 'Exemple : CPU 1214C DC/DC/DC ou CPU 1515-2 PN.'
        },
        {
          item: 'État des voyants LED en façade',
          description: 'Noter la couleur et l’état (fixe ou clignotant) des voyants RUN, STOP, ERROR/SF, MAINT, LINK.'
        },
        {
          item: 'Disponibilité d’une sauvegarde de programme',
          description: 'Préciser si vous disposez d’une copie du projet sur clé USB ou disque.'
        }
      ],
      serviceModalities: [
        'Intervention d’urgence sur site client dans toutes les zones industrielles du Maroc',
        'Possibilité de téléassistance si l’automate dispose d’une passerelle VPN sécurisée'
      ],
      turnaroundNote: 'Mobilisation rapide selon criticité industrielle et disponibilité des équipes.'
    },
    sections: [
      {
        title: 'Intervention méthodique sans risque pour vos données',
        content: 'Le premier réflexe d’un technicien non formé est souvent de couper et remettre le courant, voire d’effacer la mémoire de l’automate. Cette pratique risque de détruire définitivement les recettes et les paramètres machine. Nos automaticiens suivent un protocole d’investigation strict qui préserve l’intégrité de vos programmes.'
      }
    ],
    faq: [
      {
        question: 'Pouvez-vous intervenir si nous n’avons pas le mot de passe du projet ?',
        answer: 'Même si un bloc de code est protégé par mot de passe (Know-How Protection), le tampon de diagnostic système de la CPU reste accessible et fournit l’adresse exacte du défaut matériel ou de la coupure réseau à l’origine de l’arrêt.'
      }
    ],
    relatedSlugs: [
      'automate-en-stop-informations-intervention',
      'sauvegarde-programmes-automates-plc-maroc',
      'formation-siemens-tia-portal-maroc',
      'reparation-variateurs-siemens-sinamics-maroc'
    ],
    cta: {
      label: 'Demander un diagnostic automate Siemens',
      subtext: 'Assistance technique d’urgence au Maroc • Équipes mobiles',
      actionType: 'diagnostic',
      prefilledSubject: 'Demande de diagnostic automate Siemens Maroc',
      prefilledType: 'Diagnostic ou dépannage'
    },
    sourcesOrBusinessInfo: 'Ingénieurs automaticiens confirmés INDUSTRIELTECH. Outils logiciels certifiés Siemens TIA Portal et Step 7.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 17. Programmation automates Schneider au Maroc
  {
    slug: 'programmation-automates-schneider-maroc',
    type: 'service',
    status: 'published',
    primaryKeyword: 'programmation automate Schneider Maroc',
    searchIntent: 'commerciale',
    title: 'Programmation Automates Schneider au Maroc | INDUSTRIELTECH',
    description: 'Développement, modification et mise en service de programmes pour automates Schneider Modicon au Maroc (M221, M241, M258, M340). EcoStruxure Machine Expert.',
    h1: 'Programmation et Rétrofit d’Automates Schneider au Maroc',
    badgeText: 'Schneider Modicon • Programmation & Rétrofit',
    introduction: 'Que ce soit pour créer le cycle d’une machine neuve, ajouter un convoyeur supplémentaire à une ligne existante ou remplacer un automate obsolète, INDUSTRIELTECH assure la programmation, la modification et la fiabilisation de vos automates Schneider Electric Modicon au Maroc.',
    heroImage: 'https://i.postimg.cc/1tM2DTsG/Programmation-d-automates-industriels-PLC-retrofit-d-installations-obsoletes-creation-d-IHM-et-sup.webp',
    heroImageAlt: 'Programmation d’un automate Schneider Modicon sur logiciel EcoStruxure Machine Expert',
    serviceData: {
      targetedEquipments: [
        'Schneider Modicon M221 (gamme compacte programmée avec Machine Expert - Basic)',
        'Schneider Modicon M241 et M258 (contrôleurs de machines rapides)',
        'Schneider Modicon M340 et M580 (gammes modulaires process sous Control Expert)',
        'Écrans tactiles Schneider Magelis / Harmony et logiciels Vijeo Designer'
      ],
      triggerSituations: [
        'Ajout de nouvelles fonctionnalités ou d’actionneurs sur une machine existante',
        'Optimisation du temps de cycle pour accroître la cadence de production',
        'Rétrofit d’anciens automates (Modicon TSX Micro, TSX Premium) vers Modicon M241 ou M580',
        'Impossibilité de relancer une machine suite à une corruption du programme'
      ],
      confirmedScope: [
        'Rédaction ou validation du cahier des charges fonctionnel et de l’analyse fonctionnelle',
        'Développement de programmes structurés selon la norme CEI 61131-3 (Ladder, Grafcet, SFC, ST)',
        'Création d’écrans tactiles IHM ergonomiques avec alarmes claires pour les opérateurs',
        'Tests et validation des entrées/sorties point par point (I/O Check)',
        'Assistance sur site lors de la mise en production et formation des équipes de conduite'
      ],
      requiredCustomerInfo: [
        {
          item: 'Cahier des charges ou description du cycle attendu',
          description: 'Étapes du processus, sécurités à intégrer et cadences visées.'
        },
        {
          item: 'Schéma électrique de la machine',
          description: 'Pour identifier le repérage des capteurs et pré-actionneurs connectés à l’automate.'
        },
        {
          item: 'Modèle de l’automate Schneider',
          description: 'Référence exacte de la CPU et des modules TM3/TM4 installés.'
        }
      ],
      serviceModalities: [
        'Étude préalable et développement en bureau d’études puis mise en service sur site au Maroc',
        'Remise de l’intégralité des sources commentées et des sauvegardes documentées'
      ],
      turnaroundNote: 'Étude de faisabilité et devis sous 3 à 5 jours ouvrés.'
    },
    sections: [
      {
        title: 'Remise complète des sources au client',
        content: 'Contrairement à certaines pratiques qui verrouillent les programmes, INDUSTRIELTECH s’engage contractuellement à remettre l’intégralité des programmes sources commentés à l’issue de la mise en service, garantissant ainsi votre totale souveraineté sur votre outil industriel.'
      }
    ],
    faq: [
      {
        question: 'Pouvez-vous convertir un ancien programme TSX Micro sous PL7 Pro ?',
        answer: 'Oui, nous réalisons la migration des programmes écrits sous PL7-07, PL7 Pro ou ProWORX vers les suites modernes EcoStruxure Machine Expert ou EcoStruxure Control Expert.'
      }
    ],
    relatedSlugs: [
      'sauvegarde-programmes-automates-plc-maroc',
      'diagnostic-automates-siemens-maroc',
      'formation-automate-schneider-modicon-maroc'
    ],
    cta: {
      label: 'Demander une étude d’automatisme Schneider',
      subtext: 'Développement neuf, modification et rétrofit au Maroc',
      actionType: 'quote',
      prefilledSubject: 'Demande de programmation automate Schneider Maroc',
      prefilledType: 'Demande de devis'
    },
    sourcesOrBusinessInfo: 'Développements conformes aux normes CEI 61131-3 et standards de sécurité machines au Maroc.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 18. Sauvegarde de programmes automates PLC au Maroc
  {
    slug: 'sauvegarde-programmes-automates-plc-maroc',
    type: 'service',
    status: 'published',
    primaryKeyword: 'sauvegarde programme automate PLC Maroc',
    searchIntent: 'commerciale',
    title: 'Sauvegarde de Programmes Automates PLC au Maroc | INDUSTRIELTECH',
    description: 'Audit et sauvegarde préventive (Backup) de programmes automates et pupitres IHM au Maroc (Siemens, Schneider, Omron, ABB). Clé en main.',
    h1: 'Sauvegarde Préventive de Programmes Automates et IHM au Maroc',
    badgeText: 'Audit & Continuité d’Activité • Backup PLC',
    introduction: 'Que se passerait-il si la batterie d’un de vos automates lâchait cette nuit, ou si une surtension détruisait sa mémoire ? Des dizaines d’usines au Maroc perdent des semaines de production pour la simple raison qu’aucune copie récente du programme n’avait été archivée. INDUSTRIELTECH propose une prestation globale d’audit et de sauvegarde sécurisée.',
    heroImage: 'https://i.postimg.cc/1tM2DTsG/Programmation-d-automates-industriels-PLC-retrofit-d-installations-obsoletes-creation-d-IHM-et-sup.webp',
    heroImageAlt: 'Technicien réalisant la sauvegarde d’une CPU industrielle sur console de programmation',
    serviceData: {
      targetedEquipments: [
        'Automates programmables toutes marques : Siemens (S7-1200, S7-1500, S7-300, S7-200, LOGO!)',
        'Schneider Electric (Modicon M221, M241, M340, TSX Premium, TSX Micro)',
        'Rockwell Allen-Bradley, Omron, Mitsubishi Electric',
        'Pupitres tactiles et écrans opérateurs IHM (Siemens Comfort, Proface, Weintek, Schneider)'
      ],
      triggerSituations: [
        'Absence totale de sauvegardes ou sauvegardes datant de plusieurs années non vérifiées',
        'Machines achetées d’occasion sans dossier technique ni fichiers sources',
        'Départ d’un automaticien ou changement d’équipe de maintenance',
        'Préparation d’un plan de reprise d’activité (PRA / PCA) ou audit qualité ISO 9001'
      ],
      confirmedScope: [
        'Recensement exhaustif des automates, variateurs et pupitres de votre site',
        'Raccordement physique en ligne et téléversement (Upload) du programme automate et des blocs de données (DB)',
        'Sauvegarde de l’image complète (Firmware + runtime) des pupitres IHM',
        'Sauvegarde des paramètres de configuration des variateurs de vitesse',
        'Livraison d’un coffret numérique sécurisé contenant tous les fichiers horodatés, avec fiches de synthèse reprenant les adresses IP et versions logicielles'
      ],
      requiredCustomerInfo: [
        {
          item: 'Inventaire approximatif du parc',
          description: 'Nombre de machines et marques des automates principaux.'
        },
        {
          item: 'Localisation de l’usine au Maroc',
          description: 'Casablanca, Tanger, Kénitra, Berrechid, Jorf Lasfar ou autres zones.'
        }
      ],
      serviceModalities: [
        'Intervention planifiée sur site par un ingénieur automaticien équipé des consoles et logiciels multi-constructeurs',
        'Intervention sans perturbation de la cadence de production'
      ],
      turnaroundNote: 'Rapport d’audit et coffret de sauvegarde remis sous 48h après la visite sur site.'
    },
    sections: [
      {
        title: 'Le coût minime de l’assurance contre l’arrêt total',
        content: 'Réécrire le programme complet d’une machine complexe peut coûter des dizaines de milliers d’euros et prendre plus d’un mois. Une campagne de sauvegarde préventive constitue l’investissement de maintenance le plus rentable pour sécuriser vos outils de production.'
      }
    ],
    faq: [
      {
        question: 'L’opération de sauvegarde nécessite-t-elle d’arrêter la machine ?',
        answer: 'Dans la majorité des cas, l’extraction du programme (Upload) se fait en temps réel pendant que la machine fonctionne, sans aucun arrêt ni perturbation du processus.'
      }
    ],
    relatedSlugs: [
      'pourquoi-sauvegarder-programmes-automates',
      'diagnostic-automates-siemens-maroc',
      'programmation-automates-schneider-maroc',
      'formation-siemens-tia-portal-maroc'
    ],
    cta: {
      label: 'Demander un audit de sauvegarde d’usine',
      subtext: 'Sécurisez votre savoir-faire industriel dès aujourd’hui',
      actionType: 'quote',
      prefilledSubject: 'Demande de prestation sauvegarde de programmes automates Maroc',
      prefilledType: 'Demande de devis'
    },
    sourcesOrBusinessInfo: 'Méthodologie d’audit INDUSTRIELTECH. Compatibilité confirmée Siemens, Schneider, Omron, Rockwell.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 19. Installation réseau informatique pour entreprise au Maroc
  {
    slug: 'installation-reseau-informatique-entreprise-maroc',
    type: 'service',
    status: 'published',
    primaryKeyword: 'installation réseau informatique entreprise Maroc',
    searchIntent: 'commerciale',
    title: 'Installation Réseau Informatique Entreprise au Maroc | INDUSTRIELTECH',
    description: 'Câblage structuré, baies de brassage, switches managés et routeurs d’entreprise au Maroc. Audit, installation et certification réseau LAN.',
    h1: 'Installation de Réseaux Informatiques pour Entreprises au Maroc',
    badgeText: 'Infrastructure IT • Câblage & Switches Managés',
    introduction: 'Une infrastructure réseau informatique fiable est le socle de toute entreprise moderne, qu’il s’agisse de bureaux administratifs ou d’environnements industriels. INDUSTRIELTECH conçoit, déploie et certifie votre câblage réseau cuivre et fibre, installe vos baies de brassage et configure vos équipements actifs pour une disponibilité maximale.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Technicien raccordant des câbles réseau RJ45 dans une baie de brassage d’entreprise',
    serviceData: {
      targetedEquipments: [
        'Câblage structuré cuivre Catégorie 6, 6A et 7 (blindage FTP/STP/SFTP)',
        'Liaisons inter-bâtiments et rocades en fibre optique (monomode et multimode)',
        'Baies de brassage 19 pouces, bandeaux de prises RJ45 et gestionnaires de câbles',
        'Switches managés de niveau 2 et 3 (Cisco, Aruba, Ubiquiti, TP-Link Omada)',
        'Routeurs d’accès internet, passerelles de sécurité et pare-feux (Firewalls)'
      ],
      triggerSituations: [
        'Emménagement dans de nouveaux locaux ou ouverture d’une nouvelle usine/entrepôt',
        'Rénovation d’un câblage vétuste avec des prises instables et des câbles volants',
        'Ralentissements fréquents lors de l’accès aux serveurs internes ou à l’ERP',
        'Nécessité d’isoler le réseau administratif du réseau des ateliers ou des invités'
      ],
      confirmedScope: [
        'Étude préalable des plans de masse et définition du cheminement des câbles',
        'Pose de goulottes techniques, tirage de câbles et raccordement propre des plastrons muraux',
        'Montage et organisation méthodique des baies de brassage avec étiquetage normé',
        'Configuration des réseaux locaux virtuels (VLAN) et du routage inter-VLAN',
        'Recette technique et remise du dossier de recollement réseau'
      ],
      requiredCustomerInfo: [
        {
          item: 'Nombre de postes et prises RJ45 prévus',
          description: 'Prises postes de travail, imprimantes, caméras IP, bornes Wi-Fi.'
        },
        {
          item: 'Superficie et plan des locaux',
          description: 'Nombre d’étages, cloisons, distances maximales entre la baie et les prises.'
        },
        {
          item: 'Ville d’implantation au Maroc',
          description: 'Casablanca, Rabat, Tanger, Marrakech ou autre agglomération.'
        }
      ],
      serviceModalities: [
        'Intervention complète clé en main (fourniture, pose, raccordement et paramétrage)',
        'Horaires d’intervention adaptables pour ne pas perturber l’activité des bureaux'
      ],
      turnaroundNote: 'Visite de repérage et devis d’installation sous 48h ouvrées.'
    },
    sections: [
      {
        title: 'La fin des câbles anarchiques et des coupures inexpliquées',
        content: 'Un câblage mal posé ou non étiqueté transforme la moindre panne en calvaire pour vos techniciens. Nos installations respectent les règles de l’art : câblage certifié, étiquetage rigoureux des deux côtés et organisation soignée des cordons de brassage dans la baie.'
      }
    ],
    faq: [
      {
        question: 'Quelle est la distance maximale pour un câble réseau RJ45 ?',
        answer: 'Selon la norme internationale ISO/IEC 11801, la distance maximale d’un lien cuivre Ethernet ne doit pas dépasser 90 mètres de câble horizontal plus 10 mètres de cordons de brassage (100 mètres au total). Au-delà, nous installons une rocade en fibre optique.'
      }
    ],
    relatedSlugs: [
      'installation-wifi-professionnel-entreprise-maroc',
      'reseau-informatique-entreprise-instable-diagnostic',
      'wifi-professionnel-informations-installation'
    ],
    cta: {
      label: 'Demander un devis d’installation réseau',
      subtext: 'Étude technique sur site et devis détaillé sous 48h',
      actionType: 'quote',
      prefilledSubject: 'Demande de devis installation réseau informatique entreprise Maroc',
      prefilledType: 'Demande de devis'
    },
    sourcesOrBusinessInfo: 'Expertise réseau d’entreprise confirmée INDUSTRIELTECH. Équipements conformes aux normes ISO/IEC 11801 et TIA/EIA 568.',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  },

  // 20. Installation Wi-Fi professionnel pour entreprise au Maroc
  {
    slug: 'installation-wifi-professionnel-entreprise-maroc',
    type: 'service',
    status: 'published',
    primaryKeyword: 'installation Wi-Fi professionnel entreprise Maroc',
    searchIntent: 'commerciale',
    title: 'Installation Wi-Fi Professionnel pour Entreprise au Maroc | INDUSTRIELTECH',
    description: 'Déploiement de réseaux Wi-Fi professionnels haute densité pour entreprises, entrepôts et usines au Maroc. Roaming fluide, portail captif et couverture totale.',
    h1: 'Installation de Réseaux Wi-Fi Professionnels pour Entreprises au Maroc',
    badgeText: 'Wi-Fi Entreprise • Haute Densité & Roaming',
    introduction: 'Les routeurs Wi-Fi domestiques ne résistent pas aux contraintes des entreprises : déconnexions dès que plusieurs dizaines d’utilisateurs se connectent, zones blanches derrière les murs en béton ou coupures lors des déplacements des douchettes codes-barres en entrepôt. INDUSTRIELTECH déploie des infrastructures Wi-Fi professionnelles managées (Wi-Fi 6) garantissant performance et couverture intégrale.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Point d’accès Wi-Fi professionnel fixé au plafond dans un hall d’entreprise moderne',
    serviceData: {
      targetedEquipments: [
        'Points d’accès professionnels (Access Points) intérieurs et extérieurs IP67 (Ubiquiti UniFi, Aruba, Cisco Catalyst)',
        'Contrôleurs Wi-Fi centralisés physiques ou Cloud pour l’administration unifiée',
        'Switches PoE+ (Power over Ethernet) alimentant directement les bornes par le câble réseau',
        'Routeurs avec gestion de portail captif invité et segmentation de sécurité'
      ],
      triggerSituations: [
        'Zones blanches où le signal sans fil est inaccessible dans certains bureaux ou hangars',
        'Déconnexions intempestives lors des réunions en visioconférence (Teams, Zoom, Google Meet)',
        'Terminaux mobiles et lecteurs codes-barres d’entrepôt qui perdent la connexion en changeant d’allée',
        'Nécessité de sécuriser les accès en créant un réseau Wi-Fi Invités séparé du réseau interne'
      ],
      confirmedScope: [
        'Étude de couverture radio (Survey Wi-Fi) pour déterminer les emplacements optimaux des bornes',
        'Tirage de câbles Cat6 blindés et pose soignée des points d’accès en faux-plafond ou sur charpente',
        'Configuration du Roaming transparent (itinérance fluide selon les normes 802.11k/v/r)',
        'Séparation stricte des SSID : Réseau Corporate (chiffrement WPA3/WPA2-Enterprise) et Réseau Invités avec limitation de bande passante',
        'Tests réels de couverture, de débit et de basculement entre bornes'
      ],
      requiredCustomerInfo: [
        {
          item: 'Superficie et agencement des espaces',
          description: 'Surface en m², hauteur sous plafond, matériaux des cloisons (plâtre, béton armé, bardage métallique).'
        },
        {
          item: 'Nombre prévisionnel d’équipements simultanés',
          description: 'PC portables, smartphones, douchettes de préparation de commandes, imprimantes Wi-Fi.'
        },
        {
          item: 'Type d’environnement',
          description: 'Bureaux d’affaires, hôtel, usine de fabrication ou entrepôt logistique au Maroc.'
        }
      ],
      serviceModalities: [
        'Installation complète clé en main incluant le câblage, le paramétrage et la formation de l’administrateur',
        'Possibilité de contrat de maintenance et de supervision à distance'
      ],
      turnaroundNote: 'Devis sur mesure établi après visite technique sous 48h ouvrées.'
    },
    sections: [
      {
        title: 'Le Roaming fluide sans coupure',
        content: 'Grâce aux protocoles d’itinérance gérés par contrôleur centralisé, un employé ou un opérateur logistique peut se déplacer d’un bout à l’autre d’un bâtiment sans jamais subir de coupure de communication. Le terminal bascule instantanément sur la borne la plus proche de manière totalement transparente.'
      }
    ],
    faq: [
      {
        question: 'Comment empêcher les invités de saturer la connexion internet ?',
        answer: 'Nous configurons un contrôle de bande passante (Rate Limiting) dédié au réseau Invités, garantissant que vos applications professionnelles prioritaires (ERP, mails, appels vidéo) disposent toujours du débit nécessaire.'
      }
    ],
    relatedSlugs: [
      'installation-reseau-informatique-entreprise-maroc',
      'wifi-professionnel-informations-installation',
      'reseau-informatique-entreprise-instable-diagnostic'
    ],
    cta: {
      label: 'Demander une étude Wi-Fi professionnel',
      subtext: 'Couverture garantie sans zones blanches partout au Maroc',
      actionType: 'quote',
      prefilledSubject: 'Demande d’installation Wi-Fi professionnel entreprise Maroc',
      prefilledType: 'Demande de devis'
    },
    sourcesOrBusinessInfo: 'Standards Wi-Fi Alliance 802.11ax/ac. Déploiements confirmés INDUSTRIELTECH (Casablanca, Rabat, Tanger).',
    updatedAt: '2026-09-20',
    location: { city: 'Casablanca', region: 'Grand Casablanca', isNationalCoverage: true }
  }
];
