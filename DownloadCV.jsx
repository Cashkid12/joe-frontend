import { motion } from 'framer-motion'

export default function DownloadCV() {
  const handleDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a')
    link.href = '/documents/Joe-Nthiga-CV.pdf' // Path to your CV file
    link.download = 'Joe-Nthiga-CV.pdf' // Name of downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.button
      onClick={handleDownload}
      className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Button content */}
      <span className="relative flex items-center gap-2">
        📄 Download CV
      </span>
    </motion.button>
  )
}