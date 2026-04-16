import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import MenuCategory from "../components/chinas/MenuCategory";
import PageHeader from "../components/chinas/PageHeader";
import menuEn from "../locales/en/menu.json";
import menuEs from "../locales/es/menu.json";

const menusByLang = { en: menuEn, es: menuEs };

const TAB_DEFS = [
  { key: "food", categories: ["antojitos_botanas", "antojitos_alitas", "callejeros_tacos", "callejeros_tortas", "callejeros_burritos", "originales", "sides_sopas", "sides_guarniciones", "postres"] },
  { key: "drinks", categories: ["bebidas"] },
  { key: "bar", categories: ["bar_cerveza", "bar_vino", "bar_tequila", "bar_vodka", "bar_gin", "bar_rum", "bar_whiskey"] },
];

export default function Menu() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("food");

  const menuData = menusByLang[i18n.language] || menusByLang.en;

  const tabs = useMemo(
    () =>
      TAB_DEFS.map((tab) => ({
        ...tab,
        label: t(`menuPage.tab${tab.key.charAt(0).toUpperCase() + tab.key.slice(1)}`),
      })),
    [t, i18n.language]
  );

  const currentCategories = tabs.find((x) => x.key === activeTab)?.categories || [];

  return (
    <div className="min-h-screen">
      <PageHeader
        className="bg-gray-900 text-white"
        decorations={
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=60" alt="" className="w-full h-full object-cover" />
          </div>
        }
      >
        <h1 className="text-4xl md:text-6xl font-black mb-3">{t('menuPage.heroTitle')}</h1>
        <p className="text-white/70">{t('menuPage.heroSubtitle')}</p>
      </PageHeader>

      <div className="sticky top-0 z-30 bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto flex">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 border-b-[3px] py-4 text-center text-sm font-bold transition-colors ${
                activeTab === tab.key
                  ? 'border-[#FF6B6B] text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-8">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-2">
          <span>{t('menuPage.legendVeg')}</span>
          <span>{t('menuPage.legendSpicy')}</span>
          <span className="text-xs">{t('menuPage.legendPrices')}</span>
        </div>
        <p className="text-xs text-gray-400">
          {t('menuPage.footnote')}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {currentCategories.map((catKey) => {
          const cat = menuData[catKey];
          if (!cat) return null;
          return (
            <MenuCategory
              key={`${catKey}-${i18n.language}`}
              title={cat.title}
              subtitle={cat.subtitle}
              items={cat.items}
              color={cat.color}
            />
          );
        })}
      </div>
    </div>
  );
}
