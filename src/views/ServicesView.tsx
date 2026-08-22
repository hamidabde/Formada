import React from 'react';
import { TECHNICAL_SERVICES } from '../data/services';
import { TechService } from '../types';
import { Wrench, Cpu, Bot, Settings, CheckCircle2, ArrowRight, ShieldCheck, Zap, PhoneCall } from 'lucide-react';
import { OptimizedImage } from '../components/OptimizedImage';
import imgBanc from '../assets/images/formation-pratique-banc.webp';
import imgDiagnostic from '../assets/images/automated-system-diagnostics.webp';
import imgHero from '../assets/images/hero-automatisme-industrie.webp';
import imgReparation from '../assets/images/reparation-carte-electronique.webp';

interface Props {
  onRequestService: (serviceTitle: string) => void;
}

function getServiceImage(serviceId: string): string {
  switch (serviceId) {
    case 'automatisme':
      return imgBanc;
    case 'diagnostic':
      return imgDiagnostic;
    case 'installation':
      return imgHero;
    case 'reparation':
    default:
      return imgReparation;
  }
}

function getServiceImageAlt(service: TechService): string {
  switch (service.id) {
    case 'reparation':
      return "Diagnostic avancé au banc et réparation de cartes électroniques industrielles au composant au Maroc";
    case 'automatisme':
      return "Programmation, configuration et mise en service d'automates programmables industriels PLC Siemens et Schneider au Maroc";
    case 'diagnostic':
      return "Diagnostic méthodique de pannes, dépannage d'urgence et remise en service de lignes automatisées au Maroc";
    case 'installation':
      return "Installation d'armoires électriques, variateurs de vitesse et intégration de systèmes automatisés au Maroc";
    default:
      return "Prestation de maintenance industrielle et ingénierie d'automatisme au Maroc";
  }
}

export const ServicesView: React.FC<Props> = ({ onRequestService }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Hero Section Services */}
      <div className="bg-[#1a365d] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-semibold">
          <Wrench className="w-3.5 h-3.5" />
          <span>Services en Automatisme &amp; Maintenance Industrielle au Maroc</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Services en Automatisme &amp; Maintenance Industrielle
        </h1>
        <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
          INDUSTRIELTECH délivre des services industriels de pointe au Maroc : programmation automate PLC, diagnostic et dépannage industriel, maintenance de variateurs de vitesse, réparation de cartes électroniques industrielles et maintenance électrique industrielle.
        </p>
      </div>

      {/* Services Grid Breakdown */}
      <div className="space-y-10">
        {TECHNICAL_SERVICES.map((service, index) => {
          const serviceImg = getServiceImage(service.id);

          return (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden transition-all hover:border-orange-300 group"
            >
              {/* Service Header Banner with WebP Image */}
              <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-900">
                <OptimizedImage
                  src={serviceImg}
                  webpSrc={serviceImg}
                  alt={getServiceImageAlt(service)}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/40 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-6 pointer-events-none">
                  <span className="px-3 py-1 bg-orange-500 text-white font-extrabold text-[11px] uppercase tracking-wider rounded-md shadow-sm">
                    Pôle Services Techniques au Maroc
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6 text-white flex items-center gap-3 pointer-events-none">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold shrink-0 shadow-lg">
                    {service.id === 'reparation' && <Cpu className="w-6 h-6" />}
                    {service.id === 'automatisme' && <Bot className="w-6 h-6" />}
                    {service.id === 'diagnostic' && <Wrench className="w-6 h-6" />}
                    {service.id === 'installation' && <Settings className="w-6 h-6" />}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold leading-snug">{service.title}</h2>
                    <p className="text-xs text-slate-200 mt-0.5">{service.shortDescription}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-5">
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{service.fullDescription}</p>

                    {/* Sub-features list */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a365d]">Prestations incluses :</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.subFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                            <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Equipment types + CTA */}
                  <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5 flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a365d] flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-orange-500" /> Équipements concernés :
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {service.equipmentTypes.map((eq, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                            <span>{eq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <button
                        onClick={() => onRequestService(service.title)}
                        className="w-full py-3 bg-[#1a365d] hover:bg-[#152c4d] text-white font-bold text-xs rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 active:scale-98"
                      >
                        <span>Demander une intervention</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Emergency Callout Box */}
      <div className="bg-orange-500 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a365d] text-orange-300 text-xs font-bold">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Assistance Dépannage Industriel d'Urgence</span>
          </div>
          <h3 className="text-2xl font-black tracking-tight">Panne bloquante sur votre ligne de fabrication au Maroc ?</h3>
          <p className="text-white/90 text-xs sm:text-sm max-w-xl">
            Contactez immédiatement nos automaticiens et techniciens de maintenance pour une prise en charge rapide, un diagnostic sur site ou un télé-diagnostic.
          </p>
        </div>

        <button
          onClick={() => onRequestService('Dépannage d’urgence ligne bloquée')}
          className="px-6 py-3.5 bg-[#1a365d] text-white hover:bg-[#152c4d] font-bold text-xs rounded-lg shadow-lg transition-colors shrink-0"
        >
          Demander une prise en charge prioritaire
        </button>
      </div>
    </div>
  );
};
