"use client";

import * as React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ArrowRight } from "lucide-react";

export function Testimonials() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonios" className="py-32 bg-[var(--background)] overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        <SectionHeader 
          subtitle="Testimonios" 
          title="Excelencia reconocida." 
        />

        <div className="flex justify-end items-center gap-2 mb-4 text-[var(--accent)]/80 text-sm font-medium pr-4">
          <span className="uppercase tracking-wider text-xs">Desliza para ver más</span>
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>

        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex overflow-x-auto gap-6 md:gap-8 pt-4 pb-8 -mx-4 px-4 md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDown ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory scroll-smooth'}`}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={testimonial.id} className="w-[85vw] sm:w-[350px] flex-shrink-0 snap-center">
              <TestimonialCard 
                id={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
