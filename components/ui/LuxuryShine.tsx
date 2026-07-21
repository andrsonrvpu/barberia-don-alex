import * as React from "react";
import { cn } from "@/lib/utils";

interface LuxuryShineProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
}

export function LuxuryShine({ children, className, intensity = "medium" }: LuxuryShineProps) {
  const intensityMap = {
    light: "via-[var(--accent)]/30",
    medium: "via-[var(--accent)]/60",
    strong: "via-[var(--accent)]",
  };

  return (
    <span
      className={cn(
        "inline-flex animate-luxury-shine bg-[length:200%_100%] bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(110deg, #C5A059 45%, #FDF6E3 50%, #C5A059 55%)`
      }}
    >
      {children}
    </span>
  );
}
