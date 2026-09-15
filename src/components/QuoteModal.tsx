import React, { useState, useEffect } from 'react';
import { RequestType, UrgencyLevel, ContactFormData } from '../types';
import { X, Paperclip, ShieldCheck, FileText, MessageSquare, Mail, AlertCircle } from 'lucide-react';
import { buildWhatsAppLink, buildQuoteMailtoLink } from '../utils/contact';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  prefilledType?: RequestType;
  prefilledSubject?: string;
}

export const QuoteModal: React.FC<Props> = ({
  isOpen,
  onClose,
  prefilledType = 'Demande de devis',
  prefilledSubject = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    requestType: prefilledType,
    relatedSubject: prefilledSubject,
    description: '',
    urgency: 'Normal',
    dataConsent: false,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        requestType: prefilledType,
        relatedSubject: prefilledSubject,
      }));
      setSubmitError(null);
    }
  }, [isOpen, prefilledType, prefilledSubject]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setSubmitError('Le fichier dépasse la taille maximale autorisée de 10 Mo.');
        e.target.value = '';
        return;
      }
      setSelectedFile(file);
      setFileName(file.name);
      setFormData((prev) => ({ ...prev, attachedFileName: file.name }));
      setSubmitError(null);
    }
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setSubmitError('Veuillez renseigner votre nom et prénom.');
      return false;
    }
    if (!formData.phone.trim()) {
      setSubmitError('Veuillez renseigner votre numéro de téléphone.');
      return false;
    }
    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      setSubmitError('Veuillez renseigner une adresse électronique valide.');
      return false;
    }
    if (!formData.requestType?.trim()) {
      setSubmitError('Veuillez sélectionner un type de demande.');
      return false;
    }
    if (!formData.description.trim()) {
      setSubmitError('Veuillez renseigner une description détaillée de votre besoin.');
      return false;
    }
    if (!formData.dataConsent) {
      setSubmitError('Veuillez accepter le traitement de vos données personnelles (case à cocher requise).');
      return false;
    }
    setSubmitError(null);
    return true;
  };

  const handleSendWhatsApp = () => {
    if (!validateForm()) return;
    const link = buildWhatsAppLink(formData);
    window.open(link, '_blank');
  };

  const handleSendEmail = () => {
    if (!validateForm()) return;
    const mailtoUrl = buildQuoteMailtoLink(formData);
    const anchor = document.createElement('a');
    anchor.href = mailtoUrl;
    anchor.click();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-hidden flex flex-col border border-slate-200">
          {/* Header */}
          <div className="px-6 py-4 bg-[#1a365d] text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Demander un devis ou une intervention</h3>
                <p className="text-xs text-slate-300">
                  Formations, réparation de cartes, programmation API ou dépannage sur site
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <form onSubmit={(e) => e.preventDefault()} className="p-6 overflow-y-auto space-y-4 text-slate-800">
              {/* Subject Indicator Badge */}
              {prefilledSubject && (
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-between text-xs text-slate-900">
                  <span>
                    Sujet pré-sélectionné : <strong>{prefilledSubject}</strong>
                  </span>
                  <span className="px-2 py-0.5 bg-orange-200 text-orange-900 rounded font-medium">
                    {prefilledType}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nom et prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="ex: Jean Dupont"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nom de l’entreprise <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="ex: Industrie S.A.S"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Téléphone professionnel <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="ex: 06 12 34 56 78"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Adresse électronique <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ex: j.dupont@entreprise.fr"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Type de demande <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.requestType}
                    onChange={(e) => setFormData({ ...formData, requestType: e.target.value as RequestType })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                  >
                    <option value="Demande de devis">Demande de devis général</option>
                    <option value="Formation">Formation technique</option>
                    <option value="Réparation d’une carte électronique">Réparation carte électronique</option>
                    <option value="Diagnostic ou dépannage">Diagnostic ou dépannage sur site</option>
                    <option value="Programmation d’un automate">Programmation automate / PLC</option>
                    <option value="Mise en service">Mise en service d'équipement</option>
                    <option value="Réseaux & Infrastructure IT">Réseaux &amp; Infrastructure IT</option>
                    <option value="Autre demande">Autre demande technique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Niveau d’urgence
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value as UrgencyLevel })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                  >
                    <option value="Normal">Normal (Analyse sous 24h-48h)</option>
                    <option value="Prioritaire">Prioritaire (Analyse sous 12h-24h)</option>
                    <option value="Urgence critique (Arrêt de production)">
                      🔴 Urgence critique (Arrêt de ligne)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Description détaillée de votre besoin <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Indiquez les références des équipements (ex: Siemens S7-1200, Variateur Schneider ATV630, type de panne ou nombre de stagiaires)..."
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              {/* Optional File Attachment */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Joindre un schéma, cahier des charges ou photo (Facultatif)
                </label>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-2 transition-colors">
                      <Paperclip className="w-4 h-4 text-slate-600" />
                      <span>Parcourir un fichier...</span>
                      <input type="file" onChange={handleFileChange} className="hidden" accept="image/*,.pdf,.doc,.docx" />
                    </label>
                    {fileName ? (
                      <span className="text-xs text-emerald-700 font-medium truncate max-w-xs">
                        ✓ {fileName}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-600">Formats acceptés : PDF, PNG, JPG, DOC (Max 10 Mo)</span>
                    )}
                  </div>

                  {fileName && (
                    <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2.5 flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>Le fichier sélectionné devra être joint manuellement dans votre messagerie.</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Consent RGPD Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    required
                    checked={formData.dataConsent}
                    onChange={(e) => setFormData({ ...formData, dataConsent: e.target.checked })}
                    className="mt-0.5 rounded text-orange-500 focus:ring-orange-500"
                  />
                  <span>
                    J’accepte le traitement de mes données personnelles dans le cadre strict de ma demande. <ShieldCheck className="w-3.5 h-3.5 inline text-slate-600 ml-1" />
                  </span>
                </label>
              </div>

              {/* Error notification banner */}
              {submitError && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-red-900">Information requise</span>
                    <span className="font-medium text-red-800 leading-relaxed block mt-0.5">{submitError}</span>
                  </div>
                </div>
              )}

              {/* Direct Instant Action Bar: Via WhatsApp & Via E-mail */}
              <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="text-center sm:text-left">
                  <span className="block text-xs font-bold text-[#1a365d] uppercase tracking-wider">
                    Envoyer directement votre demande :
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all hover:shadow cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="w-full py-3 px-4 bg-[#1a365d] hover:bg-[#152c4d] active:bg-[#0f2038] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all hover:shadow cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-orange-400" />
                    <span>Via E-mail</span>
                  </button>
                </div>
              </div>
            </form>
        </div>
      </div>
    </>
  );
};


