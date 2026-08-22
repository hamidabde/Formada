import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/courses';
import { Search, Clock, BookOpen, ArrowRight, Layers, SlidersHorizontal, Award } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';

interface Props {
  onSelectCourse: (course: Course) => void;
  onRequestCourse: (courseTitle: string) => void;
}

export const CoursesView: React.FC<Props> = ({ onSelectCourse, onRequestCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterCategories: { id: string; label: string }[] = [
    { id: 'all', label: 'Toutes les formations' },
    { id: 'automatisme', label: 'Automatisme & Supervision' },
    { id: 'reseaux', label: 'Réseaux & Diagnostic' },
    { id: 'variateurs', label: 'Variateurs de vitesse' },
    { id: 'energie', label: 'Électricité & Énergie solaire' },
    { id: 'maintenance', label: 'Maintenance & Électronique' },
    { id: 'securite', label: 'Sécurité & QHSE' },
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    let matchesCategory = true;
    if (selectedCategory === 'all') {
      matchesCategory = true;
    } else if (selectedCategory === 'automatisme') {
      matchesCategory = ['automatisme', 'supervision', 'scada'].includes(course.category);
    } else if (selectedCategory === 'reseaux') {
      matchesCategory = ['reseaux', 'diagnostic'].includes(course.category);
    } else if (selectedCategory === 'variateurs') {
      matchesCategory = course.category === 'variateurs';
    } else if (selectedCategory === 'energie') {
      matchesCategory = ['solaire', 'electricite', 'efficacite'].includes(course.category);
    } else if (selectedCategory === 'maintenance') {
      matchesCategory = ['maintenance', 'electronique'].includes(course.category);
    } else if (selectedCategory === 'securite') {
      matchesCategory = ['securite', 'qhse'].includes(course.category);
    } else {
      matchesCategory = course.category === selectedCategory;
    }

    const matchesSearch =
      searchQuery.trim() === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.equipmentAndSoftware.some((eq) => eq.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="bg-[#1a365d] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Formations Professionnelles &amp; Techniques au Maroc</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Catalogue des Formations Industrielles
        </h1>
        <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
          Découvrez nos programmes de formation professionnelle continue au Maroc : automatisme industriel, IHM, supervision SCADA, réseaux de communication, diagnostic de production, variateurs de vitesse, énergie solaire photovoltaïque, électricité industrielle BT, efficacité énergétique ISO 50001, maintenance industrielle, cartes électroniques, habilitation électrique et QHSE.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une formation (ex: PLC, TIA Portal, HMI, SCADA, PROFINET, Variateur, Photovoltaïque, ISO 50001...)"
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Result counter */}
          <div className="text-xs font-semibold text-slate-600 self-center">
            {filteredCourses.length} formation{filteredCourses.length > 1 ? 's' : ''} disponible{filteredCourses.length > 1 ? 's' : ''}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid (13 distinct courses) */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <p className="text-slate-600 font-medium text-base">Aucune formation ne correspond à vos critères de recherche.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <article
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-orange-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Course Card Top Image Header */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={course.image}
                    alt={course.imageAlt || course.title}
                    width={800}
                    height={450}
                    loading={index < 3 ? undefined : 'lazy'}
                    decoding="async"
                    onError={(e) => handleImageError(e)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/25 to-transparent pointer-events-none" />

                  {/* Visual Category Badge and Level Pill */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 bg-orange-500 text-white rounded-md text-[10.5px] font-bold tracking-wide uppercase shadow-xs">
                      {course.categoryLabel}
                    </span>
                    <span className="text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                      {course.level.includes('—') ? course.level.split('—')[0].trim() : course.level}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h2 className="text-base font-bold text-[#1a365d] leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
                    {course.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {course.shortDescription}
                  </p>

                  {/* Info Pills */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Durée : <strong className="text-[#1a365d]">{course.duration}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#1a365d] shrink-0" />
                      <span className="truncate">{course.modalities}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#1a365d] hover:bg-slate-200/60 rounded-lg transition-colors"
                >
                  Détails &amp; Programme
                </button>

                <button
                  onClick={() => onRequestCourse(course.title)}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-lg shadow-xs transition-colors flex items-center gap-1.5 active:scale-95"
                >
                  <span>Demander</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pedagogical Adaptation Note Banner */}
      <div className="bg-gradient-to-r from-slate-50 to-orange-50/50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Niveau et adaptation pédagogique sur mesure</span>
          </div>
          <h3 className="text-lg font-bold text-[#1a365d]">Formations adaptées aux besoins spécifiques de votre entreprise</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Chaque module peut être dispensé aux niveaux initiation, intermédiaire, avancé ou expert. Les travaux pratiques, études de cas et matériels mis à disposition sont configurés en fonction du profil de vos équipes et de vos équipements industriels au Maroc.
          </p>
        </div>

        <button
          onClick={() => onRequestCourse('Demande de programme sur mesure')}
          className="px-5 py-3 bg-[#1a365d] hover:bg-[#152c4d] text-white font-bold text-xs rounded-lg shadow-sm transition-colors shrink-0 flex items-center gap-2"
        >
          <span>Concevoir un programme sur mesure</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
