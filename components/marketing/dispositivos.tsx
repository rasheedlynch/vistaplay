import { Cast, Smartphone, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

// TODO(client): confirm the real list of supported device types/platforms
const DEVICES: { icon: LucideIcon; name: string; description: string }[] = [
  {
    icon: Smartphone,
    name: "Smartphones y tablets (Android e iOS)",
    description: "Lleva VistaPlay contigo, estés donde estés.",
  },
  {
    icon: Tv,
    name: "Smart TV",
    description: "Disfruta en la pantalla grande de tu salón.",
  },
  {
    icon: Cast,
    name: "Dispositivos de streaming para TV",
    description: "Conecta tu televisor a través de tu dispositivo de streaming.",
  },
];

export function Dispositivos() {
  return (
    <Section id="dispositivos" variant="tint">
      <Container>
        <h2 className="text-h2">Dispositivos</h2>
        <p className="text-lead mt-4">
          Accede a VistaPlay desde los dispositivos que ya usas en casa.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {DEVICES.map(({ icon: Icon, name, description }) => (
            <li
              key={name}
              className="rounded-2xl border border-line bg-card p-6 shadow-soft"
            >
              <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
              <p className="font-heading mt-3 text-base font-semibold text-ink">
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
