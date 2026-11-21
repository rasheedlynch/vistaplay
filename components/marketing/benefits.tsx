import { Clapperboard, Headset, MonitorSmartphone, Trophy, Unlock, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const BENEFITS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Tv,
    title: "Canales nacionales e internacionales",
    text: "Organizados por categorías para que encuentres lo que buscas sin perder tiempo.",
  },
  {
    icon: Trophy,
    title: "Deporte en directo",
    text: "Fútbol nacional e internacional y los grandes deportes, en directo y en alta definición.",
  },
  {
    icon: Clapperboard,
    title: "Cine, series y documentales",
    text: "Para ver a tu ritmo, con una programación pensada también para los más pequeños.",
  },
  {
    icon: MonitorSmartphone,
    title: "En todos tus dispositivos",
    text: "Smart TV, Fire TV Stick, móvil, tablet y ordenador, con un único acceso.",
  },
  {
    icon: Unlock,
    title: "Sin permanencia",
    text: "Eliges la duración que te conviene y el precio final incluye el IVA.",
  },
  {
    icon: Headset,
    title: "Soporte humano 24 horas",
    text: "Atención por WhatsApp y email, todos los días, con personas reales.",
  },
];

export function Benefits() {
  return (
    <Section variant="surface">
      <Container>
        <p className="text-eyebrow mb-4">Por qué VistaPlay</p>
        <h2 className="text-h2 max-w-2xl">Todo lo que necesitas para ver la tele, sin complicaciones.</h2>
        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon className="h-6 w-6 text-highlight" aria-hidden="true" />
              <h3 className="font-heading mt-4 text-xl font-medium text-foreground">{title}</h3>
              <p className="text-small mt-2 max-w-[38ch] text-base leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
