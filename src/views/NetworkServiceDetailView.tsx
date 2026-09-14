import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Network,
  Wifi,
  Server,
  ShieldCheck,
  LifeBuoy,
  Search,
  Activity,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  FileText,
  Sliders,
  Terminal,
  Cpu,
  Layers,
  ChevronRight,
  HardDrive,
  Printer,
  ShieldAlert,
  ArrowUpRight,
  RefreshCw,
  Clock,
  Settings
} from 'lucide-react';
import { CompanyInfo, RequestType } from '../types';
import { WHATSAPP_NUMBER_RAW, WHATSAPP_NUMBER_FORMATTED } from '../utils/contact';

interface Props {
  companyInfo?: CompanyInfo;
  onOpenQuoteModal: (type?: RequestType, subject?: string) => void;
}

export const NetworkServiceDetailView: React.FC<Props> = ({
  companyInfo,
  onOpenQuoteModal
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'reseau' | 'systemes' | 'support'>('all');

  const phoneDisplay = companyInfo?.phone || '+212 723033508';
  const cleanPhone = phoneDisplay.replace(/\s+/g, '');

  // 10 services breakdown detailed data
  const servicesList = [
    {
      id: 'installation-config',
      category: 'reseau',
      number: '01',
      title: 'Installation & configuration réseau',
      description: 'Conception et mise en place d’architectures réseau adaptées aux besoins des PME, bureaux, sites professionnels et environnements techniques.',
      icon: Network,
      items: [
        'Installation de réseaux LAN',
        'Configuration Ethernet',
        'Installation et configuration de switches',
        'Configuration de routeurs',
        'Configuration des adresses IP',
        'Gestion DHCP & DNS',
        'Segmentation par VLAN',
        'Sous-réseaux / Subnetting',
        'Configuration de passerelles réseau',
        'Organisation et optimisation du réseau local'
      ]
    },
    {
      id: 'wifi-pro',
      category: 'reseau',
      number: '02',
      title: 'Wi-Fi professionnel',
      description: 'Déploiement de bornes Wi-Fi d’entreprise pour une couverture homogène, stable et hautement sécurisée.',
      icon: Wifi,
      items: [
        'Installation de points d’accès Wi-Fi professionnels',
        'Configuration des réseaux sans fil d’entreprise',
        'Optimisation de la couverture Wi-Fi et des canaux',
        'Sécurisation du Wi-Fi (WPA2/WPA3 & authentification)',
        'Création de réseaux Wi-Fi invités isolés',
        'Diagnostic des problèmes de couverture et de performance'
      ]
    },
    {
      id: 'infrastructure-baies',
      category: 'reseau',
      number: '03',
      title: 'Infrastructure réseau & baies de brassage',
      description: 'Organisation physique, aménagement de baies de brassage et structuration ordonnée de vos équipements informatiques.',
      icon: Server,
      items: [
        'Architecture globale du réseau physique',
        'Aménagement de baies et coffrets informatiques',
        'Intégration de switches et routeurs rackables',
        'Brassage réseau structuré et soigné',
        'Organisation et étiquetage des équipements',
        'Identification claire des ports et liaisons réseau',
        'Documentation technique de l’infrastructure',
        'Diagnostic de câblage réseau',
        'Assistance pour câblage Ethernet RJ45'
      ]
    },
    {
      id: 'administration-systemes',
      category: 'systemes',
      number: '04',
      title: 'Administration systèmes (Windows & Linux)',
      description: 'Administration, configuration et maintenance de vos serveurs et postes pour garantir la continuité des opérations.',
      icon: Terminal,
      subSections: [
        {
          label: 'Environnement Windows',
          items: [
            'Installation et configuration Windows & Windows Server',
            'Gestion des utilisateurs, profils et groupes',
            'Configuration réseau Windows, partages & répertoires',
            'Gestion des permissions et droits d’accès (NTFS/Partage)',
            'Diagnostic système et résolution des erreurs'
          ]
        },
        {
          label: 'Environnement Linux',
          items: [
            'Installation et configuration de distributions Linux',
            'Gestion en ligne de commandes Linux',
            'Gestion des comptes utilisateurs et permissions',
            'Gestion des services système et démons (systemd)',
            'Configuration des interfaces réseau et passerelles',
            'Accès d’administration à distance sécurisé SSH',
            'Diagnostic de base et surveillance des serveurs Linux'
          ]
        }
      ]
    },
    {
      id: 'support-informatique',
      category: 'support',
      number: '05',
      title: 'Support informatique & assistance technique',
      description: 'Identification et résolution rapide des incidents informatiques afin de limiter les interruptions de travail.',
      icon: LifeBuoy,
      items: [
        'Support réactif pour les utilisateurs et collaborateurs',
        'Diagnostic matériel et logiciel des postes',
        'Résolution des problèmes réseau et pertes de connectivité',
        'Dépannage des problèmes d’accès Internet et passerelles',
        'Résolution des blocages de connexion aux partages et serveurs',
        'Configuration et partage d’imprimantes réseau',
        'Installation et mise à jour de logiciels professionnels',
        'Maintenance informatique préventive',
        'Assistance technique des postes de travail (fixes et portables)',
        'Support technique dédié pour environnements Windows'
      ]
    },
    {
      id: 'diagnostic-depannage',
      category: 'support',
      number: '06',
      title: 'Diagnostic & dépannage réseau',
      description: 'Analyse complète de la connectivité, des services DNS/DHCP et des communications entre les équipements afin d’identifier rapidement l’origine des incidents.',
      icon: Search,
      items: [
        'Diagnostic approfondi de connectivité IP et liaisons',
        'Analyse méthodique du plan d’adressage IP',
        'Mesure de latence, perte de paquets et routage (Ping, Traceroute)',
        'Contrôle des configurations d’interfaces (ipconfig / ifconfig / ip)',
        'Résolution et dépannage des serveurs DNS (nslookup)',
        'Résolution des conflits et blocages d’attribution DHCP',
        'Analyse des ports réseau et services ouverts',
        'Identification des causes de déconnexions intermittentes',
        'Diagnostic des lenteurs réseau et goulots d’étranglement',
        'Vérification rigoureuse de la communication inter-équipements'
      ]
    },
    {
      id: 'securite-reseau',
      category: 'reseau',
      number: '07',
      title: 'Sécurité réseau & durcissement d’infrastructure',
      description: 'Protection ciblée de votre périmètre réseau local, maîtrise stricte des accès et application des bonnes pratiques d’hygiène numérique.',
      icon: ShieldCheck,
      items: [
        'Segmentation réseau logique via VLAN pour cloisonner les flux',
        'Sécurisation des accès d’administration des équipements',
        'Gestion rigoureuse des comptes d’utilisateurs et des privilèges',
        'Mise en œuvre des bonnes pratiques de sécurité réseau',
        'Configuration et paramétrage de pare-feu de base (Firewall)',
        'Sécurisation des liaisons et clés de chiffrement Wi-Fi',
        'Mise à jour régulière des micrologiciels (firmwares) des équipements',
        'Sauvegarde systématique des configurations réseau',
        'Réduction proactive des risques liés aux accès non autorisés'
      ]
    },
    {
      id: 'supervision-maintenance',
      category: 'support',
      number: '08',
      title: 'Supervision & maintenance réseau',
      description: 'Suivi régulier de l’état opérationnel de vos équipements pour anticiper les anomalies et garantir la disponibilité.',
      icon: Activity,
      items: [
        'Surveillance de la disponibilité des équipements stratégiques',
        'Maintenance préventive périodique sur site et à distance',
        'Vérification continue de la connectivité des liaisons principales',
        'Surveillance de l’utilisation des ressources système',
        'Analyse méthodique des incidents et rapports d’anomalies',
        'Documentation réseau tenue à jour après chaque évolution',
        'Sauvegarde récurrente des configurations de secours',
        'Planning de maintenance préventive personnalisé'
      ]
    },
    {
      id: 'infrastructure-pme',
      category: 'systemes',
      number: '09',
      title: 'Infrastructure informatique pour PME',
      description: 'Nous accompagnons les PME dans la mise en place d’une infrastructure informatique fiable et évolutive : réseau local, Wi-Fi, postes de travail, équipements réseau, accès aux ressources partagées et maintenance technique.',
      icon: Building2,
      items: [
        'Réseau local LAN d’entreprise fiable et haute disponibilité',
        'Couverture Wi-Fi intégrale pour bureaux et ateliers',
        'Standardisation et gestion du parc de postes de travail',
        'Équipements réseau dimensionnés pour la charge de l’activité',
        'Accès sécurisé aux ressources partagées (NAS, serveurs de fichiers)',
        'Maintenance technique réactive et accompagnement continu'
      ]
    },
    {
      id: 'audit-optimisation',
      category: 'systemes',
      number: '10',
      title: 'Audit & optimisation réseau',
      description: 'Évaluation technique de votre installation existante pour identifier les goulots d’étranglement et proposer une feuille de route claire.',
      icon: Sliders,
      items: [
        'Audit complet de l’infrastructure réseau et matérielle existante',
        'Identification précise des points faibles et vulnérabilités',
        'Optimisation des débits et des flux sur le réseau local',
        'Recommandations concrètes d’amélioration et de modernisation',
        'Schémas d’architecture et documentation technique du réseau',
        'Proposition d’une architecture cible évolutive et pérenne'
      ]
    }
  ];

  const filteredServices = servicesList.filter((s) => {
    if (activeTab === 'all') return true;
    return s.category === activeTab;
  });

  // Business use cases
  const useCases = [
    {
      title: 'Bureaux & PME',
      badge: 'Tertiaire & PME',
      description: 'Réseaux locaux fiables, Wi-Fi professionnel haut débit, partage de fichiers sécurisé et support informatique au quotidien.',
      icon: Building2,
      highlights: ['LAN & Wi-Fi stables', 'Partages & imprimantes', 'Support utilisateurs']
    },
    {
      title: 'Sites industriels & Usines',
      badge: 'Environnement Technique',
      description: 'Connexion et organisation des équipements informatiques et infrastructures réseau complémentaires aux systèmes industriels (SCADA, PLC, PC de supervision).',
      icon: Cpu,
      highlights: ['Liaisons supervision / réseau IT', 'Baies industrielles', 'Cloisonnement réseaux']
    },
    {
      title: 'Commerces & Points de vente',
      badge: 'Commerce & Retail',
      description: 'Réseau fiable pour postes informatiques, caisses, imprimantes de facturation, Wi-Fi clients et équipements connectés.',
      icon: Printer,
      highlights: ['Continuité d’encaissement', 'Wi-Fi invité sécurisé', 'Équipements connectés']
    },
    {
      title: 'Cabinets & Entreprises',
      badge: 'Services & Cabinets',
      description: 'Infrastructure informatique sécurisée, stockage centralisé des dossiers confidentiels, ressources partagées et support technique réactif.',
      icon: HardDrive,
      highlights: ['Confidentialité des données', 'Sauvegardes automatiques', 'Assistance rapide']
    }
  ];

  // Process 6 steps
  const processSteps = [
    {
      step: '01',
      title: 'Analyse',
      description: 'Analyse approfondie de vos besoins opérationnels et état des lieux de l’infrastructure existante.'
    },
    {
      step: '02',
      title: 'Conception',
      description: 'Définition d’une architecture réseau et système sur mesure, adaptée à vos contraintes et à votre budget.'
    },
    {
      step: '03',
      title: 'Installation & configuration',
      description: 'Déploiement physique, brassage et configuration méthodique de l’ensemble des équipements matériels et logiciels.'
    },
    {
      step: '04',
      title: 'Tests',
      description: 'Vérification point par point de la connectivité, des débits, de la redondance et des règles de sécurité.'
    },
    {
      step: '05',
      title: 'Documentation',
      description: 'Remise d’une documentation technique claire avec plan d’adressage, schémas et repérage des liaisons.'
    },
    {
      step: '06',
      title: 'Maintenance',
      description: 'Accompagnement continu, assistance technique, dépannage rapide et optimisation périodique.'
    }
  ];

  // Why choose Industrieltech
  const reasons = [
    {
      title: 'Diagnostic technique précis',
      description: 'Une recherche méthodique des causes racines pour toute anomalie, panne ou lenteur réseau.',
      icon: Search
    },
    {
      title: 'Solutions adaptées aux besoins',
      description: 'Des architectures dimensionnées pour votre activité réelle, sans surcoût inutile ni surdimensionnement.',
      icon: Sliders
    },
    {
      title: 'Intervention professionnelle',
      description: 'Prise en charge rigoureuse sur site au Maroc ou à distance par des techniciens qualifiés.',
      icon: ShieldCheck
    },
    {
      title: 'Réduction des interruptions',
      description: 'Une réactivité éprouvée pour limiter au strict minimum les temps d’arrêt de vos collaborateurs.',
      icon: Clock
    },
    {
      title: 'Infrastructure organisée & documentée',
      description: 'Des baies étiquetées, des câbles ordonnés et des schémas d’adressage clairs et réexploitables.',
      icon: FileText
    },
    {
      title: 'Approche orientée fiabilité & évolutivité',
      description: 'Des fondations réseau stables conçues pour accompagner sans rupture la croissance de votre entreprise.',
      icon: Layers
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. BREADCRUMB & HERO SECTION */}
      <section className="bg-[#1a365d] text-white pt-8 pb-16 px-4 sm:px-8 border-b border-slate-800 shadow-xl relative overflow-hidden">
        {/* Subtle background decorative pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <Link to="/" className="hover:text-orange-300 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-orange-300 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-orange-400 font-semibold">Réseaux &amp; Infrastructure IT</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-semibold">
                <Network className="w-4 h-4 text-orange-400" />
                <span>Pôle Réseaux &amp; Infrastructure IT au Maroc</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Réseaux &amp; Infrastructure IT
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-orange-300 font-medium leading-snug">
                Installation, configuration, sécurisation et maintenance de vos réseaux informatiques.
              </p>

              {/* Description */}
              <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
                Industrieltech accompagne les entreprises dans la mise en place et la gestion de leurs infrastructures réseau et systèmes afin de garantir performance, disponibilité, sécurité et continuité de service. Une offre sur mesure, pensée pour les PME, bureaux et sites professionnels au Maroc, complémentaire à nos expertises en automatisme et maintenance industrielle.
              </p>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal('Réseaux & Infrastructure IT', 'Réseaux & Infrastructure IT - Demande de diagnostic')}
                  className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all flex items-center gap-2.5 active:scale-98"
                >
                  <span>Demander un diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${cleanPhone}`}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>{phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER_RAW}?text=${encodeURIComponent('Bonjour INDUSTRIELTECH, je souhaite un diagnostic pour notre réseau et infrastructure IT.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>

            {/* Right Card / Visual Summary */}
            <div className="lg:col-span-4 bg-slate-900/80 border border-slate-700/80 rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl backdrop-blur-xs">
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Périmètre d’intervention</span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  MAROC ENTIER
                </span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Réseaux locaux LAN, Ethernet &amp; Wi-Fi Pro</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Switches managés, routeurs &amp; passerelles</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Baies informatiques &amp; brassage soigné</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Administration systèmes Windows &amp; Linux</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Support informatique &amp; assistance postes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Diagnostic méthodique &amp; sécurité réseau</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-slate-700/60">
                <div className="p-3 bg-[#1a365d]/90 rounded-xl border border-orange-400/20 text-xs text-slate-200 leading-relaxed">
                  <strong className="text-white block mb-1">Complémentarité Industrielle &amp; IT :</strong>
                  Interconnexion fiable entre réseaux informatiques d’entreprise et systèmes industriels (SCADA, automates PLC, postes de supervision).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRESENTATION DE L'OFFRE IT & VALEUR AJOUTÉE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Des solutions concrètes pour votre entreprise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight mt-1">
              Une infrastructure réseau performante, structurée et sécurisée
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              La bonne marche d’une entreprise moderne repose sur une infrastructure informatique disponible à chaque instant. Qu’il s’agisse de déployer un nouveau réseau local, d’équiper vos locaux d’un Wi-Fi professionnel haut débit, d’organiser une baie de brassage encombrée ou de résoudre des pannes récurrentes, nos techniciens apportent une réponse méthodique et durable.
            </p>
          </div>

          {/* Quick Stats / Highlights in neutral style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-1">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block">Disponibilité</span>
              <h3 className="font-bold text-[#1a365d] text-sm">Continuité de service</h3>
              <p className="text-xs text-slate-600">Réduction active des déconnexions et des pannes bloquantes.</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-1">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block">Sécurité</span>
              <h3 className="font-bold text-[#1a365d] text-sm">Durcissement &amp; VLAN</h3>
              <p className="text-xs text-slate-600">Cloisonnement des flux, gestion des accès et sauvegardes régulières.</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-1">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block">Clarté</span>
              <h3 className="font-bold text-[#1a365d] text-sm">Documentation technique</h3>
              <p className="text-xs text-slate-600">Schémas réseau, plan d’adressage et repérage de l’infrastructure.</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-1">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block">Réactivité</span>
              <h3 className="font-bold text-[#1a365d] text-sm">Support &amp; dépannage</h3>
              <p className="text-xs text-slate-600">Diagnostic méthodique sur site au Maroc ou prise en main rapide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DÉTAIL DES 10 SERVICES (SERVICES TO PRESENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Catalogue de Prestations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight mt-1">
              Nos 10 domaines d’expertise en réseaux &amp; infrastructure IT
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Des interventions modulaires ou complètes, de l’installation initiale au dépannage d’urgence et à la maintenance programmée.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="inline-flex p-1 bg-slate-200/70 rounded-xl text-xs font-semibold text-slate-700 shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'all' ? 'bg-[#1a365d] text-white shadow-xs' : 'hover:text-[#1a365d]'}`}
            >
              Tous ({servicesList.length})
            </button>
            <button
              onClick={() => setActiveTab('reseau')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'reseau' ? 'bg-[#1a365d] text-white shadow-xs' : 'hover:text-[#1a365d]'}`}
            >
              Réseau &amp; Wi-Fi
            </button>
            <button
              onClick={() => setActiveTab('systemes')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'systemes' ? 'bg-[#1a365d] text-white shadow-xs' : 'hover:text-[#1a365d]'}`}
            >
              Systèmes &amp; PME
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'support' ? 'bg-[#1a365d] text-white shadow-xs' : 'hover:text-[#1a365d]'}`}
            >
              Support &amp; Dépannage
            </button>
          </div>
        </div>

        {/* Grid of 10 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs hover:border-orange-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top line with number and icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 border border-orange-200/80 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        SERVICE #{service.number}
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {service.category === 'reseau' && 'Architecture & Réseau'}
                      {service.category === 'systemes' && 'Systèmes & Serveurs'}
                      {service.category === 'support' && 'Support & Maintenance'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1a365d] leading-snug group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Sub-sections if Windows/Linux */}
                  {service.subSections ? (
                    <div className="space-y-4 pt-2">
                      {service.subSections.map((sub, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-2">
                          <h4 className="text-xs font-bold text-[#1a365d] flex items-center gap-1.5 uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            {sub.label}
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {sub.items.map((it, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Normal items list */
                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1a365d] mb-2.5">
                        Prestations &amp; points clés :
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.items?.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card footer CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenQuoteModal('Réseaux & Infrastructure IT', `Demande pour : ${service.title}`)}
                    className="w-full py-2.5 bg-slate-50 hover:bg-[#1a365d] hover:text-white text-[#1a365d] font-bold text-xs rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-2 group-hover:border-[#1a365d]"
                  >
                    <span>Demander une étude pour cette prestation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SUBSECTION: INFRASTRUCTURE INFORMATIQUE POUR PME (ARCHITECTURE VISUELLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1a365d] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Offre Dédiée PME &amp; Entreprises
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Infrastructure informatique pour PME
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Nous accompagnons les PME dans la mise en place d’une infrastructure informatique fiable et évolutive : réseau local, Wi-Fi, postes de travail, équipements réseau, accès aux ressources partagées et maintenance technique.
            </p>
          </div>

          {/* Architecture Visual Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Bloc 1: Réseau & Cœur de réseau */}
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-400/30 flex items-center justify-center">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">01. Cœur de réseau &amp; Wi-Fi</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Baie de brassage ordonnée, switches Gigabit/10G managés, routeur pare-feu et points d'accès Wi-Fi sécurisés avec réseau invité indépendant.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-700/60">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span>Switches L2/L3 &amp; segmentation VLAN</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span>Wi-Fi d’entreprise multi-bornes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span>Repérage &amp; brassage RJ45 étiqueté</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bloc 2: Ressources partagées & Stockage */}
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-400/30 flex items-center justify-center">
                  <HardDrive className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">02. Serveurs &amp; Partages</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Serveurs de fichiers, solutions NAS sécurisées, droits d'accès granulaires par service et imprimantes réseau accessibles à tous.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-700/60">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span>Partages réseau &amp; permissions NTFS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span>Sauvegardes automatiques des données</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span>Imprimantes et copieurs centralisés</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bloc 3: Postes & Maintenance continue */}
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-400/30 flex items-center justify-center">
                  <LifeBuoy className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">03. Postes &amp; Assistance</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Configuration homogène des postes de travail collaborateurs, mises à jour, support technique réactif et maintenance préventive régulière.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-700/60">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span>Support utilisateurs rapide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span>Maintenance et nettoyages périodiques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span>Intervention sur site au Maroc ou à distance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-700/80">
            <p className="text-xs text-slate-300">
              Vous créez de nouveaux bureaux ou souhaitez moderniser votre infrastructure actuelle ?
            </p>
            <button
              onClick={() => onOpenQuoteModal('Réseaux & Infrastructure IT', 'Infrastructure PME - Étude sur mesure')}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-md transition-colors shrink-0"
            >
              Demander un devis pour votre PME
            </button>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS USE-CASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            Cas d’Usage &amp; Métiers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight mt-1">
            Des solutions adaptées à votre environnement
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Chaque secteur d'activité présente des contraintes spécifiques d'accès, de sécurité et d'ergonomie réseau.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, idx) => {
            const IconComp = uc.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 space-y-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/80 px-2.5 py-1 rounded-md">
                      {uc.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#1a365d] flex items-center justify-center">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1a365d]">
                    {uc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {uc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  {uc.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. PROCESS SECTION (6 ÉTAPES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            Méthodologie Éprouvée
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight mt-1">
            Notre démarche en 6 étapes structurées
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Un processus rigoureux pour chaque projet d’installation, d’audit ou de refonte réseau.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 space-y-3 shadow-xs hover:border-orange-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-orange-500 tracking-tight font-mono">
                  {step.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-slate-300" />
              </div>
              <h3 className="text-base font-bold text-[#1a365d]">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. POURQUOI CHOISIR INDUSTRIELTECH (AVANTAGES CONCRETS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-100/80 rounded-3xl border border-slate-200/90 p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Gage de Qualité
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight mt-1">
              Pourquoi choisir Industrieltech pour vos réseaux &amp; IT ?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Nous appliquons à vos réseaux informatiques la même rigueur technique et méthode d’ingénierie que celle mise en œuvre sur les chaînes de production industrielle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, rIdx) => {
              const IconR = r.icon;
              return (
                <div key={rIdx} className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 border border-orange-200/60 font-bold">
                    <IconR className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-bold text-[#1a365d] text-sm">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION & PRÊT À COMMENCER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#1a365d] to-[#0f2444] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold border border-orange-400/30">
              <Phone className="w-3.5 h-3.5" />
              <span>Assistance &amp; Diagnostic Réseau au Maroc</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Besoin d’un diagnostic ou d’une installation réseau ?
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Discutez de votre projet avec nos spécialistes : analyse de vos locaux, proposition d’architecture chiffrée et accompagnement personnalisé au Maroc.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenQuoteModal('Réseaux & Infrastructure IT', 'Réseaux & Infrastructure IT - Demande de diagnostic')}
              className="w-full sm:w-auto px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Demander un diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <span>Page de contact</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
