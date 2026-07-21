import * as React from "react";
import { motion } from "framer-motion";

export interface TestimonialCardProps {
  id: number | string;
  name: string;
  role: string;
  content: string;
  image?: string;
  index: number;
}

export function TestimonialCard({ name, role, content, image, index }: TestimonialCardProps) {
  return (
    <motion.div 
      className="flex flex-col h-full relative transition-transform duration-500 hover:-translate-y-1 bg-[var(--surface-1)] p-8 rounded-lg border border-[var(--border)] shadow-lg"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="flex items-center gap-4 mb-6 relative z-10">
        {image ? (
          <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-[var(--border)]" />
        ) : (
          <div className="w-14 h-14 rounded-full bg-[var(--surface-2)] flex items-center justify-center text-xl font-bold text-[var(--accent)] border-2 border-[var(--border)]">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <span className="block font-semibold text-[var(--text-primary)] tracking-wide">{name}</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-[var(--text-secondary)]">{role}</span>
          </div>
          <div className="flex text-[var(--warning)] text-sm mt-1">
            {/* 5 estrellas */}
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
      </div>
      <blockquote className="text-[var(--text-secondary)] font-light leading-relaxed relative z-10 text-sm">
        &quot;{content}&quot;
      </blockquote>
    </motion.div>
  );
}
