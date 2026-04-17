/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Dumbbell,
  Trophy,
  Zap,
  Target,
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Story", href: "#story" },
    { name: "Specialties", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Offerings", href: "#offerings" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-xl tracking-tighter font-extrabold">
          GLENN <span className="text-gold">BYRD</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-gold hover:bg-gold-light text-black px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            Inquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-400 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gold text-black px-5 py-3 rounded-xl text-center font-bold"
          >
            Inquire Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const SocialProofBar = () => {
  const stats = [
    { label: "Clients Transformed", value: "500+" },
    { label: "Sessions Completed", value: "10k+" },
    { label: "ACE Certified", value: "Expert" },
    { label: "PCM Location", value: "Leader" }
  ];

  return (
    <div className="bg-gold py-8 border-y border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-black font-display text-3xl md:text-4xl font-extrabold leading-none mb-1">{stat.value}</p>
              <p className="text-black/70 text-[10px] md:text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Solid dark background */}
      <div className="absolute inset-0 z-0 bg-[#050505]" />

      {/* Right-side photo — desktop only */}
      <div className="absolute inset-y-0 right-0 w-1/2 z-0 hidden lg:block">
        <img
          src="https://i.imgur.com/BZ9c0Nn.jpeg"
          alt="Glenn Byrd"
          className="w-full h-full object-cover object-center brightness-125 contrast-105"
        />
        {/* Gradient mask: fade left edge into dark bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
        {/* Fade top and bottom to match section transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 text-gold">
            ACE-Certified Personal Trainer
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-extrabold leading-[0.9] mb-6 tracking-tighter">
            MOVEMENT IS <br />
            <span className="text-gradient-gold">MEDICINE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            Transforming bodies and minds through strength training, athletic conditioning, and the power of resilience.
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

      {/* Stats/Badges */}
      <div className="absolute bottom-12 right-6 md:right-12 hidden lg:block">
        <div className="flex gap-8">
          {[
            { label: "Location", value: "The Forum, PCM" },
            { label: "Experience", value: "5+ Years" },
            { label: "Focus", value: "Elite Performance" }
          ].map((stat) => (
            <div key={stat.label} className="text-right">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{stat.label}</p>
              <p className="text-xl font-display font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
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
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://i.imgur.com/2n8oC8p.jpeg"
                alt="Glenn Byrd"
                className="w-full h-full object-cover"
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
                My journey into fitness wasn't born from a desire for aesthetics—it was born from a need for survival. Overcoming personal trauma and depression taught me that the gym is more than just a place to lift weights; it's a sanctuary for the mind.
              </p>
              <p>
                Today, as a Manager and Fast-Twitch Instructor at <span className="text-white font-bold">The Forum Athletic Club (Ponce City Market)</span>, I dedicate my life to helping others find their own strength.
              </p>
              <p>
                Whether you're looking to shed weight, build a competitive physique, or simply regain control of your life, my approach combines elite athletic conditioning with a deep understanding of the mental hurdles we all face.
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
  );
};

const Services = () => {
  const specialties = [
    {
      title: "Strength Training",
      description: "Build a foundation of raw power and functional strength that carries over into every aspect of life.",
      icon: <Dumbbell className="w-10 h-10 text-gold" />,
    },
    {
      title: "Weight Loss",
      description: "Science-backed metabolic conditioning and nutritional guidance to transform your body composition.",
      icon: <Target className="w-10 h-10 text-gold" />,
    },
    {
      title: "Athletic Performance",
      description: "Train like a pro. Focus on speed, agility, and explosive power to dominate your sport.",
      icon: <Zap className="w-10 h-10 text-gold" />,
    },
    {
      title: "Bodybuilding",
      description: "Hypertrophy-focused programming designed for maximum muscle growth and aesthetic symmetry.",
      icon: <Trophy className="w-10 h-10 text-gold" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">ELITE SPECIALTIES</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            No fluff. No shortcuts. Just proven methods tailored to your specific goals.
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
  );
};


const Results = () => {
  const testimonials = [
    {
      quote: "Glenn didn't just change my body; he changed my mindset. I'm stronger than I've ever been, both physically and mentally.",
      author: "Sarah J.",
      role: "1-on-1 Coaching Client"
    },
    {
      quote: "The most intentional trainer I've ever worked with. He understands the mental game as much as the physical. Highly recommend.",
      author: "Marcus T.",
      role: "In-Person Athlete"
    },
    {
      quote: "I lost 30lbs and gained a completely new outlook on life. Glenn's 'Movement is Medicine' philosophy is the real deal.",
      author: "David L.",
      role: "Transformation Client"
    }
  ];

  return (
    <section id="results" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">CLIENT REVIEWS</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            What others are saying about their journey with Glenn.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 relative"
            >
              <div className="text-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoachingInquiryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setName(''); setEmail(''); setPhone(''); setMessage('');
      setSubmitted(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short',
    });
    const text =
      '💪 New Coaching Inquiry\n' +
      '👤 Name: ' + name + '\n' +
      '📧 Email: ' + email + '\n' +
      '📱 Phone: ' + phone + '\n' +
      '💬 Message: ' + message + '\n' +
      '🕐 Time: ' + timestamp;
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    }).catch(() => {});
    setSubmitted(true);
  };

  if (!isOpen) return null;

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
            <h3 className="font-display text-2xl font-extrabold mb-2">You're In!</h3>
            <p className="text-gray-400">Glenn will be in touch soon 🙌</p>
          </div>
        ) : (
          <>
            <h3 className="font-display text-2xl font-extrabold mb-6">Inquire for Coaching</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">Name</label>
                <input
                  type="text" required
                  value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">Email</label>
                <input
                  type="email" required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">Phone Number</label>
                <input
                  type="tel" required
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                  placeholder="404-555-0100"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">Message</label>
                <textarea
                  rows={3} required
                  value={message} onChange={(e) => setMessage(e.target.value)}
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
  );
};

const Offerings = ({ onBookSession }: { onBookSession: () => void }) => {
  const [isCoachingModalOpen, setIsCoachingModalOpen] = React.useState(false);

  const offers = [
    {
      title: "1-on-1 Coaching",
      location: "Remote or Hybrid",
      price: "Starting at $299/mo",
      description: "A comprehensive, personalized approach to fitness. We tackle your training, nutrition, and mindset as a complete package.",
      features: ["Weekly Check-ins", "Nutrition Strategy", "24/7 Messaging Support", "Monthly Progress Reviews"],
      cta: "Inquire for Coaching",
      highlight: true,
      onCtaClick: () => setIsCoachingModalOpen(true),
    },
    {
      title: "In-Person Training",
      location: "The Forum Athletic Club, PCM",
      price: "Inquire for Rates",
      description: "Direct, hands-on coaching at Atlanta's premier fitness destination. Perfect for those who want immediate feedback and high-intensity sessions.",
      features: ["Customized Workout Plans", "Form Correction & Safety", "Access to Elite Equipment", "PCM Location Convenience"],
      cta: "Book a Session",
      link: "https://theforumathleticclub.com/ponce-city-market-schedule",
      target: "_blank",
      highlight: false,
    },
  ];

  return (
    <>
      <CoachingInquiryModal isOpen={isCoachingModalOpen} onClose={() => setIsCoachingModalOpen(false)} />
      <section id="offerings" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">CHOOSE YOUR PATH</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Invest in yourself. Select the level of support that matches your ambition.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className={`relative p-8 rounded-3xl border flex flex-col ${
                  offer.highlight
                    ? "bg-gold/5 border-gold shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {offer.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-1">{offer.title}</h3>
                  <p className="text-gold text-sm font-medium flex items-center gap-1 mb-2">
                    <MapPin size={14} /> {offer.location}
                  </p>
                  <p className="text-white font-display text-xl font-bold tracking-tight">{offer.price}</p>
                </div>

                <p className="text-gray-400 mb-8 leading-relaxed">{offer.description}</p>

                <ul className="space-y-4 mb-10 flex-grow">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={18} className="text-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {offer.onCtaClick ? (
                  <button
                    onClick={offer.onCtaClick}
                    className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                      offer.highlight
                        ? "bg-gold text-black hover:bg-gold-light"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {offer.cta}
                  </button>
                ) : (
                  <a
                    href={offer.link}
                    target={offer.target}
                    rel={offer.target === "_blank" ? "noopener noreferrer" : undefined}
                    className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                      offer.highlight
                        ? "bg-gold text-black hover:bg-gold-light"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {offer.cta}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/training"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 font-bold text-lg transition-all"
            >
              Learn More <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const TELEGRAM_BOT_TOKEN = '8271735853:AAEGxJLUWavtBqmNl0e_CZOzHUl3CNjgkxA';
const TELEGRAM_CHAT_ID = '-5177757740';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [goal, setGoal] = React.useState('Weight Loss');
  const [message, setMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const timestamp = new Date().toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short',
    });

    const text =
      '🔔 New Inquiry from Glenn\'s Site\n\n' +
      '👤 Name: ' + name + '\n' +
      '📧 Email: ' + email + '\n' +
      '🎯 Goal: ' + goal + '\n' +
      '💬 Message: ' + message + '\n' +
      '🕐 Time: ' + timestamp;

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    }).catch(() => { /* Telegram failure is silent — form still succeeds */ });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6">LOOKING FOR SOMETHING <br /><span className="text-gold">CUSTOM?</span></h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Want a custom meal plan with macros, a personalized gym program, athletic performance coaching, or something else entirely? Fill out the form and Glenn will get back to you personally to build something around your specific goals.
              </p>

              <div className="space-y-6">
                <a href="mailto:glennbyrdbusiness@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Mail className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email</p>
                    <p className="text-lg font-medium">glennbyrdbusiness@gmail.com</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/thegreatglenn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Instagram className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Instagram</p>
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
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                    <input
                      type="text" required
                      value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                    <input
                      type="email" required
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Goal</label>
                  <select
                    value={goal} onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option className="bg-black">Weight Loss</option>
                    <option className="bg-black">Strength Training</option>
                    <option className="bg-black">Athletic Performance</option>
                    <option className="bg-black">Bodybuilding</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea
                    rows={4} required
                    value={message} onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Tell me about your journey..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gold transition-all transform hover:scale-[1.02]">
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-extrabold tracking-tighter mb-2">
            GLENN <span className="text-gold">BYRD</span>
          </p>
          <p className="text-gray-500 text-sm">© 2026 Glenn Byrd. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/thegreatglenn/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors"><Instagram size={20} /></a>
          <p className="text-sm text-white">
            Built by{" "}
            <a
              href="https://404webstudio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              404 Studio
            </a>
          </p>
          <a href="mailto:glennbyrdbusiness@gmail.com" className="text-gray-500 hover:text-gold transition-colors"><Mail size={20} /></a>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-500">Designed for Performance</p>
          <p className="text-xs text-gray-600 mt-1">Movement is Medicine</p>
        </div>
      </div>
    </footer>
  );
};

const PromoModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

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
          <h2 className="font-display text-3xl font-extrabold mb-3">TRAIN WITH GLENN <br />IN PERSON</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Book a session at <span className="text-white font-bold">The Forum Athletic Club</span> — Ponce City Market, Atlanta.
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

        {/* Decorative corner accent */}
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gold/5 rounded-full blur-2xl" />
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isPromoOpen, setIsPromoOpen] = useState(false);

  return (
    <div className="relative z-[1] selection:bg-gold selection:text-black">
      <PromoModal isOpen={isPromoOpen} onClose={() => setIsPromoOpen(false)} />
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <About />
        <Offerings onBookSession={() => setIsPromoOpen(true)} />
        <Services />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
