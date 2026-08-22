import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageRoute, CompanyInfo } from '../types';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Wrench, GraduationCap } from 'lucide-react';
import { OFFICIAL_EMAIL } from '../utils/contact';
import { EmailSelectorModal } from './EmailSelectorModal';

interface Props {
  companyInfo: CompanyInfo;
  onOpenSettings?: () => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<Props> = ({
  companyInfo,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const location = useLocation();

  const phoneDisplay = companyInfo.phone || '+212 723033508';
  const emailDisplay = companyInfo.email || OFFICIAL_EMAIL;

  const navItems: { label: string; path: PageRoute }[] = [
    { label: 'Accueil', path: '/' },
    { label: 'Formations', path: '/formations' },
    { label: 'Services', path: '/services' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ];

  const isPathActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top Banner (Contact info) */}
      <div className="bg-[#1a365d] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${phoneDisplay.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 font-medium hover:text-orange-300 transition-colors"
              title="Appeler le numéro de téléphone"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{phoneDisplay}</span>
            </a>

            <button
              onClick={() => setEmailModalOpen(true)}
              className="flex items-center gap-1.5 font-medium text-orange-200 hover:text-white transition-colors"
              title="Envoyer un e-mail professionnel"
            >
              <Mail className="w-3.5 h-3.5 text-orange-400" />
              <span className="truncate max-w-[140px] sm:max-w-none">{emailDisplay}</span>
            </button>

            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{companyInfo.interventionZone}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          aria-label="INDUSTRIELTECH - Automatisme, maintenance et formations industrielles"
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1a365d] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-[#152c4d] transition-colors">
            <div className="relative flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-orange-400 absolute -top-1 -left-1" />
              <Wrench className="w-4 h-4 text-white absolute -bottom-1 -right-1" />
            </div>
          </div>
          <div>
            <span className="block font-extrabold text-[#1a365d] text-base sm:text-lg leading-tight tracking-tight group-hover:text-orange-600 transition-colors">
              {companyInfo.name}
            </span>
            <span className="block text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Automatisme • Maintenance • Formations
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = isPathActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-[#1a365d] bg-orange-50/60 font-bold border-b-2 border-orange-500'
                    : 'text-slate-600 hover:text-[#1a365d] hover:bg-slate-100/80'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-98"
          >
            <span>Demander un devis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#1a365d] hover:bg-slate-100 rounded-lg"
          aria-label="Menu principal"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = isPathActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-orange-50 text-[#1a365d] font-bold border-l-4 border-orange-500'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-orange-500" />}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setEmailModalOpen(true);
              }}
              className="w-full py-2.5 bg-slate-800 text-slate-100 hover:bg-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-orange-400" />
              <span>E-mail : {emailDisplay}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <EmailSelectorModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        targetEmail={emailDisplay}
      />
    </header>
  );
};
