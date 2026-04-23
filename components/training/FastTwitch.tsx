'use client'

import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'

const methods = [
  'Explosive plyometric circuits',
  'Agility ladder & cone drills',
  'Olympic lift derivatives (hang cleans, power snatches)',
  'Sled pushes & loaded carries',
  'Sprint intervals & active recovery cycles',
  'Sport-specific movement patterns',
]

export default function FastTwitch() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold tracking-widest uppercase mb-6 text-gold">
              Signature Method
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
              THE FAST-TWITCH <span className="text-gold">METHOD.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                As a Fast-Twitch Instructor at The Forum Athletic Club in Atlanta, Glenn leads
                high-intensity group training sessions built around explosive, fast-twitch muscle
                fiber activation — the same fibers elite athletes rely on for speed, power, and
                reaction time.
              </p>
              <p>
                The Fast-Twitch class at The Forum Athletic Club, Ponce City Market, blends{' '}
                <span className="text-white font-semibold">
                  HIIT, plyometrics, and functional strength training
                </span>{' '}
                into sessions that are equal parts challenging and addictive.
              </p>
              <p>
                Whether in a group class or a private personal training session in Atlanta&apos;s
                Old Fourth Ward, Glenn brings this same explosive energy and technical precision to
                every client.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {methods.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle2 className="text-gold shrink-0" size={20} />
                <span className="text-gray-200 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
