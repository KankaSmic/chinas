import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function SocialBar() {
  const { t } = useTranslation();

  const links = [
    { icon: Instagram, href: "https://www.instagram.com/misfloresmexicanas", labelKey: "social.instagram", color: "#E1306C" },
    { icon: Facebook, href: "#", labelKey: "social.facebook", color: "#1877F2" },
    { icon: MessageCircle, href: "https://wa.me/", labelKey: "social.whatsapp", color: "#25D366" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          style={{ backgroundColor: link.color }}
          aria-label={t(link.labelKey)}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
