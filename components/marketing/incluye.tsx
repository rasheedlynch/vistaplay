import { Baby, Clapperboard, Compass, MonitorPlay, Trophy, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const CATEGORIES: { icon: LucideIcon; name: string; description: string }[] = [
  {
    icon: Trophy,
    name: "Deporte en directo",
    description:
      "LaLiga, Premier League, Champions League, UEFA Nations League y más grandes competiciones europeas, en directo y en alta definición.",
  },
  {
    icon: Tv,
    name: "Canales nacionales e internacionales",
    description:
      "Organizados por categorías para que encuentres lo que buscas sin perder tiempo.",
  },
  {
    icon: Clapperboard,
    name: "Cine y series bajo demanda",
    description:
      "Un catálogo de películas y temporadas completas para ver a tu ritmo, sin horarios.",
  },
  {
    icon: Baby,
    name: "Infantil",
    description: "Programación segura y pensada para los más pequeños de la casa.",
  },
  {
    icon: Compass,
    name: "Documentales",
    description: "Para aprender y descubrir, cuando te apetezca.",
  },
  {
    icon: MonitorPlay,
    name: "Todas tus pantallas",
    description:
      "Empieza a ver en el móvil y termina en el televisor del salón. Un acceso, todos tus dispositivos.",
  },
];

export function Incluye() {
  return (
    <Section id="incluye" variant="paper">
      <Container>
        <h2 className="text-h2">Todo lo que incluye tu suscripción</h2>
        <p className="text-lead mt-4">
          Un único acceso con el contenido organizado por categorías, para
          que encuentres lo que buscas sin complicarte.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {CATEGORIES.map(({ icon: Icon, name, description }) => (
            <li
              key={name}
              className="rounded-2xl border border-line bg-card p-4 shadow-soft sm:p-6"
            >
              <Icon className="h-5 w-5 text-brand sm:h-6 sm:w-6" aria-hidden="true" />
              <p className="font-heading mt-3 text-sm font-semibold text-ink sm:text-base">
                {name}
              </p>
              <p className="text-small mt-1">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
