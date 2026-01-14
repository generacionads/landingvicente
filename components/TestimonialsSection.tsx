import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-slate-100 mb-12">
          Lo que dicen nuestros detectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-950 p-8 rounded-lg border border-slate-800 relative">
              <div className="absolute -top-4 left-8 text-6xl text-slate-800 font-serif leading-none">"</div>
              <div className="flex gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 mb-6 italic font-light relative z-10">"{testimonial.text}"</p>
              <div>
                <p className="text-slate-100 font-bold">{testimonial.name}</p>
                <p className="text-amber-600/80 text-xs uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;