import { MessageCircle, MonitorSmartphone, ShieldCheck, Unlock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const POINTS: { icon: LucideIcon; text: string }[] = [
  {
    icon: ShieldCheck,
    // TODO(client): confirm exact licensing wording
    text: "Servicio con licencia a través de nuestro proveedor mayorista.",
  },
  {
    icon: MessageCircle,
    // TODO(client): confirm support is staffed by people, not a bot
    text: "Soporte humano por WhatsApp.",
  },
  {
    icon: MonitorSmartphone,
    text: "Disponible en tu móvil y en tu televisor.",
  },
  {
    icon: Unlock,
    // TODO(client): confirm "sin permanencia" contract terms — see CLIENT_QUESTIONS.md
    text: "Sin permanencia.",
  },
];

export function TrustStrip() {
  return (
    <Section variant="tint" className="py-10 md:py-14">
      <Container>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3">
              <Icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span className="text-body text-ink">{text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
