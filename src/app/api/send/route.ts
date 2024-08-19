import { EmailTemplate } from "@/app/components/email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_c877tpH6_8RgJaetk95P4t3yYeLkyzjeX");

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json(); // Obtener datos del cuerpo de la solicitud

    // Validar los datos aquí
    if (!name || !email) {
      return NextResponse.json(
        { message: "Nombre y correo electrónico son requeridos" },
        { status: 400 }
      );
    }

    const downloadLink = "https://example.com/your-book.pdf"; // Cambia esto por el enlace real

    const data = await resend.emails.send({
      from: "Code Game <onboarding@resend.dev>",
      to: [email], // Usar el email proporcionado
      subject: "Aquí está tu libro gratis",
      react: EmailTemplate({ firstName: name, downloadLink }), // Pasar nombre y enlace al template
    });

    console.log("Email enviado con éxito:", data);
    return NextResponse.json({ message: "Email Sent", data }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return NextResponse.json(
      { message: "Error al enviar el email" },
      { status: 500 }
    );
  }
}
