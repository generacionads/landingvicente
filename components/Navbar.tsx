'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif font-bold text-slate-100 tracking-widest">
              EscapaDelAburrimiento
            </span>
            <span className="text-amber-500 text-xs font-sans tracking-widest mt-2 hidden md:block">Álcala de Henares</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#experiencia" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors tracking-wide uppercase">La Experiencia</a>
          <a href="#salas" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors tracking-wide uppercase">Nuestras Salas</a>
          <a href="#ubicacion" className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors tracking-wide uppercase">Ubicación</a>
          
          <button className="bg-amber-600 hover:bg-amber-500 text-slate-950 px-6 py-2.5 rounded-sm font-bold tracking-wider text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            RESERVAR AHORA
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4 items-center">
          <a href="#experiencia" className="text-slate-300 hover:text-amber-500 py-2 uppercase tracking-wide" onClick={() => setIsMobileMenuOpen(false)}>La Experiencia</a>
          <a href="#salas" className="text-slate-300 hover:text-amber-500 py-2 uppercase tracking-wide" onClick={() => setIsMobileMenuOpen(false)}>Nuestras Salas</a>
          <a href="#ubicacion" className="text-slate-300 hover:text-amber-500 py-2 uppercase tracking-wide" onClick={() => setIsMobileMenuOpen(false)}>Ubicación</a>
          <button className="w-full bg-amber-600 text-slate-950 px-6 py-3 font-bold tracking-wider mt-2">
            RESERVAR AHORA
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;