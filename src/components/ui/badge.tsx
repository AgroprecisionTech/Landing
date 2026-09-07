import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-sky/40 bg-sky/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-sky sm:text-xs",
        className
      )}
    >
      {children}
    </span>
  )
}