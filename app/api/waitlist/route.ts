import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const timestamp = new Date().toLocaleString();

    // Send email to your client
    await resend.emails.send({
      from: 'Ontario Policy Hackathon <onboarding@resend.dev>',
      to: 'ella.schlags@gmail.com',
      subject: 'New Waitlist Signup - Ontario Policy Hackathon',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signup Time:</strong> ${timestamp}</p>
        <p><strong>Event:</strong> Ontario Policy Hackathon</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 