import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from "../components/chinas/HeroSection";
import QuickInfo from "../components/chinas/QuickInfo";
import PhotoGrid from "../components/chinas/PhotoGrid";
import PrideEventBanner from "../components/chinas/PrideEventBanner";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { UtensilsCrossed, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection />
      <QuickInfo />

      {/* About teaser */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#00BCD4' }}>
            {t('home.aboutKicker')}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-6">
            {t('home.aboutTitle')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {t('home.aboutBody')}
          </p>
          <div className="flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link to={createPageUrl("About")} className="block w-full sm:w-auto">
              <Button className="w-full rounded-full px-6 bg-gray-900 hover:bg-gray-800 sm:w-auto">
                <Users className="w-4 h-4 mr-2" />
                {t('home.ourStory')}
              </Button>
            </Link>
            <Link to={createPageUrl("Menu")} className="block w-full sm:w-auto">
              <Button variant="outline" className="w-full rounded-full px-6 border-2 sm:w-auto">
                <UtensilsCrossed className="w-4 h-4 mr-2" />
                {t('home.exploreMenu')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <PhotoGrid />
      <PrideEventBanner />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-gray-500 mb-8">
            {t('home.ctaBody')}
          </p>
          <div className="flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#1db954] text-white rounded-full px-8 py-6 text-lg font-semibold sm:w-auto">
                {t('home.chatWhatsApp')}
              </Button>
            </a>
            <Link to={createPageUrl("Location")} className="block w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-full px-8 py-6 text-lg font-semibold border-2 sm:w-auto">
                <MapPin className="w-5 h-5 mr-2" />
                {t('home.getDirections')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
