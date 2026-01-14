import { LucideIcon } from 'lucide-react';

export interface Room {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  imageUrl: string;
  difficulty: number; // 1-5
  players: string;
  time: string;
}

export interface ValueProp {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
}