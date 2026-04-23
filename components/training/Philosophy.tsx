'use client'

import { motion } from 'motion/react'
import { Dumbbell, Zap, Users, Clock } from 'lucide-react'

const pillars = [
  {
    icon: <Dumbbell className="text-gold" size={28} />,
    title: 'Strength-First',
    desc: 'Every program anchors around building real, functional strength that carries over into daily life.',
  },
  {
    icon: <Zap className="text-gold" size={28} />,
    title: 'Progressive Overload',
    desc: "Systematic, measurable increases in demand so your body never plateaus and always adapts.",
  },
  {
    icon: <Users className="text-gold" size={28} />,
    title: 'Mind-Body Integration',
    desc: 'Mental clarity and emotional resilience are trained alongside physical performance.',
  },
  {
    icon: <Clock className="text-gold" size={28} />,
    title: 'Consistency Over Intensity',
    desc: 'Long-term results come from showing up. Glenn builds habits, not just workouts.',
  },
]

export default function Philosophy() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
            TRAINING <span className="text-gold">PHILOSOPHY.</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Glenn&apos;s philosophy is simple:{' '}
              <span className="text-white font-semibold">movement is medicine</span>. Every session
              at The Forum Athletic Club is built on the belief that the body has an extraordinary
              capacity to heal, adapt, and perform — given the right stimulus, structure, and
              support.
            </p>
            <p>
              As Atlanta&apos;s most dedicated ACE-certified personal trainer, he doesn&apos;t
              believe in cookie-cutter programs. Your history, your injuries, your goals, your
              schedule — all of it shapes the plan. The result is a program that fits your life, not
              the other way around.
            </p>
            <p>
              Equally important to Glenn is the mental side of fitness. He draws directly from his
              own experience overcoming trauma and depression to meet clients where they are — and
              push them past where they thought they could go.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center mb-14">
          <a
            href="https://theforumathleticclub.com/ponce-city-market-schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-black font-bold px-8 py-4 rounded-full text-sm transition-all transform hover:scale-[1.03]"
          >
            Reserve Your Spot
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
