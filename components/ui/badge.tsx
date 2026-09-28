import * as React from "react"

import { cn } from "@/lib/utils"

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-white px-2.5 py-0.5 text-xs font-medium text-ink",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
