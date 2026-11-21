import { ORDER_EMAIL } from "@/lib/site";

// FASE DE PRUEBA — los datos fiscales son marcadores: sustituir por los
// datos reales de la sociedad antes del lanzamiento. Sin ellos las páginas
// no cumplen el art. 10 LSSICE. No inventar datos.
export const COMPANY = {
  // TODO(client): denominación social completa de la empresa titular
  legalName: "[Denominación social — pendiente]",
  // TODO(client): NIF / CIF de la empresa titular
  taxId: "[NIF — pendiente]",
  // TODO(client): domicilio social completo (calle, número, CP, ciudad)
  address: "[Domicilio social — pendiente]",
  email: ORDER_EMAIL,
};
