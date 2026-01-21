'use client';

import React, { useState, FormEvent } from 'react';
import { PartyPopper, Users, Building2, ArrowRight, X, Send, CheckCircle2 } from 'lucide-react';

const SpecialGroupsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroupTitle, setSelectedGroupTitle] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const groups = [
    {
      id: 'kids',
      title: "Grupos Infantiles",
      icon: PartyPopper,
      description: "La celebración perfecta. Packs especiales para cumpleaños, comuniones y fiestas infantiles.",
      discount: "10% DTO",
      features: ["Merienda incluida (opcional)", "Monitor dedicado", "Nivel adaptado"]
    },
    {
      id: 'family',
      title: "Grupos Familiares",
      icon: Users,
      description: "La mejor actividad para unir generaciones. Equipos mixtos de adultos con menores.",
      discount: "10% DTO",
      features: ["Pistas adaptadas", "Diversión sin pantallas", "Trabajo en equipo"]
    },
    {
      id: 'corporate',
      title: "Grandes Grupos",
      icon: Building2,
      description: "Soluciones a medida para colegios, empresas, asociaciones y grandes eventos.",
      discount: null, // No discount badge, specific CTA
      features: ["Team Building", "Competición por equipos", "Catering disponible"]
    }
  ];

  const handleOpenModal = (title: string) => {
    setSelectedGroupTitle(title);
    setFormStatus('idle');
    setIsModalOpen(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Restore background scrolling
    document.body.style.overflow = 'unset';
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-900/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-2 block">Eventos y Celebraciones</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-100">Planes Especiales</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light">
            Diseñamos experiencias únicas para cada tipo de grupo. Porque escapar es mejor cuando se hace en compañía.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div 
              key={group.id} 
              className="group relative bg-slate-950 p-8 rounded-sm border border-slate-800 hover:border-amber-600/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Discount Badge */}
              {group.discount && (
                <div className="absolute -top-3 right-4 bg-amber-600 text-slate-950 text-xs font-bold px-3 py-1 rounded shadow-[0_0_10px_rgba(217,119,6,0.4)] tracking-wider">
                  {group.discount}
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors border border-slate-800 group-hover:border-amber-600/30">
                <group.icon className="text-amber-500 w-7 h-7" />
              </div>

              <h3 className="font-serif text-xl font-bold text-slate-200 mb-3 group-hover:text-amber-500 transition-colors">
                {group.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {group.description}
              </p>

              {/* Features List */}
              <ul className="mb-8 space-y-2">
                {group.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wide">
                    <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleOpenModal(group.title)}
                className="w-full py-3 border border-slate-700 hover:border-amber-600 text-slate-300 hover:text-amber-500 text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-slate-900"
              >
                {group.discount ? 'Solicitar Oferta' : 'Contactar'}
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
            
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-950/50">
              <div>
                <span className="text-amber-600 text-xs font-bold uppercase tracking-wider block mb-1">Interés en</span>
                <h3 className="font-serif text-xl font-bold text-slate-100">{selectedGroupTitle}</h3>
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
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-2">¡Solicitud Enviada!</h4>
                  <p className="text-slate-400 mb-6 max-w-xs">
                    Un agente de Escapology contactará contigo en menos de 24h para organizar tu experiencia.
                  </p>
                  <button 
                    onClick={handleCloseModal}
                    className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded text-sm font-bold uppercase tracking-wider transition-colors"
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
                        required
                        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-700"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Teléfono</label>
                      <input 
                        type="tel" 
                        id="phone"
                        required
                        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-700"
                        placeholder="+34 600..."
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-700"
                      placeholder="ejemplo@correo.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-1">
                      <label htmlFor="participants" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nº Personas (Aprox)</label>
                      <input 
                        type="number" 
                        id="participants"
                        min="2"
                        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-700"
                        placeholder="Ej: 8"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="date" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fecha deseada</label>
                      <input 
                        type="date" 
                        id="date"
                        className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mensaje / Dudas</label>
                    <textarea 
                      id="message"
                      rows={3}
                      className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-200 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-700 resize-none"
                      placeholder="Cuéntanos más sobre tu evento..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold py-3.5 rounded mt-4 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        ENVIAR SOLICITUD
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  
                  <p className="text-[10px] text-slate-500 text-center mt-2">
                    Al enviar aceptas nuestra política de privacidad para gestionar tu reserva.
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

export default SpecialGroupsSection;