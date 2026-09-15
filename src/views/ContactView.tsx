import React, { useState, useEffect } from 'react';
import { CompanyInfo, RequestType, UrgencyLevel, ContactFormData } from '../types';
import { Phone, Mail, MapPin, Clock, Paperclip, ShieldCheck, MessageSquare, AlertCircle, ExternalLink } from 'lucide-react';
import { buildWhatsAppLink, buildQuoteMailtoLink, OFFICIAL_EMAIL, WHATSAPP_NUMBER_FORMATTED, formatWhatsAppNumber } from '../utils/contact';
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

  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [submitError, setSubmitError] = useState<string | null>(null);
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
      setFileName(file.name);
      setFormData((prev) => ({ ...prev, attachedFileName: file.name }));
      setSubmitError(null);
    }
  };

  const validateForm = (): boolean => {
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.description.trim()
    ) {
      setSubmitError('Veuillez renseigner tous les champs obligatoires marqués d’un astérisque (*).');
      return false;
    }
    if (!formData.dataConsent) {
      setSubmitError('Veuillez accepter le traitement de vos données personnelles pour envoyer votre demande.');
      return false;
    }
    setSubmitError(null);
    return true;
  };

  const handleSendWhatsApp = () => {
    if (!validateForm()) return;
    const link = buildWhatsAppLink(formData, companyInfo.whatsapp || '+212 723033508');
    window.open(link, '_blank');
  };

  const handleSendEmail = () => {
    if (!validateForm()) return;
    const mailtoUrl = buildQuoteMailtoLink(formData);
    const anchor = document.createElement('a');
    anchor.href = mailtoUrl;
    anchor.click();
  };

  const handleOpenEmailOptions = () => {
    setEmailModalOpen(true);
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
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
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
                  <div className="space-y-2">
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

                    {fileName && (
                      <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl p-2.5 flex items-start gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>Le fichier sélectionné devra être joint manuellement dans votre messagerie.</span>
                      </p>
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
                      <span className="font-bold block text-red-900">Information requise</span>
                      <span className="font-medium text-red-800 leading-relaxed block mt-0.5">{submitError}</span>
                    </div>
                  </div>
                )}

                {/* Direct Buttons Bar: WhatsApp & E-mail */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="text-center sm:text-left">
                    <span className="block text-xs font-bold text-[#1a365d] uppercase tracking-wider">
                      Envoyer directement votre demande :
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all hover:shadow cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-white" />
                      <span>Via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendEmail}
                      className="w-full py-3.5 px-4 bg-[#1a365d] hover:bg-[#152c4d] active:bg-[#0f2038] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all hover:shadow cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-orange-400" />
                      <span>Via E-mail</span>
                    </button>
                  </div>
                </div>
              </form>
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
