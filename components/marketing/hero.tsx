"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TvIllustration } from "@/components/marketing/tv-illustration";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const whatsappUrl = getWhatsAppUrl(
    "Hola, me gustaría más información sobre VistaPlay."
  );

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };
  const transition = { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" as const };

  return (
    <Section variant="paper" className="pb-16 pt-12 md:pb-24 md:pt-16">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={transition}
        >
          {/* TODO(client): confirm exact licensing wording — see CLIENT_QUESTIONS.md #7. Requested copy said "Servicio de IPTV con licencia" (asserted); using the already-approved neutral eyebrow until confirmed. */}
          <p className="text-small mb-3 uppercase tracking-wide">
            Servicio de IPTV · España
          </p>
          <h1 className="text-display text-ink">
            El deporte en directo, el cine y las series. Sin complicaciones.
          </h1>
          {/* TODO(client): confirm exact licensing wording — see CLIENT_QUESTIONS.md #7. Requested copy said "autorizado para España" (banned wording per CLAUDE.md); using the already-approved neutral phrase instead. */}
          <p className="text-lead mt-6">
            VistaPlay es un servicio de IPTV para España, con licencia a
            través de nuestro proveedor mayorista: canales nacionales e
            internacionales, las grandes competiciones de fútbol europeo —
            LaLiga, Premier League, Champions League, UEFA Nations League y
            más — y un catálogo de cine y series bajo demanda. En tu móvil,
            tu tablet, tu ordenador y tu Smart TV.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
          <p className="text-small mt-4">
            Sin permanencia · IVA incluido · Garantía de 24 horas
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.15 }}
          className="mx-auto w-full max-w-md"
        >
          <TvIllustration />
        </motion.div>
      </Container>
    </Section>
  );
}
