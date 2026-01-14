import React from 'react';
import { Users, Clock, ChevronRight } from 'lucide-react';
import { ROOMS_DATA } from '../constants';

const RoomsSection: React.FC = () => {
  return (
    <section id="salas" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-2 block">Elige tu destino</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-100">Nuestras Salas</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room) => (
            <div key={room.id} className="group bg-slate-900 rounded-md overflow-hidden border border-slate-800 hover:border-amber-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={room.imageUrl} 
                  alt={room.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border backdrop-blur-md ${room.tagColor}`}>
                  {room.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-100 mb-3 group-hover:text-amber-500 transition-colors">
                    {room.title}
                  </h3>
                  
                  {/* Metadata */}
                  <div className="flex items-center gap-6 mb-6 text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                        <Users size={16} className="text-amber-600"/>
                        <span>{room.players}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-amber-600"/>
                        <span>{room.time}</span>
                    </div>
                  </div>

                  {/* Difficulty Dots */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider mr-2">Dificultad:</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div 
                          key={level} 
                          className={`w-2 h-2 rounded-full ${level <= room.difficulty ? 'bg-amber-500' : 'bg-slate-700'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <button className="w-full bg-transparent border border-amber-600/30 text-amber-500 hover:bg-amber-600 hover:text-slate-950 font-bold py-3 px-4 rounded transition-all duration-300 flex justify-center items-center gap-2 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  VER DISPONIBILIDAD
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;