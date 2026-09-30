import type { Metadata } from "next";

import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { COMPANY } from "@/lib/company";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Aviso legal",
  path: "/aviso-legal",
  noIndex: true,
});

const UPDATED = "30 de septiembre de 2026";
const DOMAIN = new URL(site.url).hostname;

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso legal" updated={UPDATED}>
      <LegalSection title="1. Datos identificativos">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
          de Servicios de la Sociedad de la Información y de Comercio
          Electrónico (LSSICE), se identifican a continuación los datos del
          titular de este sitio web.
        </p>
        <p>
          <strong>Titular del sitio web:</strong> {COMPANY.legalName} —{" "}
          <strong>Dominio:</strong> {DOMAIN} —{" "}
          <strong>Correo electrónico de contacto:</strong> {COMPANY.email}.
        </p>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p>
          El presente aviso legal regula el acceso y uso del sitio web{" "}
          {DOMAIN} (en adelante, el &laquo;sitio web&raquo;), a través del
          cual {site.name} ofrece información sobre sus planes de suscripción
          de televisión por streaming (IPTV) y permite solicitar su
          contratación. El acceso al sitio web atribuye la condición de
          usuario e implica la aceptación de las condiciones recogidas en
          este aviso legal.
        </p>
      </LegalSection>

      <LegalSection title="3. Relación con el proveedor mayorista">
        <p>
          VistaPlay comercializa servicios de IPTV como distribuidor
          autorizado a través de su proveedor mayorista. VistaPlay no es el
          titular originario de los contenidos audiovisuales distribuidos y
          actúa exclusivamente como intermediario comercial frente al
          usuario final.
        </p>
      </LegalSection>

      <LegalSection title="4. Condiciones de acceso y uso">
        <p>
          El usuario se compromete a hacer un uso adecuado y lícito del
          sitio web, de conformidad con la legislación aplicable, el
          presente aviso legal, la moral y las buenas costumbres
          generalmente aceptadas y el orden público. Queda prohibido el uso
          del sitio web con fines ilícitos o lesivos, o que de cualquier
          forma puedan causar perjuicio o impedir el normal funcionamiento
          del sitio web.
        </p>
      </LegalSection>

      <LegalSection title="5. Propiedad intelectual e industrial">
        <p>
          Todos los contenidos del sitio web —incluyendo, sin carácter
          exhaustivo, textos, imágenes, logotipos, iconos, código fuente,
          diseño y estructura de navegación— son titularidad de{" "}
          {site.name} o de terceros que han autorizado su uso, y están
          protegidos por la normativa española y comunitaria en materia de
          propiedad intelectual e industrial.
        </p>
        <p>
          Queda prohibida la reproducción, distribución, comunicación
          pública, transformación o cualquier otra forma de explotación,
          total o parcial, de los contenidos del sitio web sin la
          autorización previa y por escrito de {site.name} o del titular
          correspondiente.
        </p>
      </LegalSection>

      <LegalSection title="6. Exclusión de responsabilidad">
        <p>
          {site.name} no garantiza la disponibilidad y continuidad
          ininterrumpida del sitio web ni del servicio, que pueden verse
          afectados por labores de mantenimiento, actualizaciones,
          incidencias técnicas o causas de fuerza mayor ajenas a su
          control. {site.name} no será responsable de los daños y
          perjuicios de cualquier naturaleza derivados de dicha falta de
          disponibilidad.
        </p>
        <p>
          El sitio web puede incluir enlaces a páginas web de terceros.{" "}
          {site.name} no asume responsabilidad alguna sobre el contenido,
          la política de privacidad o el funcionamiento de dichos sitios,
          que quedan fuera de su control.
        </p>
      </LegalSection>

      <LegalSection title="7. Legislación aplicable y jurisdicción">
        <p>
          El presente aviso legal se rige por la legislación española. Para
          la resolución de cualquier controversia derivada del acceso o uso
          del sitio web, y sin perjuicio de los derechos que asisten a los
          usuarios con la condición de consumidores, las partes se someten
          a los juzgados y tribunales del domicilio del consumidor, de
          conformidad con la normativa de protección de consumidores y
          usuarios.
        </p>
        <p>
          Los usuarios con la condición de consumidores residentes en la
          Unión Europea también pueden acceder a la plataforma de
          resolución de litigios en línea de la Comisión Europea:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
