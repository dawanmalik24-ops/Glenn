import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Coach G — Glenn Byrd Personal Training at Ponce City Market',
      url: 'https://coachgofficial.com/personal-trainer-ponce-city-market',
      description: 'ACE-Certified personal trainer Glenn Byrd at The Forum Athletic Club, Ponce City Market, Atlanta. 1-on-1 and group sessions available.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '675 Ponce De Leon Ave NE',
        addressLocality: 'Atlanta',
        addressRegion: 'GA',
        postalCode: '30308',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.7720,
        longitude: -84.3648,
      },
      telephone: '',
      areaServed: ['Atlanta, GA', 'Old Fourth Ward', 'Midtown Atlanta', 'Inman Park', 'Virginia Highland'],
      priceRange: '$$',
      hasMap: 'https://maps.google.com/?q=The+Forum+Athletic+Club+675+Ponce+De+Leon+Ave+NE+Atlanta+GA+30308',
    },
    {
      '@type': 'Person',
      name: 'Glenn Byrd',
      jobTitle: 'ACE-Certified Personal Trainer',
      url: 'https://coachgofficial.com',
      worksFor: {
        '@type': 'LocalBusiness',
        name: 'The Forum Athletic Club',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '675 Ponce De Leon Ave NE',
          addressLocality: 'Atlanta',
          addressRegion: 'GA',
          postalCode: '30308',
        },
      },
      sameAs: ['https://www.instagram.com/thegreatglenn/'],
    },
  ],
}

