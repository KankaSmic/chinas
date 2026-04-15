import React, { useState } from 'react';
import MenuCategory from "../components/chinas/MenuCategory";

const menuData = {
  antojitos_botanas: {
    title: "ANTOJITOS — Botanas",
    subtitle: "Appetizers / Snacks",
    color: "#FF6B6B",
    items: [
      { name: "Nachos Clásicos", nameEn: "Classic Nachos", description: "Chips, queso fundido, frijoles, pico de gallo, jalapeños, crema", price: "425 DOP" },
      { name: "Gajos Fundidos", nameEn: "Loaded Potato Wedges", description: "Potato wedges with melted cheese, bacon bits, sour cream", price: "375 DOP" },
      { name: "Sopes", description: "Handmade masa cups with beans, lettuce, queso fresco, salsa", price: "350 DOP", tags: ["🥕"] },
      { name: "Quesadilla", description: "Flour tortilla with melted cheese, choice of filling", price: "375 DOP" },
    ]
  },
  antojitos_alitas: {
    title: "ANTOJITOS — Alitas",
    subtitle: "Wings",
    color: "#FF6B6B",
    items: [
      { name: "Alitas (6 pcs)", nameEn: "Wings", description: "Choose your flavor", price: "425 DOP", variants: ["BBQ", "Buffalo 🔥", "Chimichurri", "Jerk 🔥", "Piri-Piri 🔥", "Teriyaki"] },
    ]
  },
  callejeros_tacos: {
    title: "CALLEJEROS — Tacos y Tostadas",
    subtitle: "Street Food / Tacos & Tostadas",
    color: "#FF9A56",
    items: [
      { name: "Taco Istmeño", description: "Traditional Oaxacan-style taco with slow-cooked meats", price: "275 DOP" },
      { name: "Taco Doña Carmen", description: "Homestyle taco inspired by grandma's kitchen", price: "275 DOP" },
      { name: "Tostada Costeña", description: "Crispy tostada with coastal-inspired fresh toppings", price: "325 DOP" },
      { name: "Tostada Mozambiqueña", description: "African-spiced tostada with piri-piri flavors", price: "325 DOP", tags: ["🔥"] },
    ]
  },
  callejeros_tortas: {
    title: "CALLEJEROS — Tortas",
    subtitle: "Mexican Sandwiches",
    color: "#FF9A56",
    items: [
      { name: "Torta Gringa", description: "Flour tortilla quesadilla-style with al pastor", price: "425 DOP" },
      { name: "Torta Chilanga", description: "Mexico City-style loaded sandwich", price: "450 DOP" },
      { name: "Torta Hawaiana", description: "With grilled pineapple and ham", price: "425 DOP" },
    ]
  },
  callejeros_burritos: {
    title: "CALLEJEROS — Burritos",
    subtitle: "Burritos",
    color: "#FF9A56",
    items: [
      { name: "Burrito Americano", description: "Loaded burrito, American-style with rice, beans, cheese, sour cream", price: "475 DOP" },
      { name: "Burrito Central", description: "Central Mexican-style with traditional fillings", price: "450 DOP" },
      { name: "Burrito Caribeño", description: "Caribbean twist with tropical flavors and plantain", price: "475 DOP" },
    ]
  },
  originales: {
    title: "CHIÑAS ORIGINALES",
    subtitle: "Signature Dishes",
    color: "#00BCD4",
    items: [
      { name: "Enchiladas Juchitecas", description: "Traditional Oaxacan enchiladas with rich mole sauce", price: "525 DOP" },
      { name: "Cerdo Ranchero", nameEn: "Ranch-Style Pork", description: "Slow-cooked pork in ranchero salsa with rice and beans", price: "550 DOP" },
      { name: "Tokyo Bowl", description: "Japanese-inspired bowl with teriyaki, edamame, and pickled ginger", price: "525 DOP" },
      { name: "British Fish & Chips", description: "Beer-battered fish with crispy chips and tartar sauce", price: "575 DOP" },
      { name: "Milanesa Argentina", description: "Breaded cutlet Argentine-style with chimichurri", price: "525 DOP" },
      { name: "Jamaican Jerk Chops", description: "Jerk-spiced pork chops with Caribbean coleslaw", price: "575 DOP", tags: ["🔥"] },
      { name: "Camarones Acapulqueños", nameEn: "Acapulco-Style Shrimp", description: "Garlic butter shrimp Acapulco-style", price: "625 DOP" },
    ]
  },
  sides_sopas: {
    title: "ACOMPAÑAMIENTOS — Sopas",
    subtitle: "Sides / Soups",
    color: "#8BC34A",
    items: [
      { name: "Caldo Casero", nameEn: "Homestyle Broth", description: "Traditional Mexican chicken broth with vegetables", price: "275 DOP" },
      { name: "Cowboy Chili", description: "Hearty beef and bean chili, Texas-style", price: "325 DOP", tags: ["🔥"] },
    ]
  },
  sides_guarniciones: {
    title: "ACOMPAÑAMIENTOS — Guarniciones",
    subtitle: "Sides",
    color: "#8BC34A",
    items: [
      { name: "Chips & Salsa", description: "Tortilla chips with house-made salsa", price: "175 DOP", tags: ["🥕"] },
      { name: "Chips & Guacamole", description: "Tortilla chips with fresh guacamole", price: "225 DOP", tags: ["🥕"] },
      { name: "Vegetales Asados", nameEn: "Grilled Vegetables", price: "200 DOP", tags: ["🥕"] },
      { name: "Esquites", description: "Mexican street corn in a cup with mayo, chili, lime", price: "200 DOP", tags: ["🥕"] },
      { name: "Gajos de Papa", nameEn: "Potato Wedges", price: "175 DOP", tags: ["🥕"] },
      { name: "Aros de Cebolla", nameEn: "Onion Rings", price: "200 DOP", tags: ["🥕"] },
    ]
  },
  postres: {
    title: "POSTRES",
    subtitle: "Desserts",
    color: "#E91E63",
    items: [
      { name: "Crispitos", description: "Crispy cinnamon sugar tortilla rolls with chocolate or caramel dip", price: "225 DOP" },
      { name: "Helado Frito", nameEn: "Fried Ice Cream", description: "Crispy coated ice cream with honey and cinnamon", price: "275 DOP" },
      { name: "Plátanos Playeros", nameEn: "Beach-Style Plantains", description: "Sweet plantains with cream and cinnamon", price: "225 DOP" },
    ]
  },
  bebidas: {
    title: "BEBIDAS — Refrescantes",
    subtitle: "Drinks / Fresh & Bottled",
    color: "#00BCD4",
    items: [
      { name: "Agua de Chinola", nameEn: "Passion Fruit Cooler", price: "150 DOP" },
      { name: "Tropical Cooler", description: "Pineapple, mango, and coconut blend", price: "175 DOP" },
      { name: "Hibiscus Cooler", description: "Jamaica flower water, refreshing and tangy", price: "150 DOP" },
      { name: "Water / Sodas / Ginger Ale", price: "100–150 DOP" },
    ]
  },
  bar_cerveza: {
    title: "DE LA BARRA — Cerveza",
    subtitle: "From the Bar / Beer",
    color: "#FFD93D",
    items: [
      { name: "Cerveza Nacional", nameEn: "Local Beer", description: "Presidente, Bohemia", price: "175 DOP" },
      { name: "Cerveza Importada", nameEn: "Imported Beer", description: "Corona, Modelo, Heineken", price: "250 DOP" },
    ]
  },
  bar_vino: {
    title: "DE LA BARRA — Vino",
    subtitle: "Wine Cocktails",
    color: "#E91E63",
    items: [
      { name: "Aperol Spritz", price: "425 DOP" },
      { name: "Mimosa", price: "350 DOP" },
      { name: "Sangría", description: "House red wine sangria with fresh fruits", price: "375 DOP" },
      { name: "Tinto de Verano", description: "Red wine with lemon soda", price: "325 DOP" },
    ]
  },
  bar_tequila: {
    title: "DE LA BARRA — Tequila",
    subtitle: "Tequila Cocktails",
    color: "#8BC34A",
    items: [
      { name: "Margarita Clásica", price: "400 DOP" },
      { name: "Margarita de Sabor", description: "Mango, strawberry, or tamarind", price: "425 DOP" },
      { name: "Coronarita", description: "Margarita topped with an inverted Corona", price: "475 DOP" },
      { name: "Paloma", description: "Tequila, grapefruit soda, lime", price: "375 DOP" },
      { name: "Tequila Sunrise", price: "375 DOP" },
    ]
  },
  bar_vodka: {
    title: "DE LA BARRA — Vodka",
    subtitle: "Vodka Cocktails",
    color: "#00BCD4",
    items: [
      { name: "Moscow Mule", price: "400 DOP" },
      { name: "Cosmopolitan", price: "425 DOP" },
      { name: "Bloody Mary", price: "400 DOP", tags: ["🔥"] },
      { name: "Vodka Lemonade", price: "350 DOP" },
    ]
  },
  bar_gin: {
    title: "DE LA BARRA — Gin",
    subtitle: "Gin Cocktails",
    color: "#7B1FA2",
    items: [
      { name: "Gin & Tonic", price: "375 DOP" },
      { name: "Martini", price: "425 DOP" },
      { name: "Negroni", price: "425 DOP" },
      { name: "Tom Collins", price: "375 DOP" },
    ]
  },
  bar_rum: {
    title: "DE LA BARRA — Ron / Rum",
    subtitle: "Rum Cocktails",
    color: "#FF9A56",
    items: [
      { name: "Mojito Clásico", price: "375 DOP" },
      { name: "Mojito de Sabor", description: "Mango, passion fruit, or strawberry", price: "400 DOP" },
      { name: "Piña Colada", price: "400 DOP" },
      { name: "Mai Tai", price: "425 DOP" },
      { name: "Cuba Libre", price: "325 DOP" },
    ]
  },
  bar_whiskey: {
    title: "DE LA BARRA — Whiskey",
    subtitle: "Whiskey Cocktails",
    color: "#795548",
    items: [
      { name: "Old Fashioned", price: "450 DOP" },
      { name: "Whiskey Sour", price: "425 DOP" },
      { name: "Manhattan", price: "450 DOP" },
      { name: "Irish Coffee", price: "400 DOP" },
    ]
  },
};

