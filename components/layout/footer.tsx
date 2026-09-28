import Link from "next/link";

import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "#planes", label: "Planes" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

const LEGAL_LINKS = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/politica-privacidad", label: "Política de privacidad" },
  { href: "/politica-cookies", label: "Política de cookies" },
  { href: "/condiciones-contratacion", label: "Condiciones de contratación" },
  { href: "/derecho-desistimiento", label: "Derecho de desistimiento" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-bold text-ink">
              {site.name}
            </p>
            <p className="text-small mt-2 max-w-xs">
              Televisión en streaming para hogares en España, con soporte
              cercano y sin complicaciones.
            </p>
          </div>
          <nav aria-label="Navegación" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-small text-ink hover:text-coral-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <nav aria-label="Legal" className="flex flex-col gap-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-small text-ink hover:text-coral-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-small mt-10 border-t border-line pt-6">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
