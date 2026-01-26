import React from 'react';
import { MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

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
              La experiencia de escape room premium líder en el mundo, en Alcalá de Henares, localidad Patrimonio de la Humanidad, a veinte minutos de Madrid. ¿Tienes lo que se necesita para escapar?
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
                Calle Nueva, 6.<br />
                28801. Alcalá de Henares.<br />
                Madrid.
              </p>
            </div>
            <a 
              href="https://www.google.com/maps/place/Escapology+Escape+Rooms+Madrid/@40.4821235,-3.3678247,17z/data=!4m15!1m8!3m7!1s0xd424912f2cc6e35:0x189cd548612adf03!2sC.+Nueva,+6,+28801+Alcal%C3%A1+de+Henares,+Madrid!3b1!8m2!3d40.4821235!4d-3.3678247!16s%2Fg%2F11c13hc08d!3m5!1s0xd4249e1599883bf:0x931bb5b71c9e9d6d!8m2!3d40.4821239!4d-3.3679966!16s%2Fg%2F11h_79slpd?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-600 text-sm font-bold border-b border-amber-600/30 hover:border-amber-600 pb-0.5 transition-all"
            >
              Ver en Google Maps
            </a>
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
              <li><a href="tel:+34613848281" className="hover:text-amber-500 transition-colors">613 848 281</a></li>
              <li><a href="mailto:info@escapadelaburrimiento.com" className="hover:text-amber-500 transition-colors">info@escapadelaburrimiento.com</a></li>
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

export default Footer;