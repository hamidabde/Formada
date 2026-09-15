import React, { useState, useEffect } from 'react';
import { RequestType, UrgencyLevel, ContactFormData } from '../types';
import { X, Send, Paperclip, CheckCircle2, ShieldCheck, FileText, MessageSquare, Mail, AlertCircle, Loader2 } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/contact';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [transmissionMode, setTransmissionMode] = useState<'email' | 'whatsapp'>('email');

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        requestType: prefilledType,
        relatedSubject: prefilledSubject,
      }));
      setIsSubmitted(false);
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

  const handleSendWhatsApp = () => {
    const link = buildWhatsAppLink(formData);
    window.open(link, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.dataConsent) return;

    if (transmissionMode === 'whatsapp') {
      handleSendWhatsApp();
      return;
    }

    // Validate required fields
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.description.trim()
    ) {
      setSubmitError('Veuillez renseigner tous les champs obligatoires marqués d’un astérisque (*).');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const data = new FormData();
      data.append('fullName', formData.fullName.trim());
      data.append('companyName', (formData.companyName || '').trim());
      data.append('phone', formData.phone.trim());
      data.append('email', formData.email.trim());
      data.append('requestType', formData.requestType);
      data.append('relatedSubject', formData.relatedSubject || '');
      data.append('urgency', formData.urgency);
      data.append('description', formData.description.trim());
      data.append('transmissionMode', 'Via E-mail');
      data.append('dataConsent', 'true');

      if (selectedFile) {
        data.append('attachment', selectedFile);
      }

      const response = await fetch('/api/devis', {
        method: 'POST',
        body: data,
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setIsSubmitted(true);
        setSubmitError(null);
        // Reset form on real successful delivery
        setFormData({
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
        setSelectedFile(null);
        setFileName(undefined);
      } else {
        const errorMsg = result?.error || 'Une erreur est survenue lors de l’envoi. Veuillez réessayer.';
        setSubmitError(errorMsg);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError('Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
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
          {isSubmitted ? (
            <div className="p-8 text-center space-y-5 my-auto overflow-y-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#1a365d]">Votre demande a bien été envoyée.</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Merci pour votre confiance. Notre équipe technique a bien reçu votre demande et vous répondra dans les plus brefs délais (sous 2 à 4 heures).
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-xs text-slate-600 space-y-1.5">
                <p className="font-semibold text-slate-800">Un récapitulatif a été transmis à nos ingénieurs.</p>
                <p>En cas d'urgence critique sur site, vous pouvez également nous joindre directement par téléphone ou WhatsApp.</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-[#1a365d] hover:bg-[#152c4d] text-white font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                Fermer la fenêtre
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-slate-800">
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
                    <span className="font-bold block">Une erreur est survenue lors de l’envoi.</span>
                    <span>{submitError}</span>
                  </div>
                </div>
              )}

              {/* Direct Instant Action Bar */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="block text-[11px] font-bold text-[#1a365d] uppercase tracking-wider">
                  Choix du mode de transmission :
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setTransmissionMode('whatsapp');
                      handleSendWhatsApp();
                    }}
                    className={`py-2.5 px-3 font-bold text-xs rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all ${
                      transmissionMode === 'whatsapp'
                        ? 'bg-emerald-600 text-white ring-2 ring-emerald-500'
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTransmissionMode('email')}
                    className={`py-2.5 px-3 font-bold text-xs rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all ${
                      transmissionMode === 'email'
                        ? 'bg-[#1a365d] text-white ring-2 ring-orange-500'
                        : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5 text-orange-400" />
                    <span>Via E-mail</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.dataConsent}
                    className="py-2.5 px-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-lg shadow-sm flex items-center justify-center gap-1.5 disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Valider</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};


