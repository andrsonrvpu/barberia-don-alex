"use client";

import * as React from "react";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="servicios" className="py-32 bg-[var(--surface-1)] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader 
          subtitle="Catálogo de Servicios" 
          title="Nuestra Especialidad." 
        />

        <div className="flex flex-col gap-32">
          {SERVICE_CATEGORIES.map((category, index) => (
            <ServiceCard 
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              services={category.services}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
