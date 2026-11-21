"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { DeviceMockup } from "@/components/marketing/device-mockup";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };
  const transition = { duration: reduce ? 0 : 0.6, ease: "easeOut" as const };

  return (
    <section className="dark-section relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
      {/* Single warm spotlight — one hue, no multi-colour gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <motion.div initial="hidden" animate="visible" variants={reveal} transition={transition}>
          <p className="text-eyebrow mb-5">IPTV España · Prueba gratis 24 horas</p>
          <h1 className="text-display">Cine, series y deporte en directo, en todas tus pantallas.</h1>
          <p className="text-lead mt-6">
            VistaPlay es un servicio de IPTV para España: canales nacionales e
            internacionales, fútbol y los grandes deportes en directo, cine,
            series y documentales. En tu Smart TV, Fire TV Stick, móvil u
            ordenador.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/prueba-gratis">Prueba gratis 24 horas</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/planes">Ver planes</Link>
            </Button>
          </div>
          <p className="text-small mt-5">
            IVA incluido · Sin permanencia ·{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-highlight"
            >
              Soporte por WhatsApp
            </a>
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ ...transition, delay: reduce ? 0 : 0.15 }}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <DeviceMockup />
        </motion.div>
      </Container>
    </section>
  );
}
