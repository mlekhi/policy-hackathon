import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Send email to your client
    await resend.emails.send({
      from: 'Ontario Policy Hackathon <onboarding@resend.dev>',
      to: process.env.CLIENT_EMAIL || 'your-client-email@example.com', // Replace with your client's email
      subject: 'New Waitlist Signup',
      text: `New signup for the Ontario Policy Hackathon waitlist:\nEmail: ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 