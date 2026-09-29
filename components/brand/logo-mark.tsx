import { LOGO_TRIANGLE_PATH, LOGO_VIEWBOX, LOGO_V_PATH } from "@/lib/brand";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  /** "mono" renders both shapes in a single color (fill-current) for reverse/dark use. */
  variant?: "default" | "mono";
};

export function LogoMark({ className, variant = "default" }: LogoMarkProps) {
  const isMono = variant === "mono";

  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={cn("shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d={LOGO_V_PATH} className={isMono ? "fill-current" : "fill-ink"} />
      <path
        d={LOGO_TRIANGLE_PATH}
        className={isMono ? "fill-current" : "fill-brand"}
      />
    </svg>
  );
}
