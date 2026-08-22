import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CompanyInfo } from '../types';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, GraduationCap, Wrench, ShieldCheck, MessageSquare } from 'lucide-react';
import { OFFICIAL_EMAIL } from '../utils/contact';
import { EmailSelectorModal } from './EmailSelectorModal';

interface Props {
  companyInfo: CompanyInfo;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<Props> = ({ companyInfo, onOpenQuoteModal }) => {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const targetEmail = companyInfo.email || OFFICIAL_EMAIL;

  return (
    <>
      <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1: About */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  <div className="relative flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white absolute -top-1 -left-1" />
                    <Wrench className="w-4 h-4 text-slate-900 absolute -bottom-1 -right-1" />
                  </div>
                </div>
                <span className="font-extrabold text-white text-lg tracking-tight hover:text-orange-400 transition-colors">
                  {companyInfo.name}
                </span>
              </Link>

              <p className="text-slate-400 text-xs leading-relaxed">
                Spécialiste en ingénierie industrielle, formations techniques en automatisme, variateurs de vitesse et électrotechnique, ainsi que services de maintenance, réparation et dépannage d’équipements.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-md active:scale-98"
                >
                  <span>Demander une intervention</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Col 2: Navigation rapide */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    › Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/formations"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    › Catalogue des Formations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    › Services & Dépannage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/realisations"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    › Réalisations & Exemples
                  </Link>
                </li>
                <li>
                  <Link
                    to="/a-propos"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    › À propos de l’entreprise
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    › Contact & Devis
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Coordonnées */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Coordonnées</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <a
                    href={`tel:${(companyInfo.phone || '+212 723033508').replace(/\s+/g, '')}`}
                    className="flex items-start gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{companyInfo.phone || '+212 723033508'}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/212723033508`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-emerald-300 transition-colors text-emerald-400 font-semibold"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>WhatsApp Direct (+212 723033508)</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setEmailModalOpen(true)}
                    className="flex items-start gap-2 hover:text-white transition-colors text-left"
                  >
                    <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{targetEmail}</span>
                  </button>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{companyInfo.address}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{companyInfo.openingHours}</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Expertises & Mots-clés SEO */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Domaines d’intervention</h4>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded">
                  formation en automatisme industriel
                </span>
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded">
                  formation variateur de vitesse
                </span>
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded">
                  programmation automate API/PLC
                </span>
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded">
                  réparation de cartes électroniques industrielles
                </span>
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded">
                  dépannage de machines industrielles
                </span>
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded">
                  maintenance industrielle
                </span>
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded">
                  mise en service des équipements industriels
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} {companyInfo.name}. Tous droits réservés.</p>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Site conforme RGPD & Données sécurisées
              </span>
              <Link to="/contact" className="hover:text-white transition-colors">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <EmailSelectorModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        targetEmail={targetEmail}
      />
    </>
  );
};
