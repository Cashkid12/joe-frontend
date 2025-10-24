import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/cashkid12', icon: '💻', color: 'hover:text-purple-400' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/Joe Nthiga', icon: '💼', color: 'hover:text-cyan-400' },
    { name: 'Twitter', url: 'https://twitter.com/VoiceOf254', icon: '🐦', color: 'hover:text-blue-400' },
    { name: 'Email', url: 'mailto:joenthiga678@gmail.com', icon: '✉️', color: 'hover:text-green-400' }
  ]

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20"
              >
                <span className="text-white font-bold text-xl">JN</span>
              </motion.div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Joe Nthiga
                </span>
                <p className="text-slate-400 text-sm">Full-Stack Developer</p>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Building secure, modern web applications with cutting-edge technologies. 
              Passionate about creating solutions that make a difference while ensuring digital safety.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-200 mb-4">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.div key={link.path} whileHover={{ x: 5 }}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold text-slate-200 mb-4">Let's Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-slate-400 ${social.color} transition-all duration-300 group`}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg transform group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Joe Nthiga. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <motion.span
              whileHover={{ scale: 1.05, color: "#f8fafc" }}
              className="transition-colors duration-300"
            >
              Built with React & Tailwind CSS
            </motion.span>
            <div className="w-1 h-1 bg-slate-600 rounded-full" />
            <motion.span
              whileHover={{ scale: 1.05, color: "#f8fafc" }}
              className="transition-colors duration-300"
            >
              Made with 💜
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  )
}