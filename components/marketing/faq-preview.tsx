import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FaqList } from "@/components/marketing/faq-list";
import { Button } from "@/components/ui/button";
import { homeFaqs } from "@/lib/faq";

export function FaqPreview() {
  return (
    <Section variant="surface">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-eyebrow mb-4">Preguntas frecuentes</p>
          <h2 className="text-h2">Lo que más nos preguntan.</h2>
          <p className="text-lead mt-4">¿Buscas una lista IPTV España con soporte real? Aquí resolvemos las dudas habituales.</p>
          <Button asChild variant="secondary" className="mt-8">
            <Link href="/preguntas-frecuentes">Ver todas las preguntas</Link>
          </Button>
        </div>
        <FaqList items={homeFaqs} />
      </Container>
    </Section>
  );
}
