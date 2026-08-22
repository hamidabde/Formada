import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CompanyInfo } from '../types';
import { COURSES_DATA } from '../data/courses';
import { TECHNICAL_SERVICES } from '../data/services';
import { INDUSTRIAL_TECHNOLOGIES } from '../data/technologies';
import { ArrowRight, CheckCircle2, GraduationCap, Wrench, ShieldCheck, Zap, Cpu, Settings, Award, Users, Activity, FileText, Bot, Layers, Gauge, Network } from 'lucide-react';
import { Um6pLogo, OcpLogo, AzuraLogo, DislogLogo, LicorneLogo } from '../components/PartnerLogos';
import { OptimizedImage } from '../components/OptimizedImage';

const heroImg = '/images/hero-automatisme-industrie.jpg';
const bancImg = '/images/formation-pratique-banc.jpg';
const reparImg = '/images/reparation-carte-electronique.jpg';

interface Props {
  companyInfo: CompanyInfo;
  onOpenQuoteModal: (type?: any, subject?: string) => void;
  onSelectCourse?: (courseId: string) => void;
}

export const HomeView: React.FC<Props> = ({
  companyInfo,
  onOpenQuoteModal,
}) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-16 pb-16">
      {/* 1. BANNIÈRE PRINCIPALE (HERO) */}
      <section className="relative bg-[#1a365d] text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d4a77_1px,transparent_1px),linear-gradient(to_bottom,#2d4a77_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5 text-orange-400" />
                <span>Automatisme, Maintenance &amp; Formation Technique au Maroc</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Formations et solutions techniques pour l’industrie au Maroc
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                INDUSTRIELTECH accompagne les entreprises avec des programmes de formation industrielle, des prestations d’automatisme industriel, de maintenance industrielle, d’électricité industrielle et d’énergie solaire au Maroc.
              </p>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/formations"
                  className="px-6 py-3 bg-white text-[#1a365d] hover:bg-slate-100 font-bold text-sm rounded-lg shadow-lg transition-all flex items-center gap-2 active:scale-98"
                >
                  <GraduationCap className="w-4 h-4 text-[#1a365d]" />
                  <span>Découvrir nos formations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenQuoteModal('Demande de devis')}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-lg shadow-lg transition-all flex items-center gap-2 active:scale-98"
                >
                  <Wrench className="w-4 h-4 text-white" />
                  <span>Demander un devis</span>
                </button>
              </div>

              {/* Key Assurance Badges */}
              <div className="pt-6 border-t border-slate-700/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Pratique sur bancs réels</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Diagnostic &amp; Dépannage multi-marques</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Interventions sur site au Maroc</span>
                </div>
              </div>
            </div>

            {/* Right Column Technical Metrics & Control Console */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-900">
                <OptimizedImage
                  src={heroImg}
                  webpSrc={heroImg}
                  fallbackSrc="/images/hero-automatisme-industrie.jpg"
                  alt="Armoire d'automatisme industriel et variateurs de vitesse pour le contrôle d'équipements de production au Maroc"
                  width={1200}
                  height={675}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-103 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/40 to-transparent pointer-events-none" />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#1a365d]/95 backdrop-blur-md rounded-xl border border-slate-600/60 text-xs text-slate-200 space-y-2 pointer-events-none shadow-lg">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <div className="font-bold text-white flex items-center gap-2">
                      <Activity className="w-4 h-4 text-orange-400 animate-pulse" />
                      <span>Automatisme Industriel &amp; Maintenance</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      MAROC • ON SITE
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Systèmes API Siemens, Schneider, variateurs de vitesse, électricité industrielle et bancs d'essais réels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRÉSENTATION DES ACTIVITÉS (2 BLOCS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight">
            Deux pôles d’expertise au service de votre productivité au Maroc
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Une offre globale associant formation professionnelle industrielle et services industriels de maintenance et réparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bloc 1 — Formations industrielles */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-orange-300 transition-all flex flex-col justify-between group overflow-hidden">
            <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
              <OptimizedImage
                src={bancImg}
                webpSrc={bancImg}
                fallbackSrc="/images/formation-pratique-banc.jpg"
                alt="Formation pratique en automatisme industriel sur banc d'essai et automate programmable PLC au Maroc"
                loading="lazy"
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/90 via-[#1a365d]/30 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="px-3 py-1 bg-orange-500 text-white font-extrabold text-[11px] uppercase tracking-wider rounded-md shadow-sm">
                  Pôle 01 — Formation Industrielle
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white flex items-center gap-2 pointer-events-none">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold">Formation Automatisme, Électricité &amp; Énergie</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Des programmes de formation en automatisme industriel, programmation automate PLC, Siemens TIA Portal, variateurs de vitesse, électricité industrielle et énergie solaire au Maroc.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Programmes pratiques adaptés à vos équipements d'usine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Formations sur site client au Maroc ou en centre technique</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Attestations professionnelles et évaluation continue</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <Link
                  to="/formations"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>Voir le catalogue de formations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bloc 2 — Services techniques */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#1a365d] transition-all flex flex-col justify-between group overflow-hidden">
            <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
              <OptimizedImage
                src={reparImg}
                webpSrc={reparImg}
                fallbackSrc="/images/reparation-carte-electronique.jpg"
                alt="Diagnostic au banc et réparation de carte électronique industrielle et maintenance multi-marques au Maroc"
                loading="lazy"
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/90 via-[#1a365d]/30 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="px-3 py-1 bg-[#1a365d] text-white font-extrabold text-[11px] uppercase tracking-wider rounded-md shadow-sm border border-slate-500/30">
                  Pôle 02 — Services Industriels &amp; Maintenance
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white flex items-center gap-2 pointer-events-none">
                <div className="w-8 h-8 rounded-lg bg-[#1a365d] text-white flex items-center justify-center font-bold shrink-0 border border-slate-500/30">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold">Maintenance Industrielle &amp; Dépannage</h3>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Services industriels complets : diagnostic sur site, dépannage électrique, programmation PLC, maintenance de variateurs de vitesse et réparation de cartes électroniques industrielles au Maroc.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1a365d] shrink-0" />
                    <span>Réparation de cartes électroniques industrielles au composant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1a365d] shrink-0" />
                    <span>Programmation, modification et sauvegarde d'automates PLC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1a365d] shrink-0" />
                    <span>Interventions de dépannage et maintenance sur site au Maroc</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <Link
                  to="/services"
                  className="w-full py-3 bg-[#1a365d] hover:bg-[#152c4d] text-white font-bold text-xs rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>Découvrir nos services industriels</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORMATIONS PRINCIPALES (4 CARTES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Formations Industrielles</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight mt-1">
              Axes majeurs de nos programmes de formation au Maroc
            </h2>
          </div>
          <Link
            to="/formations"
            className="text-xs font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1 self-start md:self-auto"
          >
            <span>Voir toutes les formations ({COURSES_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Automatisme */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-orange-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#1a365d] flex items-center justify-center font-bold">
                <Bot className="w-5 h-5 text-[#1a365d]" />
              </div>
              <h3 className="font-bold text-[#1a365d] text-base">Automatisme industriel</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Formation automatisme : programmation d’automates programmables API/PLC, Siemens TIA Portal, IHM, supervision SCADA et réseaux de terrain.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link
                to="/formations"
                className="w-full py-2.5 bg-slate-50 hover:bg-orange-500 hover:text-white text-[#1a365d] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Voir la formation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Variateurs */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-orange-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#1a365d] flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5 text-[#1a365d]" />
              </div>
              <h3 className="font-bold text-[#1a365d] text-base">Variateurs de vitesse</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Formation variateur de vitesse : fonctionnement, paramétrage, commande moteur, diagnostic et maintenance industrielle.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link
                to="/formations"
                className="w-full py-2.5 bg-slate-50 hover:bg-orange-500 hover:text-white text-[#1a365d] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Voir la formation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Énergie */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-orange-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#1a365d] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5 text-[#1a365d]" />
              </div>
              <h3 className="font-bold text-[#1a365d] text-base">Électricité &amp; Énergie solaire</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Formation électricité industrielle, dimensionnement d'installations photovoltaïques, efficacité énergétique et qualité du réseau.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link
                to="/formations"
                className="w-full py-2.5 bg-slate-50 hover:bg-orange-500 hover:text-white text-[#1a365d] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Voir la formation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: Maintenance */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-orange-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#1a365d] flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5 text-[#1a365d]" />
              </div>
              <h3 className="font-bold text-[#1a365d] text-base">Maintenance industrielle</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Formation maintenance industrielle : diagnostic méthodique de pannes, schémas électriques et contrôle de cartes électroniques.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link
                to="/formations"
                className="w-full py-2.5 bg-slate-50 hover:bg-orange-500 hover:text-white text-[#1a365d] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Voir la formation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PRINCIPAUX (4 SERVICES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1a365d] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Services Industriels au Maroc</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 text-white">
              Prestations techniques en automatisme &amp; maintenance
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Un soutien réactif pour maintenir, réparer et optimiser vos équipements industriels au Maroc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNICAL_SERVICES.map((s) => (
              <div key={s.id} className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700/80 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-orange-400 block uppercase tracking-wider">Prestation</span>
                  <h3 className="font-bold text-white text-base leading-snug">{s.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{s.shortDescription}</p>
                </div>
                <div className="pt-4 border-t border-slate-700/60">
                  <button
                    onClick={() => onOpenQuoteModal('Diagnostic ou dépannage', s.title)}
                    className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Demander une intervention</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POURQUOI NOUS CHOISIR ? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Expertise Industrielle au Maroc</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight mt-1">
                Pourquoi choisir INDUSTRIELTECH ?
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Nous privilégions une approche technique rigoureuse, orientée terrain, pour répondre aux exigences de disponibilité et de rentabilité de votre outil de production.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 border border-orange-200">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-[#1a365d] text-sm">Approche orientée vers la pratique</h4>
                  <p className="text-xs text-slate-600">Manipulations réelles sur bancs d’essai équipés d’automates PLC, de variateurs et de parties opératives industrielles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 border border-orange-200">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-[#1a365d] text-sm">Accompagnement adapté aux besoins industriels</h4>
                  <p className="text-xs text-slate-600">Analyse préalable des schémas électriques et technologies installées pour une réponse parfaitement ciblée.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 border border-orange-200">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-[#1a365d] text-sm">Formations pour techniciens, ingénieurs et entreprises</h4>
                  <p className="text-xs text-slate-600">Du niveau initiation jusqu’à l’expertise avancée en automatisme, maintenance et régulation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 border border-orange-200">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-[#1a365d] text-sm">Intervention directe sur les équipements industriels</h4>
                  <p className="text-xs text-slate-600">Prestations de diagnostic, dépannage, programmation et réparation exécutées avec un outillage spécialisé.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5 border border-orange-200">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-[#1a365d] text-sm">Solutions adaptées à chaque installation</h4>
                  <p className="text-xs text-slate-600">Recherche d’alternatives économiques lors de l’obsolescence de composants ou cartes électroniques complexes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-bold text-[#1a365d] text-lg flex items-center gap-2">
                <Cpu className="w-5 h-5 text-orange-500" /> Technologies &amp; Marques Maîtrisées
              </h3>
              <p className="text-xs text-slate-600">
                Interventions et formations compatibles avec les principaux standards de l’industrie au Maroc :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {INDUSTRIAL_TECHNOLOGIES.map((tech) => (
                  <div key={tech.name} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="font-bold text-[#1a365d] block">{tech.name}</span>
                    <span className="text-[11px] text-slate-600 leading-tight block">{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPEL À L'ACTION (CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1a365d] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-slate-800">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto">
            Vous avez besoin d’une formation ou d’une intervention technique au Maroc ?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Présentez-nous votre besoin en automatisme, maintenance industrielle, variateurs de vitesse ou électricité afin d’obtenir un devis personnalisé.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal('Demande de devis')}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-lg shadow-md transition-colors"
            >
              Demander un devis
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-[#1a365d] hover:bg-slate-100 font-bold text-sm rounded-lg transition-colors shadow-md"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* 7. NOS RÉFÉRENCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-xs">
          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a365d] tracking-tight">
              Nos Références
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              L’excellence de <strong className="text-[#1a365d]">{companyInfo.name}</strong> revient en grande partie aux partenaires de prestige que compte l’entreprise, dont vous trouverez ci-dessous une sélection.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-center pt-2">
            {/* OCP */}
            <div className="p-5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-2xl transition-all duration-200 flex flex-col items-center justify-center h-32 group hover:shadow-sm">
              <div className="w-full flex justify-center items-center h-16 group-hover:scale-105 transition-transform" aria-label="Logo Groupe OCP">
                <OcpLogo className="h-12 max-w-full" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">
                Groupe OCP
              </span>
            </div>

            {/* DISLOG GROUP */}
            <div className="p-5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-2xl transition-all duration-200 flex flex-col items-center justify-center h-32 group hover:shadow-sm">
              <div className="w-full flex justify-center items-center h-16 group-hover:scale-105 transition-transform" aria-label="Logo Dislog Group">
                <DislogLogo className="h-11 max-w-full" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">
                Dislog Group
              </span>
            </div>

            {/* AZURA */}
            <div className="p-5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-2xl transition-all duration-200 flex flex-col items-center justify-center h-32 group hover:shadow-sm">
              <div className="w-full flex justify-center items-center h-16 group-hover:scale-105 transition-transform" aria-label="Logo Azura Group">
                <AzuraLogo className="h-14 max-w-full" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">
                Azura Group
              </span>
            </div>

            {/* UM6P */}
            <div className="p-5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-2xl transition-all duration-200 flex flex-col items-center justify-center h-32 group hover:shadow-sm">
              <div className="w-full flex justify-center items-center h-16 group-hover:scale-105 transition-transform" aria-label="Logo Université Mohammed VI Polytechnique (UM6P)">
                <Um6pLogo className="h-10 max-w-full" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">
                UM6P
              </span>
            </div>

            {/* LICORNE GROUP */}
            <div className="p-5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-2xl transition-all duration-200 flex flex-col items-center justify-center h-32 group hover:shadow-sm">
              <div className="w-full flex justify-center items-center h-16 group-hover:scale-105 transition-transform" aria-label="Logo Licorne Consulting-Training">
                <LicorneLogo className="h-11 max-w-full" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">
                Licorne Group
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  );
}
