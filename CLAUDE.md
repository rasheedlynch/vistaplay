# VistaPlay.shop — Project Briefing

You are building VistaPlay, a premium streaming TV subscription service for
Spain. This is a real business, not a demo. Everything must look trustworthy
and professional: the opposite of the typical dark, neon, "22.000 CANALES!!!"
IPTV reseller sites.

## Business context
- Product: streaming TV subscriptions (1 / 3 / 12 months) for Spanish households
- Content source: VistaPlay is a white-label reseller of the Adamo Wholesale
  Media Services "Premium" package (national and regional TDT channels, plus
  sports, cinema, series and documentary channels). Viewing is through a
  mobile/TV app (Android and iOS).
- Trust is the core of the brand
- Domain: vistaplay.shop
- Language: all user-facing copy in Spanish from Spain (es-ES), calm and plain.
  Never shout, never fake urgency ("¡OFERTA!"), never use words like "barato"
  or "mega"

## CONTENT RULES (strict)
- Any unverified business claim (activation times, guarantees, contract
  terms, prices/VAT, support SLAs, popularity/savings claims) must be
  marked in the code with {/* TODO(client): ... */} right before the
  text, and logged as a row in CLIENT_QUESTIONS.md. Remove both only
  once the client confirms the fact in writing.
- NEVER mention LaLiga EA Sports, Champions League, specific competitions,
  specific channel names, or channel counts unless the client has confirmed
  them in writing. Where such details would go, leave a clearly marked TODO:
  {/* TODO(client): confirm included competitions */}
- Never describe the service as "legal distributor" or "authorized" with
  specific rights-holder names. Use neutral wording: "servicio con licencia a
  través de nuestro proveedor mayorista" only where a TODO(client) marks it
  for confirmation.
- The Premium package includes adult channels: never promote or mention them
  on the website.

## Brand system ("calm premium")
- UPDATED (redesign-seo): light "editorial" hybrid, replacing both the earlier
  light-teal theme and the full dark theme
- Default (light): background #F6F1E9, surface #FBF8F3, borders #E6DDD0, text
  #1C1814, muted #6B6258. Amber #E0A84F is the button fill (charcoal text);
  amber used as TEXT/links is the deeper #8A5A12 (`text-highlight`) for AA contrast
- Dark variant: wrap a block in `.dark-section` (or `<Section variant="dark">`)
  and all tokens switch to the charcoal palette (#15120F / #1E1A16 / #2E2822,
  text #F4EFE6, muted #A89F92, amber text #E0A84F). Dark ONLY for: homepage
  hero, final CTA band (CtaBanner) and footer
- Never hard-code colors; use token classes (bg-background, text-highlight...)
  so both variants work
- Typography: Fraunces (headlines) + Inter (body/UI), loaded via next/font
- All prices, contact data and URLs live in lib/site.ts only
- Style: generous whitespace, rounded-2xl cards, soft shadows. Whitespace = trust
- Banned: dark backgrounds outside the .dark-section blocks, neon gradients (especially purple/blue),
  glassmorphism clichés, countdown timers, fake crossed-out prices,
  emoji-style icon grids

## Tech stack
- Next.js 15, App Router, TypeScript. SEO matters: every page gets real
  metadata (generateMetadata), semantic HTML, exactly one H1 per page
- Tailwind CSS 3.4 (do NOT upgrade to Tailwind 4)
- shadcn/ui via shadcn@2.3.0 (the Tailwind 3 compatible version)
- Colors must be defined as HSL channel CSS variables (e.g.
  --primary: 11 100% 62%) and referenced in tailwind.config.ts as
  hsl(var(--primary) / <alpha-value>), so opacity modifiers work in
  Tailwind 3.4. When adding shadcn components, use
  npx shadcn@2.3.0 add <name>
- Framer Motion, restrained: hero reveals only, no animation soup
  (install in Stage 2, not now)
- Later stages: Sanity CMS (blog), Stripe Checkout (subscriptions),
  Resend (emails), CookieYes + Plausible
- Hosting: Vercel. Analytics/consent snippets come later; don't add them now

## Ordering (temporary, until Stripe is approved)
- No online payment yet. The order flow is a form (name + WhatsApp number +
  chosen plan) and/or a WhatsApp button; the team contacts the customer.
- Any form collecting personal data must have an unticked RGPD consent
  checkbox linking to the privacy policy.

## Stages (gated)
0. Scaffold
1. Design system (tokens, typography, base components)
2. Homepage
3. SEO layer (metadata, sitemap.xml, robots.txt, structured data, OG images)
4. Conversion + legal pages: plans/pricing, order form, WhatsApp CTA, FAQ,
   contact, Aviso Legal, Política de Privacidad, Política de Cookies,
   Condiciones de Contratación, Derecho de Desistimiento
5. Blog (Sanity)
6. Billing & launch plumbing (Stripe when approved, Resend, CookieYes,
   Plausible, Vercel domain setup)
7. QA gate (Lighthouse, accessibility, broken links, mobile checks)

## RULES
- Complete ONLY the stage I give you. Never start the next stage until I
  explicitly confirm
- Ask before adding any dependency I didn't request
- Mobile-first, responsive, accessible (labels, contrast, visible focus states)
- No lorem ipsum in user-facing copy: write real es-ES copy or leave a clearly
  marked TODO
- At the end of every stage: run npm run build, commit to git with a clear
  message, summarize what changed, then stop and wait
