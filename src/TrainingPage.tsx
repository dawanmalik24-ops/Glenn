/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  Zap,
  Clock,
  Users,
  MapPin,
  Instagram,
  Mail,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-display text-xl tracking-tighter font-extrabold">
          GLENN <span className="text-gold">BYRD</span>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft size={16} /> Back to Home
        </Link>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[60vh] flex items-end pb-20 pt-32 overflow-hidden bg-[#050505]">
    <div className="absolute inset-0 z-0">
      <img
        src="https://i.imgur.com/BZ9c0Nn.jpeg"
        alt="Glenn training"
        className="w-full h-full object-cover object-top opacity-30"
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
            In-Person Training · The Forum PCM
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-extrabold leading-[0.9] mb-6 tracking-tighter">
            THE TRAINING <br />
            <span className="text-gradient-gold">EXPERIENCE.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            What it really means to train with Glenn — from the first session to the last rep.
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
);

const Philosophy = () => (
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
            Glenn's philosophy is simple: <span className="text-white font-semibold">movement is medicine</span>. Every session is built on the belief that the body has an extraordinary capacity to heal, adapt, and perform — given the right stimulus, structure, and support.
          </p>
          <p>
            He doesn't believe in cookie-cutter programs. Training is personal. Your history, your injuries, your goals, your schedule — all of it shapes the plan. The result is a program that fits your life, not the other way around.
          </p>
          <p>
            Equally important to Glenn is the mental side of fitness. He draws directly from his own experience overcoming trauma and depression to meet clients where they are — and push them past where they thought they could go.
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
        {[
          { icon: <Dumbbell className="text-gold" size={28} />, title: "Strength-First", desc: "Every program anchors around building real, functional strength that carries over into daily life." },
          { icon: <Zap className="text-gold" size={28} />, title: "Progressive Overload", desc: "Systematic, measurable increases in demand so your body never plateaus and always adapts." },
          { icon: <Users className="text-gold" size={28} />, title: "Mind-Body Integration", desc: "Mental clarity and emotional resilience are trained alongside physical performance." },
          { icon: <Clock className="text-gold" size={28} />, title: "Consistency Over Intensity", desc: "Long-term results come from showing up. Glenn builds habits, not just workouts." },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

const TypicalSession = () => (
  <section className="py-24 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">A TYPICAL SESSION.</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          No two sessions are identical, but here's what you can expect every time you train with Glenn.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

        <div className="space-y-10">
          {[
            {
              step: "01",
              title: "Check-In & Movement Assessment",
              duration: "5–10 min",
              desc: "Every session opens with a quick check-in — how you're feeling, how you slept, any soreness or stress. Glenn uses this to calibrate the day's intensity and spot any movement restrictions before loading begins.",
            },
            {
              step: "02",
              title: "Dynamic Warm-Up",
              duration: "10 min",
              desc: "A targeted warm-up that primes the nervous system and activates the specific muscle groups for the day's focus. No generic stretching — this is purposeful prep.",
            },
            {
              step: "03",
              title: "Primary Strength Work",
              duration: "25–30 min",
              desc: "The core of the session. Compound lifts, progressive overload principles, strict attention to form. Glenn coaches every rep — cues, corrections, and encouragement all delivered in real time.",
            },
            {
              step: "04",
              title: "Accessory & Conditioning Work",
              duration: "15–20 min",
              desc: "Targeted isolation work, circuits, or conditioning finishers depending on the goal. This is where specialization happens — building the weak links and pushing cardiovascular capacity.",
            },
            {
              step: "05",
              title: "Cool-Down & Debrief",
              duration: "5 min",
              desc: "A structured cool-down followed by a brief debrief. What worked, what to watch for next time, and a preview of what's coming in the next session.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="md:pl-24 relative"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hidden md:flex">
                <span className="font-display font-extrabold text-gold text-sm">{item.step}</span>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">{item.duration}</span>
                </div>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FastTwitch = () => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold tracking-widest uppercase mb-6 text-gold">
            Signature Method
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
            THE FAST-TWITCH <span className="text-gold">METHOD.</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              As a Fast-Twitch Instructor at The Forum Athletic Club, Glenn leads high-intensity group training sessions built around explosive, fast-twitch muscle fiber activation — the same fibers elite athletes rely on for speed, power, and reaction time.
            </p>
            <p>
              The Fast-Twitch method blends <span className="text-white font-semibold">HIIT, plyometrics, and functional strength training</span> into sessions that are equal parts challenging and addictive. You'll push your cardiovascular ceiling while building the kind of lean, powerful muscle that holds up under real athletic demands.
            </p>
            <p>
              Whether in a group class or a private session, Glenn brings this same explosive energy and technical precision to every client who trains with him.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {[
            "Explosive plyometric circuits",
            "Agility ladder & cone drills",
            "Olympic lift derivatives (hang cleans, power snatches)",
            "Sled pushes & loaded carries",
            "Sprint intervals & active recovery cycles",
            "Sport-specific movement patterns",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="text-gold shrink-0" size={20} />
              <span className="text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const ClientExpectations = () => (
  <section className="py-24 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">WHAT TO EXPECT.</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Training with Glenn is a commitment. Here's what that looks like in practice.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "First Session",
            items: [
              "In-depth goal-setting conversation",
              "Movement & mobility assessment",
              "Baseline strength testing",
              "Introduction to Glenn's system and expectations",
            ],
          },
          {
            title: "Weeks 2–4",
            items: [
              "Foundational programming locked in",
              "Form mastery on key compound lifts",
              "Nutritional guidance introduced",
              "Weekly progress tracking begins",
            ],
          },
          {
            title: "Month 2+",
            items: [
              "Progressive overload ramps up",
              "Specialization based on your goals",
              "Body composition measurably shifts",
              "Mental discipline and habits solidified",
            ],
          },
        ].map((phase, idx) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
              <span className="font-display font-extrabold text-gold text-sm">{String(idx + 1).padStart(2, "0")}</span>
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
);

const TheForumSection = () => (
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
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
            <img
              src="https://i.imgur.com/2n8oC8p.jpeg"
              alt="The Forum Athletic Club"
              className="w-full h-full object-cover"
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
            <MapPin size={12} /> Ponce City Market, Atlanta
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
            THE FORUM <span className="text-gold">ATHLETIC CLUB.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Atlanta's premier fitness destination. The Forum at Ponce City Market is a full-service, elite-level gym with the equipment and environment to support every style of training Glenn delivers.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Full free weights & Olympic platforms",
              "Cable & functional trainer systems",
              "Sled track & turf space",
              "Cardio & conditioning equipment",
              "Private training studio access",
              "Premier Midtown ATL location",
            ].map((item) => (
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
);

const CTA = () => (
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
          Stop overthinking it. Book a session at The Forum Athletic Club and experience the difference in person.
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
            to="/#contact"
            className="px-10 py-5 rounded-full border border-white/20 hover:bg-white/5 font-bold text-lg text-center transition-all"
          >
            Send Glenn a Message
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/10 bg-black">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <p className="font-display text-xl font-extrabold tracking-tighter mb-2">
          GLENN <span className="text-gold">BYRD</span>
        </p>
        <p className="text-gray-500 text-sm">© 2026 Glenn Byrd. All rights reserved.</p>
      </div>
      <div className="flex gap-6">
        <a href="https://www.instagram.com/thegreatglenn/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors"><Instagram size={20} /></a>
        <a href="mailto:glennbyrdbusiness@gmail.com" className="text-gray-500 hover:text-gold transition-colors"><Mail size={20} /></a>
      </div>
      <div className="text-center md:text-right">
        <p className="text-sm text-gray-500">Designed for Performance</p>
        <p className="text-xs text-gray-600 mt-1">Movement is Medicine</p>
      </div>
    </div>
  </footer>
);

export default function TrainingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <TypicalSession />
        <FastTwitch />
        <ClientExpectations />
        <TheForumSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
