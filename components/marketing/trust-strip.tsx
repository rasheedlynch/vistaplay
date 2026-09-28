import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const POINTS = [
  // TODO(client): confirm exact licensing wording
  "Servicio con licencia a través de nuestro proveedor mayorista.",
  // TODO(client): confirm support is staffed by people, not a bot
  "Soporte humano por WhatsApp.",
  "Disponible en tu móvil y en tu televisor.",
  // TODO(client): confirm "sin permanencia" contract terms — see CLIENT_QUESTIONS.md
  "Sin permanencia.",
];

export function TrustStrip() {
  return (
    <Section variant="tint" className="py-10 md:py-14">
      <Container>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point) => (
            <li key={point} className="text-body text-ink">
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
