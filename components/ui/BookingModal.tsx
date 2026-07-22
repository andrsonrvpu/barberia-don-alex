"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Scissors, Check, Sparkles, MessageCircle } from "lucide-react";
import { SERVICE_CATEGORIES, WHATSAPP_NUMBER } from "@/lib/constants";
import { useBooking } from "@/context/BookingContext";
import { Button } from "@/components/ui/Button";

export function BookingModal() {
  const {
    isOpen,
    selectedCategoryId,
    selectedServiceName,
    closeBooking,
    setSelectedCategoryId,
    setSelectedServiceName,
  } = useBooking();

  const [clientName, setClientName] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  // Get current category data
  const currentCategory =
    SERVICE_CATEGORIES.find((cat) => cat.id === selectedCategoryId) ||
    SERVICE_CATEGORIES[0];

  // Auto-select first service of category if none selected or if category changes and previous service isn't in it
  useEffect(() => {
    const serviceExists = currentCategory.services.some(
      (s) => s.name === selectedServiceName
    );
    if (!serviceExists && currentCategory.services.length > 0) {
      setSelectedServiceName(currentCategory.services[0].name);
    }
  }, [selectedCategoryId, currentCategory, selectedServiceName, setSelectedServiceName]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const activeService = currentCategory.services.find(
    (s) => s.name === selectedServiceName
  ) || currentCategory.services[0];

  const handleSendWhatsApp = () => {
    if (!activeService) return;

    let text = `Hola Barber Shop Alex, me gustaría agendar una cita para el servicio *${activeService.name}* (${activeService.price}).`;
    
    if (clientName.trim()) {
      text += `\n👤 *Nombre:* ${clientName.trim()}`;
    }
    if (preferredDate.trim()) {
      text += `\n📅 *Día/Hora preferida:* ${preferredDate.trim()}`;
    }

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    closeBooking();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full max-w-2xl bg-[var(--surface-1)] border border-[var(--accent)]/30 rounded-lg shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="relative px-6 pt-6 pb-4 border-b border-[var(--border)] bg-[var(--surface-2)]/50 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Scissors className="h-5 w-5 text-[var(--accent)]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                    Barber Shop Alex
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  Reserva tu Cita
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 font-light">
                  Selecciona el servicio que deseas y confirma directamente por WhatsApp.
                </p>
              </div>

              <button
                onClick={closeBooking}
                className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)] transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
              {/* Category Selector Tabs */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                  1. Selecciona la Categoría
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {SERVICE_CATEGORIES.map((cat) => {
                    const isSelected = cat.id === selectedCategoryId;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategoryId(cat.id)}
                        className={`px-3 py-3 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 border text-center flex flex-col items-center justify-center gap-1 ${
                          isSelected
                            ? "bg-[var(--accent)]/15 border-[var(--accent)] text-[var(--accent)] font-semibold shadow-[0_0_15px_rgba(197,160,89,0.15)]"
                            : "bg-[var(--surface-2)] border-transparent text-[var(--text-secondary)] hover:border-[var(--border)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <span>{cat.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Service List Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                  2. Elige el Servicio
                </label>
                <div className="space-y-2">
                  {currentCategory.services.map((service, sIdx) => {
                    const isSelected = service.name === selectedServiceName;
                    return (
                      <div
                        key={sIdx}
                        onClick={() => setSelectedServiceName(service.name)}
                        className={`p-4 rounded-md border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                          isSelected
                            ? "bg-[var(--surface-2)] border-[var(--accent)] shadow-[0_0_15px_rgba(197,160,89,0.1)]"
                            : "bg-[var(--surface-2)]/40 border-[var(--border)]/60 hover:border-[var(--accent)]/40"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                                : "border-[var(--border)] bg-transparent"
                            }`}
                          >
                            {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`font-semibold text-sm sm:text-base ${
                                  isSelected
                                    ? "text-[var(--accent)]"
                                    : "text-[var(--text-primary)]"
                                }`}
                              >
                                {service.name}
                              </span>
                              {service.highlight && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30 flex items-center gap-1">
                                  <Sparkles className="h-2.5 w-2.5" />
                                  Popular
                                </span>
                              )}
                            </div>
                            {service.details && (
                              <p className="text-xs text-[var(--text-secondary)] font-light mt-1">
                                {service.details}
                              </p>
                            )}
                          </div>
                        </div>

                        <span className="font-serif italic text-base sm:text-lg font-bold text-[var(--text-primary)] whitespace-nowrap">
                          {service.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Optional Fields (Name & Preferred Date) */}
              <div className="pt-2 border-t border-[var(--border)]/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                    Tu Nombre (Opcional)
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ej. Carlos Pérez"
                    className="w-full px-3 py-2.5 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-primary)] text-xs sm:text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                    Fecha o Hora Preferida (Opcional)
                  </label>
                  <input
                    type="text"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="Ej. Hoy a las 4:00 PM"
                    className="w-full px-3 py-2.5 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-primary)] text-xs sm:text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Footer / CTA Action */}
            <div className="p-6 bg-[var(--surface-2)]/80 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-xs text-[var(--text-secondary)] block">
                  Servicio Seleccionado:
                </span>
                <span className="font-bold text-sm text-[var(--accent)]">
                  {activeService?.name} — {activeService?.price}
                </span>
              </div>

              <Button
                variant="accent"
                onClick={handleSendWhatsApp}
                className="w-full sm:w-auto h-12 px-8 rounded-md font-bold text-xs uppercase tracking-widest bg-[#25D366] hover:bg-[#20bd5a] text-black border-none flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4 fill-black" />
                Confirmar en WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
