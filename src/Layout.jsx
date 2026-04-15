import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";
import Footer from "./components/chinas/Footer";
import SocialBar from "./components/chinas/SocialBar";

const navLinks = [
  { name: "Home", page: "Home" },
  { name: "About", page: "About" },
  { name: "Menu", page: "Menu" },
  { name: "Gallery", page: "Gallery" },
  { name: "Location", page: "Location" },
  { name: "Contact", page: "Contact" },
];

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = currentPageName === "Home";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isHome ? 'bg-transparent' : 'bg-white shadow-sm'
      }`}
        style={isHome ? {} : { backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <span className={`text-2xl font-black tracking-tight ${isHome ? 'text-white' : 'text-gray-900'}`}>
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
                    ? (isHome ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-900')
                    : (isHome ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50')
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social icons desktop */}
          <div className="hidden md:flex items-center gap-2">
            <a href="https://www.instagram.com/misfloresmexicanas" target="_blank" rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isHome ? 'text-white/80 hover:bg-white/10' : 'text-gray-400 hover:bg-gray-100'
              }`}>
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isHome ? 'text-white/80 hover:bg-white/10' : 'text-gray-400 hover:bg-gray-100'
              }`}>
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center ${
              isHome ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t mt-4">
                <a href="https://www.instagram.com/misfloresmexicanas" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
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