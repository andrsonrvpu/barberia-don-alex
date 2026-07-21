import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export const metadata = {
  title: "Contacto",
  description: "Encuentra la ubicación de la Barbería Don d' Alex en el Centro Comercial Ventura Plaza, Cúcuta, y reserva tu cita.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[var(--text-primary)] mb-4 text-center">Contacto y Ubicación</h1>
        <p className="text-[var(--text-secondary)] mb-12 text-center max-w-2xl mx-auto">
          Estamos ubicados en el corazón de Cúcuta. Visítanos en el Centro Comercial Ventura Plaza o reserva tu cita fácilmente a través de WhatsApp.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="h-full bg-[var(--surface-1)] border-[var(--border)]">
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>Comunícate con nosotros para agendar tu servicio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[var(--surface-2)] p-3 rounded-full text-[var(--accent)]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Teléfono / WhatsApp</p>
                  <p className="font-semibold text-[var(--text-primary)]">+57 000 000 0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[var(--surface-2)] p-3 rounded-full text-[var(--accent)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Dirección</p>
                  <p className="font-semibold text-[var(--text-primary)]">C.C. Ventura Plaza, Cúcuta, Colombia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[var(--surface-2)] p-3 rounded-full text-[var(--accent)]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Horarios</p>
                  <p className="font-semibold text-[var(--text-primary)]">Lun-Sab: 9am - 8pm | Dom: 10am - 2pm</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full bg-[var(--surface-1)] border-[var(--border)] flex flex-col justify-center items-center text-center p-8">
            <div className="bg-[var(--surface-2)] p-4 rounded-full text-[var(--accent)] mb-6">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Reserva Inmediata</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              La forma más rápida de asegurar tu turno es enviándonos un mensaje directo por WhatsApp.
            </p>
            <Button size="lg" variant="accent" asChild>
              <a href="https://wa.me/570000000000" target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
