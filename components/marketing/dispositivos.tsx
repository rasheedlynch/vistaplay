import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

// TODO(client): confirm the real list of supported device types/platforms
const DEVICES = [
  "Smartphones y tablets (Android e iOS)",
  "Smart TV",
  "Dispositivos de streaming para TV",
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
          {DEVICES.map((device) => (
            <li
              key={device}
              className="rounded-2xl border border-line bg-card p-6 text-center text-body text-ink shadow-soft"
            >
              {device}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
