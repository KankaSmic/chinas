import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Globe, Utensils, Rainbow } from "lucide-react";
import PageHeader from "../components/chinas/PageHeader";

const values = [
  { icon: Heart, titleKey: "about.valueFamilyTitle", textKey: "about.valueFamilyText", color: "#FF6B6B" },
  { icon: Utensils, titleKey: "about.valueRootsTitle", textKey: "about.valueRootsText", color: "#FF9A56" },
  { icon: Rainbow, titleKey: "about.valuePrideTitle", textKey: "about.valuePrideText", color: "#00BCD4" },
  { icon: Globe, titleKey: "about.valueGlobalTitle", textKey: "about.valueGlobalText", color: "#8BC34A" }
];

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <PageHeader
        sectionStyle={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FF9A56 50%, #FFD93D 100%)' }}
        decorations={
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 text-9xl font-black text-white select-none">🌮</div>
            <div className="absolute bottom-10 right-10 text-9xl font-black text-white select-none">🌶️</div>
          </div>
        }
      >
        <span className="text-sm font-bold tracking-widest uppercase text-white/80">{t('about.kicker')}</span>
        <h1 className="text-4xl md:text-6xl font-black mt-3 mb-4">
          {t('about.title')}
        </h1>
        <p className="text-xl text-white/90 font-light">
          {t('about.lead')}
        </p>
      </PageHeader>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
                alt={t('about.storyImgAlt')}
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                {t('about.storyTitle')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('about.storyP1')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('about.storyP2')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.storyP3')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition-all group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(value.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(value.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-3xl md:text-4xl font-black italic leading-tight">
            {t('about.quoteLine1')}<br />{t('about.quoteLine2')}
          </p>
          <p className="text-gray-400 mt-4 text-sm">{t('about.quoteEnSub')}</p>
          <div className="flex justify-center gap-1 mt-6">
            {['bg-red-500', 'bg-orange-500', 'bg-yellow-400', 'bg-green-500', 'bg-blue-500', 'bg-purple-500'].map((c, i) => (
              <div key={i} className={`w-8 h-1 rounded-full ${c}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
