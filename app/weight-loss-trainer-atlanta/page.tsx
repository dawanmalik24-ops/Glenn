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
      url: 'https://coachgofficial.com/weight-loss-trainer-atlanta',
      description: 'ACE-Certified weight loss personal trainer at The Forum Athletic Club, Ponce City Market, Atlanta GA',
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
  title: 'Weight Loss Personal Trainer Atlanta | Glenn Byrd',
  description:
    'Lose weight with ACE-certified personal trainer Glenn Byrd at The Forum Athletic Club, Ponce City Market Atlanta. Science-backed fat loss coaching tailored to your goals.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://coachgofficial.com/weight-loss-trainer-atlanta' },
  openGraph: {
    type: 'website',
    url: 'https://coachgofficial.com/weight-loss-trainer-atlanta',
    title: 'Weight Loss Personal Trainer Atlanta | Glenn Byrd',
    description:
      'Lose weight with ACE-certified personal trainer Glenn Byrd at The Forum Athletic Club, Ponce City Market Atlanta.',
    images: [{ url: 'https://i.imgur.com/BZ9c0Nn.jpeg', width: 1200, height: 630, alt: 'Glenn Byrd personal trainer Atlanta' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weight Loss Personal Trainer Atlanta | Glenn Byrd',
    description: 'Lose weight with ACE-certified personal trainer Glenn Byrd at Ponce City Market Atlanta.',
    images: ['https://i.imgur.com/BZ9c0Nn.jpeg'],
  },
}

const testimonials = [
  {
    quote: "I lost 30lbs and gained a completely new outlook on life. Glenn's 'Movement is Medicine' philosophy is the real deal.",
    author: 'David L.',
    role: 'Transformation Client',
  },
  {
    quote: "Glenn's workouts are the best! Something new and challenging every time, he is always pushing me to get stronger and I laugh at least 10 times a session. I may hate it in the moment but love the results.",
    author: 'Casey Henritz',
    role: 'Google Review',
  },
  {
    quote: "Glenn always puts together a great 60 minute workout that targets more than just your standard leg day muscles. He's a great instructor!",
    author: 'Naomi Nagel',
    role: 'Google Review',
  },
]

export default function WeightLossPage() {
  return (
    <div className="selection:bg-gold selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Weight Loss · Atlanta, GA</p>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-6">
              ATLANTA&apos;S #1<br />
              <span className="text-gradient-gold">WEIGHT LOSS</span><br />
              PERSONAL TRAINER
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              ACE-certified personal trainer Glenn Byrd combines evidence-based fat loss programming
              with nutrition accountability to deliver lasting transformations — not quick fixes.
              Training at The Forum Athletic Club, Ponce City Market.
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

        {/* Methodology */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">The Method</p>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                  FAT LOSS BUILT<br />
                  <span className="text-gold">TO LAST.</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Most weight loss programs fail because they treat fat loss as a math problem — calories in,
                    calories out — without addressing the behavioral and physiological factors that determine
                    long-term success. Glenn&apos;s approach starts with understanding <span className="text-white">you</span>:
                    your lifestyle, your relationship with food, and the movement patterns your body actually responds to.
                  </p>
                  <p>
                    At the core of every plan Glenn builds is <span className="text-white font-semibold">progressive resistance training</span>.
                    Muscle is metabolically active tissue — the more you carry, the more calories your body burns
                    at rest. By systematically increasing training stimulus over time, Glenn ensures your metabolism
                    stays elevated long after the session ends.
                  </p>
                  <p>
                    Nutrition accountability runs parallel to every training block. Glenn coaches you through building
                    sustainable eating habits that fit your schedule, your culture, and your preferences — so that
                    when you hit your goal weight, you know exactly how to maintain it. This is not a crash diet.
                    It&apos;s a lifestyle rebuild.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: 'Progressive Resistance Training',
                    desc: 'Systematic overload builds muscle, elevates metabolism, and reshapes your body composition — not just the number on the scale.',
                  },
                  {
                    title: 'Nutrition Accountability',
                    desc: 'Weekly check-ins, macro guidance, and habit coaching keep you aligned without eliminating the foods you love.',
                  },
                  {
                    title: 'Behavioral Coaching',
                    desc: 'Identifying the triggers, patterns, and mindsets that kept past programs from sticking — so this time is different.',
                  },
                  {
                    title: 'Data-Driven Progress Tracking',
                    desc: 'Body measurements, performance benchmarks, and milestone tracking create accountability and keep motivation high.',
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

        {/* Stats */}
        <section className="py-16 bg-[#050505] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '500+', label: 'Clients Transformed' },
                { value: '30+ lbs', label: 'Average Transformation' },
                { value: '5+', label: 'Years of Experience' },
                { value: 'ACE', label: 'Certified Trainer' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl md:text-5xl font-extrabold text-gold mb-2">{stat.value}</p>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-4xl font-extrabold text-center mb-4">REAL RESULTS.</h2>
            <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
              Atlanta clients who committed to the process and changed their lives.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-gold mb-6">
                    {[...Array(5)].map((_, j) => <span key={j} className="text-xl">★</span>)}
                  </div>
                  <p className="text-gray-300 italic mb-8 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-bold text-white">{t.author}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#050505]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
              READY TO LOSE THE<br />
              <span className="text-gold">WEIGHT FOR GOOD?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Stop guessing. Stop restarting. Get a plan built for your body, your schedule, and your goals —
              with a trainer who holds you accountable every single step of the way.
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
