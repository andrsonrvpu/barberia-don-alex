"use client";

import * as React from "react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { motion } from "framer-motion"
import { WHATSAPP_LINK } from "@/lib/constants"
import { LuxuryShine } from "@/components/ui/LuxuryShine"
import { AnimatedText } from "@/components/ui/AnimatedText"
import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[60vh] lg:min-h-[75vh] items-center overflow-hidden bg-[var(--background)]">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-barber-alex-right.png" 
          alt="Barbero cortando el cabello" 
          className="h-full w-full object-cover object-right opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/90 md:from-[var(--background)]/70 via-[var(--background)]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-[var(--background)]/10 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <div className="relative inline-block mb-6 group -translate-y-8 md:translate-y-0">
            <div className="absolute inset-0 bg-[var(--accent)]/20 blur-md rounded-full group-hover:bg-[var(--accent)]/40 group-active:bg-[var(--accent)]/40 transition-colors duration-500" />
            <motion.a
              href="https://www.google.com/maps/place/Barberia+Barber+Shop+Don+d'+Alex/@7.8859065,-72.4954275,17z/data=!4m6!3m5!1s0x8e66450ab0aa6ee1:0xb08b337f9ca65268!8m2!3d7.8877557!4d-72.4968544!16s%2Fg%2F11f29y0bfn?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--background)]/80 px-4 py-1.5 text-xs font-semibold tracking-widest text-[var(--accent)] uppercase backdrop-blur-md hover:bg-[var(--accent)]/10 active:bg-[var(--accent)]/10 transition-colors cursor-pointer btn-luxury-border"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              <MapPin className="mr-2 h-3.5 w-3.5 text-[var(--accent)] group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_var(--accent)] group-active:scale-125 group-active:drop-shadow-[0_0_8px_var(--accent)] transition-all duration-300 relative z-10" strokeWidth={2.5} />
              <span className="text-xs sm:text-sm font-medium tracking-wider text-[var(--primary)] uppercase relative z-10">
                Centro Comercial Ventura Plaza, Cúcuta
              </span>
              <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent w-[200%] animate-luxury-shine opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
              </span>
            </motion.a>
          </div>

          <div className="translate-y-12 md:translate-y-0">
            <motion.h1 
              className="mb-6 text-4xl font-sans tracking-tighter text-[var(--text-primary)] sm:text-5xl md:text-7xl lg:text-8xl lg:leading-[1.1] md:mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="font-light">El arte del</span> <br />
              <span className="font-extrabold text-[var(--accent)] drop-shadow-[0_2px_15px_rgba(197,160,89,0.3)]">
                corte perfecto.
              </span>
            </motion.h1>

            <motion.p 
              className="mb-8 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base md:text-xl drop-shadow-md md:mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            >
              Cortes impecables, arreglo de barba perfecto y atención de primer nivel. Disfruta de la mejor experiencia de barbería, pensada exclusivamente para tu estilo.
            </motion.p>
            
            <motion.div 
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="relative animate-luxury-pulse">
                <div className="absolute inset-0 bg-[var(--accent)]/20 blur-xl rounded-full" />
                <Button size="lg" variant="accent" asChild className="relative w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-sm uppercase tracking-widest text-[10px] sm:text-xs font-bold overflow-hidden group">
                  <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Agendar Cita Privada
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%] animate-luxury-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
              </div>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-sm uppercase tracking-widest text-[10px] sm:text-xs font-bold border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] active:border-[var(--accent)] active:text-[var(--accent)] hover:bg-transparent active:bg-transparent">
                <Link href="#servicios">
                  Descubrir Servicios
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
