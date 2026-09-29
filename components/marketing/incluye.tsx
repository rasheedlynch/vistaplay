import { Baby, Clapperboard, Compass, MonitorPlay, Trophy, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const CATEGORIES: { icon: LucideIcon; name: string; description: string }[] = [
  {
    icon: Tv,
    name: "Canales nacionales y autonómicos",
    description: "Las cadenas generalistas y autonómicas que ya conoces, en un solo lugar.",
  },
  {
    icon: Trophy,
    name: "Deportes",
    description: "Canales deportivos para seguir tus disciplinas favoritas.",
  },
  {
    icon: Clapperboard,
    name: "Cine",
    description: "Películas para todos los gustos, listas para disfrutar cuando quieras.",
  },
  {
    icon: MonitorPlay,
    name: "Series",
    description: "Temporadas completas y estrenos para maratones sin fin.",
  },
  {
    icon: Compass,
    name: "Documentales",
    description: "Contenido documental para aprender y descubrir.",
  },
  {
    icon: Baby,
    name: "Infantiles",
    description: "Programación pensada para los más pequeños de la casa.",
  },
];

export function Incluye() {
  return (
    <Section id="incluye" variant="paper">
      <Container>
        <h2 className="text-h2">Qué incluye</h2>
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
