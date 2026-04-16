import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Instagram, Facebook, Send } from "lucide-react";
import { toast } from "sonner";
import PageHeader from "../components/chinas/PageHeader";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    toast.success(t('contact.toastSuccess'));
    setForm({ name: '', email: '', message: '' });
    setSending(false);
  };

  const socials = [
    { icon: MessageCircle, label: "WhatsApp", descKey: "contact.whatsappDesc", href: "https://wa.me/", color: "#25D366" },
    { icon: Instagram, label: "@misfloresmexicanas", descKey: "contact.instagramDesc", href: "https://www.instagram.com/misfloresmexicanas", color: "#E1306C" },
    { icon: Facebook, label: "CHIÑAS Restaurante", descKey: "contact.facebookDesc", href: "#", color: "#1877F2" },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        sectionStyle={{ background: 'linear-gradient(135deg, #FFD93D 0%, #FF9A56 50%, #FF6B6B 100%)' }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-3">{t('contact.title')}</h1>
        <p className="text-white/80">{t('contact.subtitle')}</p>
      </PageHeader>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">{t('contact.connectTitle')}</h2>
            <p className="text-gray-500 mb-8">
              {t('contact.connectLead')}
            </p>
            <div className="space-y-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:shadow-lg transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110"
                    style={{ backgroundColor: s.color }}
                  >
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{s.label}</p>
                    <p className="text-sm text-gray-500">{t(s.descKey)}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">{t('contact.formTitle')}</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">{t('contact.nameLabel')}</Label>
                <Input
                  id="name"
                  placeholder={t('contact.namePlaceholder')}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 rounded-xl"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">{t('contact.emailLabel')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 rounded-xl"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">{t('contact.messageLabel')}</Label>
                <Textarea
                  id="message"
                  placeholder={t('contact.messagePlaceholder')}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 rounded-xl h-32"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full rounded-full py-6 text-lg font-semibold bg-[#FF6B6B] hover:bg-[#e85555]"
              >
                {sending ? t('contact.sending') : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.sendMessage')}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
