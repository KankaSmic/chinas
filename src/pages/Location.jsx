import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, MapPin, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "../components/chinas/PageHeader";

const HOURS_ROWS = [
  { dayKey: 'monday', closed: true },
  { dayKey: 'tuesday', timeKey: 'slotTuesday' },
  { dayKey: 'wednesday', timeKey: 'slotWedSat', noteKey: 'location.prideNote' },
  { dayKey: 'thursday', timeKey: 'slotWedSat' },
  { dayKey: 'friday', timeKey: 'slotWedSat' },
  { dayKey: 'saturday', timeKey: 'slotWedSat' },
  { dayKey: 'sunday', timeKey: 'slotSunday' },
];

const DAY_ORDER = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export default function Location() {
  const { t, i18n } = useTranslation();
  const todayKey = useMemo(() => DAY_ORDER[new Date().getDay()], []);

  return (
    <div className="min-h-screen">
      <PageHeader
        sectionStyle={{ background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 50%, #00838F 100%)' }}
      >
        <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
        <h1 className="text-4xl md:text-6xl font-black mb-3">{t('location.title')}</h1>
        <p className="text-white/80">{t('location.subtitle')}</p>
      </PageHeader>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5!2d-69.53!3d19.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzM2LjAiTiA2OcKwMzEnNDguMCJX!5e0!3m2!1sen!2s!4v1680000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('location.mapTitle')}
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="https://maps.google.com/?q=Las+Terrenas+Pueblo+de+los+Pescadores" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full rounded-full bg-gray-900 hover:bg-gray-800 py-6">
                  <Navigation className="w-4 h-4 mr-2" />
                  {t('location.getDirections')}
                </Button>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full rounded-full bg-[#25D366] hover:bg-[#1db954] text-white py-6">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('location.whatsappUs')}
                </Button>
              </a>
            </div>
          </div>

          <div>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#FF6B6B15' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#FF6B6B' }} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{t('location.addressTitle')}</h2>
              </div>
              <p
                className="text-gray-600 leading-relaxed pl-13 ml-13"
                style={{ marginLeft: '52px' }}
                dangerouslySetInnerHTML={{ __html: t('location.addressBody') }}
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#00BCD415' }}>
                  <Clock className="w-5 h-5" style={{ color: '#00BCD4' }} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{t('location.hoursTitle')}</h2>
              </div>
              <div className="space-y-2" style={{ marginLeft: '52px' }}>
                {HOURS_ROWS.map((h, i) => {
                  const isToday = h.dayKey === todayKey;
                  const dayLabel = t(`location.days.${h.dayKey}`);
                  const timeLabel = h.closed ? t('location.closed') : t(`location.${h.timeKey}`);
                  return (
                    <div
                      key={`${h.dayKey}-${i18n.language}`}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                        isToday
                          ? 'bg-[#FF6B6B] text-white shadow-lg shadow-red-200'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div>
                        <span className={`font-semibold text-sm ${isToday ? 'text-white' : 'text-gray-900'}`}>
                          {dayLabel}
                          {isToday && (
                            <span className="ml-2 text-xs font-normal opacity-80">
                              ({t('location.today')})
                            </span>
                          )}
                        </span>
                        {h.noteKey && (
                          <span className={`block text-xs ${isToday ? 'text-white/80' : 'text-gray-400'}`}>
                            {t(h.noteKey)}
                          </span>
                        )}
                      </div>
                      <span className={`text-sm font-medium ${
                        h.closed
                          ? (isToday ? 'text-white' : 'text-red-500')
                          : (isToday ? 'text-white' : 'text-gray-600')
                      }`}>
                        {timeLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
