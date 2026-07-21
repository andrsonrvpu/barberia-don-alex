"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SpotlightTextProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightText({ children, className }: SpotlightTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device supports hover
    setIsMobile(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (isMobile) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      // Calculate cursor position relative to the element
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative inline-block transition-transform duration-300",
        // Slight scale and depth on hover for non-mobile
        !isMobile && isHovered ? "scale-[1.015] [text-shadow:0_4px_15px_rgba(197,160,89,0.3),_0_1px_1px_rgba(255,255,255,0.4)]" : "[text-shadow:0_1px_2px_rgba(0,0,0,0.8),_0_1px_0_rgba(255,255,255,0.1)]",
        className
      )}
    >
      {/* Fallback Text for screen readers and base rendering */}
      <span className={cn("relative z-10", isHovered && !isMobile ? "text-transparent" : "")}>
        {children}
      </span>

      {/* Interactive Spotlight Overlay (Only visible on hover + non-mobile) */}
      {!isMobile && (
        <span
          className="absolute inset-0 z-20 pointer-events-none bg-clip-text text-transparent transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            backgroundImage: `radial-gradient(120px circle at ${position.x}px ${position.y}px, #FFFFFF 0%, var(--accent) 30%, rgba(197,160,89,0.4) 70%, transparent 100%)`,
          }}
          aria-hidden="true"
        >
          {children}
        </span>
      )}
    </span>
  );
}
