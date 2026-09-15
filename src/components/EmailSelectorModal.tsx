import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, Copy, Check } from 'lucide-react';
import { ContactFormData } from '../types';
import { OFFICIAL_EMAIL, buildMailtoLink } from '../utils/contact';

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
  const copyTimeoutRef = useRef<number | null>(null);

  // Normalize email to clean lowercase address
  const cleanEmail = (targetEmail || OFFICIAL_EMAIL).toLowerCase();

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
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setCopied(false);
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const mailtoUrl = buildMailtoLink(formData, cleanEmail);

  const handleCopyEmail = async () => {
    let succeeded = false;
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(cleanEmail);
        succeeded = true;
      } catch {
        // Fallback below
      }
    }

    if (!succeeded) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = cleanEmail;
        textArea.style.position = 'fixed';
        textArea.style.top = '-9999px';
        textArea.style.left = '-9999px';
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        succeeded = true;
      } catch (err) {
        console.error('Erreur lors de la copie de l’adresse e-mail:', err);
      }
    }

    setCopied(true);
    if (copyTimeoutRef.current) {
      window.clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return createPortal(
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs transition-opacity duration-200"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-modal-title"
        aria-describedby="email-modal-subtitle"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-sm w-full p-5 sm:p-6 border border-slate-200 shadow-2xl relative transition-all duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
          className="absolute top-3.5 right-3.5 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title & Subtitle */}
        <div className="text-center pr-6 pl-2 pb-5 pt-1">
          <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
            <Mail className="w-5 h-5 text-orange-500" />
          </div>
          <h3 id="email-modal-title" className="text-base font-bold text-[#1a365d] leading-snug">
            Nous contacter par e-mail
          </h3>
          <p
            id="email-modal-subtitle"
            className="text-xs sm:text-sm font-semibold font-mono text-orange-600 mt-1 select-all"
          >
            {cleanEmail}
          </p>
        </div>

        {/* 2 Options */}
        <div className="space-y-2.5">
          {/* Button 1: Ouvrir ma messagerie */}
          <a
            href={mailtoUrl}
            onClick={onClose}
            className="w-full flex items-center justify-between p-3 sm:p-3.5 bg-slate-50 hover:bg-orange-50/60 border border-slate-200 hover:border-orange-300 rounded-xl transition-all group focus:outline-none focus:ring-2 focus:ring-orange-500 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1a365d] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-orange-500 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block group-hover:text-[#1a365d] transition-colors">
                  Ouvrir ma messagerie
                </span>
                <span className="text-[11px] text-slate-500 block">
                  Utiliser votre application e-mail
                </span>
              </div>
            </div>
          </a>

          {/* Button 2: Copier l’adresse e-mail */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`w-full flex items-center justify-between p-3 sm:p-3.5 border rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 text-left ${
              copied
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 shadow-xs transition-colors ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-700'
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </div>
              <div>
                <span className={`text-xs sm:text-sm font-bold block ${copied ? 'text-emerald-800' : 'text-slate-900'}`}>
                  {copied ? 'Adresse copiée ✓' : 'Copier l’adresse e-mail'}
                </span>
                <span className={`text-[11px] block ${copied ? 'text-emerald-600' : 'text-slate-500'}`}>
                  {copied ? 'Prête à coller dans vos messages' : 'Copier dans le presse-papiers'}
                </span>
              </div>
            </div>
            {copied && (
              <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md border border-emerald-200">
                Copié
              </span>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

