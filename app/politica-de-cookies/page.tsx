import type { Metadata } from "next";

import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Política de cookies",
  path: "/politica-de-cookies",
  description:
    "Política de cookies de VistaPlay: qué cookies utiliza este sitio web, para qué sirven y cómo puedes gestionarlas o rechazarlas desde tu navegador.",
  noIndex: true,
});

const UPDATED = "30 de septiembre de 2026";

export default function PoliticaDeCookiesPage() {
  return (
    <LegalLayout title="Política de cookies" updated={UPDATED}>
      <LegalSection title="1. Qué son las cookies">
        <p>
          Las cookies son pequeños archivos de texto que un sitio web
          almacena en tu navegador cuando lo visitas. Se utilizan para que
          el sitio funcione correctamente, para recordar tus preferencias o
          para obtener información estadística sobre su uso.
        </p>
      </LegalSection>

      <LegalSection title="2. Cookies que utilizamos en este sitio">
        <p>
          De acuerdo con el artículo 22.2 de la LSSICE, a continuación se
          detallan las categorías de cookies utilizadas en {site.name}:
        </p>
        <ul>
          <li>
            <strong>Necesarias:</strong> imprescindibles para que el sitio
            funcione. Por ejemplo, al enviar el formulario de pedido se
            guarda de forma temporal (10 minutos) una cookie con tu
            nombre, el plan, el dispositivo elegido y la referencia de tu
            pedido, únicamente para poder mostrarte la confirmación
            personalizada en la página de agradecimiento. No requieren
            consentimiento porque son estrictamente necesarias para
            prestarte un servicio que has solicitado expresamente.
          </li>
          <li>
            <strong>Preferencias:</strong> permitirían recordar opciones de
            visualización del sitio. Actualmente no utilizamos ninguna
            cookie de esta categoría; esta sección se activará si en el
            futuro se incorpora alguna.
          </li>
          <li>
            <strong>Estadísticas:</strong> actualmente no utilizamos
            ninguna herramienta de analítica con cookies.
          </li>
          <li>
            <strong>Marketing:</strong> solo si las aceptas, utilizamos el
            Píxel de Meta, proporcionado por Meta Platforms Ireland Ltd.
            Su finalidad es la medición de la publicidad: saber cuántas
            personas visitan nuestras páginas o solicitan un plan tras ver
            un anuncio. Instala cookies propias (como _fbp) y envía a Meta
            datos de navegación (páginas visitadas, plan elegido y su
            importe). No enviamos tu nombre, email ni teléfono. Si
            rechazas las cookies, el Píxel de Meta no se carga.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Cómo aceptar, rechazar o configurar las cookies">
        <p>
          Al acceder al sitio web verás un aviso donde puedes aceptar o
          rechazar las cookies no necesarias, con la misma facilidad en
          ambos casos. Guardamos tu elección en el almacenamiento local de
          tu navegador para no volver a preguntarte.
        </p>
        <p>
          Puedes cambiar tu elección en cualquier momento desde el enlace
          «Configurar cookies» del pie de página, o eliminando los datos
          almacenados desde la configuración de tu navegador.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
