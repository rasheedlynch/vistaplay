import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export function CtaBanner({
  title = "¿Empezamos?",
  className,
  text = "Pide tu prueba gratis de 24 horas o elige directamente tu plan. Si dudas, te acompañamos por WhatsApp.",
}: {
  title?: string;
  text?: string;
  className?: string;
}) {
  return (
    <Section variant="dark" className={className}>
      <Container className="text-center">
        <h2 className="text-h2 mx-auto max-w-2xl">{title}</h2>
        <p className="text-lead mx-auto mt-4">{text}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/prueba-gratis">Prueba gratis 24 horas</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/planes">Ver planes</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Escríbenos por WhatsApp
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
