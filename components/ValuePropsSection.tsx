import React from 'react';
import { VALUE_PROPS } from '../constants';

const ValuePropsSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {VALUE_PROPS.map((prop, index) => (
            <div key={index} className="group p-8 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 group-hover:border-amber-500 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-500">
                <prop.Icon className="text-amber-500 w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-200 mb-4">{prop.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;