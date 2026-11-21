import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "surface" | "dark";
}

export function Section({ className, variant = "default", ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28",
        variant === "surface" && "border-y border-border bg-surface",
        variant === "dark" && "dark-section",
        className
      )}
      {...props}
    />
  );
}
