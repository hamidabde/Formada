import React from 'react';
import { CompanyInfo } from '../types';
import { INDUSTRIAL_TECHNOLOGIES } from '../data/technologies';
import { Building2, ShieldCheck, MapPin, Target, GraduationCap, Wrench, Cpu, CheckCircle2, Award, Zap } from 'lucide-react';

interface Props {
  companyInfo: CompanyInfo;
  onOpenSettings: () => void;
  onOpenQuoteModal: () => void;
}

export const AboutView: React.FC<Props> = ({ companyInfo, onOpenSettings, onOpenQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Hero Banner */}
      <div className="bg-[#1a365d] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-semibold">
          <Building2 className="w-3.5 h-3.5" />
          <span>Ingénierie Industrielle &amp; Formation Technique au Maroc</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          À propos d’{companyInfo.name} | Expertise Industrielle au Maroc
        </h1>
        <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
          {companyInfo.name} est une entreprise marocaine spécialisée en automatisme industriel, maintenance industrielle, électricité industrielle et formation technique industrielle au Maroc.
        </p>

        {/* Region badge */}
        <div className="pt-2 flex items-center gap-3">
          <span className="px-3.5 py-1.5 bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span>Zone d’intervention principale : {companyInfo.region}</span>
          </span>
        </div>
      </div>

      {/* Main Presentation Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Col: Activity & Competences */}
        <div className="lg:col-span-8 space-y-8">
          {/* Section 1: Activité */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-2xl font-bold text-[#1a365d] flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-orange-500" /> L’activité d’{companyInfo.name} au Maroc
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>{companyInfo.name}</strong> réunit une solide expertise en automatisme industriel, maintenance industrielle, programmation automate PLC, variateurs de vitesse et électrotechnique. Notre activité est structurée autour de deux piliers fondamentaux : les programmes de formation technique industrielle sur mesure pour techniciens et ingénieurs, et les interventions d’ingénierie industrielle et de maintenance sur site ou en atelier au Maroc.
            </p>
          </div>

          {/* Section 2: Domaines de compétence & Secteurs */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-2xl font-bold text-[#1a365d] flex items-center gap-2.5">
              <Target className="w-6 h-6 text-orange-500" /> Domaines de compétence &amp; Secteurs d’activité
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Nous accompagnons les usines et entreprises industrielles au Maroc nécessitant un haut niveau de disponibilité et de performance opérationnelle :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-800 pt-2">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Agroalimentaire &amp; Lignes de Conditionnement</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Plasturgie, Chimie, Mines &amp; Pharmacie</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Traitement de l’eau, Pompage &amp; Environnement</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Logistique, Manutention &amp; Convoyage</span>
              </div>
            </div>
          </div>

          {/* Section 3: Approche formation & Diagnostic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50/60 border border-orange-200 rounded-3xl p-6 space-y-3">
              <h3 className="font-bold text-[#1a365d] text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-orange-500" /> Approche de la formation technique
              </h3>
              <p className="text-xs text-slate-800 leading-relaxed">
                Notre démarche pédagogique privilégie la pratique sur bancs réels (Siemens, Schneider, variateurs). Les participants manipulent directement des automates, des interfaces tactiles et des actionneurs, garantissant des compétences opérationnelles immédiates.
              </p>
            </div>

            <div className="bg-slate-100/80 border border-slate-200 rounded-3xl p-6 space-y-3">
              <h3 className="font-bold text-[#1a365d] text-lg flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#1a365d]" /> Approche du diagnostic &amp; maintenance
              </h3>
              <p className="text-xs text-slate-800 leading-relaxed">
                Chaque dysfonctionnement fait l’objet d’un diagnostic méthodique pour identifier la cause racine avant toute intervention. Nous assurons la remise en état durable des équipements pour fiabiliser la production.
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Zone d'intervention & Technologies */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#1a365d] text-white rounded-3xl p-6 border border-slate-800 space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5 text-orange-400" /> Zone géographique d’intervention
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Nos spécialistes et formateurs se déplacent directement dans vos installations :
            </p>

            <div className="p-4 bg-slate-800 border border-slate-700 rounded-xl space-y-1 text-xs">
              <span className="text-slate-400 block font-semibold">Territoire couvert :</span>
              <span className="font-bold text-orange-300 text-sm block">{companyInfo.interventionZone}</span>
              <span className="text-[11px] text-slate-400 block pt-1">
                Atelier &amp; centre technique : {companyInfo.address}
              </span>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-lg shadow-xs transition-colors"
            >
              Demander un devis ou une formation
            </button>
          </div>

          {/* Mastered Technologies & Disclaimers */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <h3 className="font-bold text-[#1a365d] text-base flex items-center gap-2">
              <Cpu className="w-5 h-5 text-orange-500" /> Marques &amp; Standards maîtrisés
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Interventions et formations sur les technologies majeures de l’industrie au Maroc :
            </p>

            <div className="space-y-2 text-xs">
              {INDUSTRIAL_TECHNOLOGIES.slice(0, 6).map((tech) => (
                <div key={tech.name} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                  <span className="font-bold text-[#1a365d]">{tech.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Compatible
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-600 italic border-t border-slate-100 pt-3">
              Note : Les noms de marques cités sont la propriété de leurs détenteurs respectifs. Notre société intervient en qualité de prestataire indépendant d’ingénierie et de formation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
