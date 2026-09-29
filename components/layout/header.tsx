"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#planes", label: "Planes" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-paper transition-colors",
        scrolled ? "border-line" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* TODO(client): replace text wordmark with logo asset */}
        <Link href="/" className="font-heading text-xl font-bold text-ink">
          VistaPlay
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#planes">Ver planes</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Abrir menú"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink md:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-8 bg-paper">
            <SheetTitle className="font-heading text-lg">Menú</SheetTitle>
            <nav aria-label="Menú móvil" className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="text-base font-medium text-ink"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Button asChild size="default">
                <a href="#planes">Ver planes</a>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
