// lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailToUser(email: string, order: string) {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // can be your own verified domain later
      to: email,
      subject: 'Order Confirmation',
      html: `<p>Thank you for your order!</p><p>${order}</p>`,
    });

    console.log("✅ Email sent:", data);
  } catch (error) {
    console.error("❌ Email failed:", error);
  }
}
