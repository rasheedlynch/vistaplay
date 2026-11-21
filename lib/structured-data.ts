import { faqs } from "@/lib/faq";
import { ORDER_EMAIL, PLANS, SITE_NAME, SITE_URL, TRIAL, type Plan } from "@/lib/site";

const abs = (path: string) => new URL(path, SITE_URL).toString();

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: abs("/logo.svg"),
    email: ORDER_EMAIL,
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "es-ES",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function getBreadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

function offerFor(plan: Plan) {
  return {
    "@type": "Offer",
    name: plan.isTrial ? TRIAL.name : `VistaPlay ${plan.name}`,
    price: plan.price.toFixed(2),
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: abs(`/solicitar?plan=${plan.id}`),
    eligibleRegion: { "@type": "Country", name: "ES" },
  };
}

// Service + Offers are built from PLANS so they can never drift from the page.
// Deliberately no AggregateRating / Review.
export function getServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "VistaPlay — IPTV España",
    serviceType: "Televisión en streaming (IPTV)",
    description:
      "Servicio de televisión en streaming para España con planes de 1, 3, 6 y 12 meses, sin permanencia, y prueba gratis de 24 horas.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "ES" },
    url: abs("/planes"),
    offers: [TRIAL, ...PLANS].map(offerFor),
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

