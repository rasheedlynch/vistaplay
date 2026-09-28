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
          <h1 className="text-display text-ink">
            Televisión en streaming, sin complicaciones
          </h1>
          <p className="text-lead mt-6">
            VistaPlay lleva canales nacionales y autonómicos, deporte, cine,
            series y documentales a tu móvil y a tu televisor, con un equipo
            que te acompaña por WhatsApp.
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
