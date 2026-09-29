import { renderBrandIcon } from "@/lib/og-image";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// TODO(client): replace with client logo once provided
export default function Icon() {
  return renderBrandIcon({ width: 32, height: 32, fontSize: 20, radius: 8 });
}
