import { Laptop, Smartphone, Tablet, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const DEVICES: { icon: LucideIcon; name: string; description: string }[] = [
  {
    icon: Smartphone,
    name: "Móvil",
    description: "Accede desde cualquier lugar con tu teléfono.",
  },
  {
    icon: Tablet,
    name: "Tablet",
    description: "Disfruta en una pantalla más grande sin perder movilidad.",
  },
  {
    icon: Laptop,
    name: "Ordenador",
    description: "Míralo desde el navegador de tu Mac o PC.",
  },
  {
    icon: Tv,
    name: "Smart TV",
    description: "Disfruta en la pantalla grande de tu salón.",
  },
];

export function Dispositivos() {
  return (
    <Section id="dispositivos" variant="tint">
      <Container>
        <h2 className="text-h2">Dispositivos</h2>
        <p className="text-lead mt-4">
          Compatible con los dispositivos que ya tienes: móvil, tablet,
          ordenador y Smart TV.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
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
