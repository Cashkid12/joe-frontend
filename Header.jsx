import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import DownloadCV from './DownloadCV' // Add this import

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">JN</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Joe Nthiga
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  />
                )}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-slate-800 text-cyan-400 px-2 py-1 rounded text-xs whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              </Link>
            ))}
            {/* Add Download CV button in header */}
            <DownloadCV />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors group"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <span className={`w-full h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-4 font-medium transition-all duration-300 border-l-4 ${
                  location.pathname === item.path
                    ? 'bg-slate-700 text-cyan-400 border-cyan-400'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-cyan-400 border-transparent'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Add Download CV in mobile menu */}
            <div className="px-6 py-4 border-t border-slate-700">
              <button
                onClick={() => {
                  handleDownload()
                  setIsMenuOpen(false)
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                📄 Download CV
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )

  // Add download function for mobile
  function handleDownload() {
    const link = document.createElement('a')
    link.href = '/documents/joe-nthiga-cv.pdf'
    link.download = 'Joe-Nthiga-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}