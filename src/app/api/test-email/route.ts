// app/api/test-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET(req: Request) {
  const email = 'test@example.com';
  const order = 'Order #123';

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'carlie.runte32@ethereal.email',
      pass: 'dVryZ12xy545tktcha',
    },
  });

  const info = await transporter.sendMail({
    from: '"Zumax" <no-reply@zumax.com>',
    to: email,
    subject: 'Order Confirmation',
    html: `<p>Thanks for your order!</p><p>${order}</p>`,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  return NextResponse.json({ success: true, message: 'Email sent', preview: nodemailer.getTestMessageUrl(info) });
}
