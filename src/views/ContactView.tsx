import React, { useState, useEffect } from 'react';
import { CompanyInfo, RequestType, UrgencyLevel, ContactFormData } from '../types';
import { Phone, Mail, MapPin, Clock, Send, Paperclip, CheckCircle2, ShieldCheck, MessageSquare, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import { buildWhatsAppLink, OFFICIAL_EMAIL, WHATSAPP_NUMBER_FORMATTED, formatWhatsAppNumber } from '../utils/contact';
import { EmailSelectorModal } from '../components/EmailSelectorModal';

interface Props {
  companyInfo: CompanyInfo;
  initialType?: RequestType;
  initialSubject?: string;
}

export const ContactView: React.FC<Props> = ({
  companyInfo,
  initialType = 'Demande de devis',
  initialSubject = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    requestType: initialType,
    relatedSubject: initialSubject,
    description: '',
    urgency: 'Normal',
    dataConsent: false,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [transmissionMode, setTransmissionMode] = useState<'email' | 'whatsapp'>('email');
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({
        ...prev,
        requestType: initialType,
        relatedSubject: initialSubject,
      }));
    }
  }, [initialType, initialSubject]);

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
    const link = buildWhatsAppLink(formData, companyInfo.whatsapp || '+212 723033508');
    window.open(link, '_blank');
  };

  const handleOpenEmailOptions = () => {
    setEmailModalOpen(true);
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
        // Reset form fields
        setFormData({
          fullName: '',
          companyName: '',
          phone: '',
          email: '',
          requestType: initialType,
          relatedSubject: '',
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
      console.error('Submission error in ContactView:', err);
      setSubmitError('Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const rawWhatsapp = formatWhatsAppNumber(companyInfo.whatsapp || '+212 723033508');
  const displayPhone = companyInfo.phone || '+212 723033508';
  const displayEmail = companyInfo.email || OFFICIAL_EMAIL;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
        {/* Header */}
        <div className="bg-[#1a365d] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact &amp; Assistance Technique Industrielle au Maroc</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contactez INDUSTRIELTECH | Formation &amp; Services Industriels
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            Contactez INDUSTRIELTECH, société spécialisée en automatisme industriel, maintenance industrielle, variateurs de vitesse et formation professionnelle au Maroc pour toute demande de devis ou d'assistance technique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Coordonnées de contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="text-xl font-bold text-[#1a365d]">Coordonnées Directes</h2>

              <ul className="space-y-4 text-xs text-slate-700">
                <li>
                  <a
                    href={`tel:${displayPhone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-colors group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 font-bold">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400 block uppercase">Téléphone fixe / mobile</span>
                        <span className="font-bold text-[#1a365d] text-sm group-hover:text-orange-600 transition-colors">
                          {displayPhone}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
                  </a>
                </li>

                <li>
                  <a
                    href={`https://wa.me/${rawWhatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-2xl transition-colors group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-emerald-800 block uppercase">WhatsApp Direct (7j/7)</span>
                        <span className="font-bold text-emerald-950 text-sm group-hover:underline">
                          {displayPhone}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-emerald-600" />
                  </a>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={handleOpenEmailOptions}
                    className="w-full text-left flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 font-bold">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400 block uppercase">Adresse E-mail Professionnelle</span>
                        <span className="font-bold text-[#1a365d] text-sm group-hover:text-orange-600 transition-colors">
                          {displayEmail}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
                  </button>
                </li>

                <li className="flex items-start gap-3.5 p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#1a365d] flex items-center justify-center shrink-0 font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase">Localisation &amp; Siège</span>
                    <span className="font-bold text-[#1a365d] text-sm">{companyInfo.address}</span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#1a365d] flex items-center justify-center shrink-0 font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase">Zone d’intervention</span>
                    <span className="font-bold text-[#1a365d] text-sm">{companyInfo.interventionZone}</span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 font-bold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase">Horaires d’ouverture</span>
                    <span className="font-bold text-[#1a365d] text-sm">{companyInfo.openingHours}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Formulaire */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a365d]">Votre demande a bien été envoyée.</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Merci {formData.fullName}. Notre équipe technique a bien reçu votre demande et vous répondra dans les plus brefs délais (sous 2 à 4 heures).
                </p>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-xs text-slate-600 space-y-1.5 text-left">
                  <p className="font-semibold text-slate-800">Un récapitulatif a été transmis à nos ingénieurs.</p>
                  <p>En cas d'urgence critique sur site, vous pouvez également nous joindre directement par téléphone ou WhatsApp.</p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-lg transition-colors"
                >
                  Remplir une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-[#1a365d] border-b border-slate-100 pb-3">
                  Formulaire de demande de devis ou d’intervention
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nom et prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="ex: Ahmed Mansouri"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
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
                      placeholder="ex: Industrie Maroc S.A."
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Téléphone direct <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="ex: +212 600 000 000"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Adresse e-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ex: contact@societe.ma"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Type de demande <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.requestType}
                      onChange={(e) => setFormData({ ...formData, requestType: e.target.value as RequestType })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    >
                      <option value="Formation">Formation</option>
                      <option value="Réparation d’une carte électronique">Réparation d’une carte électronique</option>
                      <option value="Diagnostic ou dépannage">Diagnostic ou dépannage</option>
                      <option value="Programmation d’un automate">Programmation d’un automate</option>
                      <option value="Mise en service">Mise en service</option>
                      <option value="Réseaux & Infrastructure IT">Réseaux &amp; Infrastructure IT</option>
                      <option value="Demande de devis">Demande de devis</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Niveau d’urgence
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value as UrgencyLevel })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    >
                      <option value="Normal">Normal</option>
                      <option value="Prioritaire">Prioritaire</option>
                      <option value="Urgence critique (Arrêt de production)">
                        🔴 Urgence critique (Arrêt de ligne)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Formation ou service concerné (Intitulé / Référence)
                  </label>
                  <input
                    type="text"
                    value={formData.relatedSubject}
                    onChange={(e) => setFormData({ ...formData, relatedSubject: e.target.value })}
                    placeholder="ex: Formation TIA Portal / Dépannage variateur Siemens / Réparation carte..."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Description du besoin <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Détaillez vos équipements, les références précises, le nombre de stagiaires ou les objectifs visés..."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                {/* Document upload simulation */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ajout facultatif de photographies ou de documents
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 flex items-center gap-2 transition-colors">
                      <Paperclip className="w-4 h-4 text-slate-600" />
                      <span>Choisir un fichier...</span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,image/*,application/pdf"
                      />
                    </label>
                    {fileName ? (
                      <span className="text-xs text-emerald-700 font-medium truncate max-w-xs">
                        ✓ {fileName}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-600">Formats : PDF, JPG, PNG, DOC (Max 10 Mo)</span>
                    )}
                  </div>
                </div>

                {/* RGPD Consent */}
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
                      J’autorise l’entreprise à traiter mes données uniquement dans le cadre de ma demande. <ShieldCheck className="w-3.5 h-3.5 inline text-slate-600 ml-1" />
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

                {/* Direct Buttons Bar */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <span className="block text-xs font-bold text-[#1a365d] uppercase tracking-wider">
                    Choix du mode de transmission :
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        setTransmissionMode('whatsapp');
                        handleSendWhatsApp();
                      }}
                      className={`py-3 px-3 font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all ${
                        transmissionMode === 'whatsapp'
                          ? 'bg-emerald-600 text-white ring-2 ring-emerald-500'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTransmissionMode('email')}
                      className={`py-3 px-3 font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all ${
                        transmissionMode === 'email'
                          ? 'bg-[#1a365d] text-white ring-2 ring-orange-500'
                          : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      <Mail className="w-4 h-4 text-orange-400" />
                      <span>Via E-mail</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.dataConsent}
                      className="py-3 px-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
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
      </div>

      <EmailSelectorModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        formData={formData}
        targetEmail={displayEmail}
      />
    </>
  );
};
