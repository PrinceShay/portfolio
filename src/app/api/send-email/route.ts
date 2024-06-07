import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, company, email, phone, projectDescription, projectType, budget } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM, // Absender-Adresse
      to: process.env.SMTP_TO, // Empfänger-Adresse
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone: ${phone ? phone : 'Not provided'}
        Project Description: ${projectDescription}
        Project Type: ${projectType}
        Budget: ${budget}
      `,
    });

    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
    } else {
      console.error('Error sending email:', error);
      return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
  }
}
