import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyImg from './LazyImg';

const photos = [
  { url: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&q=80", altKey: "alt0" },
  { url: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80", altKey: "alt1" },
  { url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80", altKey: "alt2" },
  { url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", altKey: "alt3" },
  { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", altKey: "alt4" },
  { url: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&q=80", altKey: "alt5" },
];

export default function PhotoGrid() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#FF6B6B' }}>
            {t('photoGrid.kicker')}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            {t('photoGrid.title')}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <LazyImg
                src={photo.url}
                alt={t(`photoGrid.${photo.altKey}`)}
                className="w-full h-full object-cover min-h-[200px] md:min-h-[250px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
