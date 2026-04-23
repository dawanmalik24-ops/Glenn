'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
            READY TO <span className="text-gradient-gold">START?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Stop overthinking it. Book a personal training session at The Forum Athletic Club, Ponce
            City Market, and experience the difference in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://theforumathleticclub.com/ponce-city-market-schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold hover:bg-gold-light text-black px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              Book a Session at The Forum
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/#contact"
              className="px-10 py-5 rounded-full border border-white/20 hover:bg-white/5 font-bold text-lg text-center transition-all"
            >
              Send Glenn a Message
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
