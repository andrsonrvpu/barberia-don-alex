import { NextResponse } from "next/server";
import { GLOWMANAGE_API_BASE_URL } from "@/lib/constants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const salonId = searchParams.get("salonId");
  const date = searchParams.get("date");

  if (!salonId || !date) {
    return NextResponse.json({ success: false, error: "Faltan parámetros salonId o date" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `${GLOWMANAGE_API_BASE_URL}/availability?salonId=${encodeURIComponent(salonId)}&date=${encodeURIComponent(date)}`,
      { cache: "no-store" }
    );
    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error en proxy /api/availability:", error);
    return NextResponse.json(
      { success: false, error: "Error al consultar disponibilidad" },
      { status: 500 }
    );
  }
}
