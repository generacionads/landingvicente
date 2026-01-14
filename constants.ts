import { Lock, Star, Award } from 'lucide-react';
import { Room, ValueProp, Testimonial } from './types';

export const ROOMS_DATA: Room[] = [
  {
    id: 'orient-express',
    title: "Murder on the Orient Express",
    tag: "Dificultad Alta",
    tagColor: "bg-red-900/50 text-red-200 border-red-700",
    imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb714d22d?q=80&w=1000&auto=format&fit=crop",
    difficulty: 5,
    players: "2-6",
    time: "60 min"
  },
  {
    id: 'scooby-doo',
    title: "Scooby-Doo and the Spooky Castle",
    tag: "Familiar",
    tagColor: "bg-purple-900/50 text-purple-200 border-purple-700",
    imageUrl: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1000&auto=format&fit=crop",
    difficulty: 3,
    players: "3-8",
    time: "60 min"
  },
  {
    id: 'antidote',
    title: "Antidote",
    tag: "Ciencia/Laboratorio",
    tagColor: "bg-emerald-900/50 text-emerald-200 border-emerald-700",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
    difficulty: 4,
    players: "2-6",
    time: "60 min"
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Salas 100% Privadas",
    description: "Nunca jugarás con extraños. La aventura es exclusiva para ti y tu equipo.",
    Icon: Lock
  },
  {
    title: "Licencias Oficiales",
    description: "Sumérgete en universos icónicos como Scooby-Doo y las novelas de Agatha Christie.",
    Icon: Star
  },
  {
    title: "Inmersión 5 Estrellas",
    description: "Escenarios de calidad cinematográfica diseñados para una experiencia envolvente.",
    Icon: Award
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos M.",
    role: "Entusiasta de Escape Rooms",
    text: "He hecho más de 20 salas en Madrid y esta es, sin duda, la más inmersiva. El Orient Express es una obra de arte."
  },
  {
    id: 2,
    name: "Elena R.",
    role: "Plan Familiar",
    text: "Fuimos con los niños a la sala de Scooby-Doo y fue fantástico. El personal es encantador y la ambientación increíble."
  },
  {
    id: 3,
    name: "Javier S.",
    role: "Team Building",
    text: "Organizamos un evento de empresa aquí. La sala Antidote nos obligó a colaborar como nunca. Muy recomendado."
  }
];