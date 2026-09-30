import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type LegalLayoutProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <Section variant="paper" className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[65ch]">
          <h1 className="text-h1">{title}</h1>
          <p className="text-small mt-3">Última actualización: {updated}</p>
          <div className="mt-10 space-y-10">{children}</div>
        </div>
      </Container>
    </Section>
  );
}

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-h3">{title}</h2>
      <div className="text-body mt-3 space-y-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_strong]:text-ink [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </div>
    </section>
  );
}
