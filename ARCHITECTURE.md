# ARCHITECTURE.md

Este documento define la arquitectura técnica para la Plataforma Digital Premium de Barber Shop Don d' Alex, basada estrictamente en los principios establecidos en el volumen de Visión del Proyecto (00_PROJECT_VISION).

## 1. Stack Tecnológico Principal

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Lenguaje**: TypeScript (Strict Mode)
- **Estilos**: Tailwind CSS v4
- **Herramientas de Calidad**: ESLint, Prettier

*Integraciones Futuras Previstas*: Supabase/Firebase, Analíticas Avanzadas, Asistentes AI y sistemas de reservas.

## 2. Estructura del Proyecto

La estructura de carpetas está diseñada para la separación de responsabilidades y escalabilidad:

```text
/
├── app/                  # App Router, Server Components por defecto, Metadata, SEO
├── components/           # Componentes puramente presentacionales
│   ├── ui/               # Primitivas reutilizables (Botones, Inputs, Cards)
│   ├── layout/           # Componentes estructurales (Header, Footer)
│   └── shared/           # Componentes compartidos entre features
├── features/             # Lógica de negocio y componentes agrupados por dominio
│   ├── services/         # Lógica relacionada a servicios de barbería
│   └── booking/          # Lógica para reservas/WhatsApp
├── lib/                  # Utilidades compartidas y configuración
├── hooks/                # Custom React Hooks
├── styles/               # CSS Global y variables de diseño
├── public/               # Assets estáticos (Imágenes, Fuentes, Íconos)
├── types/                # Definiciones de tipos TypeScript globales
├── utils/                # Funciones puras de utilidad
└── docs/                 # Documentación técnica e histórico de decisiones
```

## 3. Directrices de Componentes (Server vs Client)

- **Server-First**: Por defecto, todos los componentes bajo `/app` serán React Server Components (RSC) para enviar el menor JavaScript posible al navegador.
- **Client Components**: Se utilizará `'use client'` estrictamente en componentes de interfaz que requieran interactividad (e.g., menús desplegables, carruseles de fotos, formularios interactivos).

## 4. Gestión de Estado y Datos

- **Estado Local**: Manejado mediante Hooks (`useState`, `useReducer`) en componentes cliente.
- **Estado de Servidor**: Manejado de forma nativa por el App Router de Next.js.
- **Sin Estado Global Innecesario**: Se evitarán bibliotecas como Redux o Zustand a menos que la complejidad futura del agendamiento lo demande.

## 5. Diseño y Sistema UI

Basado en las normativas del Capítulo 13:
- **Responsive & Mobile-First**: Layouts fluidos y adaptables empezando desde dispositivos móviles.
- **Accesibilidad**: WCAG 2.2 AA (Contraste, Navegación por teclado, Atributos ARIA).
- **Consistencia Visual**: Utilizando variables de diseño (Design Tokens) en Tailwind para colores primarios (Dark Mode) y espaciados basados en múltiplos de 8px.
- **Tipografía**: Fuentes optimizadas (con `next/font`), legibles y escalables jerárquicamente.

## 6. Arquitectura SEO (Master Plan & Local SEO)

Para cumplir los Capítulos 15 y 16:
- **Estructura Semántica**: H1 único por página, etiquetas HTML semánticas (`<article>`, `<section>`, `<nav>`).
- **Metadata API**: `generateMetadata` dinámico para títulos y descripciones optimizadas con keywords locales.
- **Structured Data (JSON-LD)**: Inyección dinámica en el `layout.tsx` principal de esquemas como `LocalBusiness` y en subrutas de esquemas `Service` o `FAQPage`.
- **Core Web Vitals**: Puntuación +95 en Lighthouse garantizada por el uso de RSC, optimización estricta de fuentes e imágenes (`next/image` y formatos modernos) y lazy-loading.

## 7. Manejo de Errores y Seguridad

- Uso de `error.tsx` y `not-found.tsx` en el App Router para manejar fallas elegantemente sin interrumpir la experiencia.
- Validación de datos (ej: `Zod`) antes de interactuar con posibles endpoints de servidor o links externos.
- Gestión de variables de entorno estricta, sin exponer secrets al cliente.

---
> **Nota de Implementación**: Cualquier nueva característica (Feature) añadida al proyecto debe ceñirse a estas reglas, buscando primero ser modular, limpia y contribuir a la meta principal: Posicionamiento SEO local y Conversión de Usuarios.
