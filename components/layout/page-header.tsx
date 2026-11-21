import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { getBreadcrumbJsonLd } from "@/lib/structured-data";

type PageHeaderProps = {
  /** Breadcrumb label for this page; its path is `path`. */
  crumb: string;
  path: string;
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
};

// Shared top of every inner page: visible breadcrumb + BreadcrumbList
// JSON-LD + the page's single H1.
export function PageHeader({ crumb, path, eyebrow, title, lead, children }: PageHeaderProps) {
  const trail = [
    { name: "Inicio", path: "/" },
    { name: crumb, path },
  ];

  return (
    <header className="border-b border-border pb-14 pt-10 md:pb-20 md:pt-14">
      <JsonLd data={getBreadcrumbJsonLd(trail)} />
      <Container>
        <nav aria-label="Migas de pan" className="text-small mb-8">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-foreground">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">
              {crumb}
            </li>
          </ol>
        </nav>
        {eyebrow && <p className="text-eyebrow mb-4">{eyebrow}</p>}
        <h1 className="text-h1 max-w-3xl">{title}</h1>
        {lead && <p className="text-lead mt-5">{lead}</p>}
        {children}
      </Container>
    </header>
  );
}
