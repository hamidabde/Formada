import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { CompanyInfo } from '../types';
import { buildWhatsAppLink, OFFICIAL_EMAIL } from '../utils/contact';
import { EmailSelectorModal } from './EmailSelectorModal';

interface Props {
  companyInfo: CompanyInfo;
  onOpenQuoteModal: (type?: any, subject?: string) => void;
}

export const WhatsAppWidget: React.FC<Props> = ({ companyInfo, onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  const handleSendQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const link = buildWhatsAppLink(
      {
        requestType: 'Demande de devis',
        description: quickMessage || 'Bonjour, je souhaite plus d’informations sur vos formations et prestations techniques.',
      },
      companyInfo.whatsapp || '+212 723033508'
    );
    window.open(link, '_blank');
    setIsOpen(false);
    setQuickMessage('');
  };

  const handleOpenQuickEmail = () => {
    setEmailModalOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {/* Popover Card */}
        {isOpen && (
          <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="bg-[#1a365d] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-snug">Contact Direct WhatsApp</h4>
                  <p className="text-[11px] text-emerald-300 flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {companyInfo.whatsapp || '+212 723033508'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3 bg-slate-50 text-slate-800 text-xs">
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-3 rounded-xl space-y-1">
                <span className="font-bold block flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Support & Devis Express
                </span>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  Posez directement votre question sur WhatsApp à nos ingénieurs.
                </p>
              </div>

              <form onSubmit={handleSendQuickWhatsApp} className="space-y-3">
                <textarea
                  rows={3}
                  value={quickMessage}
                  onChange={(e) => setQuickMessage(e.target.value)}
                  placeholder="Ex: Bonjour, je souhaite un devis pour une formation TIA Portal Siemens / Réparation carte..."
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />

                <div className="grid grid-cols-1 gap-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Envoyer sur WhatsApp ({companyInfo.whatsapp || '+212 723033508'})</span>
                  </button>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleOpenQuickEmail}
                      className="flex-1 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-[11px] rounded-lg transition-colors text-center"
                    >
                      E-mail ({companyInfo.email || OFFICIAL_EMAIL})
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        onOpenQuoteModal('Demande de devis');
                      }}
                      className="flex-1 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-[11px] rounded-lg transition-colors text-center"
                    >
                      Formulaire complet
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Floating Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-2xl flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 border-2 border-white"
          title="Contact direct WhatsApp"
        >
          <div className="relative flex items-center justify-center">
            <MessageSquare className="w-6 h-6 fill-white stroke-emerald-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full animate-ping" />
          </div>
          <span className="text-xs font-bold hidden sm:inline tracking-wide">
            WhatsApp ({companyInfo.whatsapp || '+212 723033508'})
          </span>
        </button>
      </div>

      <EmailSelectorModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        formData={{
          requestType: 'Demande de devis',
          description: quickMessage || 'Bonjour, je souhaite recevoir un devis ou des informations.',
        }}
        targetEmail={companyInfo.email || OFFICIAL_EMAIL}
      />
    </>
  );
};

