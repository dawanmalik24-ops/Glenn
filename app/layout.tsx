import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['700', '800'],
  display: 'swap',
})

const eventSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Do Not Disturb Summer Wellness Festival — Byrd Bootcamp',
  description:
    'Join Coach Glenn Byrd for Byrd Bootcamp at the Do Not Disturb Summer Wellness Festival. A high-energy outdoor workout experience at Ponce City Market Lawn.',
  startDate: '2026-05-30',
  endDate: '2026-05-30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Ponce City Market Lawn',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '675 Ponce De Leon Ave NE',
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      postalCode: '30308',
      addressCountry: 'US',
    },
  },
  organizer: {
    '@type': 'Person',
    name: 'Glenn Byrd',
    url: 'https://coachgofficial.com',
  },
  url: 'https://posh.vip/e/do-not-disturb-summer-wellness-festival-1',
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Coach G — Glenn Byrd Personal Training',
  url: 'https://coachgofficial.com',
  jobTitle: 'Personal Trainer',
  description:
    'ACE-Certified personal trainer at The Forum Athletic Club, Ponce City Market, Atlanta GA',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '675 Ponce De Leon Ave NE',
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    postalCode: '30308',
  },
  areaServed: 'Atlanta, GA',
  priceRange: '$$',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://coachgofficial.com'),
  title: 'Glenn Byrd | Personal Trainer Atlanta | Ponce City Market',
  description:
    'Train 1-on-1 with ACE-Certified Coach Glenn Byrd at The Forum Athletic Club, Ponce City Market Atlanta. Strength, conditioning, and Fast Twitch classes.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://coachgofficial.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://coachgofficial.com',
    title: 'Glenn Byrd | Personal Trainer Atlanta | Ponce City Market',
    description:
      'Train 1-on-1 with ACE-Certified Coach Glenn Byrd at The Forum Athletic Club, Ponce City Market Atlanta. Strength, conditioning, and Fast Twitch classes.',
    siteName: 'Coach G — Glenn Byrd Personal Training',
    images: [
      {
        url: 'https://i.imgur.com/BZ9c0Nn.jpeg',
        width: 1200,
        height: 630,
        alt: 'Glenn Byrd ACE-certified personal trainer Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glenn Byrd | Personal Trainer Atlanta | Ponce City Market',
    description:
      'Train 1-on-1 with ACE-Certified Coach Glenn Byrd at The Forum Athletic Club, Ponce City Market Atlanta.',
    images: ['https://i.imgur.com/BZ9c0Nn.jpeg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
