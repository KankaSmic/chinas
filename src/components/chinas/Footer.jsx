import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Rainbow stripe */}
      <div className="h-1 flex">
        <div className="flex-1 bg-red-500" />
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-green-500" />
        <div className="flex-1 bg-blue-500" />
        <div className="flex-1 bg-purple-500" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-2">CHIÑAS</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.tagline')}<br />
              {t('footer.prideLine')}
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-3 text-white/90">{t('footer.hoursTitle')}</h4>
            <div className="text-gray-400 text-sm space-y-1">
              <p>{t('footer.hoursMon')} <span className="text-red-400">{t('footer.hoursClosed')}</span></p>
              <p>{t('footer.hoursTueSat')}</p>
              <p>{t('footer.hoursSun')}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-3 text-white/90">{t('footer.connectTitle')}</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/misfloresmexicanas" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              {t('footer.addressLine')}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-xs flex items-center justify-center gap-1 flex-wrap">
            {t('footer.madeWith')} <Heart className="w-3 h-3 text-red-500 fill-red-500 shrink-0" /> {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
