import { Lock, Star, Award } from 'lucide-react';
import { Room, ValueProp, Testimonial } from './types';

export const ROOMS_DATA: Room[] = [
  {
    id: 'emergencia-submarina',
    title: "Emergencia Submarina",
    tag: "Dificultad Alta",
    tagColor: "bg-red-900/50 text-red-200 border-red-700",
    imageUrl: "/emergencia-submarina.webP",
    difficulty: 5,
    players: "2-6",
    time: "60 min",
    bookingUrl: "https://widget.bookgy.com/bkg_seleccionar_hora_widget_v2.php?coeyt72FhIJxVllfWE%252BGvr6%252Bg5GHhm5tdm17gJW7s3qBgHWEeoFxcIq0xKyWpVl9aXp4eHiiw8S4eHl4hmJZVXFtk7jFw3KRh4ZubXZte4CjmLh1hXiGe29ycXiis7u9cn98d3SFg3pyira3wW5YfHhodX1ucorExLB0e4KChH14bHCIw9HDeoKCh2JMcml7irDEzoV7g4N4hXNxe4iyxrB%252Bd4GIamNVa2qVtrPBkIR4h2p4hWl8orO7wXZ1h3Vya318boCVtbCDeXSGhHpwenOIw7PCkIR4e2ZyfodtjMG3soVzgHlzenRlT4awxLZyhJKHenlyenKTsru%252Bf3eGk2lvgW1sl7C%252FtH%252BGeHFLaXB6cITB0bB0hnyKbmpwbG6Wzra4g3d2iGZzdHZ9iKyYwXZ4eIZqeGyQnbff5algYaqrnFSUm4yk3%252BHboJmsYoiVnFdPtuTl0qObo5eOlZ2NnKLi19uWlZadlJSQjIq2rJjSpqSmo5iFoo2VqNLV2KCglJiUmWxObJi%252Fwb2QhoV9bG10emZpuLbCgHV8g4R6gXFwirTErFd4eHdtZ458e4y2ubSDb1l8dHhwh32VuLm2doRwWnBvfntskqyY4paZqKaOipCMZqbe1%252BilaWV6jW95oH%252Bv29jGdldlaVdodp6beZSkpGN0mmlsbpeVXrfT36BomX2LXJlimWuqt8m0lqF5rIhvoFihjujJ34eebJV9lmONcazY6aeEZph8kVqXlXOdxcq1pZ1qnmudYnN7q6PM5JOKjaiKWnKSlo%252FXo9eJm3qZV1%252Boi4Gs2OWmpmuWol5ek1t8idal36qbpZVYnYZdgqm32t6VimSpiJWhbaGPsaLUZX12nG1XY4pxhrjpqHl2mKNwaZdac5DS39tom6V4aqCefmCqo8CjmYqBrIpamKGhtbGXoWZkdZhZbXiJlpHF06GiiKemdWiacXt316TfZZqKoF2VoXdgusfMoJllia2GWWBgi7KyyOOTdXeZfXl2kHGz5tfdgHuqa3VpmnF7d9SkyaqYopiZkHxvXLbeyOmYep%252BuipSBlH130OnnfYysnG9xd42Xr%252BjX3XyGpqaaS2FdW4XVpdR4nWWgm42GWZyvprWUY2dlepluVFpedbG51Hl4f5V9aGWLcpexotFzYpuinnGRlZm60bmliKyllVmNYoxbrLbM6ZV6jW2OcaiBoJvJptR6jKSZbJ%252BAloup1afQnZmMlZaYnW58mNym6JxlWGZaWHFwi7K53%252BKKoZyKk2yTeJ24w96fooGVo1qLfpSDdb3gun2bZG2afZuCiqfbvMKCnHylV5h5knyz4MXcoGecepSVYX6akbvIoXx1mqBvj4SVgLu%252B1LmaV2VpV2ymiluU1%252BHFapR6ZVWLnIKZuLvUsph6iWyMWoFekJu16dijhnima4pjjXGn48yjZmqYaJ5YpIp8h9Gj22mWe5ycjmJaf7i736GVoYWrfJRxno%252Bx4%252BXaoqlYZlpZcw%253D%253D",
  },
  {
    id: 'mansion-crimen',
    title: "La Mansión Del Crimen",
    tag: "Familiar",
    tagColor: "bg-purple-900/50 text-purple-200 border-purple-700",
    imageUrl: "/images/la-mansion-del-crimen.webp",
    difficulty: 3,
    players: "3-8",
    time: "60 min",
    bookingUrl: "12.png",
  },
  {
    id: 'code',
    title: "Th3 C0d3",
    tag: "Ciencia/Laboratorio",
    tagColor: "bg-emerald-900/50 text-emerald-200 border-emerald-700",
    imageUrl: "/emergencia-submarina.webp",
    difficulty: 4,
    players: "2-6",
    time: "60 min",
    bookingUrl: "https://widget.bookgy.com/bkg_seleccionar_hora_widget_v2.php?coeyt72FhIJxVllfWE%252BGvr6%252Bg5GHhm5tdm17gJW7s3qBgHWEeoFxcIq0xKyWpVl9aXp4eHiiw8S4eHl4hmJZVXFtk7jFw3KRh4ZubXZte4ChmLh1hXiGe29ycXiis7u9cn98d3SFg3pyira3wW5YfHhodX1ucorExLB0e4KChH14bHCIw9HDeoKCh2JMcml7irDEzoV7g4N4hXNxe4iyxrB%252Bd4GIamNVa2qVtrPBkIR4h2p4hWl8orO7wXZ1h3Vya318boCVtbCDeXSGhHpwenOIw7PCkIR4e2ZyfodtjMG3soVzgHlzenRlT4awxLZyhJKHenlyenKTsru%252Bf3eGk2lvgW1sl7C%252FtH%252BGeHFLaXB6cITB0bB0hnyKbmpwbG6Wzra4g3d2iGZzdHZ9iKyYwXZ4eIZqeGyQnbff5algYaqrnFSUm4yk3%252BHboJmsYoiVnFdPtuTl0qObo5eOlZ2NnKLi19uWlZadlJSQjIq2rJjSpqSmo5iFoo2VqNLV2KCglJiUmWxObJi%252Fwb2QhoV9bG10emZpuLbCgHV8g4R6gXFwirTErFd4eHdtZ458e4y2ubSDb1l8dHhwh32VuLm2doRwWnBvfntskqyY4paZqKaOipCMZqbe1%252BilaWV6jW95oH%252Bv29jGdldlaVdodp6beZSkpGN0mmlsbpeVXrfT36BomX2LXJlimWuqt8m0lqF5rIhvoFihjujJ34eebJV9lmONcazY6aeEZph8kVqXlXOdxcq1pZ1qnmudYnN7q6PM5JOKjaiKWnKQlo%252FXo9eJm3qZV1%252Boi4Gs2OWmpmuWol5ek1t8idal36qbpZVYnYZdgqm32t6VimSpiJWhbaGPsaLUZX12nG1XY4pxhrjpqHl2mKNwaZdac5DS39tom6V4aqCefmCqo8CjmYqBrIpamKGhtbGXoWZkdZhZbXiJlpHF06GiiKemdWiacXt316TfZZqKoF2VoXdgusfMoJllia2GWWBgi7KyyOOTdXeZfXl2kHGz5tfdgHuqa3VpmnF7d9SkyaqYopiZkHxvXLbeyOmYep%252BuipSBlH130OnnfYysnG9xd42Xr%252BjX3XyGpqaaS2FdW4XVpdR4nWWgm42GWZyvprWUY2dlepluVFpedbG51Hl4f5V9aGWLcpexotFzYpuinnGRlZm60bmliKyllVmNYoxbrLbM6ZV6jW2OcaiBoJvJptR6jKSZbJ%252BAloup1afQnZmMlZaYnW58mNym6JxlWGZaWHFwi7K53%252BKKoZyKk2yTeJ24w96fooGVo1qLfpSDdb3gun2bZG2afZuCiqfbvMKCnHylV5h5knyz4MXcoGecepSVYX6akbvIoXx1mqBvj4SVgLu%252B1LmaV2VpV2ymiluU1%252BHFapR6ZVWLnIKZuLvUsph6iWyMWoFekJu16dijhnima4pjjXGn48yjZmqYaJ5YpIp8h9Gj22mWe5ycjmJaf7i736GVoYWrfJRxno%252Bx4%252BXaoqlYZlpZcw%253D%253D",
  },
  {
    id: 'arizona',
    title: "Tiroteo en Arizona",
    tag: "Ciencia/Laboratorio",
    tagColor: "bg-emerald-900/50 text-emerald-200 border-emerald-700",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
    difficulty: 4,
    players: "2-6",
    time: "60 min",
    bookingUrl: "https://widget.bookgy.com/bkg_seleccionar_hora_widget_v2.php?coeyt72FhIJxVllfWE%252BGvr6%252Bg5GHhm5tdm17gJW7s3qBgHWEeoFxcIq0xKyWpVl9aXp4eHiiw8S4eHl4hmJZVXFtk7jFw3KRh4ZubXZte4CgmLh1hXiGe29ycXiis7u9cn98d3SFg3pyira3wW5YfHhodX1ucorExLB0e4KChH14bHCIw9HDeoKCh2JMcml7irDEzoV7g4N4hXNxe4iyxrB%252Bd4GIamNVa2qVtrPBkIR4h2p4hWl8orO7wXZ1h3Vya318boCVtbCDeXSGhHpwenOIw7PCkIR4e2ZyfodtjMG3soVzgHlzenRlT4awxLZyhJKHenlyenKTsru%252Bf3eGk2lvgW1sl7C%252FtH%252BGeHFLaXB6cITB0bB0hnyKbmpwbG6Wzra4g3d2iGZzdHZ9iKyYwXZ4eIZqeGyQnbff5algYaqrnFSUm4yk3%252BHboJmsYoiVnFdPtuTl0qObo5eOlZ2NnKLi19uWlZadlJSQjIq2rJjSpqSmo5iFoo2VqNLV2KCglJiUmWxObJi%252Fwb2QhoV9bG10emZpuLbCgHV8g4R6gXFwirTErFd4eHdtZ458e4y2ubSDb1l8dHhwh32VuLm2doRwWnBvfntskqyY4paZqKaOipCMZqbe1%252BilaWV6jW95oH%252Bv29jGdldlaVdodp6beZSkpGN0mmlsbpeVXrfT36BomX2LXJlimWuqt8m0lqF5rIhvoFihjujJ34eebJV9lmONcazY6aeEZph8kVqXlXOdxcq1pZ1qnmudYnN7q6PM5JOKjaiKWnKPlo%252FXo9eJm3qZV1%252Boi4Gs2OWmpmuWol5ek1t8idal36qbpZVYnYZdgqm32t6VimSpiJWhbaGPsaLUZX12nG1XY4pxhrjpqHl2mKNwaZdac5DS39tom6V4aqCefmCqo8CjmYqBrIpamKGhtbGXoWZkdZhZbXiJlpHF06GiiKemdWiacXt316TfZZqKoF2VoXdgusfMoJllia2GWWBgi7KyyOOTdXeZfXl2kHGz5tfdgHuqa3VpmnF7d9SkyaqYopiZkHxvXLbeyOmYep%252BuipSBlH130OnnfYysnG9xd42Xr%252BjX3XyGpqaaS2FdW4XVpdR4nWWgm42GWZyvprWUY2dlepluVFpedbG51Hl4f5V9aGWLcpexotFzYpuinnGRlZm60bmliKyllVmNYoxbrLbM6ZV6jW2OcaiBoJvJptR6jKSZbJ%252BAloup1afQnZmMlZaYnW58mNym6JxlWGZaWHFwi7K53%252BKKoZyKk2yTeJ24w96fooGVo1qLfpSDdb3gun2bZG2afZuCiqfbvMKCnHylV5h5knyz4MXcoGecepSVYX6akbvIoXx1mqBvj4SVgLu%252B1LmaV2VpV2ymiluU1%252BHFapR6ZVWLnIKZuLvUsph6iWyMWoFekJu16dijhnima4pjjXGn48yjZmqYaJ5YpIp8h9Gj22mWe5ycjmJaf7i736GVoYWrfJRxno%252Bx4%252BXaoqlYZlpZcw%253D%253D",
  },
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