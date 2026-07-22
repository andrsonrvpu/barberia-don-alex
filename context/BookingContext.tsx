"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingOptions {
  categoryId?: string;
  serviceName?: string;
}

interface BookingContextType {
  isOpen: boolean;
  selectedCategoryId: string;
  selectedServiceName: string;
  openBooking: (options?: BookingOptions) => void;
  closeBooking: () => void;
  setSelectedCategoryId: (id: string) => void;
  setSelectedServiceName: (name: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("cortes");
  const [selectedServiceName, setSelectedServiceName] = useState("");

  const openBooking = (options?: BookingOptions) => {
    if (options?.categoryId) {
      setSelectedCategoryId(options.categoryId);
    }
    if (options?.serviceName) {
      setSelectedServiceName(options.serviceName);
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        selectedCategoryId,
        selectedServiceName,
        openBooking,
        closeBooking,
        setSelectedCategoryId,
        setSelectedServiceName,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
