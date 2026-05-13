import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Coach G — Glenn Byrd Personal Training',
      url: 'https://coachgofficial.com/athletic-performance-trainer-atlanta',
      description: 'Athletic performance trainer at The Forum Athletic Club, Ponce City Market, Atlanta. Speed, agility, and explosive power training.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '675 Ponce De Leon Ave NE',
        addressLocality: 'Atlanta',
        addressRegion: 'GA',
        postalCode: '30308',
        addressCountry: 'US',
      },
      areaServed: 'Atlanta, GA',
      priceRange: '$$',
    },
    {
      '@type': 'Person',
      name: 'Glenn Byrd',
      jobTitle: 'ACE-Certified Personal Trainer & Athletic Performance Coach',
      url: 'https://coachgofficial.com',
      sameAs: ['https://www.instagram.com/thegreatglenn/'],
    },
  ],
}

export const metadata: Metadata = {
  title: 'Athletic Performance Trainer Atlanta | Glenn Byrd',
  description:
    "Take your game to the next level with Glenn Byrd's Fast-Twitch Method at The Forum Athletic Club, Ponce City Market Atlanta. Speed, agility, and explosive power training.",
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://coachgofficial.com/athletic-performance-trainer-atlanta' },
  openGraph: {
    type: 'website',
    url: 'https://coachgofficial.com/athletic-performance-trainer-atlanta',
    title: 'Athletic Performance Trainer Atlanta | Glenn Byrd',
    description:
      "Take your game to the next level with Glenn Byrd's Fast-Twitch Method at The Forum Athletic Club, Ponce City Market Atlanta.",
    images: [{ url: 'https://i.imgur.com/BZ9c0Nn.jpeg', width: 1200, height: 630, alt: 'Glenn Byrd athletic performance trainer Atlanta' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athletic Performance Trainer Atlanta | Glenn Byrd',
    description: "Take your game to the next level with Glenn Byrd's Fast-Twitch Method in Atlanta.",
    images: ['https://i.imgur.com/BZ9c0Nn.jpeg'],
  },
}

export default function AthleticPerformancePage() {
  return (
    <div className="selection:bg-gold selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Athletic Performance · Atlanta, GA</p>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-6">
              ATHLETIC<br />
              <span className="text-gradient-gold">PERFORMANCE</span><br />
              TRAINING IN ATLANTA
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Glenn Byrd&apos;s Fast-Twitch Method is Atlanta&apos;s premier athletic performance program.
              Built for athletes who demand more — more speed, more explosiveness, more dominance on
              the field, court, or track. Training at The Forum Athletic Club, Ponce City Market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="group bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                Inquire Now <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
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

        {/* Fast-Twitch Method */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">The Method</p>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                  THE FAST-TWITCH<br />
                  <span className="text-gold">METHOD.</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Fast-twitch muscle fibers are the engine behind every explosive movement in sport —
                    the first step off the line, the vertical leap, the acceleration burst. Most training
                    programs ignore them entirely. Glenn Byrd built his Fast-Twitch Method specifically
                    to develop them, because <span className="text-white font-semibold">the athlete who can produce force faster wins</span>.
                  </p>
                  <p>
                    The method combines plyometric training, complex contrast work (pairing heavy strength
                    movements with explosive power exercises), and sport-specific conditioning drills.
                    The result is an athlete who is not just stronger — but faster, more reactive, and
                    harder to beat in every measurable athletic metric.
                  </p>
                  <p>
                    As the creator and lead instructor of Fast-Twitch classes at The Forum Athletic Club,
                    Glenn has refined this methodology through thousands of sessions with athletes across
                    disciplines — from weekend warriors to competitive professionals. The program adapts
                    to your sport and your position, not the other way around.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: 'Plyometric Power Development',
                    desc: 'Box jumps, depth drops, bounding, and reactive drills that directly train your nervous system to produce force faster.',
                  },
                  {
                    title: 'Complex Contrast Training',
                    desc: 'Pairing heavy compound lifts with explosive power exercises creates a post-activation potentiation effect — your muscles fire harder, faster.',
                  },
                  {
                    title: 'Reactive Agility Drills',
                    desc: 'Change-of-direction speed, deceleration mechanics, and reactive decision-making drills that mirror the unpredictability of real competition.',
                  },
                  {
                    title: 'Sport-Specific Conditioning',
                    desc: 'Energy system training tailored to the demands of your sport — whether it\'s repeated sprints, sustained intensity, or explosive burst intervals.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <Zap className="text-gold shrink-0 mt-0.5" size={20} />
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

        {/* Sports */}
        <section className="py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Who It Serves</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
                BUILT FOR EVERY<br />
                <span className="text-gold">SPORT.</span>
              </h2>
              <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
                The Fast-Twitch Method transfers across disciplines because explosive athleticism is universal.
                Here&apos;s where Glenn&apos;s athletes compete:
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Basketball', 'Football', 'Soccer', 'Track & Field', 'Tennis', 'CrossFit', 'Volleyball', 'Baseball', 'Martial Arts', 'Swimming', 'Cycling', 'General Athletics'].map((sport) => (
                <div key={sport} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <p className="text-sm font-semibold text-white">{sport}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">The Three Pillars</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
                SPEED. POWER. <span className="text-gold">DOMINANCE.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  pillar: '01 — Speed',
                  title: 'First-Step Quickness',
                  desc: "Speed is not just about top-end velocity — it's about getting there first. Glenn trains acceleration mechanics, stride frequency, and start position so your first step is always your fastest.",
                },
                {
                  pillar: '02 — Power',
                  title: 'Explosive Force Production',
                  desc: 'Vertical leap, rotational power, push-off strength — Glenn trains every expression of athletic power so that when the moment demands maximum output, you deliver it.',
                },
                {
                  pillar: '03 — Agility',
                  title: 'Reactive Change of Direction',
                  desc: 'Elite athletes don\'t just move fast in straight lines. Glenn develops your ability to decelerate, redirect, and re-accelerate with precision — the skill that separates good athletes from great ones.',
                },
              ].map((item) => (
                <div key={item.pillar} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-gold font-bold text-xs uppercase tracking-widest mb-3">{item.pillar}</p>
                  <h3 className="font-display text-2xl font-extrabold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#050505]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
              TAKE YOUR GAME<br />
              <span className="text-gold">TO THE NEXT LEVEL.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              The Fast-Twitch Method is currently available for 1-on-1 sessions and group classes at
              The Forum Athletic Club. Limited spots available — serious athletes only.
            </p>
            <Link
              href="/#contact"
              className="group bg-gold hover:bg-gold-light text-black px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-2 transition-all"
            >
              Inquire Now <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
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
