import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const STEPS = [
  {
    number: "1",
    title: "Elige tu plan",
    description:
      "Compara los planes de 1, 3 y 12 meses y elige el que mejor se ajuste a ti.",
  },
  {
    number: "2",
    title: "Te contactamos por WhatsApp",
    description:
      "Recibimos tu solicitud y te escribimos para confirmar los datos y el pago.",
  },
  {
    number: "3",
    title: "Activa y empieza a ver",
    description:
      "En cuanto todo esté listo, activamos tu acceso y puedes empezar a disfrutarlo.",
  },
];

export function ComoFunciona() {
  return (
    <Section id="como-funciona" variant="tint">
      <Container>
        <h2 className="text-h2">Cómo funciona</h2>
        <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-line bg-card p-6 shadow-soft"
            >
              <span className="font-heading text-3xl font-bold text-brand">
                {step.number}
              </span>
              <p className="font-heading mt-3 text-lg font-semibold text-ink">
                {step.title}
              </p>
              <p className="text-body mt-2 text-ink-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
