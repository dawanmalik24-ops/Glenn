import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Coach G — Glenn Byrd Personal Training',
      url: 'https://coachgofficial.com/strength-training-atlanta',
      description: 'ACE-Certified strength training personal trainer at The Forum Athletic Club, Ponce City Market, Atlanta GA',
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
      jobTitle: 'ACE-Certified Personal Trainer',
      url: 'https://coachgofficial.com',
      sameAs: ['https://www.instagram.com/thegreatglenn/'],
    },
  ],
}

export const metadata: Metadata = {
  title: 'Strength Training Atlanta | Glenn Byrd Personal Trainer',
  description:
    'Build serious strength with ACE-certified personal trainer Glenn Byrd at Ponce City Market Atlanta. Progressive overload programming for all levels.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://coachgofficial.com/strength-training-atlanta' },
  openGraph: {
    type: 'website',
    url: 'https://coachgofficial.com/strength-training-atlanta',
    title: 'Strength Training Atlanta | Glenn Byrd Personal Trainer',
    description:
      'Build serious strength with ACE-certified personal trainer Glenn Byrd at Ponce City Market Atlanta.',
    images: [{ url: 'https://i.imgur.com/BZ9c0Nn.jpeg', width: 1200, height: 630, alt: 'Glenn Byrd strength training Atlanta' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strength Training Atlanta | Glenn Byrd Personal Trainer',
    description: 'Build serious strength with ACE-certified personal trainer Glenn Byrd at Ponce City Market Atlanta.',
    images: ['https://i.imgur.com/BZ9c0Nn.jpeg'],
  },
}

export default function StrengthTrainingPage() {
  return (
    <div className="selection:bg-gold selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Strength Training · Atlanta, GA</p>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-6">
              STRENGTH TRAINING<br />
              IN ATLANTA WITH<br />
              <span className="text-gradient-gold">GLENN BYRD</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Whether you&apos;re picking up your first barbell or chasing a new PR, Glenn builds intelligent,
              progressive programming that makes you demonstrably stronger — every single week.
              Based at The Forum Athletic Club, Ponce City Market.
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

        {/* Philosophy */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">The Philosophy</p>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                  STRENGTH IS A<br />
                  <span className="text-gold">SKILL. EARN IT.</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Glenn&apos;s strength programming is rooted in one principle: <span className="text-white font-semibold">progressive overload</span>.
                    Every session is designed to present your neuromuscular system with a slightly greater challenge
                    than the last — more weight, more reps, more time under tension — forcing adaptation and growth.
                    This is not random hard work. It&apos;s calculated stress followed by planned recovery.
                  </p>
                  <p>
                    The foundation of every Glenn Byrd strength program is the compound movement — squat,
                    deadlift, bench press, overhead press, and row variations. These multi-joint lifts recruit
                    the most muscle mass, drive the greatest hormonal response, and build the kind of functional
                    strength that carries over into every area of life.
                  </p>
                  <p>
                    Accessory work is layered in strategically to address individual weaknesses, correct imbalances,
                    and reduce injury risk. Glenn performs detailed movement assessments at the start of every client
                    relationship so that your program is built around your body — not a template.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: 'Foundational Compound Movements',
                    desc: 'Squat, deadlift, press, and row patterns form the backbone of every program — the lifts that build real, transferable strength.',
                  },
                  {
                    title: 'Progressive Overload Programming',
                    desc: 'Each mesocycle is designed to progressively increase training stress so your body is always adapting — never plateauing.',
                  },
                  {
                    title: 'Movement Assessment & Correction',
                    desc: 'Glenn identifies mobility restrictions and movement compensations before they become injuries, building your program around how your body actually moves.',
                  },
                  {
                    title: 'Recovery & Periodization',
                    desc: 'Planned deload weeks, sleep coaching, and recovery strategies ensure you get stronger without breaking down.',
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

        {/* Who It's For */}
        <section className="py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Who It&apos;s For</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
                BEGINNERS TO <span className="text-gold">ADVANCED.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  level: 'Beginners',
                  desc: "Never touched a barbell? That's the best place to start. Glenn builds confidence from the ground up — teaching proper form, building a movement vocabulary, and ensuring you leave every session feeling capable, not crushed.",
                  focus: 'Form, fundamentals, confidence',
                },
                {
                  level: 'Intermediate',
                  desc: "You've been training but feel like you've stalled. Glenn identifies the gaps in your programming — whether it's volume, frequency, nutrition, or recovery — and rebuilds your approach so progress resumes.",
                  focus: 'Breaking plateaus, intelligent periodization',
                },
                {
                  level: 'Advanced',
                  desc: "Experienced lifters benefit from Glenn's competition-level attention to detail: individual periodization, peak programming, and the technical refinements that separate good lifters from great ones.",
                  focus: 'Peak performance, elite programming',
                },
              ].map((tier) => (
                <div key={tier.level} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-gold font-bold text-sm uppercase tracking-widest mb-3">{tier.level}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{tier.desc}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest border-t border-white/10 pt-4">{tier.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical Session */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">What to Expect</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-10">
                WHAT A STRENGTH SESSION<br />
                <span className="text-gold">LOOKS LIKE.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { time: '0–10 min', title: 'Dynamic Warm-Up & Activation', desc: 'Joint mobilization, targeted activation drills, and movement prep specific to the primary lifts of the day. No generic stretching — every warm-up is intentional.' },
                  { time: '10–45 min', title: 'Primary Strength Work', desc: 'The heart of the session. One to two main compound movements performed at prescribed intensities and volumes. Glenn coaches every rep for technical precision.' },
                  { time: '45–55 min', title: 'Accessory & Hypertrophy Block', desc: 'Targeted accessory movements that address your specific weaknesses — building the supporting musculature that keeps your main lifts growing safely.' },
                  { time: '55–60 min', title: 'Cool-Down & Review', desc: 'Quick recovery work, session debrief, and programming notes for the week ahead. You leave knowing exactly what you accomplished and what comes next.' },
                ].map((block) => (
                  <div key={block.time} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="shrink-0 text-right">
                      <p className="text-gold text-xs font-bold uppercase tracking-wider">{block.time}</p>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1">{block.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{block.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#050505]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
              READY TO GET<br />
              <span className="text-gold">SERIOUSLY STRONG?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Stop spinning your wheels with generic programs. Get a strength plan built specifically
              for your body, your movement patterns, and your goals — coached by one of Atlanta&apos;s
              best personal trainers.
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
