'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function TrainingHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-20 pt-32 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.imgur.com/BZ9c0Nn.jpeg"
          alt="Fast Twitch fitness class at The Forum Athletic Club Ponce City Market Atlanta"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 text-gold">
              In-Person Training · The Forum PCM · Atlanta, GA
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-extrabold leading-[0.9] mb-6 tracking-tighter">
              THE TRAINING <br />
              <span className="text-gradient-gold">EXPERIENCE.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              What it really means to train with Atlanta&apos;s ACE-certified personal trainer —
              from the first session to the last rep at The Forum Athletic Club.
            </p>
          </motion.div>

          <motion.a
            href="https://theforumathleticclub.com/ponce-city-market-schedule"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0 bg-gold hover:bg-gold-light text-black font-bold px-6 py-3 rounded-full text-sm transition-all transform hover:scale-[1.03] whitespace-nowrap"
          >
            Reserve Your Spot
          </motion.a>
        </div>
      </div>
    </section>
  )
}
