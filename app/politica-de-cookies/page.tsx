import type { Metadata } from "next";

import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Política de cookies",
  path: "/politica-de-cookies",
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
            <strong>Estadísticas:</strong> utilizamos Plausible Analytics,
            una herramienta de analítica web que no utiliza cookies y no
            recoge datos personales identificables; procesa únicamente
            datos agregados y anónimos sobre las visitas al sitio.
          </li>
          <li>
            <strong>Marketing:</strong> actualmente no utilizamos ninguna
            cookie de publicidad o marketing.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Cómo aceptar, rechazar o configurar las cookies">
        <p>
          Al acceder al sitio web verás un panel de gestión de cookies
          (proporcionado por CookieYes) donde puedes aceptar todas las
          cookies, rechazar las que no sean necesarias, o configurar tus
          preferencias por categoría antes de continuar navegando.
        </p>
        <p>
          Puedes cambiar tu configuración de cookies en cualquier momento
          desde el icono de gestión de cookies disponible en el sitio web,
          o eliminando las cookies ya almacenadas desde la configuración de
          tu navegador.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
