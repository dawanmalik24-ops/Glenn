'use client'

import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'

const phases = [
  {
    title: 'First Session',
    items: [
      'In-depth goal-setting conversation',
      'Movement & mobility assessment',
      'Baseline strength testing',
      "Introduction to Glenn's system and expectations",
    ],
  },
  {
    title: 'Weeks 2–4',
    items: [
      'Foundational programming locked in',
      'Form mastery on key compound lifts',
      'Nutritional guidance introduced',
      'Weekly progress tracking begins',
    ],
  },
  {
    title: 'Month 2+',
    items: [
      'Progressive overload ramps up',
      'Specialization based on your goals',
      'Body composition measurably shifts',
      'Mental discipline and habits solidified',
    ],
  },
]

export default function ClientExpectations() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            WHAT TO EXPECT.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Training with Atlanta personal trainer Glenn Byrd is a commitment. Here&apos;s what
            that looks like in practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <span className="font-display font-extrabold text-gold text-sm">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6 text-white">{phase.title}</h3>
              <ul className="space-y-4">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
