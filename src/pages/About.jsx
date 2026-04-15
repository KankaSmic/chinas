import React from 'react';
import { Heart, Globe, Utensils, Rainbow } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Family Story",
    text: "CHIÑAS is a family-owned labor of love. Every dish carries the warmth and tradition of home-cooked Mexican cuisine, passed through generations and shared with our community in Las Terrenas.",
    color: "#FF6B6B"
  },
  {
    icon: Utensils,
    title: "Our Roots",
    text: "Born from a deep passion for Mexican street food culture — the callejeros, the taquerias, the mercados. We bring the vibrant, bold flavors of Mexico's streets right to the shores of the Dominican Republic.",
    color: "#FF9A56"
  },
  {
    icon: Rainbow,
    title: "Pride & Inclusion",
    text: "We're proud to be Las Terrenas' first LGBTQ+ bar and restaurant. CHIÑAS is a safe, joyful, and welcoming space for everyone — no matter who you are or who you love. 🏳️‍🌈",
    color: "#00BCD4"
  },
  {
    icon: Globe,
    title: "Global Vibes",
    text: "\"Mexican Roots. Global Vibes\" isn't just a tagline — it's our philosophy. We honor traditional Mexican recipes while embracing flavors from the Caribbean, Japan, Britain, Jamaica, and Brazil.",
    color: "#8BC34A"
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden" 
        style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FF9A56 50%, #FFD93D 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl font-black text-white select-none">🌮</div>
          <div className="absolute bottom-10 right-10 text-9xl font-black text-white select-none">🌶️</div>
        </div>
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <span className="text-sm font-bold tracking-widest uppercase text-white/80">About Us</span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-4">
            Nuestra Historia
          </h1>
          <p className="text-xl text-white/90 font-light">
            The heart, soul, and sabor behind CHIÑAS
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" 
                alt="Restaurant atmosphere" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                More Than a Restaurant — It's Home
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to CHIÑAS! We're a family that fell in love with the magic of Las Terrenas and 
                decided to bring our Mexican roots to this beautiful Dominican beach town. 
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every taco, every tostada, every cocktail we serve comes from the heart. We believe food 
                is about more than just flavors — it's about connection, celebration, and creating a space 
                where everyone feels they belong.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're here for our famous street tacos, a Wednesday Pride & Crunch event, 
                or just a cold margarita watching the sunset — you're family here. ❤️
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition-all group">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-3xl md:text-4xl font-black italic leading-tight">
            "Raíces Mexicanas.<br/>Vibras Globales."
          </p>
          <p className="text-gray-400 mt-4 text-sm">Mexican Roots. Global Vibes.</p>
          <div className="flex justify-center gap-1 mt-6">
            {['bg-red-500','bg-orange-500','bg-yellow-400','bg-green-500','bg-blue-500','bg-purple-500'].map((c,i) => (
              <div key={i} className={`w-8 h-1 rounded-full ${c}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}