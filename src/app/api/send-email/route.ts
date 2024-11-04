// app/api/send-email/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const {
    name,
    company,
    email,
    phone,
    projectDescription,
    projectType,
    budget,
    currentWebsite,
  } = await req.json();

  // Prüfe, ob erforderliche Felder vorhanden sind
  if (!name || !phone || !projectDescription || !budget || !projectType) {
    return NextResponse.json(
      { message: "Required fields are missing" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Formatiere projectType (Array) als String
  const projectTypeString = Array.isArray(projectType)
    ? projectType.join(", ")
    : projectType;

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM, // Absender-Adresse
      to: process.env.SMTP_TO, // Empfänger-Adresse
      subject: "Neue Kontaktanfrage",
      text: `
        Name: ${name}
        Unternehmen: ${company || "Nicht angegeben"}
        E-Mail: ${email || "Nicht angegeben"}
        Telefon: ${phone}
        Aktuelle Webseite: ${currentWebsite || "Nicht angegeben"}
        Projektbeschreibung: ${projectDescription}
        Projektart: ${projectTypeString}
        Budget: ${budget}€
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { message: "Failed to send email", error: error.message },
        { status: 500 }
      );
    } else {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }
  }
}
