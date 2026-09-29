export type DeviceOption = {
  value: string;
  label: string;
};

export const deviceOptions: DeviceOption[] = [
  { value: "smart-tv", label: "Smart TV" },
  { value: "android-tv", label: "Android TV / TV Box" },
  { value: "fire-tv", label: "Fire TV" },
  { value: "movil-tablet-android", label: "Móvil o tablet Android" },
  { value: "iphone-ipad", label: "iPhone o iPad" },
  { value: "ordenador", label: "Ordenador" },
  { value: "otro", label: "Otro" },
];
