import Navbar from '@/components/Navbar'
import Hero from '@/components/home/Hero'
import SocialProofBar from '@/components/home/SocialProofBar'
import About from '@/components/home/About'
import Offerings from '@/components/home/Offerings'
import Services from '@/components/home/Services'
import Results from '@/components/home/Results'
import Contact from '@/components/home/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative z-[1] selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <About />
        <Offerings />
        <Services />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