export const metadata: Metadata = {
  title: 'Personal Trainer Ponce City Market | Glenn Byrd Atlanta',
  description:
    "Train with ACE-certified personal trainer Glenn Byrd at The Forum Athletic Club, Ponce City Market in Atlanta's Old Fourth Ward. 1-on-1 and group sessions available.",
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://coachgofficial.com/personal-trainer-ponce-city-market' },
  openGraph: {
    type: 'website',
    url: 'https://coachgofficial.com/personal-trainer-ponce-city-market',
    title: 'Personal Trainer Ponce City Market | Glenn Byrd Atlanta',
    description:
      "Train with ACE-certified personal trainer Glenn Byrd at The Forum Athletic Club, Ponce City Market in Atlanta's Old Fourth Ward.",
    images: [{ url: 'https://i.imgur.com/BZ9c0Nn.jpeg', width: 1200, height: 630, alt: 'Glenn Byrd personal trainer Ponce City Market Atlanta' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Trainer Ponce City Market | Glenn Byrd Atlanta',
    description: "Train with ACE-certified personal trainer Glenn Byrd at The Forum Athletic Club, Ponce City Market Atlanta.",
    images: ['https://i.imgur.com/BZ9c0Nn.jpeg'],
  },
}

export default function PonceCityMarketPage() {
  return (
    <div className="selection:bg-gold selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Ponce City Market · Atlanta, GA</p>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-6">
              PERSONAL TRAINER<br />
              AT PONCE CITY<br />
              <span className="text-gradient-gold">MARKET, ATLANTA</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Glenn Byrd trains clients 1-on-1 at The Forum Athletic Club inside Ponce City Market —
              Atlanta&apos;s most vibrant fitness destination in the heart of the Old Fourth Ward.
              World-class equipment. Elite coaching. Zero excuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="group bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                Book a Session <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/training"
                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 font-bold text-lg text-center transition-all"
              >
                The Training Experience
              </Link>
            </div>
          </div>
        </section>

        {/* The Forum */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">The Location</p>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                  THE FORUM<br />
                  <span className="text-gold">ATHLETIC CLUB.</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    The Forum Athletic Club at Ponce City Market is not your average gym. Situated inside
                    one of Atlanta&apos;s most iconic mixed-use destinations, The Forum offers a premium
                    training environment that attracts serious athletes, working professionals, and
                    fitness enthusiasts from across the city. Glenn serves as Manager and Fast-Twitch
                    Instructor here — making him one of the most accessible, embedded trainers in the building.
                  </p>
                  <p>
                    The facility features <span className="text-white font-semibold">state-of-the-art equipment</span> across
                    an expansive floor plan: full free-weight sections, functional training areas, turf lanes for
                    speed and agility work, cardio decks with city views, and dedicated class studios where
                    Glenn runs his signature Fast-Twitch sessions. It&apos;s everything a serious client needs
                    under one roof.
                  </p>
                  <p>
                    Training at Ponce City Market also means you&apos;re training in the beating heart of
                    Atlanta&apos;s Old Fourth Ward — a neighborhood defined by energy, ambition, and community.
                    It&apos;s the kind of environment that makes showing up easier and getting results inevitable.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: 'Premium Free-Weight Section',
                    desc: 'Dumbbells, barbells, squat racks, and cable machines — everything you need for complete strength and hypertrophy programming.',
                  },
                  {
                    title: 'Turf & Functional Training Zone',
                    desc: 'Open turf lanes for sled pushes, agility drills, and speed work — the infrastructure behind Glenn\'s Fast-Twitch athletic performance training.',
                  },
                  {
                    title: 'Group Class Studios',
                    desc: 'Dedicated studio space for Fast-Twitch classes — Glenn\'s signature high-intensity group training experience.',
                  },
                  {
                    title: 'Premium Atmosphere',
                    desc: 'Training inside Ponce City Market means access to Atlanta\'s most vibrant mixed-use destination — before or after every session.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-bold text-white mb-1">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Glenn Trains */}
        <section className="py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Who Glenn Trains</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
                ALL OF <span className="text-gold">ATLANTA.</span>
              </h2>
              <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
                Glenn&apos;s client base spans the city — from neighbors walking over from the Old Fourth Ward
                to professionals commuting from Buckhead who make the drive worth it.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {['Old Fourth Ward', 'Midtown', 'Inman Park', 'Virginia Highland', 'Poncey-Highland', 'Buckhead', 'Grant Park', 'East Atlanta'].map((area) => (
                <div key={area} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <p className="text-sm font-semibold text-white">{area}</p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed text-center">
              <p>
                The Beltline, which runs directly through the Old Fourth Ward, brings cyclists, runners,
                and fitness-minded Atlantans past Ponce City Market daily. For many of Glenn&apos;s clients,
                The Forum is the natural centerpiece of an already active lifestyle — the place where
                their outdoor activity gets turned into structured, progressive training that actually
                moves the needle.
              </p>
            </div>
          </div>
        </section>

        {/* Address Block */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Find Us</p>
                <h2 className="font-display text-4xl font-extrabold tracking-tight mb-8">
                  WHERE TO <span className="text-gold">TRAIN.</span>
                </h2>
                <div className="space-y-6">
                  <a
                    href="https://maps.google.com/?q=The+Forum+Athletic+Club+675+Ponce+De+Leon+Ave+NE+Atlanta+GA+30308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold transition-colors group"
                  >
                    <MapPin className="text-gold shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-bold text-white text-lg mb-1">The Forum Athletic Club</p>
                      <p className="text-gray-400">675 Ponce De Leon Ave NE</p>
                      <p className="text-gray-400">Atlanta, GA 30308</p>
                      <p className="text-gold text-sm mt-2 group-hover:underline">Get Directions →</p>
                    </div>
                  </a>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Neighborhood</p>
                      <p className="font-bold text-white">Old Fourth Ward</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Parking</p>
                      <p className="font-bold text-white">PCM Garage (validated)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold/30 min-h-72 lg:min-h-0 h-72 lg:h-auto">
                <iframe
                  title="The Forum Athletic Club at Ponce City Market"
                  src="https://maps.google.com/maps?q=The+Forum+Athletic+Club,+675+Ponce+De+Leon+Ave+NE,+Atlanta,+GA+30308&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#050505]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
              TRAIN AT ATLANTA&apos;S<br />
              <span className="text-gold">BEST LOCATION.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              The Forum Athletic Club at Ponce City Market. The best trainer in the building.
              Your transformation starts with one inquiry.
            </p>
            <Link
              href="/#contact"
              className="group bg-gold hover:bg-gold-light text-black px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-2 transition-all"
            >
              Book a Session <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-gold transition-colors">← Back to Home</Link>
              <span>·</span>
              <Link href="/training" className="hover:text-gold transition-colors">The Training Experience →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
