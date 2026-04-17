import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { MapPin, Mail, Instagram, CheckCircle2, ArrowRight } from "lucide-react";

const StoryPage = () => {
  return (
    <>
      <Helmet>
        <title>Glenn Byrd | Certified Personal Trainer in Atlanta (ACE-Certified)</title>
        <meta
          name="description"
          content="ACE-certified personal trainer in Atlanta specializing in strength training, fat loss, and athletic performance at The Forum Athletic Club in Ponce City Market."
        />
        <meta
          name="keywords"
          content="personal trainer Atlanta, strength coach Atlanta, fitness coach Ponce City Market, ACE certified trainer Atlanta, Glenn Byrd trainer"
        />
        <link rel="canonical" href="https://coachgofficial.com/glenn-byrd-personal-trainer-atlanta" />
      </Helmet>

      <div className="bg-[#050505] text-white min-h-screen font-sans">

        {/* Hero */}
        <section className="relative pt-24 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#050505]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 text-[#D4AF37]">
              ACE-Certified Personal Trainer
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 leading-[0.95]">
              GLENN <span className="text-[#D4AF37]">BYRD</span>
            </h1>
            <p className="text-gray-400 text-lg mb-3 flex items-center justify-center gap-2">
              <MapPin size={16} className="text-[#D4AF37]" />
              The Forum Athletic Club · Ponce City Market · Atlanta, GA
            </p>
            <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
              "Movement is medicine — and I'm here to help you find your dose."
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="bg-[#D4AF37] py-10 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "500+", label: "Clients Trained" },
              { value: "10k+", label: "Sessions Completed" },
              { value: "ACE", label: "Certified Trainer" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-black text-4xl font-extrabold tracking-tight leading-none mb-1">{s.value}</p>
                <p className="text-black/70 text-xs font-bold uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-8">
                MEET <span className="text-[#D4AF37]">GLENN</span>
              </h2>
              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  Glenn Byrd is an ACE-certified personal trainer and Manager at The Forum Athletic Club in Ponce City Market, Atlanta — one of the city's premier fitness destinations.
                </p>
                <p>
                  His journey into fitness wasn't born from aesthetics — it was born from survival. Overcoming personal trauma and depression, Glenn discovered that the gym is more than a place to lift weights. It's a sanctuary for the mind.
                </p>
                <p>
                  Today, he brings that same philosophy to every client: training is holistic. Whether you're chasing a leaner physique, building strength, or reclaiming your health, Glenn combines elite athletic conditioning with a deep understanding of the mental work required to transform.
                </p>
                <p>
                  As a Fast-Twitch Instructor and in-person coach, Glenn works with beginners, athletes, and everyone in between — meeting each person exactly where they are.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-20 px-6 bg-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-10">
              SPECIALTIES
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Strength Training",
                "Fat Loss & Body Recomposition",
                "Athletic Performance",
                "Muscle Building",
                "Beginner Gym Coaching",
                "Programming & Accountability",
              ].map((s) => (
                <li key={s} className="flex items-center gap-3 text-gray-300 text-base">
                  <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certification + Location */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tighter mb-4">CERTIFICATION</h2>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#D4AF37] mt-1 shrink-0" />
                <div>
                  <p className="text-white font-bold">ACE Certified Personal Trainer</p>
                  <p className="text-gray-500 text-sm">American Council on Exercise</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tighter mb-4">LOCATION</h2>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#D4AF37] mt-1 shrink-0" />
                <div>
                  <p className="text-white font-bold">The Forum Athletic Club</p>
                  <p className="text-gray-500 text-sm">Ponce City Market, Atlanta, GA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 bg-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-10">COACHING SERVICES</h2>
            <ul className="space-y-4">
              {[
                { title: "1-on-1 In-Person Training", desc: "Hands-on sessions at The Forum Athletic Club, PCM." },
                { title: "1-on-1 Online Coaching", desc: "Remote programming, check-ins, and accountability." },
                { title: "Programming + Accountability", desc: "Custom plans with ongoing support and progress tracking." },
              ].map((s) => (
                <li key={s.title} className="border border-white/10 rounded-2xl p-6">
                  <p className="text-white font-bold text-lg mb-1">{s.title}</p>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
              READY TO <span className="text-[#D4AF37]">START?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Take the first step. Book a session with Glenn and find out what your body is capable of.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#e0c050] text-black px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Book a Session
              <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-6 border-t border-white/10">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-extrabold text-xl tracking-tighter">
              GLENN <span className="text-[#D4AF37]">BYRD</span>
            </p>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/thegreatglenn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                <Instagram size={18} /> @thegreatglenn
              </a>
              <a href="mailto:glennbyrdbusiness@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                <Mail size={18} /> glennbyrdbusiness@gmail.com
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default StoryPage;
