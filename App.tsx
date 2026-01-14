import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Clock, 
  Users, 
  ChevronRight,
  Star
} from 'lucide-react';
import { ROOMS_DATA, VALUE_PROPS, TESTIMONIALS } from './constants';

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
              ESCAPOLOGY
            </span>
            <span className="text-amber-500 text-xs font-sans tracking-widest mt-2 hidden md:block">MADRID</span>
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

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-3 py-1 border border-amber-500/30 rounded-full bg-slate-950/50 backdrop-blur-sm">
          <span className="text-amber-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            Madrid • Premium Escape Rooms
          </span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight mb-6 drop-shadow-2xl">
          La Experiencia de Escape Room <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Nº1 en Madrid</span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Adéntrate en un mundo de misterio, lujo y desafíos intelectuales. 
          Resuelve el enigma antes de que se agote el tiempo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative overflow-hidden bg-amber-600 hover:bg-amber-500 text-slate-950 px-8 py-4 rounded-sm font-bold tracking-widest text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(217,119,6,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              ELEGIR MI MISIÓN
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </button>
          
          <button className="px-8 py-4 rounded-sm font-bold tracking-widest text-sm md:text-base text-slate-300 hover:text-amber-500 border border-slate-700 hover:border-amber-500 transition-all duration-300">
            VER TRAILER
          </button>
        </div>
      </div>
    </section>
  );
};

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

const Footer: React.FC = () => {
  return (
    <footer id="ubicacion" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-2xl font-serif font-bold text-slate-100 tracking-widest block mb-4">
              ESCAPOLOGY
            </span>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              La experiencia de escape room premium líder en el mundo, ahora en el corazón de Madrid. ¿Tienes lo que se necesita para escapar?
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-slate-800 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-slate-800 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-slate-800 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-slate-100 font-bold uppercase tracking-wider mb-6">Ubicación</h4>
            <div className="flex items-start gap-3 text-slate-400 mb-4 group cursor-pointer hover:text-amber-500 transition-colors">
              <MapPin className="min-w-[20px] mt-1 group-hover:text-amber-500 text-slate-600" size={20} />
              <p className="text-sm">
                C. de los Libreros, 15,<br />
                28801 Alcalá de Henares,<br />
                Madrid, España
              </p>
            </div>
            <a href="#" className="text-amber-600 text-sm font-bold border-b border-amber-600/30 hover:border-amber-600 pb-0.5 transition-all">Ver en Google Maps</a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-100 font-bold uppercase tracking-wider mb-6">Explorar</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Nuestras Salas</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Eventos de Empresa</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Tarjetas Regalo</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-100 font-bold uppercase tracking-wider mb-6">Contacto</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="tel:+34910000000" className="hover:text-amber-500 transition-colors">+34 910 000 000</a></li>
              <li><a href="mailto:madrid@escapology.com" className="hover:text-amber-500 transition-colors">madrid@escapology.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Escapology Madrid. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropsSection />
        <RoomsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;