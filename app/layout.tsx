import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Ontario Policy Hackathon | Join the Waitlist",
  description: "Join the Ontario Policy Hackathon - a 48-hour hands-on event where people from different fields come together to solve policy issues with real data. Sign up to be notified when applications open.",
  keywords: ["policy hackathon", "ontario", "policy", "innovation", "social impact", "public policy", "hackathon", "data-driven policy"],
  authors: [{ name: "Ontario Policy Hackathon Team" }],
  creator: "Ontario Policy Hackathon",
  publisher: "Ontario Policy Hackathon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ontariopolicyhackathon.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ontario Policy Hackathon | Join the Waitlist",
    description: "Join the Ontario Policy Hackathon - a 48-hour hands-on event where people from different fields come together to solve policy issues with real data.",
    url: 'https://ontariopolicyhackathon.ca',
    siteName: 'Ontario Policy Hackathon',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Ontario Policy Hackathon',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ontario Policy Hackathon | Join the Waitlist',
    description: 'Join the Ontario Policy Hackathon - a 48-hour hands-on event where people from different fields come together to solve policy issues with real data.',
    images: ['/twitter-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${dmSans.variable} font-dm-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Ontario Policy Hackathon",
              "description": "A 48-hour hands-on event where people from different fields come together to solve policy issues with real data.",
              "image": "https://ontariopolicyhackathon.ca/hero-bg.svg",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "organizer": {
                "@type": "Organization",
                "name": "Ontario Policy Hackathon",
                "url": "https://ontariopolicyhackathon.ca"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
