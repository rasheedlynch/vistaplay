import { renderBrandIcon } from "@/lib/og-image";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return renderBrandIcon({ width: 180, height: 180, radius: 40 });
}
