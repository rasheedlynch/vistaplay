import type { Metadata } from "next";

import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { COMPANY } from "@/lib/company";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Política de privacidad",
  path: "/politica-de-privacidad",
  noIndex: true,
});

const UPDATED = "30 de septiembre de 2026";

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalLayout title="Política de privacidad" updated={UPDATED}>
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          <strong>Responsable:</strong> {COMPANY.legalName} —{" "}
          <strong>Correo electrónico:</strong> {COMPANY.email}.
        </p>
      </LegalSection>

      <LegalSection title="2. Qué datos recogemos">
        <p>
          A través del formulario de pedido de {site.name} recogemos
          únicamente los siguientes datos, que el usuario introduce
          voluntariamente: nombre y apellidos, teléfono, correo electrónico,
          plan seleccionado y tipo de dispositivo. No recogemos datos
          bancarios ni de pago a través de este formulario: el pago se
          gestiona posteriormente, por email, mediante un enlace de pago
          seguro.
        </p>
      </LegalSection>

      <LegalSection title="3. Para qué usamos tus datos y con qué base legal">
        <p>
          Utilizamos los datos del formulario de pedido exclusivamente para
          gestionar tu solicitud: confirmarla, ponernos en contacto contigo,
          enviarte el enlace de pago y las instrucciones de activación, y
          prestarte el servicio contratado. La base legal de este
          tratamiento es la ejecución de un contrato o de medidas
          precontractuales solicitadas por ti (art. 6.1.b RGPD).
        </p>
        <p>
          Actualmente {site.name} no envía comunicaciones comerciales ni
          boletines de marketing. Si en el futuro se ofreciera esa opción,
          se solicitaría tu consentimiento expreso y previo (art. 6.1.a
          RGPD) y podrías retirarlo en cualquier momento.
        </p>
      </LegalSection>

      <LegalSection title="4. Con quién compartimos tus datos">
        <p>
          Para el envío de los correos electrónicos transaccionales
          relacionados con tu pedido (confirmación, enlace de pago,
          instrucciones de activación) utilizamos el proveedor Resend, cuyos
          servidores de procesamiento para esta finalidad se encuentran en
          Irlanda (Unión Europea). No se realizan transferencias de datos
          fuera del Espacio Económico Europeo.
        </p>
        <p>
          No cedemos ni vendemos tus datos a terceros para fines distintos
          de la gestión de tu pedido.
        </p>
      </LegalSection>

      <LegalSection title="5. Cuánto tiempo conservamos tus datos">
        <p>
          Conservamos tus datos mientras sea necesario para gestionar tu
          pedido y prestarte el servicio, y posteriormente durante los
          plazos exigidos por la normativa fiscal y mercantil aplicable a
          la documentación de las operaciones comerciales.{" "}
          <em>REVISAR CON GESTOR: confirmar el plazo exacto de
          conservación aplicable (documentación fiscal/contable).</em>
        </p>
      </LegalSection>

      <LegalSection title="6. Tus derechos">
        <p>
          Puedes ejercer en cualquier momento tus derechos de acceso,
          rectificación, supresión, oposición, portabilidad y limitación
          del tratamiento, enviando un correo a{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>,
          indicando el derecho que deseas ejercer y adjuntando un documento
          que acredite tu identidad.
        </p>
        <p>
          Si consideras que el tratamiento de tus datos no se ajusta a la
          normativa vigente, tienes derecho a presentar una reclamación
          ante la Agencia Española de Protección de Datos (
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="7. Decisiones automatizadas">
        <p>
          No se toman decisiones automatizadas ni se elaboran perfiles a
          partir de tus datos que produzcan efectos jurídicos o te afecten
          significativamente.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
