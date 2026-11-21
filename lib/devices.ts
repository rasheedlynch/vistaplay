export type DeviceOption = {
  value: string;
  label: string;
};

// Options for the order form's "Dispositivo" select.
export const deviceOptions: DeviceOption[] = [
  { value: "smart-tv", label: "Smart TV" },
  { value: "android-tv", label: "Android TV / TV Box" },
  { value: "fire-tv", label: "Fire TV Stick" },
  { value: "movil-tablet-android", label: "Móvil o tablet Android" },
  { value: "iphone-ipad", label: "iPhone o iPad" },
  { value: "ordenador", label: "Ordenador" },
  { value: "otro", label: "Otro" },
];

export type DeviceGuide = {
  /** Anchor on /dispositivos and future route: /dispositivos/[slug]. */
  slug: string;
  name: string;
  icon: "tv" | "stick" | "phone" | "apple" | "laptop";
  summary: string;
  /** Flip to true once app/(marketing)/dispositivos/[slug]/page.tsx exists for it;
   *  the hub then links to it and the sitemap lists it. */
  hasGuide: boolean;
};

// TODO(client): confirm per-device compatibility (Smart TV brands, Fire TV Stick, iOS) — CLIENT_QUESTIONS.md #19
export const deviceGuides: DeviceGuide[] = [
  {
    slug: "smart-tv",
    name: "Smart TV",
    icon: "tv",
    summary:
      "La forma más cómoda de verlo: en la pantalla grande del salón. Si tu Smart TV tiene tienda de aplicaciones, te indicamos cómo instalar la app. Si no, un dispositivo externo como un Fire TV Stick o un Android TV Box resuelve el problema.",
    hasGuide: false,
  },
  {
    slug: "android-tv-fire-tv-stick",
    name: "Android TV / Fire TV Stick",
    icon: "stick",
    summary:
      "Un Fire TV Stick o un Android TV Box convierte cualquier televisor con HDMI en una tele inteligente. Es una opción económica y sencilla: te explicamos cómo instalar la aplicación paso a paso.",
    hasGuide: false,
  },
  {
    slug: "movil-android",
    name: "Móvil y tablet Android",
    icon: "phone",
    summary:
      "Lleva la tele en el bolsillo. Instala la aplicación en tu móvil o tablet Android y mira tus canales en casa o fuera de ella, con la conexión que tengas.",
    hasGuide: false,
  },
  {
    slug: "iphone-ipad",
    name: "iPhone y iPad",
    icon: "apple",
    summary:
      "También puedes verlo en tu iPhone o iPad con la aplicación para iOS. Ideal para ver un partido o una serie desde el sofá o en un viaje.",
    hasGuide: false,
  },
  {
    slug: "ordenador",
    name: "Ordenador",
    icon: "laptop",
    summary:
      "Si prefieres una pantalla de trabajo, también puedes verlo en tu Mac o PC. Te indicamos la forma más sencilla de hacerlo según tu equipo.",
    hasGuide: false,
  },
];
