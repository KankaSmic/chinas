import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, MapPin, Phone } from "lucide-react";

export default function QuickInfo() {
  const { t } = useTranslation();

  const info = [
    {
      icon: Clock,
      title: t('quickInfo.hoursTitle'),
      lines: [t('quickInfo.hoursLine1'), t('quickInfo.hoursLine2'), t('quickInfo.hoursLine3')],
      color: "#FF6B6B"
    },
    {
      icon: MapPin,
      title: t('quickInfo.locationTitle'),
      lines: [t('quickInfo.locationLine1'), t('quickInfo.locationLine2')],
      color: "#00BCD4"
    },
    {
      icon: Phone,
      title: t('quickInfo.contactTitle'),
      lines: [t('quickInfo.contactLine1'), t('quickInfo.contactLine2')],
      color: "#FF9A56"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {info.map((item, i) => (
          <div key={i} className="text-center group">
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3"
              style={{ backgroundColor: `${item.color}15` }}
            >
              <item.icon className="w-7 h-7" style={{ color: item.color }} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
            {item.lines.map((line, j) => (
              <p key={j} className="text-gray-600 text-sm leading-relaxed">{line}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
