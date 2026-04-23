'use client'

import { motion } from 'motion/react'

const steps = [
  {
    step: '01',
    title: 'Check-In & Movement Assessment',
    duration: '5–10 min',
    desc: "Every session opens with a quick check-in — how you're feeling, how you slept, any soreness or stress. Glenn uses this to calibrate the day's intensity and spot any movement restrictions before loading begins.",
  },
  {
    step: '02',
    title: 'Dynamic Warm-Up',
    duration: '10 min',
    desc: "A targeted warm-up that primes the nervous system and activates the specific muscle groups for the day's focus. No generic stretching — this is purposeful prep.",
  },
  {
    step: '03',
    title: 'Primary Strength Work',
    duration: '25–30 min',
    desc: 'The core of the session. Compound lifts, progressive overload principles, strict attention to form. Glenn coaches every rep — cues, corrections, and encouragement all delivered in real time.',
  },
  {
    step: '04',
    title: 'Accessory & Conditioning Work',
    duration: '15–20 min',
    desc: 'Targeted isolation work, circuits, or conditioning finishers depending on the goal. This is where specialization happens — building the weak links and pushing cardiovascular capacity.',
  },
  {
    step: '05',
    title: 'Cool-Down & Debrief',
    duration: '5 min',
    desc: "A structured cool-down followed by a brief debrief. What worked, what to watch for next time, and a preview of what's coming in the next session.",
  },
]

export default function TypicalSession() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            A TYPICAL SESSION.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            No two sessions are identical, but here&apos;s what you can expect every time you train
            with Glenn at The Forum Athletic Club, Ponce City Market.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-10">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="md:pl-24 relative"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold/10 border border-gold/30 items-center justify-center hidden md:flex">
                  <span className="font-display font-extrabold text-gold text-sm">{item.step}</span>
                </div>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
