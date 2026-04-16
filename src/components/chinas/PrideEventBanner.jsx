import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles } from "lucide-react";

export default function PrideEventBanner() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FF9A56 25%, #FFD93D 50%, #8BC34A 62%, #00BCD4 75%, #7B1FA2 100%)' }}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          {t('prideBanner.badge')}
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          {t('prideBanner.title')}
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          {t('prideBanner.body')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <p className="text-2xl font-black">{t('prideBanner.deal1Title')}</p>
            <p className="text-sm text-white/80">{t('prideBanner.deal1Sub')}</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <p className="text-lg font-bold">{t('prideBanner.deal2Title')}</p>
            <p className="text-sm text-white/80">{t('prideBanner.deal2Sub')}</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20">
            <p className="text-lg font-bold">{t('prideBanner.deal3Title')}</p>
            <p className="text-sm text-white/80">{t('prideBanner.deal3Sub')}</p>
          </div>
        </div>
        <p className="text-xs text-white/60 mt-6">
          {t('prideBanner.footnote')}
        </p>
      </div>
    </section>
  );
}
