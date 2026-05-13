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
      url: 'https://coachgofficial.com/bodybuilding-coach-atlanta',
      description: 'Atlanta bodybuilding coach Glenn Byrd at The Forum Athletic Club, Ponce City Market. Hypertrophy programming and physique development.',
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
      jobTitle: 'ACE-Certified Personal Trainer & Bodybuilding Coach',
      url: 'https://coachgofficial.com',
      sameAs: ['https://www.instagram.com/thegreatglenn/'],
    },
  ],
}

export const metadata: Metadata = {
  title: 'Bodybuilding Coach Atlanta | Glenn Byrd Personal Trainer',
  description:
    'Build your best physique with Atlanta bodybuilding coach Glenn Byrd at Ponce City Market. Hypertrophy programming and competition prep for athletes.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://coachgofficial.com/bodybuilding-coach-atlanta' },
  openGraph: {
    type: 'website',
    url: 'https://coachgofficial.com/bodybuilding-coach-atlanta',
    title: 'Bodybuilding Coach Atlanta | Glenn Byrd Personal Trainer',
    description:
      'Build your best physique with Atlanta bodybuilding coach Glenn Byrd at Ponce City Market.',
    images: [{ url: 'https://i.imgur.com/BZ9c0Nn.jpeg', width: 1200, height: 630, alt: 'Glenn Byrd bodybuilding coach Atlanta' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bodybuilding Coach Atlanta | Glenn Byrd Personal Trainer',
    description: 'Build your best physique with Atlanta bodybuilding coach Glenn Byrd at Ponce City Market.',
    images: ['https://i.imgur.com/BZ9c0Nn.jpeg'],
  },
}

export default function BodybuildingPage() {
  return (
    <div className="selection:bg-gold selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Bodybuilding · Atlanta, GA</p>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-6">
              ATLANTA<br />
              BODYBUILDING COACH —<br />
              <span className="text-gradient-gold">GLENN BYRD</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Serious muscle. Serious programming. Glenn Byrd brings bodybuilding&apos;s most proven
              hypertrophy principles to Atlanta — working with physique athletes from their first
              bulk to the competition stage. Based at The Forum Athletic Club, Ponce City Market.
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

        {/* Background & Philosophy */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Background & Philosophy</p>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                  BUILT FROM THE<br />
                  <span className="text-gold">INSIDE OUT.</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Glenn&apos;s relationship with bodybuilding began not as a competitive pursuit, but as
                    a means of reclaiming control during one of the most difficult periods of his life.
                    Rebuilding his body taught him that the process of sculpting a physique — the discipline,
                    the patience, the attention to detail — reshapes your identity as much as your muscles.
                    That&apos;s the philosophy he brings to every client.
                  </p>
                  <p>
                    At its core, Glenn&apos;s bodybuilding approach is built on <span className="text-white font-semibold">scientific hypertrophy principles</span>:
                    sufficient training volume in the 6–20 rep range, progressive overload across mesocycles,
                    mechanical tension as the primary driver of muscle growth, and strategic use of metabolic
                    stress and muscle damage as secondary hypertrophy mechanisms.
                  </p>
                  <p>
                    What separates Glenn from most coaches is his emphasis on the <span className="text-white font-semibold">mind-muscle connection</span>.
                    Every set has a purpose. Every rep has intent. Glenn coaches clients to feel every
                    movement in the target muscle — because training with awareness produces dramatically
                    better results than going through the motions with heavy weight.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: 'Volume Periodization',
                    desc: 'Systematic manipulation of weekly sets and reps across training blocks ensures continuous muscle growth without overtraining.',
                  },
                  {
                    title: 'Mind-Muscle Connection Coaching',
                    desc: 'Glenn teaches you to feel the target muscle contracting on every rep — the skill that separates average physiques from exceptional ones.',
                  },
                  {
                    title: 'Weak Point Specialization',
                    desc: 'Identifying and prioritizing lagging muscle groups with targeted volume and frequency adjustments to create balanced, proportional development.',
                  },
                  {
                    title: 'Competition Prep',
                    desc: 'For those heading to the stage: peak week planning, water management, posing coaching, and the detailed periodization required to bring your best on show day.',
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
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Who This Is For</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
                RECREATIONAL TO <span className="text-gold">COMPETITIVE.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  type: 'Physique-Focused',
                  desc: "You want to look better — more muscle, less fat, better proportions. Glenn builds hypertrophy programs that deliver visible, measurable improvements in your body composition every single training block.",
                  goal: 'Aesthetics & body composition',
                },
                {
                  type: 'Recreational Competitor',
                  desc: "You've considered stepping on stage but don't know where to start. Glenn guides you through your first prep cycle — the diet, the training, the posing — so that your debut is your best debut.",
                  goal: 'First competition prep',
                },
                {
                  type: 'Competitive Athlete',
                  desc: "You've competed before and you want to come in better. Glenn provides the advanced periodization, conditioning protocols, and peak week management that elite physique athletes need to place at the top.",
                  goal: 'Advanced competition strategy',
                },
              ].map((tier) => (
                <div key={tier.type} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-gold font-bold text-sm uppercase tracking-widest mb-3">{tier.type}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{tier.desc}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest border-t border-white/10 pt-4">{tier.goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
              READY TO BUILD YOUR<br />
              <span className="text-gold">BEST PHYSIQUE?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Whether you&apos;re chasing your first visible abs or preparing for the Olympia stage, Glenn
              brings the knowledge, the programming, and the accountability to get you there. Atlanta&apos;s
              premier bodybuilding coach is ready when you are.
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
