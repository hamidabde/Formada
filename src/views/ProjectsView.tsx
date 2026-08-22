import React, { useState } from 'react';
import { REALIZATIONS_DATA } from '../data/projects';
import { Wrench, CheckCircle2, ShieldCheck, Tag, ArrowRight, Building2, Info, Image as ImageIcon } from 'lucide-react';

interface Props {
  onOpenQuoteModal: (type?: any, subject?: string) => void;
}

export const ProjectsView: React.FC<Props> = ({ onOpenQuoteModal }) => {
  const [selectedSector, setSelectedSector] = useState<string>('Tous');

  const sectors = ['Tous', 'Traitement de l’eau & Environnement', 'Agroalimentaire', 'Plasturgie & Transformation des matériaux', 'Logistique & Manutention'];

  const filteredProjects = selectedSector === 'Tous'
    ? REALIZATIONS_DATA
    : REALIZATIONS_DATA.filter((p) => p.sector === selectedSector);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="bg-[#1a365d] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-semibold">
          <Wrench className="w-3.5 h-3.5" />
          <span>Réalisations &amp; Projets en Automatisme et Maintenance au Maroc</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Réalisations en Automatisme &amp; Maintenance Industrielle
        </h1>
        <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
          Découvrez nos réalisations en automatisme industriel, maintenance industrielle, électricité, variateurs de vitesse et formation technique au Maroc : des projets concrets d'automatisation et de dépannage d'équipements de production.
        </p>

        <div className="p-3 bg-slate-800/80 border border-slate-700/80 rounded-xl text-xs text-slate-300 flex items-center gap-2 max-w-2xl">
          <Info className="w-4 h-4 text-orange-400 shrink-0" />
          <span>
            <strong>Note de transparence :</strong> Conformément aux exigences de rigueur, ces fiches constituent des modèles d’interventions représentatifs de notre savoir-faire au Maroc. Aucune donnée client confidentielle n'est divulguée.
          </span>
        </div>
      </div>

      {/* Sector Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span className="text-xs font-bold text-slate-500 mr-2 shrink-0">Filtrer par secteur :</span>
        {sectors.map((sec) => (
          <button
            key={sec}
            onClick={() => setSelectedSector(sec)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
              selectedSector === sec
                ? 'bg-orange-500 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {sec}
          </button>
        ))}
      </div>

      {/* Projects Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:border-orange-300 transition-all p-6 sm:p-8 space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="px-3 py-1 bg-orange-50 text-orange-800 border border-orange-200 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-orange-500" />
                  {project.sector}
                </span>
                <span className="text-[11px] font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                  Exemple modèle
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#1a365d] leading-snug">{project.title}</h2>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                <span className="font-bold text-[#1a365d] block">Type d’équipement :</span>
                <p className="text-slate-800 font-medium">{project.equipmentType}</p>
              </div>

              {/* Problem statement */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider block">Problème rencontré :</span>
                <p className="text-xs text-slate-700 leading-relaxed bg-red-50/50 p-3 rounded-lg border border-red-100">
                  {project.problem}
                </p>
              </div>

              {/* Diagnosis */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#1a365d] uppercase tracking-wider block">Diagnostic réalisé :</span>
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                  {project.diagnosis}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#1a365d] uppercase tracking-wider block">Solution mise en œuvre :</span>
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                  {project.solution}
                </p>
              </div>

              {/* Result */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Résultat obtenu :
                </span>
                <p className="text-xs text-emerald-900 font-medium leading-relaxed bg-emerald-50/80 p-3 rounded-lg border border-emerald-200">
                  {project.result}
                </p>
              </div>

              {/* Photos Placeholder Box */}
              {project.hasPhotosPlaceholder && (
                <div className="p-3 border border-dashed border-slate-300 rounded-xl bg-slate-50/50 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-slate-400" /> Photographies Avant / Après d’intervention
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">[Emplacement visuels]</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenQuoteModal('Diagnostic ou dépannage', project.title)}
                className="w-full py-2.5 bg-[#1a365d] hover:bg-[#152c4d] text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>S’inspirer pour votre installation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
