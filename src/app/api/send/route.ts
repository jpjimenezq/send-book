import { EmailTemplate } from "@/app/components/email";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { pool } from "@/lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {

    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { message: "Nombre y correo electrónico son requeridos" },
        { status: 400 }
      );
    }

    const downloadLink = "https://example.com/your-book.pdf";

    const data = await resend.emails.send({
      from: "Code Game <onboarding@resend.dev>",
      to: [email],
      subject: "Aquí está tu libro gratis",
      react: EmailTemplate({ firstName: name, downloadLink }),
    });

    console.log("Email enviado con éxito:", data);
    const [rows] = await pool.query('INSERT INTO subscribers (name, email) VALUES (?, ?)', [name, email]);
    console.log(rows);

    return NextResponse.json({ message: "Email Sent and Data Saved", data }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return NextResponse.json(
      { message: "Error al enviar el email" },
      { status: 500 }
    );
  }
}
