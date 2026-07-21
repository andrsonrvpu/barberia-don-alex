import * as React from "react"
import Link from "next/link"
import { Scissors, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-1)]">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <Scissors className="h-6 w-6 text-[var(--accent)]" />
              <span className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                Barber Shop Alex
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              La barbería premium de Cúcuta. Cortes clásicos, desvanecidos modernos y arreglo de barba con la máxima precisión y estilo.
            </p>
          </div>

          {/* Contact & Location (NAP) */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Ubicación y Contacto
            </h4>
            <ul className="flex flex-col space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--accent)] shrink-0" />
                <span>
                  Centro Comercial Ventura Plaza<br />
                  Tercer Piso, Local 3-14<br />
                  Cúcuta, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--accent)] shrink-0" />
                <span>+57 000 000 0000</span>
              </li>
            </ul>
          </div>

          {/* Socials & Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-[var(--surface-2)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-[var(--surface-2)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
            
            <div className="pt-4 flex flex-col space-y-2 text-sm text-[var(--text-secondary)]">
              <Link href="/contacto" className="hover:text-[var(--accent)] transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/contacto" className="hover:text-[var(--accent)] transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--text-secondary)]">
          <p>&copy; {new Date().getFullYear()} Barber Shop Alex. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
