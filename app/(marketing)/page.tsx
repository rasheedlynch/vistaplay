import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VistaPlay — Televisión en streaming para tu hogar",
  description:
    "VistaPlay es un servicio de televisión en streaming pensado para hogares en España: canales nacionales, deporte, cine, series y documentales en tu móvil o tu TV.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="font-heading text-4xl font-semibold">VistaPlay</h1>
      <p className="max-w-md text-base text-neutral-600">
        Televisión en streaming para tu hogar. Estamos preparando la nueva
        página — vuelve pronto.
      </p>
    </main>
  );
}
