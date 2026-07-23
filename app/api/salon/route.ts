import { NextResponse } from "next/server";
import { GLOWMANAGE_API_BASE_URL } from "@/lib/constants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const salonId = searchParams.get("salonId");

  if (!salonId) {
    return NextResponse.json({ success: false, error: "Falta parámetro salonId" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `${GLOWMANAGE_API_BASE_URL}/salon?salonId=${encodeURIComponent(salonId)}`,
      { cache: "no-store" }
    );
    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error en proxy /api/salon:", error);
    return NextResponse.json(
      { success: false, error: "Error al consultar datos del salón" },
      { status: 500 }
    );
  }
}
