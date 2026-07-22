export const SERVICE_CATEGORIES = [
  {
    id: "cortes",
    title: "Cortes & Estilo",
    description: "Desde desvanecidos clásicos hasta experiencias completas VIP. Cada corte incluye asesoramiento personalizado para resaltar tus mejores facciones.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1600",
    services: [
      { name: "Corte clásico hombre", price: "$40.000" },
      { name: "Corte infantil", price: "$35.000" },
      { 
        name: "Corte VIP", 
        price: "$55.000", 
        highlight: true, 
        details: "Lavado, masaje capilar, sellado alta frecuencia, CHAMPI y bebida (60 min)." 
      }
    ]
  },
  {
    id: "barba",
    title: "Cuidado de Barba",
    description: "El cuidado definitivo para tu vello facial. Utilizamos vapor de ozono y productos de alta gama para proteger tu piel y esculpir tu estilo.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1600",
    imageClassName: "scale-[1.4] object-[center_30%] group-hover:grayscale-0 group-hover:scale-[1.45]",
    services: [
      { name: "Barba básica", price: "$10.000" },
      { name: "Barba ejecutivo", price: "$15.000" },
      { name: "Barba premium", price: "$20.000" },
      { name: "Pigmentación", price: "$10.000" },
      { name: "Depilación (nasal/orejas)", price: "$15.000" },
      { 
        name: "Ritual de la Barba", 
        price: "$30.000", 
        highlight: true, 
        details: "Ozono, alta frecuencia, colágeno en ojeras, aceites y bebida (40 min)." 
      }
    ]
  },
  {
    id: "faciales",
    title: "Tratamientos Faciales",
    description: "Renueva tu piel con protocolos de limpieza profunda. Diseñados específicamente para las necesidades dermatológicas del hombre moderno.",
    image: "/images/led_mask_closeup.png",
    services: [
      { name: "Estándar", price: "$40.000", details: "Ozono, exfoliación y extracción." },
      { name: "Ejecutivo", price: "$55.000", details: "Suma hidratación y velo de colágeno." },
      { 
        name: "Premium", 
        price: "$80.000", 
        highlight: true, 
        details: "Máscara LED, alta frecuencia, colágeno para labios y ojeras (60 min)." 
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Manuel Cano",
    role: "Local Guide · 59 reseñas",
    image: "/images/manuel-cano-profile.png",
    content: "El servicio fue muy bueno, el barbero fue genial y proactivo, ayudó con el calor excesivo de la ciudad y sugirió muchas ideas para el corte de cabello. Pero definitivamente la mejor parte fue el lavado de cabello...",
  },
  {
    id: 2,
    name: "Jhon Alexander Perez",
    role: "Local Guide · Hace 2 semanas",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Excelente servicio de barbería, muy amables y el corte quedó 10 de 10. El local en el Ventura Plaza es súper cómodo. Recomendado en Cúcuta.",
  },
  {
    id: 3,
    name: "José Riaño",
    role: "1 reseña",
    content: "excelente servicio muy excelentes cortes y calidad personal 💈 ...",
  },
  {
    id: 4,
    name: "Andrés Felipe Ramírez",
    role: "Hace 1 mes",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    content: "La mejor atención. El barbero entendió perfecto lo que quería y me perfiló la barba excelente. Precios justos para la calidad y el ambiente que ofrecen.",
  },
  {
    id: 5,
    name: "Wilfrend josé Romero moreno",
    role: "3 reseñas",
    content: "Excelente servicio, siempre muy bien atendido 😎 ...",
  },
  {
    id: 6,
    name: "Carlos Eduardo Ortiz",
    role: "Hace 2 meses",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Siempre llevo a mi hijo ahí. Excelente ambiente, te atienden súper bien y son muy profesionales. La mejor barbería de la ciudad sin duda.",
  }
];

export const WHATSAPP_NUMBER = "570000000000";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_LINK = "https://www.instagram.com/barbershop_dondealex/";
export const FACEBOOK_LINK = "https://web.facebook.com/Alexbarbershopoficial/?_rdc=1&_rdr#";

