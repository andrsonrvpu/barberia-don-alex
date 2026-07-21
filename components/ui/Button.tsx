import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    
    // Classes mapping based on the design system
    const variants = {
      primary: "bg-[var(--primary)] text-[var(--text-inverse)] hover:bg-white/90 border border-transparent btn-luxury-border",
      secondary: "bg-[var(--surface-2)] text-[var(--text-primary)] hover:bg-[var(--border)] border border-transparent",
      accent: "bg-[var(--accent)] text-[var(--text-inverse)] hover:brightness-110 border border-transparent btn-luxury-border",
      outline: "bg-transparent text-[var(--primary)] border border-[var(--border)] hover:border-[var(--primary)] btn-luxury-border",
      ghost: "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-1)] border border-transparent",
    };

    const sizes = {
      sm: "h-9 px-4 py-2 text-sm",
      md: "h-11 px-6 py-2 text-base",
      lg: "h-14 px-8 py-3 text-lg font-medium",
      icon: "h-11 w-11 p-2 flex justify-center items-center",
    };

    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-[var(--background)]",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
