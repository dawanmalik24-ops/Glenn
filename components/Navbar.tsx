'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronLeft } from 'lucide-react'
import { motion } from 'motion/react'

const navLinks = [
  { name: 'Story', href: '/#story' },
  { name: 'Specialties', href: '/#services' },
  { name: 'Results', href: '/#results' },
  { name: 'Offerings', href: '/#offerings' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isTrainingPage = pathname === '/training'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-display text-xl tracking-tighter font-extrabold">
          GLENN <span className="text-gold">BYRD</span>
        </Link>

        {isTrainingPage ? (
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={16} /> Back to Home
          </Link>
        ) : (
          <>
            {/* Desktop nav */}
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
                href="/#contact"
                className="bg-gold hover:bg-gold-light text-black px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
              >
                Inquire Now
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </>
        )}
      </div>

      {isMobileMenuOpen && !isTrainingPage && (
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
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gold text-black px-5 py-3 rounded-xl text-center font-bold"
          >
            Inquire Now
          </a>
        </motion.div>
      )}
    </nav>
  )
}
