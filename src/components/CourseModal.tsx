import React from 'react';
import { Course } from '../types';
import { X, Clock, Award, ShieldAlert, Cpu, CheckCircle, ArrowRight, UserCheck, Layers, FileText, Sliders } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';

interface Props {
  course: Course | null;
  onClose: () => void;
  onRequestCourse: (courseTitle: string) => void;
}

export const CourseModal: React.FC<Props> = ({ course, onClose, onRequestCourse }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-hidden flex flex-col border border-slate-200">
        {/* Header */}
        <div className="px-6 py-5 bg-[#1a365d] text-white flex items-start justify-between border-b border-slate-800">
          <div className="space-y-1.5 pr-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-300 border border-orange-400/30">
                {course.categoryLabel}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700">
                Niveau : {course.level}
              </span>
            </div>
            <h3 className="text-xl font-bold leading-snug text-white">{course.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body scrollable content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          {/* Course Banner Image */}
          {course.image && (
            <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
              <img
                src={course.image}
                alt={course.imageAlt || course.title}
                width={800}
                height={450}
                loading="eager"
                decoding="async"
                onError={(e) => handleImageError(e)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                <span className="text-xs text-slate-200 font-medium line-clamp-1">
                  {course.imageAlt}
                </span>
              </div>
            </div>
          )}

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-start gap-2.5">
              <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">Durée</span>
                <span className="font-semibold text-[#1a365d]">{course.duration}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Layers className="w-5 h-5 text-[#1a365d] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">Modalités</span>
                <span className="font-semibold text-[#1a365d]">{course.modalities}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Award className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">Tarif</span>
                <span className="font-semibold text-[#1a365d]">{course.price}</span>
              </div>
            </div>
          </div>

          {/* Short Description */}
          <div>
            <h4 className="font-bold text-[#1a365d] text-base mb-1.5 flex items-center gap-2">
              <FileText className="w-4 h-4 text-orange-500" /> Présentation de la formation
            </h4>
            <p className="text-slate-700 leading-relaxed">{course.shortDescription}</p>
          </div>

          {/* Niveau et adaptation pedagogique */}
          {course.levelsInfo && (
            <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-xl space-y-1.5">
              <h4 className="font-bold text-[#1a365d] text-xs flex items-center gap-2 uppercase tracking-wide">
                <Sliders className="w-4 h-4 text-[#1a365d]" /> Niveau et adaptation pédagogique
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">{course.levelsInfo}</p>
            </div>
          )}

          {/* Objectives */}
          <div>
            <h4 className="font-bold text-[#1a365d] text-base mb-2.5 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-500" /> Objectifs pédagogiques
            </h4>
            <ul className="space-y-1.5 pl-1">
              {course.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Modules */}
          <div>
            <h4 className="font-bold text-[#1a365d] text-base mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-500" /> Programme détaillé
            </h4>
            <div className="space-y-3">
              {course.program.map((mod, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#1a365d]">
                    {mod.moduleTitle}
                  </h5>
                  <ul className="space-y-1">
                    {mod.topics.map((tp, tIdx) => (
                      <li key={tIdx} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-slate-400 font-mono">•</span>
                        <span>{tp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Work & Equipment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50/70 border border-orange-200 rounded-xl space-y-1">
              <h5 className="font-bold text-[#1a365d] text-xs flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-orange-500" /> Travaux Pratiques & Pédagogie
              </h5>
              <p className="text-xs text-slate-800 leading-relaxed">{course.practicalWork}</p>
            </div>

            <div className="p-4 bg-slate-100/80 border border-slate-200 rounded-xl space-y-1">
              <h5 className="font-bold text-[#1a365d] text-xs flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#1a365d]" /> Équipements & Logiciels utilisés
              </h5>
              <ul className="text-xs text-slate-800 space-y-1 list-disc list-inside">
                {course.equipmentAndSoftware.map((eq, eIdx) => (
                  <li key={eIdx}>{eq}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Public & Prerequisites */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-200 text-xs">
            <div>
              <span className="font-semibold text-[#1a365d] block mb-1 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-slate-500" /> Public concerné :
              </span>
              <p className="text-slate-600">{course.targetAudience}</p>
            </div>

            <div>
              <span className="font-semibold text-[#1a365d] block mb-1 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-slate-500" /> Prérequis :
              </span>
              <p className="text-slate-600">{course.prerequisites}</p>
            </div>
          </div>

          {/* Certification note */}
          <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl text-xs text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-orange-500 shrink-0" />
            <span><strong>Attestation délivrée :</strong> {course.certification}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Fermer
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestCourse(course.title);
            }}
            className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-lg shadow-md flex items-center gap-2 transition-colors"
          >
            <span>Demander cette formation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
