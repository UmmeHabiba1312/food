// /app/api/send-order/route.ts (Next.js 13+/14)
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, order } = body;

  // 1. Send confirmation email
  await sendEmailToUser(email, order);

  // 2. Save order temporarily (optional)

  return NextResponse.json({ message: "Confirmation email sent" });
}

// Example placeholder
async function sendEmailToUser(email: string, order: string) {
  console.log(`Sending confirmation email to ${email}, order: ${order}`);
  // integrate nodemailer or Resend or any service
}
