import React from 'react';
import { Clock, MapPin, Phone } from "lucide-react";

export default function QuickInfo() {
  const info = [
    {
      icon: Clock,
      title: "Hours",
      lines: ["Tue–Sat: 12PM – 10:30PM", "Sun: 12PM – 4PM", "Mon: Closed"],
      color: "#FF6B6B"
    },
    {
      icon: MapPin,
      title: "Location",
      lines: ["Inside El Patio de Erich", "Las Terrenas, DR"],
      color: "#00BCD4"
    },
    {
      icon: Phone,
      title: "Contact",
      lines: ["WhatsApp Us!", "Follow @misfloresmexicanas"],
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