# Preguntas para el cliente

Afirmaciones de negocio usadas como ejemplo en `app/styleguide/page.tsx`
que deben confirmarse por escrito antes de usarse en páginas públicas.
Cada una está marcada en el código con un comentario `TODO(client)`.

| # | Afirmación | Dónde aparece | Qué necesitamos confirmar |
|---|---|---|---|
| 1 | Activación en menos de 24 horas | Card de ejemplo, badge "Activación en 24h" | ¿Es el tiempo real de activación tras la contratación? |
| 2 | "Sin permanencia" | Badge de ejemplo | ¿Los planes no tienen permanencia mínima real? |
| 3 | Precios incluyen IVA | Bloque de tipografía "small" | ¿Los precios que se publiquen ya incluyen IVA? |
| 4 | Respuesta de soporte en menos de 24h laborables | Bloque de tipografía "body" | ¿Es el SLA real de soporte por WhatsApp/formulario? |
| 5 | "Plan más elegido" | Badge sobre el plan de 12 meses | ¿Hay datos que respalden que este plan es el más contratado? |
| 6 | Ahorro anual frente al pago mensual | Descripción de la tarjeta de plan | ¿Cuál es el ahorro real del plan de 12 meses frente al mensual? |

## Regla a partir de ahora

Cualquier afirmación de negocio sin confirmar (tiempos, cifras,
garantías, comparativas de precio, afirmaciones de popularidad) se
marca en el código con `{/* TODO(client): ... */}` justo antes del
texto, y se añade una fila a esta tabla. Se retiran ambas marcas solo
cuando el cliente confirma el dato por escrito.
