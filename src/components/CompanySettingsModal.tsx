import React, { useState } from 'react';
import { CompanyInfo } from '../types';
import { DEFAULT_COMPANY_INFO, saveCompanyInfo } from '../data/company';
import { X, Save, RotateCcw, Check, Building2, Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  companyInfo: CompanyInfo;
  onUpdate: (newInfo: CompanyInfo) => void;
}

export const CompanySettingsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  companyInfo,
  onUpdate,
}) => {
  const [formData, setFormData] = useState<CompanyInfo>(companyInfo);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof CompanyInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveCompanyInfo(formData);
    onUpdate(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setFormData(DEFAULT_COMPANY_INFO);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-slate-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#1a365d] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-orange-400" />
            <div>
              <h3 className="font-bold text-lg leading-tight">Configuration de l’Entreprise</h3>
              <p className="text-xs text-slate-300">Renseignez vos coordonnées réelles pour remplacer les champs temporaires [ENTREPRISE]</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-slate-800">
          <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-xs text-slate-800">
            <strong>Note d’intégrité :</strong> Les valeurs par défaut utilisent des champs temporaires entre crochets (ex: <code>[TÉLÉPHONE]</code>). Vous pouvez saisir ici le nom exact et les données de votre établissement.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#1a365d]" /> Nom de l’entreprise
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#1a365d]" /> Région / Ville / Pays
              </label>
              <input
                type="text"
                value={formData.region}
                onChange={(e) => handleChange('region', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#1a365d]" /> Téléphone principal
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-600" /> Numéro WhatsApp
              </label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#1a365d]" /> Adresse E-mail
              </label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1a365d]" /> Horaires d’ouverture
              </label>
              <input
                type="text"
                value={formData.openingHours}
                onChange={(e) => handleChange('openingHours', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#1a365d]" /> Adresse physique de l’établissement
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-500" /> Zone d’intervention
            </label>
            <input
              type="text"
              value={formData.interventionZone}
              onChange={(e) => handleChange('interventionZone', e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Réinitialiser
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" /> Enregistré !
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" /> Enregistrer les modifications
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
