import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { createPageUrl } from "@/utils";
import { Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";
import Footer from "./components/chinas/Footer";
import SocialBar from "./components/chinas/SocialBar";
import LanguageSwitcher from "./components/chinas/LanguageSwitcher";

const NAV_SOLID_AFTER_PX = 400;

const navLinks = [
  { page: "Home", i18nKey: "home" },
  { page: "About", i18nKey: "about" },
  { page: "Menu", i18nKey: "menu" },
  { page: "Gallery", i18nKey: "gallery" },
  { page: "Location", i18nKey: "location" },
  { page: "Contact", i18nKey: "contact" },
];

export default function Layout({ children, currentPageName }) {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolledPastNav, setScrolledPastNav] = useState(
    () => typeof window !== 'undefined' && window.scrollY >= NAV_SOLID_AFTER_PX
  );
  const isHome = currentPageName === "Home";
  const transparentNav = isHome && !scrolledPastNav;

  useEffect(() => {
    const onScroll = () => {
      setScrolledPastNav(window.scrollY >= NAV_SOLID_AFTER_PX);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav
        id="site-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        transparentNav ? 'bg-transparent' : 'bg-white shadow-sm'
      }`}
        style={transparentNav ? {} : { backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <span className={`text-2xl font-black tracking-tight ${transparentNav ? 'text-white' : 'text-gray-900'}`}>
              CHIÑAS
            </span>
            <span className="text-xs">🌮</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentPageName === link.page
                    ? (transparentNav ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-900')
                    : (transparentNav ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50')
                }`}
              >
                {t(`nav.${link.i18nKey}`)}
              </Link>
            ))}
          </div>

          {/* Social icons desktop */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher inverse={transparentNav} />
            <a href="https://www.instagram.com/misfloresmexicanas" target="_blank" rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                transparentNav ? 'text-white/80 hover:bg-white/10' : 'text-gray-400 hover:bg-gray-100'
              }`}>
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#nonexistent" target="_blank" rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                transparentNav ? 'text-white/80 hover:bg-white/10' : 'text-gray-400 hover:bg-gray-100'
              }`}>
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile: language + menu */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher inverse={transparentNav} />
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                transparentNav ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t shadow-xl">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    currentPageName === link.page
                      ? 'bg-[#FF6B6B] text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(`nav.${link.i18nKey}`)}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t mt-4">
                <a href="https://www.instagram.com/misfloresmexicanas" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#existente" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
      <SocialBar />
    </div>
  );
}