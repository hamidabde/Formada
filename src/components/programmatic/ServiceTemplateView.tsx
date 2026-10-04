import React from 'react';
import { Link } from 'react-router-dom';
import { ProgrammaticPage } from '../../types/programmatic';
import { getProgrammaticPageUrl, getRelatedPages } from '../../data/programmatic';
import { 
  Wrench, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  FileCheck2, 
  Camera, 
  Truck, 
  ChevronRight,
  ShieldAlert,
  MapPin,
  Clock
} from 'lucide-react';

interface Props {
  page: ProgrammaticPage;
  onOpenQuoteModal: (type?: any, subject?: string) => void;
}

export const ServiceTemplateView: React.FC<Props> = ({ page, onOpenQuoteModal }) => {
  const data = page.serviceData;
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
            <Link to="/services" className="hover:text-blue-900 transition-colors">Services</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
          <li className="font-semibold text-slate-800 truncate max-w-[280px] sm:max-w-md">{page.h1}</li>
        </ol>
      </nav>

      {/* Draft Notification Banner */}
      {page.status === 'draft' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl shadow-xs">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-amber-900 text-sm">Prestation technique en cours de cadrage (Brouillon)</h2>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  {page.draftReason || "Cette prestation spécialisée nécessite une confirmation préalable de nos moyens techniques d’atelier."}
                </p>
                {page.missingRequirements && page.missingRequirements.length > 0 && (
                  <div className="mt-3">
                    <span className="text-xs font-semibold text-amber-900">Points à valider :</span>
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-800 border border-orange-200">
              <Wrench className="w-3.5 h-3.5 text-orange-600" />
              {page.badgeText}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              <MapPin className="w-3 h-3 text-orange-500" />
              Maroc (Atelier Casablanca & Sur site)
            </span>
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
        {/* Left Column: Technical Details (2 cols on lg) */}
        <div className="lg:col-span-2 space-y-10">
          {/* Équipements ciblés & Situations justifiant un diagnostic */}
          {data && (
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-[#1a365d] mb-6 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-orange-500" />
                Équipements Concernés & Symptômes
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Modèles & Matériels pris en charge
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {data.targetedEquipments.map((eq, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Signes justifiant une intervention
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {data.triggerSituations.map((sit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{sit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Périmètre confirmé de la prestation */}
          {data && data.confirmedScope && (
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-[#1a365d] mb-6 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-emerald-600" />
                Périmètre Confirmé de la Prestation
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                {data.confirmedScope.map((scope, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="font-medium">{scope}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Informations indispensables à fournir */}
          {data && data.requiredCustomerInfo && (
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-blue-600" />
                Informations à Préparer pour un Diagnostic Efficace
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Afin d’obtenir une réponse technique rapide et précise, merci de rassembler ces éléments avant d’envoyer votre demande :
              </p>

              <div className="space-y-4">
                {data.requiredCustomerInfo.map((info, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/50">
                    <h3 className="font-bold text-[#1a365d] text-sm mb-1">
                      {info.item}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Sections spécifiques */}
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
        </div>

        {/* Right Sidebar: Modalities, Turnaround & Links */}
        <aside className="space-y-6">
          {/* Prise en charge & Délais */}
          {data && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#1a365d] mb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-orange-500" />
                Modalités de Prise en Charge
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {data.serviceModalities.map((mod, mIdx) => (
                  <li key={mIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
              {data.turnaroundNote && (
                <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{data.turnaroundNote}</span>
                </div>
              )}
            </div>
          )}

          {/* Direct CTA Box */}
          <div className="bg-gradient-to-br from-[#1a365d] to-[#0f2340] rounded-2xl p-6 text-white shadow-md">
            <h3 className="text-base font-bold mb-2">Votre équipement est en panne ?</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              Contactez directement notre atelier à Casablanca pour obtenir un devis de diagnostic sans engagement.
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
                Guides & Services Associés
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

          {/* Technical verification info */}
          <div className="p-4 bg-slate-100 rounded-xl text-[11px] text-slate-500 space-y-1">
            <div className="font-semibold text-slate-600">Périmètre technique & sources :</div>
            <div>{page.sourcesOrBusinessInfo}</div>
            <div className="text-slate-400 pt-1">Mis à jour le {page.updatedAt}</div>
          </div>
        </aside>
      </main>
    </article>
  );
};
