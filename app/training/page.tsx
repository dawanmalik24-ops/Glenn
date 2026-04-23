import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import TrainingHero from '@/components/training/TrainingHero'
import Philosophy from '@/components/training/Philosophy'
import TypicalSession from '@/components/training/TypicalSession'
import FastTwitch from '@/components/training/FastTwitch'
import ClientExpectations from '@/components/training/ClientExpectations'
import TheForumSection from '@/components/training/TheForumSection'
import CTA from '@/components/training/CTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Training Experience | Glenn Byrd Personal Trainer Atlanta',
  description:
    'Discover what it means to train with Glenn Byrd at The Forum Athletic Club, Ponce City Market. Fast Twitch classes, 1-on-1 sessions, and elite performance coaching in Atlanta.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://coachgofficial.com/training',
  },
  openGraph: {
    type: 'website',
    url: 'https://coachgofficial.com/training',
    title: 'The Training Experience | Glenn Byrd Personal Trainer Atlanta',
    description:
      'Discover what it means to train with Glenn Byrd at The Forum Athletic Club, Ponce City Market, Atlanta.',
    images: [
      {
        url: 'https://i.imgur.com/BZ9c0Nn.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fast Twitch fitness class at The Forum Athletic Club Ponce City Market Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Training Experience | Glenn Byrd Personal Trainer Atlanta',
    description:
      'Discover what it means to train with Glenn Byrd at The Forum Athletic Club, Ponce City Market, Atlanta.',
    images: ['https://i.imgur.com/BZ9c0Nn.jpeg'],
  },
}

export default function TrainingPage() {
  return (
    <div className="selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <TrainingHero />
        <Philosophy />
        <TypicalSession />
        <FastTwitch />
        <ClientExpectations />
        <TheForumSection />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
