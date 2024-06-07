
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, company, email, phone, projectDescription, projectType, budget } = req.body;

    console.log('Request received:', req.body);

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
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
      } else {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
