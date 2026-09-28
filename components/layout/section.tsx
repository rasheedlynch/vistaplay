import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "paper" | "tint";
}

export function Section({
  className,
  variant = "paper",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        variant === "tint" ? "bg-tint" : "bg-paper",
        className
      )}
      {...props}
    />
  );
}
