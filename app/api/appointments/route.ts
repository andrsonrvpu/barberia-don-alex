import { NextResponse } from "next/server";
import { GLOWMANAGE_API_BASE_URL } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(`${GLOWMANAGE_API_BASE_URL}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.success === false) {
      return NextResponse.json(
        {
          success: false,
          error: data.error || data.message || `Error del servidor GlowManage (${response.status})`,
        },
        { status: response.status || 400 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error en proxy /api/appointments:", error);
    return NextResponse.json(
      { success: false, error: "No se pudo comunicar con el servidor de GlowManage." },
      { status: 500 }
    );
  }
}
