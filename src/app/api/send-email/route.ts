// app/api/send-email/route.ts (App Router)
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Zumax <onboarding@resend.dev>',
      to: email,
      subject: 'Order Confirmation',
      html: `<p>Thanks for your order!</p><p>Your order #123 has been confirmed.</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