const tabs = [
  { key: "food", label: "🍽️ Food", categories: ["antojitos_botanas", "antojitos_alitas", "callejeros_tacos", "callejeros_tortas", "callejeros_burritos", "originales", "sides_sopas", "sides_guarniciones", "postres"] },
  { key: "drinks", label: "🍹 Drinks", categories: ["bebidas"] },
  { key: "bar", label: "🍸 Bar", categories: ["bar_cerveza", "bar_vino", "bar_tequila", "bar_vodka", "bar_gin", "bar_rum", "bar_whiskey"] },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("food");

  const currentCategories = tabs.find(t => t.key === activeTab)?.categories || [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-6 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-3">Nuestro Menú</h1>
          <p className="text-white/70">Our Menu</p>
        </div>
      </section>

      {/* Tab navigation */}
      <div className="sticky top-0 z-30 bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto flex">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-4 text-center text-sm font-bold transition-all ${
                activeTab === tab.key 
                  ? 'text-gray-900 border-b-3 border-[#FF6B6B]' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              style={activeTab === tab.key ? { borderBottomWidth: '3px', borderBottomColor: '#FF6B6B' } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Legend & Note */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-2">
          <span>🥕 Vegetarian</span>
          <span>🔥 Spicy</span>
          <span className="text-xs">Prices in Dominican Pesos (DOP)</span>
        </div>
        <p className="text-xs text-gray-400">
          18% ITBIS already included • 10% legal charge will be added
        </p>
      </div>

      {/* Menu items */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {currentCategories.map(catKey => {
          const cat = menuData[catKey];
          return (
            <MenuCategory
              key={catKey}
              title={cat.title}
              subtitle={cat.subtitle}
              items={cat.items}
              color={cat.color}
            />
          );
        })}
      </div>
    </div>
  );
}