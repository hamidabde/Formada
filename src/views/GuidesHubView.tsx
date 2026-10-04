import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GUIDE_PAGES } from '../data/programmatic/guides';
import { getProgrammaticPageUrl } from '../data/programmatic';
import { BookOpen, Search, ArrowRight, ShieldCheck, ChevronRight, HelpCircle } from 'lucide-react';

interface Props {
  onOpenQuoteModal: (type?: any, subject?: string) => void;
}

export const GuidesHubView: React.FC<Props> = ({ onOpenQuoteModal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGuides = GUIDE_PAGES.filter((guide) => {
    const q = searchTerm.toLowerCase();
    return (
      guide.h1.toLowerCase().includes(q) ||
      guide.description.toLowerCase().includes(q) ||
      guide.primaryKeyword.toLowerCase().includes(q) ||
      guide.badgeText.toLowerCase().includes(q)
    );
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen text-slate-800">
      {/* Breadcrumbs */}
      <nav aria-label="Fil d'Ariane" className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 text-xs text-slate-500">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link to="/" className="hover:text-blue-900 transition-colors">Accueil</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
          <li className="font-semibold text-slate-800">Guides Techniques</li>
        </ol>
      </nav>

      {/* Header Banner */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            Centre de Ressources Techniques • INDUSTRIELTECH
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1a365d] tracking-tight mb-4">
            Guides Pratiques & Diagnostic Industriel au Maroc
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
            Retrouvez nos fiches pratiques et guides méthodologiques pour diagnostiquer les pannes de variateurs, automates PLC, cartes électroniques et réseaux informatiques sans manipulation à risque.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher un guide (ex: variateur, automate en STOP, Wi-Fi, S7-1200)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner"
            />
          </div>
        </div>
      </header>

      {/* Guides Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <Link
              key={guide.slug}
              to={getProgrammaticPageUrl(guide)}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {guide.badgeText}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {guide.updatedAt}
                  </span>
                </div>
                <h2 className="font-bold text-[#1a365d] text-base group-hover:text-orange-600 transition-colors mb-2 leading-snug">
                  {guide.h1}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {guide.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600">
                <span>Lire le guide complet</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-semibold text-slate-700">Aucun guide ne correspond à votre recherche "{searchTerm}".</p>
            <p className="text-xs text-slate-500 mt-1">Essayez un autre mot-clé ou parcourez nos 10 guides techniques.</p>
          </div>
        )}
      </main>

      {/* Assistance CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#1a365d] to-[#0f2340] rounded-3xl p-8 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              Une panne complexe sur votre site industriel ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Nos ingénieurs et techniciens interviennent sur l'ensemble du territoire marocain pour diagnostiquer et dépanner vos équipements.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Diagnostic ou dépannage', 'Demande de diagnostic / assistance')}
            className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <span>Demander une assistance</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
