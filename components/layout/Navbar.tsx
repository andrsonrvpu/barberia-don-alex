"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/lib/constants";

import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "Servicios", href: "/#servicios" },
  { name: "Testimonios", href: "/#testimonios" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link href="/" className="flex items-center group">
              <img 
                src="/images/logo-alex-final-2.png" 
                alt="Barber Shop Alex Logo" 
                className="h-10 w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 rounded-sm" 
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] origin-center scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <Button variant="accent" asChild>
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Reserva Ahora
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface-1)]">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="accent" className="w-full" asChild>
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Reserva Ahora
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
