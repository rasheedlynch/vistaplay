"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { OPEN_SETTINGS_EVENT, setConsent, useConsent } from "@/lib/consent";

export function CookieBanner() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);

  // "Configurar cookies" in the footer reopens the banner.
  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  if (consent === "pending" || (consent !== "none" && !reopened)) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setReopened(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-text"
        className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-6 shadow-lift"
      >
        <h2 id="cookie-banner-title" className="font-heading text-lg font-medium">
          Tu privacidad
        </h2>
        <p id="cookie-banner-text" className="text-small mt-2 text-base leading-relaxed">
          Usamos cookies necesarias para que el sitio funcione y, solo si
          lo aceptas, el Píxel de Meta para medir la eficacia de nuestra
          publicidad. Puedes cambiar tu elección cuando quieras. Más
          información en la{" "}
          <Link href="/politica-de-cookies" className="text-highlight underline underline-offset-4">
            Política de cookies
          </Link>
          .
        </p>
        {consent !== "none" && (
          <p className="text-small mt-2">
            Elección actual: {consent === "granted" ? "aceptadas" : "rechazadas"}.
          </p>
        )}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button type="button" variant="secondary" className="sm:min-w-36" onClick={() => choose("denied")}>
            Rechazar
          </Button>
          <Button type="button" variant="secondary" className="sm:min-w-36" onClick={() => choose("granted")}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
}
