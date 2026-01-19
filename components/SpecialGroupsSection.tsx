import React from 'react';
import { PartyPopper, Users, Building2, ArrowRight } from 'lucide-react';

const SpecialGroupsSection: React.FC = () => {
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

              <button className="w-full py-3 border border-slate-700 hover:border-amber-600 text-slate-300 hover:text-amber-500 text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-slate-900">
                {group.discount ? 'Solicitar Oferta' : 'Contactar'}
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialGroupsSection;