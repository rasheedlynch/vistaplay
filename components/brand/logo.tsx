import { LogoMark } from "@/components/brand/logo-mark";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

// Font size on the wrapper drives the whole lockup (mark + text) via
// em-based sizing, so <Logo className="text-lg" /> just works.
export function Logo({ className }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="VistaPlay"
      className={cn("inline-flex items-center font-heading font-bold text-ink", className)}
    >
      <LogoMark className="h-[1em] w-[1em]" />
      <span aria-hidden="true" className="-ml-[0.1em]">
        istaPlay
      </span>
    </span>
  );
}
