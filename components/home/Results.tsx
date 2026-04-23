'use client'

import { motion } from 'motion/react'
import { Star } from 'lucide-react'

// Replace with Glenn's actual Google Business Profile review link.
// Get it from: Google Business Profile Manager → "Get more reviews" → copy the short link.
const GOOGLE_REVIEW_URL = 'https://g.page/r/CWVhhylbz_L8EBM/review'

const testimonials = [
  {
    quote:
      "Glenn didn't just change my body; he changed my mindset. I'm stronger than I've ever been, both physically and mentally.",
    author: 'Sarah J.',
    role: '1-on-1 Coaching Client',
  },
  {
    quote:
      'The most intentional trainer I\'ve ever worked with. He understands the mental game as much as the physical. Highly recommend.',
    author: 'Marcus T.',
    role: 'In-Person Athlete',
  },
  {
    quote:
      "I lost 30lbs and gained a completely new outlook on life. Glenn's 'Movement is Medicine' philosophy is the real deal.",
    author: 'David L.',
    role: 'Transformation Client',
  },
]

export default function Results() {
  return (
    <section id="results" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">CLIENT REVIEWS</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            What others are saying about their journey with Atlanta personal trainer Glenn Byrd.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 relative"
            >
              <div className="text-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="flex justify-center mt-12">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
          >
            <Star size={20} fill="currentColor" />
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  )
}
