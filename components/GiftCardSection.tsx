import React from 'react';
import { Gift, Sparkles, CreditCard, Check } from 'lucide-react';

const GiftCardSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 backdrop-blur-sm">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-950/30 px-3 py-1 rounded-full border border-amber-500/20">
              <Gift size={14} />
              <span>El regalo perfecto</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
              Regala una <span className="text-amber-500">Aventura</span>
            </h2>
            
            <p className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Olvídate de los regalos aburridos. Sorprende a tus amigos o familiares con una experiencia inmersiva que nunca olvidarán.
            </p>

            {/* Discount Badge */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 p-4 rounded-lg shadow-[0_0_20px_rgba(217,119,6,0.3)] inline-block transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <Sparkles size={24} strokeWidth={2.5} />
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80">Promoción Limitada</p>
                  <p className="text-2xl font-black tracking-tight leading-none">20% DE DESCUENTO</p>
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-400 pt-2">
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <Check size={16} className="text-amber-500" /> Válido para todas las salas
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <Check size={16} className="text-amber-500" /> Sin fecha de caducidad
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <Check size={16} className="text-amber-500" /> Entrega inmediata por email
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <Check size={16} className="text-amber-500" /> Canjeable online
              </li>
            </ul>

            <button className="w-full sm:w-auto bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 px-8 py-3 rounded font-bold tracking-widest uppercase transition-all duration-300 mt-4">
              Comprar Tarjeta Regalo
            </button>
          </div>

          {/* Visual Card Representation */}
          <div className="flex-1 flex justify-center perspective-1000">
            <div className="relative w-full max-w-md aspect-[1.586/1] group cursor-pointer perspective-1000">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              {/* The Card */}
              <div className="relative h-full w-full bg-slate-950 rounded-xl border border-slate-700 p-8 flex flex-col justify-between overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6">
                
                {/* Card Background Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-bl-full"></div>

                {/* Card Top */}
                <div className="flex justify-between items-start relative z-10">
                  <span className="font-serif font-bold text-slate-100 tracking-widest text-lg">ESCAPOLOGY</span>
                  <CreditCard className="text-amber-500/50" size={32} />
                </div>

                {/* Card Chip & Number */}
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-9 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded flex items-center justify-center overflow-hidden border border-yellow-700/50">
                     <div className="w-full h-[1px] bg-yellow-800/50 my-1"></div>
                     <div className="absolute w-[1px] h-full bg-yellow-800/50 mx-1"></div>
                  </div>
                  <div className="font-mono text-slate-300 text-lg sm:text-xl tracking-widest flex gap-4 opacity-80 text-shadow">
                    <span>••••</span><span>••••</span><span>••••</span><span>8842</span>
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">MEMBER NAME</p>
                    <p className="font-sans font-bold text-slate-200 tracking-wider">FUTURE DETECTIVE</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-amber-500 font-bold text-xl">GIFT CARD</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GiftCardSection;