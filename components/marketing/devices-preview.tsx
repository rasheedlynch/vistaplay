import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { DeviceIcon } from "@/components/marketing/device-icon";
import { Button } from "@/components/ui/button";
import { deviceGuides } from "@/lib/devices";

export function DevicesPreview() {
  return (
    <Section>
      <Container>
        <p className="text-eyebrow mb-4">Dispositivos</p>
        <h2 className="text-h2 max-w-2xl">Compatible con los dispositivos que ya tienes.</h2>
        <p className="text-lead mt-4">
          Smart TV, Fire TV Stick, móvil, tablet y ordenador: elige dónde quieres verlo.
        </p>
        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {deviceGuides.map((device) => (
            <li key={device.slug} className="rounded-2xl border border-border bg-surface p-5">
              <DeviceIcon icon={device.icon} className="h-6 w-6 text-primary" />
              <p className="font-heading mt-4 text-lg font-medium leading-snug">{device.name}</p>
            </li>
          ))}
        </ul>
        <Button asChild variant="secondary" className="mt-10">
          <Link href="/dispositivos">Ver cómo se instala en cada dispositivo</Link>
        </Button>
      </Container>
    </Section>
  );
}
