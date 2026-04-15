import React from 'react';
import HeroSection from "../components/chinas/HeroSection";
import QuickInfo from "../components/chinas/QuickInfo";
import PhotoGrid from "../components/chinas/PhotoGrid";
import PrideEventBanner from "../components/chinas/PrideEventBanner";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { UtensilsCrossed, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <QuickInfo />

      {/* About teaser */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#00BCD4' }}>
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-6">
            Where Every Flavor Tells a Story
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            CHIÑAS is a family-owned restaurant bringing authentic Mexican street food culture with flavors 
            from around the world — Caribbean, Japanese, British, Jamaican, and Brazilian. 
            A safe, welcoming space for everyone. 🏳️‍🌈
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={createPageUrl("About")}>
              <Button className="rounded-full px-6 bg-gray-900 hover:bg-gray-800">
                <Users className="w-4 h-4 mr-2" />
                Our Story
              </Button>
            </Link>
            <Link to={createPageUrl("Menu")}>
              <Button variant="outline" className="rounded-full px-6 border-2">
                <UtensilsCrossed className="w-4 h-4 mr-2" />
                Explore Menu
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
            Come Visit Us! 🌴
          </h2>
          <p className="text-gray-500 mb-8">
            We're waiting for you in Las Terrenas with open arms, cold drinks, and amazing food.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#1db954] text-white rounded-full px-8 py-6 text-lg font-semibold">
                💬 Chat on WhatsApp
              </Button>
            </a>
            <Link to={createPageUrl("Location")}>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-2">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}