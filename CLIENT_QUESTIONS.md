# Preguntas para el cliente

Afirmaciones de negocio que aparecen en el sitio (styleguide interno y
páginas públicas) y deben confirmarse por escrito antes de publicarse.
Cada una está marcada en el código con un comentario `TODO(client)`.

## Abiertas

| # | Afirmación | Dónde aparece | Qué necesitamos confirmar |
|---|---|---|---|
| 5 | "Plan más elegido" / "La favorita" | `app/styleguide/page.tsx` (badge de ejemplo); `components/marketing/planes.tsx` (el plan de 12 meses ahora lleva el tag "Mejor valor", una afirmación aritmética distinta — ver fila resuelta abajo; "La favorita"/"más elegido" como afirmación de popularidad sigue sin confirmar) | ¿Hay datos que respalden que este plan es el más contratado? |
| 6 | Ahorro anual frente al pago mensual | `app/styleguide/page.tsx`, descripción de la tarjeta de plan | ¿Cuál es el ahorro real del plan de 12 meses frente al mensual? (Nota: ya mostramos el precio/mes de cada plan como dato neutro; esto es sobre añadir una afirmación comparativa tipo "ahorras X€") |
| 12 | Número de WhatsApp Business | `lib/site.ts` (`NEXT_PUBLIC_WHATSAPP_NUMBER`, actualmente vacío) | Número real de contacto para las solicitudes por WhatsApp |
| 14 | Punto de contacto de la organización | `lib/structured-data.ts` (schema Organization, campo `contactPoint` omitido) | Teléfono/email de contacto que se pueda publicar en el schema Organization |
| 15 | Datos estructurados Product/Offer | No implementado | Los precios ya están confirmados (ver resueltas), así que esto ya no está bloqueado — pendiente de implementar en una fase futura |

## Resueltas (confirmadas por el cliente)

| # | Afirmación | Confirmado como |
|---|---|---|
| 1 | Tiempo de activación | "Activación en minutos tras confirmar tu pedido" (nunca "instantánea") |
| 2 | Permanencia | "Sin permanencia" |
| 4 | Horario y canal de soporte | "Soporte humano 24 horas, todos los días, por WhatsApp y email" |
| 8 | Soporte por WhatsApp | Ver fila 4 — soporte humano confirmado |
| 9 | Dispositivos compatibles | "Compatible con los dispositivos que ya tienes: móvil, tablet, ordenador y Smart TV" |
| 10 | Proceso de cancelación | Sin permanencia (fila 2) + garantía de devolución en 24h (nueva, ver abajo) |
| 13 | Precio de cada plan | Prueba 24h 2 €; 1 mes 9,99 €; 3 meses 19,99 € (6,66 €/mes); 6 meses 34,99 € (5,83 €/mes); 12 meses 54,99 € (4,58 €/mes) |
| — | Garantía de satisfacción | "Si no quedas satisfecho en las primeras 24 horas, te devolvemos el dinero" |
| 3 | Precios incluyen IVA | Sí, IVA incluido en todos los precios mostrados |
| 11 | Métodos de pago aceptados | Enlace de pago seguro por email; pago con tarjeta a través de Stripe o PayPal |
| — | Tag "Mejor valor" en el plan de 12 meses | Confirmado como afirmación aritmética (es el equivalente mensual más bajo: 4,58 €/mes), no una afirmación de popularidad — distinta de la fila 5 |
| — | Contenido de la FAQ "¿Qué incluye VistaPlay?" | Canales nacionales e internacionales; grandes competiciones de fútbol europeo: LaLiga, Premier League, Champions League, UEFA Nations League y otras |
| 7 | "Servicio con licencia a través de nuestro proveedor mayorista" / "autorizado" | "VistaPlay comercializa servicios de IPTV como distribuidor autorizado a través de su proveedor mayorista." Redacción confirmada por el cliente (30/9) y publicada en `/aviso-legal`. |
| 16 | "¿Es legal VistaPlay?" (pregunta FAQ) | Restaurada en `lib/faq.ts` (y en el JSON-LD FAQPage, misma fuente) con redacción neutra, coherente con la frase confirmada de la fila 7, y enlace al aviso legal. |

## Pendiente de revisión legal

### Mecanismo ACEPTO del email de pago (TODO lawyer)

El cliente (30/9) formalizó el mecanismo de consentimiento expreso para
la pérdida del derecho de desistimiento, publicado en
`/derecho-de-desistimiento`:

> "Al responder 'ACEPTO' al email de pago, el cliente otorga su
> consentimiento expreso para el inicio inmediato del servicio y
> reconoce que pierde su derecho de desistimiento una vez activado el
> acceso."

El email de pago en sí (con el enlace de pago seguro) todavía no está
implementado en `lib/emails.ts` — cuando se implemente, debe incluir
este texto y requerir la respuesta "ACEPTO" antes de enviar el enlace
de pago o activar el servicio. Pendiente de revisión por un abogado
antes de que la página entre en producción, aunque el contenido de
negocio ya está confirmado por el cliente.

### Otras secciones marcadas "REVISAR CON GESTOR"

La política de privacidad (`/politica-de-privacidad`, sección 5, plazos
de conservación de datos) incluye un marcador inline "REVISAR CON
GESTOR" para el plazo exacto de conservación por motivos fiscales y
mercantiles. Debe confirmarse con un gestor/asesoría antes de
publicarse en producción.

## Regla a partir de ahora

Cualquier afirmación de negocio sin confirmar (tiempos, cifras,
garantías, comparativas de precio, afirmaciones de popularidad) se
marca en el código con `{/* TODO(client): ... */}` justo antes del
texto, y se añade una fila a la tabla "Abiertas". Cuando el cliente lo
confirme por escrito, se retira el TODO del código y la fila se mueve
a "Resueltas". Texto legal sensible (renuncias, condiciones
contractuales) se marca además `TODO(lawyer)` hasta revisión de un
abogado, incluso si el cliente ya confirmó el contenido de negocio.
