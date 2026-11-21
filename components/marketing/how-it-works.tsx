import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const STEPS = [
  {
    number: "01",
    title: "Elige tu plan o empieza con la prueba",
    text: "Rellena el formulario con tus datos, el plan y tu dispositivo. No pagas nada en este paso.",
  },
  {
    number: "02",
    title: "Te contactamos con los datos de pago",
    text: "Te escribimos por email y WhatsApp con un enlace de pago seguro y las instrucciones de instalación.",
  },
  {
    number: "03",
    title: "Activa y empieza a ver",
    text: "En cuanto confirmamos tu pago, activamos tu acceso en minutos.",
  },
];

export function HowItWorks() {
  return (
    <Section>
      <Container>
        <p className="text-eyebrow mb-4">Cómo funciona</p>
        <h2 className="text-h2 max-w-2xl">Tres pasos, sin papeleo.</h2>
        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.number} className="rounded-2xl border border-border bg-surface p-7">
              <span className="font-heading text-4xl text-primary">{step.number}</span>
              <h3 className="font-heading mt-4 text-xl font-medium">{step.title}</h3>
              <p className="text-small mt-3 text-base leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
