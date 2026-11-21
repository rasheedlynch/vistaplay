import { Mail, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { ORDER_EMAIL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contacto y soporte por WhatsApp",
  description:
    "Contacta con VistaPlay por WhatsApp o email. Soporte humano para resolver tus dudas sobre planes, instalación y tu prueba gratis de 24 horas.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        crumb="Contacto"
        path="/contacto"
        eyebrow="Estamos para ayudarte"
        title="Contacta con VistaPlay"
        lead="Escríbenos por WhatsApp o email. Soporte humano, 24 horas todos los días."
      />
      <Section className="py-14 md:py-20">
        <Container className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-primary/70 bg-surface p-8">
            <MessageCircle className="h-7 w-7 text-highlight" aria-hidden="true" />
            <h2 className="text-h3 mt-5">WhatsApp</h2>
            <p className="text-body mt-3 flex-1 text-muted-foreground">
              La forma más rápida de resolver una duda o de empezar tu prueba.
            </p>
            <Button asChild size="lg" className="mt-8 w-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Escríbenos por WhatsApp
              </a>
            </Button>
          </div>
          <div className="flex flex-col rounded-2xl border border-border bg-surface p-8">
            <Mail className="h-7 w-7 text-highlight" aria-hidden="true" />
            <h2 className="text-h3 mt-5">Email</h2>
            <p className="text-body mt-3 flex-1 text-muted-foreground">
              Para consultas que prefieras detallar por escrito.
            </p>
            <a
              href={`mailto:${ORDER_EMAIL}`}
              className="mt-8 break-all font-heading text-xl text-highlight underline-offset-4 hover:underline"
            >
              {ORDER_EMAIL}
            </a>
          </div>
        </Container>
        <Container className="mt-10">
          <p className="text-small">
            ¿Quieres empezar? Pide la{" "}
            <Link href="/prueba-gratis" className="text-highlight underline underline-offset-4">
              prueba gratis
            </Link>{" "}
            o mira los{" "}
            <Link href="/planes" className="text-highlight underline underline-offset-4">
              planes
            </Link>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
