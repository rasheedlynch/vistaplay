import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const STEPS = [
  {
    number: "1",
    title: "Elige tu plan y envía el pedido",
    description:
      "Rellena el formulario con tus datos y el plan que prefieras. No necesitas pagar nada en este paso.",
  },
  {
    number: "2",
    title: "Recibe por email el enlace de pago y las instrucciones",
    description:
      "Te enviamos el enlace de pago y los pasos a seguir. Si prefieres ir más rápido, escríbenos por WhatsApp.",
  },
  {
    number: "3",
    title: "Activa y empieza a ver",
    description:
      "En cuanto confirmes el pago, activamos tu acceso en minutos.",
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
