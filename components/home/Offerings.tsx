'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { CheckCircle2, MapPin, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const TELEGRAM_BOT_TOKEN = '8271735853:AAEGxJLUWavtBqmNl0e_CZOzHUl3CNjgkxA'
const TELEGRAM_CHAT_ID = '-5177757740'

function CoachingInquiryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setSubmitted(false)
    }, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const timestamp = new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    })
    const text =
      '💪 New Coaching Inquiry\n' +
      '👤 Name: ' + name + '\n' +
      '📧 Email: ' + email + '\n' +
      '📱 Phone: ' + phone + '\n' +
      '💬 Message: ' + message + '\n' +
      '🕐 Time: ' + timestamp
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    }).catch(() => {})
    setSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-md bg-[#0a0a0a] border border-gold/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="text-gold w-16 h-16 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-extrabold mb-2">You&apos;re In!</h3>
            <p className="text-gray-400">Glenn will be in touch soon 🙌</p>
          </div>
        ) : (
          <>
            <h3 className="font-display text-2xl font-extrabold mb-6">Inquire for Coaching</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="404-555-0100"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell Glenn about your goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-black font-bold py-4 rounded-xl hover:bg-gold-light transition-all transform hover:scale-[1.02] mt-2"
              >
                Send Inquiry
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  )
}

function PromoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-md bg-[#0a0a0a] border border-gold/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="text-gold" size={32} />
          </div>
          <h2 className="font-display text-3xl font-extrabold mb-3">
            TRAIN WITH GLENN <br />
            IN PERSON
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Book a session at{' '}
            <span className="text-white font-bold">The Forum Athletic Club</span> — Ponce City
            Market, Atlanta.
          </p>
          <div className="space-y-4">
            <a
              href="https://theforumathleticclub.com/ponce-city-market-schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gold hover:bg-gold-light text-black font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02]"
            >
              Book Now
            </a>
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-4"
            >
              Not right now
            </button>
          </div>
        </div>

        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gold/5 rounded-full blur-2xl" />
      </motion.div>
    </div>
  )
}

export default function Offerings() {
  const [isCoachingModalOpen, setIsCoachingModalOpen] = useState(false)
  const [isPromoOpen, setIsPromoOpen] = useState(false)

  return (
    <>
      <CoachingInquiryModal
        isOpen={isCoachingModalOpen}
        onClose={() => setIsCoachingModalOpen(false)}
      />
      <PromoModal isOpen={isPromoOpen} onClose={() => setIsPromoOpen(false)} />

      <section id="offerings" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
              CHOOSE YOUR PATH
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Invest in yourself. Select the level of support that matches your ambition.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* 1-on-1 Coaching */}
            <div className="relative p-8 rounded-3xl border flex flex-col bg-gold/5 border-gold shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-1">1-on-1 Coaching</h3>
                <p className="text-gold text-sm font-medium flex items-center gap-1 mb-2">
                  <MapPin size={14} /> Remote or Hybrid
                </p>
                <p className="text-white font-display text-xl font-bold tracking-tight">
                  Inquire for Rates
                </p>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                A comprehensive, personalized approach to fitness from Atlanta&apos;s most dedicated
                personal trainer. We tackle your training, nutrition, and mindset as a complete
                package.
              </p>
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  'Weekly Check-ins',
                  'Nutrition Strategy',
                  '24/7 Messaging Support',
                  'Monthly Progress Reviews',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={18} className="text-gold shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsCoachingModalOpen(true)}
                className="w-full py-4 rounded-xl font-bold text-center transition-all bg-gold text-black hover:bg-gold-light"
              >
                Inquire for Coaching
              </button>
            </div>

            {/* In-Person Training */}
            <div className="relative p-8 rounded-3xl border flex flex-col bg-white/5 border-white/10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-1">In-Person Training</h3>
                <p className="text-gold text-sm font-medium flex items-center gap-1 mb-2">
                  <MapPin size={14} /> The Forum Athletic Club, PCM
                </p>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Direct, hands-on coaching at Atlanta&apos;s premier fitness destination. Perfect for
                those who want immediate feedback and high-intensity sessions at Ponce City Market.
              </p>
              <ul className="space-y-4 mb-4 flex-grow">
                {[
                  'Customized Workout Plans',
                  'Form Correction & Safety',
                  'Access to Elite Equipment',
                  'PCM Location Convenience',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={18} className="text-gold shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm italic mb-4">
                Most clients start with Fast Twitch Intro class before committing to coaching.
              </p>
              <a
                href="https://theforumathleticclub.com/ponce-city-market-schedule"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-bold text-center transition-all bg-white/10 text-white hover:bg-white/20"
              >
                Book a Session
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/training"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 font-bold text-lg transition-all"
            >
              Learn More <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
