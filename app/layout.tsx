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
  title: 'Glenn Byrd | ACE-Certified Personal Trainer | Ponce City Market Atlanta',
  description:
    'Train 1-on-1 with ACE-Certified Coach Glenn Byrd at The Forum Athletic Club, Ponce City Market Atlanta. Strength, conditioning, and Fast Twitch classes. Book today at coachgofficial.com',
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
    title: 'Glenn Byrd | ACE-Certified Personal Trainer | Ponce City Market Atlanta',
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
    title: 'Glenn Byrd | ACE-Certified Personal Trainer | Ponce City Market Atlanta',
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
      </head>
      <body>{children}</body>
    </html>
  )
}
