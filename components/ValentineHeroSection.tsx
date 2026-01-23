'use client';

import React, { useState, FormEvent } from 'react';
import { Heart, Gift, ChevronRight, CalendarHeart, X, Send, CheckCircle2 } from 'lucide-react';
import { ROOMS_DATA } from '../constants';

const ValentineHeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormStatus('idle');
    document.body.style.overflow = 'unset';
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/escapadelaburrimiento@gmail.com,mzornoza@generacionads.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...data,
            _subject: "💘 Nueva Reserva San Valentín - Escapology",
            _template: "table",
            _captcha: "false"
        })
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus('error');
    }
  };

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
        
        {/* Floating Particles/Hearts Effect */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-rose-500 rounded-full blur-[2px] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-red-600 rounded-full blur-[3px] opacity-30 animate-pulse delay-700"></div>
      </div>

      {/* Smooth Transition Gradient (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>

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
          <button 
            onClick={handleOpenModal}
            className="w-full sm:w-auto group relative overflow-hidden bg-rose-700 hover:bg-rose-600 text-white px-8 py-4 rounded-sm font-bold tracking-widest text-sm md:text-base transition-all duration-300 shadow-[0_0_30px_rgba(190,18,60,0.4)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <CalendarHeart size={20} />
              RESERVAR CITA
            </span>
          </button>
          
          <a href="#salas" className="w-full sm:w-auto px-8 py-4 rounded-sm font-bold tracking-widest text-sm md:text-base text-rose-200 hover:text-white border border-rose-900/50 hover:border-rose-500/50 hover:bg-rose-900/20 transition-all duration-300 flex items-center justify-center gap-2">
            VER SALAS DISPONIBLES
            <ChevronRight size={18} />
          </a>
        </div>
      </div>

      {/* RESERVATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-slate-900 border border-rose-900/50 rounded-lg shadow-[0_0_50px_rgba(225,29,72,0.15)] overflow-hidden animate-fade-in-up">
            
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-rose-900/30 bg-gradient-to-r from-slate-950 to-rose-950/30">
              <div>
                <span className="text-rose-500 text-xs font-bold uppercase tracking-wider block mb-1">San Valentín</span>
                <h3 className="font-serif text-xl font-bold text-slate-100">Reserva tu Experiencia</h3>
              </div>
              <button 
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Body */}
            <div className="p-6 md:p-8">
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mb-4 text-rose-500">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-2">¡Reserva Solicitada!</h4>
                  <p className="text-slate-400 mb-6 max-w-xs">
                    Hemos recibido tu solicitud. Te contactaremos en breve para confirmar la disponibilidad.
                  </p>
                  <button 
                    onClick={handleCloseModal}
                    className="bg-rose-900/50 hover:bg-rose-800 border border-rose-700/50 text-white px-6 py-2 rounded text-sm font-bold uppercase tracking-wider transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nombre</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-700"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Teléfono</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required
                        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-700"
                        placeholder="+34 600..."
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-700"
                      placeholder="ejemplo@correo.com"
                    />
                  </div>

                  {/* Room Selection - Extra Field */}
                  <div className="space-y-1">
                    <label htmlFor="room" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sala de Preferencia</label>
                    <div className="relative">
                        <select 
                        id="room"
                        name="room"
                        required
                        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all appearance-none cursor-pointer"
                        defaultValue=""
                        >
                        <option value="" disabled>Selecciona una aventura...</option>
                        {ROOMS_DATA.map((room) => (
                            <option key={room.id} value={room.id}>{room.title}</option>
                        ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <ChevronRight size={14} className="rotate-90" />
                        </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-1">
                      <label htmlFor="participants" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Jugadores</label>
                      <input 
                        type="number" 
                        id="participants"
                        name="participants"
                        min="2"
                        max="8"
                        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-700"
                        placeholder="2"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="date" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fecha</label>
                      <input 
                        type="date" 
                        id="date"
                        name="date"
                        required
                        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all text-slate-400"
                      />
                    </div>
                  </div>

                  {formStatus === 'error' && (
                    <div className="text-red-400 text-xs text-center">
                        Hubo un error al enviar el formulario. Por favor inténtalo de nuevo o contáctanos directamente.
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-rose-700 hover:bg-rose-600 text-white font-bold py-3.5 rounded mt-4 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(190,18,60,0.3)]"
                  >
                    {formStatus === 'submitting' ? (
                      <>Procesando...</>
                    ) : (
                      <>
                        SOLICITAR RESERVA
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  
                  <p className="text-[10px] text-slate-500 text-center mt-2">
                    Te contactaremos para confirmar la hora exacta.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ValentineHeroSection;