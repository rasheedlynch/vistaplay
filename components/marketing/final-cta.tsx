import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/site";

export function FinalCta() {
  const whatsappUrl = getWhatsAppUrl(
    "Hola, me gustaría más información sobre VistaPlay."
  );

  return (
    <Section id="contacto" variant="tint">
      <Container className="text-center">
        <h2 className="text-h2">¿Empezamos?</h2>
        <p className="text-lead mx-auto mt-4">
          Cuéntanos qué plan te interesa y te acompañamos en todo el proceso.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href="#planes">Ver planes</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a
              href={whatsappUrl ?? "#planes"}
              target={whatsappUrl ? "_blank" : undefined}
              rel={whatsappUrl ? "noopener noreferrer" : undefined}
            >
              Escríbenos por WhatsApp
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
