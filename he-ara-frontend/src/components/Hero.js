import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
    </div>
    <div className="relative z-10 text-center">
      <h1 className="text-7xl md:text-9xl font-black mb-4 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
        הארה
      </h1>
      <img
        src="https://he-ara.co.il/wp-content/uploads/2025/04/MARK1-3POS-Black-ON.webp"
        alt="MARK1 Lighting"
        className="mx-auto mb-6 w-48 md:w-64 lg:w-80"/>
      <p className="text-2xl md:text-3xl font-light text-blue-400 mb-8">הארה סימן 1 </p>
      <p className="text-2xl md:text-3xl font-light text-blue-400 mb-8">3 מעגלים</p>
      <div className="flex gap-4 justify-center">
        <a href="#demo" className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
          נסה דמו חי
        </a>
        <a href="#contact" className="border border-slate-700 hover:bg-slate-800 px-8 py-4 rounded-full font-bold transition-all">
          השאר פרטים
        </a>
      </div>
      <ChevronDown className="w-8 h-8 mx-auto mt-20 animate-bounce text-slate-500" />
    </div>
  </section>
);

export default Hero;




