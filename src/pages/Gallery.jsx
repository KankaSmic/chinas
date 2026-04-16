import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from "lucide-react";
import PageHeader from "../components/chinas/PageHeader";

const photoUrls = [
  "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&q=80",
  "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
  "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
];

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);

  const photos = useMemo(
    () => photoUrls.map((url, i) => ({ url, caption: t(`gallery.cap${i}`) })),
    [t, i18n.language]
  );

  return (
    <div className="min-h-screen">
      <PageHeader
        sectionStyle={{ background: 'linear-gradient(135deg, #E91E63 0%, #FF6B6B 50%, #FF9A56 100%)' }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-3">{t('gallery.title')}</h1>
        <p className="text-white/80">{t('gallery.subtitle')}</p>
      </PageHeader>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-2xl">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selected.url}
            alt={selected.caption}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-white text-lg font-medium">{selected.caption}</p>
        </div>
      )}
    </div>
  );
}
