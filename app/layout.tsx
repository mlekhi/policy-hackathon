import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Ontario Policy Hackathon",
  description: "Join the Ontario Policy Hackathon - A 48-hour hands-on event where innovators come together to solve policy issues with real data. Be part of the solution for Ontario's future.",
  keywords: ["Ontario Policy Hackathon", "policy innovation", "data-driven solutions", "Ontario government", "hackathon", "policy making", "civic tech", "Ontario tech"],
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
    title: "Ontario Policy Hackathon",
    description: "Join the Ontario Policy Hackathon - A 48-hour hands-on event where innovators come together to solve policy issues with real data. Be part of the solution for Ontario's future.",
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
    title: 'Ontario Policy Hackathon',
    description: 'Join the Ontario Policy Hackathon - A 48-hour hands-on event where innovators come together to solve policy issues with real data. Be part of the solution for Ontario\'s future.',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#2f4f97',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-work-sans">
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
