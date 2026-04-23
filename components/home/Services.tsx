'use client'

import { motion } from 'motion/react'
import { Dumbbell, Trophy, Zap, Target } from 'lucide-react'

const specialties = [
  {
    title: 'Strength Training',
    description:
      'Build a foundation of raw power and functional strength that carries over into every aspect of life.',
    icon: <Dumbbell className="w-10 h-10 text-gold" />,
  },
  {
    title: 'Weight Loss',
    description:
      'Science-backed metabolic conditioning and nutritional guidance to transform your body composition.',
    icon: <Target className="w-10 h-10 text-gold" />,
  },
  {
    title: 'Athletic Performance',
    description:
      'Train like a pro. Focus on speed, agility, and explosive power to dominate your sport.',
    icon: <Zap className="w-10 h-10 text-gold" />,
  },
  {
    title: 'Bodybuilding',
    description:
      'Hypertrophy-focused programming designed for maximum muscle growth and aesthetic symmetry.',
    icon: <Trophy className="w-10 h-10 text-gold" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            ELITE SPECIALTIES
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Your ACE-certified personal trainer in Midtown Atlanta. No fluff. No shortcuts. Just
            proven methods tailored to your specific goals at The Forum Athletic Club.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
