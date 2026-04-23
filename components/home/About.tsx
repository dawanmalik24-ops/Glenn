'use client'

import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="story" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative">
              <Image
                src="https://i.imgur.com/2n8oC8p.jpeg"
                alt="Glenn Byrd personal trainer Ponce City Market Atlanta"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-2xl hidden md:block">
              <p className="text-black font-display text-4xl font-extrabold leading-none">ACE</p>
              <p className="text-black text-xs font-bold uppercase tracking-widest">Certified</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
              FROM TRAUMA TO <span className="text-gold">TRIUMPH.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                My journey into fitness wasn't born from a desire for aesthetics—it was born from a
                need for survival. Overcoming personal trauma and depression taught me that the gym
                is more than just a place to lift weights; it's a sanctuary for the mind.
              </p>
              <p>
                Today, as a Manager and Fast-Twitch Instructor at{' '}
                <span className="text-white font-bold">
                  The Forum Athletic Club (Ponce City Market, Atlanta)
                </span>
                , I dedicate my life to helping others find their own strength — serving the Old
                Fourth Ward and all of Midtown Atlanta.
              </p>
              <p>
                Whether you're looking to shed weight, build a competitive physique, or simply
                regain control of your life, my approach as an ACE-certified personal trainer
                combines elite athletic conditioning with a deep understanding of the mental hurdles
                we all face.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Bodybuilding</p>
                  <p className="text-sm text-gray-500">Sculpting elite physiques</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Weight Loss</p>
                  <p className="text-sm text-gray-500">Sustainable strategies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
