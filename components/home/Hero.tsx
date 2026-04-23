'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#050505]" />

      {/* Right-side photo — desktop only */}
      <div className="absolute inset-y-0 right-0 w-1/2 z-0 hidden lg:block">
        <Image
          src="https://i.imgur.com/BZ9c0Nn.jpeg"
          alt="Glenn Byrd ACE-certified personal trainer Atlanta at The Forum Athletic Club"
          fill
          priority
          sizes="50vw"
          className="object-cover object-center brightness-125 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 text-gold">
            ACE-Certified Personal Trainer · Atlanta, GA
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-extrabold leading-[0.9] mb-4 tracking-tighter">
            MOVEMENT IS <br />
            <span className="text-gradient-gold">MEDICINE.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get Stronger, Leaner, and More Athletic in 8–12 Weeks.
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            1-on-1 personal training at The Forum Athletic Club, Ponce City Market, Atlanta with
            ACE-certified personal trainer Glenn Byrd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#offerings"
              className="group bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              Book a Session with Glenn
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#story"
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 font-bold text-lg text-center transition-all"
            >
              My Story
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 hidden lg:block">
        <div className="flex gap-8">
          {[
            { label: 'Location', value: 'The Forum, Ponce City Market' },
            { label: 'Experience', value: '5+ Years' },
            { label: 'Focus', value: 'Elite Performance' },
          ].map((stat) => (
            <div key={stat.label} className="text-right">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{stat.label}</p>
              <p className="text-xl font-display font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
