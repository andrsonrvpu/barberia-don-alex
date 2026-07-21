import type { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Barber Shop Alex Cúcuta",
    default: "Barber Shop Alex | La Mejor Barbería en Cúcuta, Ventura Plaza",
  },
  description: "Cortes de cabello para hombre, arreglos de barba y servicios premium de barbería en el Centro Comercial Ventura Plaza, Cúcuta. Reserva tu cita hoy.",
  keywords: ["barbería Cúcuta", "barbería en Cúcuta", "barbería Ventura Plaza", "corte de cabello hombre Cúcuta", "corte fade Cúcuta", "arreglo de barba Cúcuta"],
  openGraph: {
    title: "Barber Shop Alex | Premium Barber Shop en Cúcuta",
    description: "Cortes fade, arreglo de barba y estilismo masculino en el Ventura Plaza.",
    url: "https://barberiadonalex.com",
    siteName: "Barber Shop Alex",
    locale: "es_CO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema markup para LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Barber Shop Alex",
    image: "https://barberiadonalex.com/images/logo.png",
    "@id": "https://barberiadonalex.com",
    url: "https://barberiadonalex.com",
    telephone: "+570000000000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Centro Comercial Ventura Plaza",
      addressLocality: "Cúcuta",
      addressRegion: "Norte de Santander",
      postalCode: "540001",
      addressCountry: "CO"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 7.8939100,
      longitude: -72.5008200
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00"
      }
    ],
    priceRange: "$$"
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-[var(--background)] text-[var(--text-primary)] min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
