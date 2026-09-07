import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-display transition-all"
    const variants = {
      primary: "bg-neon text-primary-foreground hover:scale-[1.03] hover:glow-neon",
      outline: "border border-line text-foreground hover:border-sky/60 hover:text-sky",
      ghost: "text-foreground hover:text-neon",
    }
    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
    )
  }
)
Button.displayName = "Button"