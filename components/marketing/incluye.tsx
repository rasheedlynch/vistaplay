import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const CATEGORIES = [
  "Canales nacionales y autonómicos",
  "Deportes",
  "Cine",
  "Series",
  "Documentales",
  "Infantiles",
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
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {CATEGORIES.map((category) => (
            <li
              key={category}
              className="rounded-2xl border border-line bg-card p-6 text-center font-heading text-base font-semibold text-ink shadow-soft"
            >
              {category}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
