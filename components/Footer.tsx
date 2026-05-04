import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-extrabold tracking-tighter mb-2">
              GLENN <span className="text-gold">BYRD</span>
            </p>
            <p className="text-gray-500 text-sm">© 2026 Glenn Byrd. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/thegreatglenn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold transition-colors"
              aria-label="Glenn Byrd on Instagram"
            >
              <Instagram size={20} />
            </a>
            <p className="text-sm text-white">
              Built by{' '}
              <a
                href="https://404webstudio.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                404 Studio
              </a>
            </p>
            <a
              href="mailto:glennbyrdbusiness@gmail.com"
              className="text-gray-500 hover:text-gold transition-colors"
              aria-label="Email Glenn Byrd"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">Designed for Performance</p>
            <p className="text-xs text-gray-600 mt-1">Movement is Medicine</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
