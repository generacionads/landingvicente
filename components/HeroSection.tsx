import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop" 
          alt="Mystery Atmosphere" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30"></div>
      </div>
      
      {/* Smooth Transition Gradient (Top) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-3 py-1 border border-amber-500/30 rounded-full bg-slate-950/50 backdrop-blur-sm">
          <span className="text-amber-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            Madrid • Premium Escape Rooms
          </span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight mb-6 drop-shadow-2xl">
          La experiencia de Escape Room <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">que no te puedes perder en Madrid</span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Adéntrate en un mundo de misterio, tensión y emociones fuertes. 
          Pon a prueba tus nervios y resuelve el enigma antes de que se agote el tiempo.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;