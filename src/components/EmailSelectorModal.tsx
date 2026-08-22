import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, Check, Copy, ExternalLink } from 'lucide-react';
import { ContactFormData } from '../types';
import { OFFICIAL_EMAIL, buildGmailLink, buildOutlookLink, buildMailtoLink } from '../utils/contact';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  formData?: Partial<ContactFormData>;
  targetEmail?: string;
}

export const EmailSelectorModal: React.FC<Props> = ({
  isOpen,
  onClose,
  formData = {},
  targetEmail = OFFICIAL_EMAIL,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const emailToUse = targetEmail || OFFICIAL_EMAIL;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailToUse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gmailUrl = buildGmailLink(formData, emailToUse);
  const outlookUrl = buildOutlookLink(formData, emailToUse);
  const mailtoUrl = buildMailtoLink(formData, emailToUse);

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fadeIn cursor-pointer"
      title="Cliquer ici pour fermer"
    >
      {/* Modal Container - Fixed height-free compact panel where all items fit without scrolling */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-sm sm:max-w-md w-full p-4 sm:p-5 border border-slate-200 shadow-2xl relative cursor-default space-y-3"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-slate-900 leading-tight">Choix de la Messagerie</h3>
              <p className="text-[11px] font-mono font-semibold text-orange-600 truncate">{emailToUse}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons List - All 100% visible at a single glance without scrollbar */}
        <div className="grid grid-cols-1 gap-2 pt-1">
          {/* 1. Gmail Web */}
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2.5 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-xs shadow-xs shrink-0">
                M
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-900 block group-hover:text-red-700 transition-colors">
                  Gmail Web (Google)
                </span>
                <span className="text-[10px] text-slate-500 block">Ouvrir directement dans votre navigateur</span>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-red-600 shrink-0" />
          </a>

          {/* 2. Outlook Web */}
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs shrink-0">
                O
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-900 block group-hover:text-blue-700 transition-colors">
                  Outlook / Hotmail Web
                </span>
                <span className="text-[10px] text-slate-500 block">Ouvrir dans Microsoft Outlook Web</span>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          </a>

          {/* 3. Local Mail Client */}
          <a
            href={mailtoUrl}
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#1a365d] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-900 block group-hover:text-[#1a365d] transition-colors">
                  Client E-mail local (Mailto)
                </span>
                <span className="text-[10px] text-slate-500 block">Apple Mail, Outlook App, Thunderbird...</span>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </a>

          {/* 4. Copy Email Address */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`w-full flex items-center justify-between px-3 py-2.5 border rounded-xl transition-all ${
              copied
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                  copied ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </div>
              <div className="text-left">
                <span className="text-xs font-bold block">{copied ? 'Adresse copiée !' : 'Copier l’adresse E-mail'}</span>
                <span className="text-[10px] text-slate-500 block">Pour coller dans n’importe quelle messagerie</span>
              </div>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                copied ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {copied ? 'Copié' : 'Copier'}
            </span>
          </button>
        </div>

        {/* Footer info & Close button */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

