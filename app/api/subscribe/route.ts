import { NextRequest, NextResponse } from "next/server";

// TODO: Connect to your email provider.
// Options: Resend (resend.com) + an audience, ConvertKit, Mailchimp, or Loops.so
//
// Example with Resend audiences:
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID });
//
// Then deliver the lead magnet PDF via a Resend transactional email
// pointing to the hosted PDF URL (Vercel Blob or public /public folder).

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Replace this log with your real email provider call
    console.log("[Subscribe] New subscriber:", email);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
