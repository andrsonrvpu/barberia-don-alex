import * as React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({ subtitle, title, className = "", align = "center" }: SectionHeaderProps) {
  const alignmentClass = align === "center" 
    ? "items-center text-center" 
    : align === "right" 
      ? "items-end text-right" 
      : "items-start text-left";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lineVariants: any = {
    hidden: { scaleX: 0 },
    show: { 
      scaleX: 1,
      transition: { duration: 1, delay: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <motion.div 
      className={`mb-24 flex flex-col ${alignmentClass} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 
        variants={itemVariants}
        className="text-xs font-bold text-[var(--accent)] uppercase tracking-[0.3em] mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]"
      >
        {subtitle}
      </motion.h2>
      
      <div className="relative inline-block">
        <motion.h3 
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] font-serif italic font-normal tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.5),_0_1px_0_rgba(255,255,255,0.1)] pb-4"
        >
          {title}
        </motion.h3>
        
        {/* Elegant Underline Draw Animation */}
        <motion.span 
          variants={lineVariants}
          className={`absolute bottom-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent
            ${align === "center" ? "left-1/4" : align === "right" ? "right-0" : "left-0"}
          `}
          style={{ originX: align === "center" ? 0.5 : align === "right" ? 1 : 0 }}
        />
      </div>
    </motion.div>
  );
}
