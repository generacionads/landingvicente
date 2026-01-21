import React from 'react';
import { Heart, Gift, ChevronRight, CalendarHeart } from 'lucide-react';

const ValentineHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Romantic/Mystery Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop" 
          alt="Valentine Mystery Atmosphere" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient: Dark Slate to Deep Rose/Red */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-rose-950/20 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80"></div>
        
        {/* Subtle Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30"></div>
        
        {/* Floating Particles/Hearts Effect (CSS simulated with simple divs for performance) */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-rose-500 rounded-full blur-[2px] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-red-600 rounded-full blur-[3px] opacity-30 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Special Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-rose-500/40 rounded-full bg-rose-950/30 backdrop-blur-md shadow-[0_0_15px_rgba(225,29,72,0.2)] animate-fade-in-up">
          <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={14} />
          <span className="text-rose-200 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            Especial San Valentín
          </span>
          <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={14} />
        </div>
        
        {/* Main Heading */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight mb-6 drop-shadow-2xl">
          ¿Podréis Escapar <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-500 to-red-600">
            Juntos?
          </span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          El amor es un enigma. Este febrero, poned a prueba vuestra conexión en una experiencia inmersiva única.
        </p>

        {/* The Offer Box */}
        <div className="mb-10 bg-gradient-to-r from-slate-900/80 to-rose-950/80 border border-rose-500/30 p-4 md:p-6 rounded-lg backdrop-blur-sm max-w-lg transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 text-left">
            <div className="bg-rose-600/20 p-3 rounded-full border border-rose-500/50">
              <Gift className="text-rose-400 w-8 h-8" />
            </div>
            <div>
              <p className="text-rose-200 font-bold uppercase text-xs tracking-wider mb-1">Oferta Exclusiva</p>
              <p className="text-slate-100 font-medium text-sm md:text-base">
                Reserva para el <span className="text-rose-400 font-bold">14 de Febrero</span> y recibid un <span className="text-rose-400 font-bold underline decoration-rose-500/50 underline-offset-4">regalo sorpresa</span> al finalizar la misión.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <button className="w-full sm:w-auto group relative overflow-hidden bg-rose-700 hover:bg-rose-600 text-white px-8 py-4 rounded-sm font-bold tracking-widest text-sm md:text-base transition-all duration-300 shadow-[0_0_30px_rgba(190,18,60,0.4)]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <CalendarHeart size={20} />
              RESERVAR CITA
            </span>
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-sm font-bold tracking-widest text-sm md:text-base text-rose-200 hover:text-white border border-rose-900/50 hover:border-rose-500/50 hover:bg-rose-900/20 transition-all duration-300 flex items-center justify-center gap-2">
            VER SALAS DISPONIBLES
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValentineHeroSection;