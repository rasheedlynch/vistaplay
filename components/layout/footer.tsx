import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { LEGAL_LINKS, NAV_LINKS, ORDER_EMAIL, site } from "@/lib/site";

const PAGE_LINKS = [
  { href: "/", label: "Inicio" },
  ...NAV_LINKS,
  { href: "/prueba-gratis", label: "Prueba gratis" },
  { href: "/solicitar", label: "Solicitar" },
];

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="text-xl" />
            <p className="text-small mt-3 max-w-sm">
              Televisión en streaming para hogares en España, con soporte
              cercano y sin complicaciones.
            </p>
            <p className="text-small mt-4">
              <a href={`mailto:${ORDER_EMAIL}`} className="hover:text-foreground">
                {ORDER_EMAIL}
              </a>
            </p>
          </div>
          <nav aria-label="Páginas" className="flex flex-col gap-2.5">
            <p className="text-eyebrow mb-1">Páginas</p>
            {PAGE_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Legal" className="flex flex-col gap-2.5">
            <p className="text-eyebrow mb-1">Legal</p>
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-small mt-12 border-t border-border pt-6">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
