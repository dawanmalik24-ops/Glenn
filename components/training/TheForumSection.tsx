'use client'

import { motion } from 'motion/react'
import { CheckCircle2, MapPin } from 'lucide-react'
import Image from 'next/image'

const amenities = [
  'Full free weights & Olympic platforms',
  'Cable & functional trainer systems',
  'Sled track & turf space',
  'Cardio & conditioning equipment',
  'Private training studio access',
  'Premier Midtown ATL location',
]

export default function TheForumSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-last lg:order-first"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative">
              <Image
                src="https://i.imgur.com/2n8oC8p.jpeg"
                alt="The Forum Athletic Club at Ponce City Market Atlanta"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 text-gold">
              <MapPin size={12} /> Ponce City Market, Atlanta, GA
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
              THE FORUM <span className="text-gold">ATHLETIC CLUB.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Atlanta&apos;s premier fitness destination. The Forum at Ponce City Market is a
              full-service, elite-level gym in the Old Fourth Ward with the equipment and
              environment to support every style of personal training Glenn delivers.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {amenities.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold shrink-0 mt-1" size={16} />
                  <p className="text-sm text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
