'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, Instagram } from 'lucide-react'

const TELEGRAM_BOT_TOKEN = '8271735853:AAEGxJLUWavtBqmNl0e_CZOzHUl3CNjgkxA'
const TELEGRAM_CHAT_ID = '-5177757740'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [goal, setGoal] = useState('Weight Loss')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

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
      "🔔 New Inquiry from Glenn's Site\n\n" +
      '👤 Name: ' + name + '\n' +
      '📧 Email: ' + email + '\n' +
      '🎯 Goal: ' + goal + '\n' +
      '💬 Message: ' + message + '\n' +
      '🕐 Time: ' + timestamp

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    }).catch(() => {})

    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
                LOOKING FOR SOMETHING <br />
                <span className="text-gold">CUSTOM?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Want a custom meal plan with macros, a personalized gym program, athletic
                performance coaching in Atlanta, or something else entirely? Fill out the form and
                your ACE-certified personal trainer at Ponce City Market will get back to you
                personally.
              </p>

              <div className="space-y-6">
                <a href="mailto:glennbyrdbusiness@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Mail className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                      Email
                    </p>
                    <p className="text-lg font-medium">glennbyrdbusiness@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/thegreatglenn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Instagram className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                      Instagram
                    </p>
                    <p className="text-lg font-medium">@thegreatglenn</p>
                  </div>
                </a>
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <CheckCircle2 className="text-gold w-16 h-16" />
                <h3 className="font-display text-2xl font-extrabold">Message Sent!</h3>
                <p className="text-gray-400">Glenn will get back to you personally. Stay ready.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option className="bg-black">Weight Loss</option>
                    <option className="bg-black">Strength Training</option>
                    <option className="bg-black">Athletic Performance</option>
                    <option className="bg-black">Bodybuilding</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Tell me about your journey..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gold transition-all transform hover:scale-[1.02]"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
