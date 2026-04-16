import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher({ className = '', inverse = false }) {
  const { i18n } = useTranslation();

  const border = inverse ? 'border-white/40' : 'border-gray-200';
  const idle = inverse ? 'text-white/75 hover:text-white' : 'text-gray-500 hover:text-gray-800';
  const active = inverse ? 'bg-white text-gray-900' : 'bg-gray-900 text-white';

  return (
    <div
      className={`inline-flex rounded-full border p-0.5 text-xs font-bold ${border} ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => i18n.changeLanguage('en')}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          i18n.language === 'en' ? active : idle
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage('es')}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          i18n.language === 'es' ? active : idle
        }`}
      >
        ES
      </button>
    </div>
  );
}
