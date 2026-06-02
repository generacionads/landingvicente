import { Lock, Star, Award } from 'lucide-react';
import { Room, ValueProp, Testimonial } from './types';

export const ROOMS_DATA: Room[] = [
  {
    id: 'emergencia-submarina',
    title: "Emergencia Submarina",
    tag: "Dificultad Alta",
    tagColor: "bg-red-900/50 text-red-200 border-red-700",
    imageUrl: "https://i.ibb.co/8V93yyY/emergencia-submarina.webp", 
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
    imageUrl: "https://i.ibb.co/Jj4VfR19/mansion-crimen.webp", 
    difficulty: 3,
    players: "2-6",
    time: "60 min",
    bookingUrl: "https://widget.bookgy.com/bkg_seleccionar_hora_widget_v2.php?coeyt72FhIJxVllfWE%252BGvr6%252Bg5GHhm5tdm17gJW7s3qBgHWEeoFxcIq0xKyWpVl9aXp4eHiiw8S4eHl4hmJZVXFtk7jFw3KRh4ZubXZte4CkmLh1hXiGe29ycXiis7u9cn98d3SFg3pyira3wW5YfHhodX1ucorExLB0e4KChH14bHCIw9HDeoKCh2JMcml7irDEzoV7g4N4hXNxe4iyxrB%252Bd4GIamNVa2qVtrPBkIR4h2p4hWl8orO7wXZ1h3Vya318boCVtbCDeXSGhHpwenOIw7PCkIR4e2ZyfodtjMG3soVzgHlzenRlT4awxLZyhJKHenlyenKTsru%252Bf3eGk2lvgW1sl7C%252FtH%252BGeHFLaXB6cITB0bB0hnyKbmpwbG6Wzra4g3d2iGZzdHZ9iKyYwXZ4eIZqeGyQnbff5algYaqrnFSUm4yk3%252BHboJmsYoiVnFdPtuTl0qObo5eOlZ2NnKLi19uWlZadlJSQjIq2rJjSpqSmo5iFoo2VqNLV2KCglJiUmWxObJi%252Fwb2QhoV9bG10emZpuLbCgHV8g4R6gXFwirTErFd4eHdtZ458e4y2ubSDb1l8dHhwh32VuLm2doRwWnBvfntskqyY4paZqKaOipCMZqbe1%252BilaWV6jW95oH%252Bv29jGdldlaVdodp6beZSkpGN0mmlsbpeVXrfT36BomX2LXJlimWuqt8m0lqF5rIhvoFihjujJ34eebJV9lmONcazY6aeEZph8kVqXlXOdxcq1pZ1qnmudYnN7q6PM5JOKjaiKWnKTlo%252FXo9eJm3qZV1%252Boi4Gs2OWmpmuWol5ek1t8idal36qbpZVYnYZdgqm32t6VimSpiJWhbaGPsaLUZX12nG1XY4pxhrjpqHl2mKNwaZdac5DS39tom6V4aqCefmCqo8CjmYqBrIpamKGhtbGXoWZkdZhZbXiJlpHF06GiiKemdWiacXt316TfZZqKoF2VoXdgusfMoJllia2GWWBgi7KyyOOTdXeZfXl2kHGz5tfdgHuqa3VpmnF7d9SkyaqYopiZkHxvXLbeyOmYep%252BuipSBlH130OnnfYysnG9xd42Xr%252BjX3XyGpqaaS2FdW4XVpdR4nWWgm42GWZyvprWUY2dlepluVFpedbG51Hl4f5V9aGWLcpexotFzYpuinnGRlZm60bmliKyllVmNYoxbrLbM6ZV6jW2OcaiBoJvJptR6jKSZbJ%252BAloup1afQnZmMlZaYnW58mNym6JxlWGZaWHFwi7K53%252BKKoZyKk2yTeJ24w96fooGVo1qLfpSDdb3gun2bZG2afZuCiqfbvMKCnHylV5h5knyz4MXcoGecepSVYX6akbvIoXx1mqBvj4SVgLu%252B1LmaV2VpV2ymiluU1%252BHFapR6ZVWLnIKZuLvUsph6iWyMWoFekJu16dijhnima4pjjXGn48yjZmqYaJ5YpIp8h9Gj22mWe5ycjmJaf7i736GVoYWrfJRxno%252Bx4%252BXaoqlYZlpZcw%253D%253D",
  },
  {
    id: 'code',
    title: "Th3 C0d3",
    tag: "Ciencia/Laboratorio",
    tagColor: "bg-emerald-900/50 text-emerald-200 border-emerald-700",
    imageUrl: "https://i.ibb.co/NgRY1LF5/the-code.webp", 
    difficulty: 4,
    players: "2-6",
    time: "60 min",
    bookingUrl: "https://widget.bookgy.com/bkg_seleccionar_hora_widget_v2.php?coeyt72FhIJxVllfWE%252BGvr6%252Bg5GHhm5tdm17gJW7s3qBgHWEeoFxcIq0xKyWpVl9aXp4eHiiw8S4eHl4hmJZVXFtk7jFw3KRh4ZubXZte4ChmLh1hXiGe29ycXiis7u9cn98d3SFg3pyira3wW5YfHhodX1ucorExLB0e4KChH14bHCIw9HDeoKCh2JMcml7irDEzoV7g4N4hXNxe4iyxrB%252Bd4GIamNVa2qVtrPBkIR4h2p4hWl8orO7wXZ1h3Vya318boCVtbCDeXSGhHpwenOIw7PCkIR4e2ZyfodtjMG3soVzgHlzenRlT4awxLZyhJKHenlyenKTsru%252Bf3eGk2lvgW1sl7C%252FtH%252BGeHFLaXB6cITB0bB0hnyKbmpwbG6Wzra4g3d2iGZzdHZ9iKyYwXZ4eIZqeGyQnbff5algYaqrnFSUm4yk3%252BHboJmsYoiVnFdPtuTl0qObo5eOlZ2NnKLi19uWlZadlJSQjIq2rJjSpqSmo5iFoo2VqNLV2KCglJiUmWxObJi%252Fwb2QhoV9bG10emZpuLbCgHV8g4R6gXFwirTErFd4eHdtZ458e4y2ubSDb1l8dHhwh32VuLm2doRwWnBvfntskqyY4paZqKaOipCMZqbe1%252BilaWV6jW95oH%252Bv29jGdldlaVdodp6beZSkpGN0mmlsbpeVXrfT36BomX2LXJlimWuqt8m0lqF5rIhvoFihjujJ34eebJV9lmONcazY6aeEZph8kVqXlXOdxcq1pZ1qnmudYnN7q6PM5JOKjaiKWnKQlo%252FXo9eJm3qZV1%252Boi4Gs2OWmpmuWol5ek1t8idal36qbpZVYnYZdgqm32t6VimSpiJWhbaGPsaLUZX12nG1XY4pxhrjpqHl2mKNwaZdac5DS39tom6V4aqCefmCqo8CjmYqBrIpamKGhtbGXoWZkdZhZbXiJlpHF06GiiKemdWiacXt316TfZZqKoF2VoXdgusfMoJllia2GWWBgi7KyyOOTdXeZfXl2kHGz5tfdgHuqa3VpmnF7d9SkyaqYopiZkHxvXLbeyOmYep%252BuipSBlH130OnnfYysnG9xd42Xr%252BjX3XyGpqaaS2FdW4XVpdR4nWWgm42GWZyvprWUY2dlepluVFpedbG51Hl4f5V9aGWLcpexotFzYpuinnGRlZm60bmliKyllVmNYoxbrLbM6ZV6jW2OcaiBoJvJptR6jKSZbJ%252BAloup1afQnZmMlZaYnW58mNym6JxlWGZaWHFwi7K53%252BKKoZyKk2yTeJ24w96fooGVo1qLfpSDdb3gun2bZG2afZuCiqfbvMKCnHylV5h5knyz4MXcoGecepSVYX6akbvIoXx1mqBvj4SVgLu%252B1LmaV2VpV2ymiluU1%252BHFapR6ZVWLnIKZuLvUsph6iWyMWoFekJu16dijhnima4pjjXGn48yjZmqYaJ5YpIp8h9Gj22mWe5ycjmJaf7i736GVoYWrfJRxno%252Bx4%252BXaoqlYZlpZcw%253D%253D",
  },
  {
    id: 'arizona',
    title: "Tiroteo en Arizona",
    tag: "Aventura",
    tagColor: "bg-amber-900/50 text-amber-200 border-amber-700",
    imageUrl: "https://i.ibb.co/Rp8XdSy5/arizona.webp",
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
    title: "Variedad Temática",
    description: "Desde el lejano oeste hasta las profundidades del océano. Sumérgete en historias únicas diseñadas para vivir una aventura diferente en cada visita.",
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
    name: "N.B.",
    role: "Aficionados a los Escape Rooms",
    text: "Somos asiduos a este tipo de actividad con amigos, y este escape room en Alcalá de Henares está increíble. Perfectamente ambientado, muy emocionante y divertidísimo, salimos todos encantados. Nuestra game máster, majísima. ¡Volveremos sí o sí para disfrutar de todos los demás!"
  },
  {
    id: 2,
    name: "Carolina R.",
    role: "Plan con Amigos",
    text: "Nos encantó, estuvimos en la sala del submarino y estuvo complicada, no logramos salir, pero la pasamos genial. Los trabajadores súper amables y simpáticos. ¡Totalmente recomendable!"
  },
  {
    id: 3,
    name: "Sonia V.",
    role: "Plan en Pareja",
    text: "Una experiencia genial, nos costó empezar pero luego conseguimos salir. ¡La gente maravillosa! Sin duda repetiremos para hacer las salas que nos quedan."
  }
];