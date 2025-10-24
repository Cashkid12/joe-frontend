import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import DownloadCV from '../components/DownloadCV'

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <AnimatedSection delay={0.2}>
          {/* Profile Image with Glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="w-40 h-40 mx-auto mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="w-40 h-40 rounded-full border-4 border-slate-800 bg-gradient-to-br from-purple-600 to-cyan-600 shadow-2xl shadow-purple-500/20 overflow-hidden relative">
              {/* Replace with your actual profile image */}
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white text-5xl font-bold">
                JN
              </div>
              {/* Uncomment below if you have a profile image */}
              {/* <img src="/images/profile/joe-profile.jpg" alt="Joe Nthiga" className="w-full h-full object-cover" /> */}
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-slate-100">Joe</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Nthiga</span>
          </motion.h1>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Full-Stack Developer
            </span> & Cybersecurity Learner
          </motion.p>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <motion.p 
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Crafting <span className="text-cyan-400 font-semibold">secure, scalable applications</span> with 
            modern technologies. Passionate about building digital solutions that 
            <span className="text-purple-400 font-semibold"> make an impact</span> while ensuring top-notch security.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection delay={1.0}>
          <div className="flex gap-6 justify-center flex-wrap">
            {/* View My Work Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/projects"
                className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl shadow-purple-500/25 inline-block overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center gap-2">
                  🚀 View My Work
                </span>
              </Link>
            </motion.div>
            
            {/* Download CV Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/documents/joe-nthiga-cv.pdf'
                  link.download = 'Joe-Nthiga-CV.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl shadow-purple-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center gap-2">
                  📄 Download CV
                </span>
              </button>
            </motion.div>

            {/* Get In Touch Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact"
                className="group relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-block overflow-hidden"
              >
                <span className="relative flex items-center gap-2">
                  💬 Get In Touch
                </span>
                <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Tech Stack Preview */}
        <AnimatedSection delay={1.2}>
          <motion.div 
            className="mt-16 flex justify-center items-center gap-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <span className="text-slate-500 text-sm">Tech I work with:</span>
            {['React', 'Node.js', 'Python', 'MongoDB', 'Tailwind', 'TypeScript'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-purple-500/50 transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Experience Stats */}
        <AnimatedSection delay={1.4}>
          <motion.div 
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">2+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">15+</div>
              <div className="text-slate-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">10+</div>
              <div className="text-slate-400 text-sm">Technologies</div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}