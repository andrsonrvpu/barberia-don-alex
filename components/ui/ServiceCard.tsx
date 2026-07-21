import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/lib/constants";

export interface ServiceItem {
  name: string;
  price: string;
  highlight?: boolean;
  details?: string;
}

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  imageClassName?: string;
  services: ServiceItem[];
  index: number;
}

export function ServiceCard({ title, description, image, imageClassName, services, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col gap-12 lg:gap-24 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Imagen */}
      <motion.div 
        className="w-full lg:w-1/2 relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] overflow-hidden group rounded-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[var(--background)]/10 group-hover:bg-transparent group-active:bg-transparent transition-colors duration-700 z-10" />
        <img 
          src={image} 
          alt={title} 
          className={`object-cover w-full h-full grayscale-[20%] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${imageClassName ? imageClassName : "group-hover:grayscale-0 group-hover:scale-105 group-active:grayscale-0 group-active:scale-105"}`}
        />
      </motion.div>

      {/* Contenido / Menú de la Categoría */}
      <motion.div 
        className="w-full lg:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <span className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-4">
          0{index + 1}
        </span>
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
          {title}
        </h4>
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light mb-12 max-w-lg">
          {description}
        </p>
        
        {/* Lista de precios de esta categoría */}
        <motion.div 
          className="flex flex-col gap-6 w-full max-w-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {services.map((service, sIdx) => (
            <motion.div 
              key={sIdx} 
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
              }}
              className={`flex flex-col gap-1 pb-4 border-b border-[var(--border)] transition-colors duration-500 hover:border-[var(--accent)]/50 last:border-0 ${
                service.highlight 
                  ? "relative overflow-hidden bg-[var(--surface-1)] -mx-4 p-4 rounded-sm border border-[var(--accent)]/30 shadow-[0_0_20px_rgba(197,160,89,0.05)] border-b-0 mt-2" 
                  : ""
              }`}
            >
              {/* Animación sutil de fondo para tarjetas destacadas */}
              {service.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent)]/5 to-transparent animate-luxury-shine w-[200%] opacity-50 pointer-events-none" />
              )}
              
              <div className="flex justify-between items-baseline gap-4 relative z-10">
                <span className={`font-medium transition-transform duration-300 origin-left hover:scale-[1.02] ${service.highlight ? "text-[var(--accent)] font-semibold text-lg" : "text-[var(--text-primary)]"}`}>
                  {service.name}
                </span>
                <div className="flex-1 border-b border-dashed border-[var(--border)]/50 mx-2 relative top-[-4px] hidden sm:block opacity-30" />
                <span className="text-[var(--text-secondary)] font-serif italic text-lg whitespace-nowrap">
                  {service.price}
                </span>
              </div>
              {service.details && (
                <span className="text-sm text-[var(--text-secondary)]/80 font-light pr-12 relative z-10">
                  {service.details}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12">
          <Button variant="outline" asChild className="rounded-none uppercase tracking-widest text-xs font-bold border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-transparent px-8 h-12 w-full sm:w-auto">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Reservar {title}
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
