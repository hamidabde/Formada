import React from 'react';
import { Link } from 'react-router-dom';
import { ProgrammaticPage } from '../../types/programmatic';
import { getProgrammaticPageUrl, getRelatedPages } from '../../data/programmatic';
import { 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Cpu, 
  HelpCircle, 
  ArrowRight, 
  AlertCircle, 
  FileText,
  MapPin,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface Props {
  page: ProgrammaticPage;
  onOpenQuoteModal: (type?: any, subject?: string) => void;
}

export const FormationTemplateView: React.FC<Props> = ({ page, onOpenQuoteModal }) => {
  const data = page.formationData;
  const relatedPages = getRelatedPages(page.relatedSlugs);

  return (
    <article className="py-10 lg:py-14 bg-slate-50 min-h-screen text-slate-800">
      {/* Breadcrumbs */}
      <nav aria-label="Fil d'Ariane" className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 text-xs text-slate-500">
        <ol className="flex items-center flex-wrap gap-1.5">
          <li>
            <Link to="/" className="hover:text-blue-900 transition-colors">Accueil</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
          <li>
            <Link to="/formations" className="hover:text-blue-900 transition-colors">Formations</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
          <li className="font-semibold text-slate-800 truncate max-w-[280px] sm:max-w-md">{page.h1}</li>
        </ol>
      </nav>

      {/* Draft Notification Banner if status is draft */}
      {page.status === 'draft' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl shadow-xs">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-amber-900 text-sm">Fiche technique en préparation (Brouillon)</h2>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  {page.draftReason || "Cette offre est actuellement en cours de consolidation technique avant son ouverture publique."}
                </p>
                {page.missingRequirements && page.missingRequirements.length > 0 && (
                  <div className="mt-3">
                    <span className="text-xs font-semibold text-amber-900">Points en cours de validation :</span>
                    <ul className="list-disc list-inside text-xs text-amber-800 mt-1 space-y-0.5">
                      {page.missingRequirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs border border-slate-200">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200">
              <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
              {page.badgeText}
            </span>
            {page.location && (
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                <MapPin className="w-3 h-3 text-orange-500" />
                Maroc (Casablanca & Intra-entreprises)
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a365d] tracking-tight mb-6 leading-tight">
            {page.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mb-8">
            {page.introduction}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => onOpenQuoteModal(page.cta.prefilledType, page.cta.prefilledSubject)}
              className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-98"
            >
              <span>{page.cta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-500 font-medium">
              {page.cta.subtext}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
        {/* Left Column: Pedagogical Details (2 cols on lg) */}
        <div className="lg:col-span-2 space-y-10">
          {/* Public & Prérequis */}
          {data && (
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-[#1a365d] mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-500" />
                Public Cible & Prérequis
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Public concerné
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {data.audience.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Prérequis recommandés
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {data.prerequisites.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Compétences visées */}
          {data && data.skillsAquired && (
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-[#1a365d] mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Compétences Pratiques Visées
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                {data.skillsAquired.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Programme détaillé par modules */}
          {data && data.programModules && (
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-[#1a365d] mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Programme de Formation Réellement Proposé
              </h2>

              <div className="space-y-6">
                {data.programModules.map((module, mIdx) => (
                  <div key={mIdx} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="font-bold text-[#1a365d] text-base">
                        {module.title}
                      </h3>
                      {module.durationEstimate && (
                        <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-600 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-orange-500" />
                          {module.durationEstimate}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {module.topics.map((t, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Sections spécifiques d'expertise */}
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

          {/* FAQ Propre */}
          {page.faq.length > 0 && (
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-[#1a365d] mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                Questions Fréquentes sur cette Formation
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
        </div>

        {/* Right Sidebar: Hardware, Modalities & Linking (1 col on lg) */}
        <aside className="space-y-6">
          {/* Confirmed Hardware & Software */}
          {data && data.confirmedHardwareAndSoftware && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-[#1a365d] mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-orange-500" />
                Matériel & Logiciels Confirmés
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {data.confirmedHardwareAndSoftware.map((hw, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hw}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Modalities & Certification */}
          {data && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 text-xs sm:text-sm text-slate-600">
              <div>
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-xs mb-1">
                  Modalités d'apprentissage
                </h4>
                <p className="leading-relaxed">{data.pedagogicalModalities}</p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-xs mb-1">
                  Évaluation & Attestation
                </h4>
                <p className="leading-relaxed">{data.certificationNote}</p>
              </div>
            </div>
          )}

          {/* Quick CTA Box */}
          <div className="bg-gradient-to-br from-[#1a365d] to-[#0f2340] rounded-2xl p-6 text-white shadow-md">
            <h3 className="text-base font-bold mb-2">Besoin d'un devis pour votre équipe ?</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              Recevez sous 24h ouvrées le programme détaillé avec tarifs et prochaines dates de session.
            </p>
            <button
              onClick={() => onOpenQuoteModal(page.cta.prefilledType, page.cta.prefilledSubject)}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{page.cta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Contextual Internal Links (Maillage interne) */}
          {relatedPages.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">
                Pages & Sujets Associés
              </h3>
              <ul className="space-y-3">
                {relatedPages.map((rel, rIdx) => (
                  <li key={rIdx}>
                    <Link
                      to={getProgrammaticPageUrl(rel)}
                      className="group block text-xs sm:text-sm font-semibold text-[#1a365d] hover:text-orange-600 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="text-orange-500">›</span>
                        <span className="group-hover:underline">{rel.h1}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Editorial info & Verification note */}
          <div className="p-4 bg-slate-100 rounded-xl text-[11px] text-slate-500 space-y-1">
            <div className="font-semibold text-slate-600">Source technique & vérification métier :</div>
            <div>{page.sourcesOrBusinessInfo}</div>
            <div className="text-slate-400 pt-1">Mis à jour le {page.updatedAt}</div>
          </div>
        </aside>
      </main>
    </article>
  );
};
