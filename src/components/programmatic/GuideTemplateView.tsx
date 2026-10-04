import React from 'react';
import { Link } from 'react-router-dom';
import { ProgrammaticPage } from '../../types/programmatic';
import { getProgrammaticPageUrl, getRelatedPages } from '../../data/programmatic';
import { 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  ListChecks, 
  ShieldCheck, 
  ShieldAlert, 
  ChevronRight,
  Info,
  Wrench,
  GraduationCap
} from 'lucide-react';

interface Props {
  page: ProgrammaticPage;
  onOpenQuoteModal: (type?: any, subject?: string) => void;
}

export const GuideTemplateView: React.FC<Props> = ({ page, onOpenQuoteModal }) => {
  const data = page.guideData;
  const relatedPages = getRelatedPages(page.relatedSlugs);

  return (
    <article className="py-10 lg:py-14 bg-slate-50 min-h-screen text-slate-800">
      {/* Breadcrumbs */}
      <nav aria-label="Fil d'Ariane" className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 text-xs text-slate-500">
        <ol className="flex items-center flex-wrap gap-1.5">
          <li>
            <Link to="/" className="hover:text-blue-900 transition-colors">Accueil</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
          <li>
            <Link to="/guides" className="hover:text-blue-900 transition-colors">Guides Techniques</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
          <li className="font-semibold text-slate-800 truncate max-w-[280px] sm:max-w-md">{page.h1}</li>
        </ol>
      </nav>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Article Header */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-200">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
              <BookOpen className="w-3.5 h-3.5 text-blue-700" />
              {page.badgeText}
            </span>
            <span className="text-xs text-slate-500">
              Publié par INDUSTRIELTECH • Mis à jour le {page.updatedAt}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a365d] tracking-tight mb-6 leading-tight">
            {page.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            {page.introduction}
          </p>

          {/* Direct Quick Answer Callout */}
          {data && data.quickAnswer && (
            <div className="bg-blue-50/80 border-l-4 border-blue-600 p-5 rounded-r-2xl mt-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                    En résumé (Réponse directe)
                  </h2>
                  <p className="text-sm text-blue-950 font-medium leading-relaxed">
                    {data.quickAnswer}
                  </p>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Preparation Checklist */}
        {data && data.preparationChecklist && data.preparationChecklist.length > 0 && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h2 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-emerald-600" />
              Checklist de Préparation & Recommandations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Vérifiez ces points clés pour structurer votre démarche :
            </p>
            <ul className="space-y-3">
              {data.preparationChecklist.map((check, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technical Steps / Methodological Analysis */}
        {data && data.technicalSteps && data.technicalSteps.length > 0 && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-[#1a365d] mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              Étapes d'Analyse Méthodique
            </h2>

            <div className="space-y-6">
              {data.technicalSteps.map((step) => (
                <div key={step.stepNumber} className="border border-slate-200 rounded-xl p-5 bg-slate-50/40">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#1a365d] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {step.stepNumber}
                    </span>
                    <h3 className="text-base font-bold text-[#1a365d]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                    {step.explanation}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Modular Editorial Sections */}
        {page.sections.map((sec, sIdx) => (
          <section key={sIdx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h2 className="text-xl font-bold text-[#1a365d] mb-4">
              {sec.title}
            </h2>
            {sec.content && (
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {sec.content}
              </p>
            )}
          </section>
        ))}

        {/* Professional Boundaries & Safety Warnings */}
        {data && data.professionalBoundaries && data.professionalBoundaries.length > 0 && (
          <section className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-3">
                <h2 className="text-base font-bold text-amber-950">
                  Limites d'intervention & Sécurité Industrielle
                </h2>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Certaines manipulations nécessitent des habilitations électriques spécifiques et des bancs de mesure protégés :
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-amber-900">
                  {data.professionalBoundaries.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Spécifique */}
        {page.faq.length > 0 && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h2 className="text-xl font-bold text-[#1a365d] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-500" />
              Questions Fréquentes
            </h2>

            <div className="space-y-4">
              {page.faq.map((item, fIdx) => (
                <div key={fIdx} className="border border-slate-200 rounded-xl p-4 sm:p-5">
                  <h3 className="font-bold text-[#1a365d] text-sm sm:text-base mb-2">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contextual Links to Services and Formations */}
        {relatedPages.length > 0 && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h2 className="text-lg font-bold text-[#1a365d] mb-4">
              Services & Formations Associés chez INDUSTRIELTECH
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPages.map((rel, rIdx) => (
                <Link
                  key={rIdx}
                  to={getProgrammaticPageUrl(rel)}
                  className="p-4 rounded-xl border border-slate-200 hover:border-orange-300 hover:bg-orange-50/30 transition-all group block"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 mb-1">
                    {rel.type === 'service' ? <Wrench className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                    <span className="uppercase tracking-wider">{rel.type === 'service' ? 'Service Spécialisé' : 'Formation Pro'}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#1a365d] group-hover:text-orange-600 transition-colors">
                    {rel.h1}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {rel.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA Box */}
        <section className="bg-gradient-to-br from-[#1a365d] to-[#0f2340] rounded-3xl p-6 sm:p-10 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold">
              Besoin d'un accompagnement technique sur ce sujet ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Nos ingénieurs et techniciens interviennent sur l'ensemble du Maroc pour vos diagnostics, réparations et formations.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal(page.cta.prefilledType, page.cta.prefilledSubject)}
            className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <span>{page.cta.label}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

        {/* Verification Info */}
        <div className="text-center text-xs text-slate-500 pt-4">
          <p>Guide rédigé selon les standards industriels et constructeurs • {page.sourcesOrBusinessInfo}</p>
        </div>
      </div>
    </article>
  );
};
