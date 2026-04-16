import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1920&q=80"
          alt={t('hero.imgAlt')}
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Rainbow stripe at top */}
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-red-500" />
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-green-500" />
        <div className="flex-1 bg-blue-500" />
        <div className="flex-1 bg-purple-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-white text-sm mb-6 border border-white/20">
          <span>🏳️‍🌈</span>
          <span className="font-medium">{t('hero.badge')}</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-4">
          CHIÑAS
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-2">
          {t('hero.subtitle')}
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-coral-500 via-yellow-400 to-turquoise-500 mx-auto my-6 rounded-full"
          style={{ background: 'linear-gradient(to right, #FF6B6B, #FFD93D, #00BCD4)' }} />

        <p className="text-2xl md:text-3xl text-white font-bold italic mb-1">
          {t('hero.tagline')}
        </p>
        <p className="text-lg md:text-xl text-white/80 font-light italic mb-10">
          {t('hero.taglineEs')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={createPageUrl("Menu")}>
            <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#e85555] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-red-500/25 transition-all hover:scale-105">
              <UtensilsCrossed className="w-5 h-5 mr-2" />
              {t('hero.viewMenu')}
            </Button>
          </Link>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#1db954] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-green-500/25 transition-all hover:scale-105">
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('hero.orderWhatsApp')}
            </Button>
          </a>
          <Link to={createPageUrl("Location")}>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105 bg-white/10 backdrop-blur-sm">
              <MapPin className="w-5 h-5 mr-2" />
              {t('hero.findUs')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
