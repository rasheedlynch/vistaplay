import { renderBrandIcon } from "@/lib/og-image";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// TODO(client): replace with client logo once provided
export default function Icon() {
  return renderBrandIcon({ width: 180, height: 180, fontSize: 100, radius: 40 });
}
