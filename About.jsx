import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function About() {
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: '💻', 
      description: 'React, JavaScript, HTML5, CSS3, Tailwind',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Backend Development', 
      icon: '⚙️', 
      description: 'Node.js, Express, REST APIs, Python',
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Cybersecurity', 
      icon: '🛡️', 
      description: 'Web security, Secure coding practices, Learning enthusiast',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Tools & DevOps', 
      icon: '🔧', 
      description: 'Git, VS Code, Linux, Docker basics',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const stats = [
    { number: '2+', label: 'Years Coding', icon: '🚀' },
    { number: '15+', label: 'Projects Completed', icon: '💼' },
    { number: '∞', label: 'Passion for Learning', icon: '💡' }
  ]

  return (
    <section className="min-h-screen pt-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-slate-100">About </span>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </motion.h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Passionate developer crafting digital experiences with security and innovation at heart
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio Text */}
          <div className="space-y-6">
            <AnimatedSection delay={0.2}>
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-slate-100">My Journey</h3>
                </div>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I'm a passionate <span className="text-cyan-400 font-semibold">self-taught software engineer</span> with a strong interest in cybersecurity. 
                    My journey in tech started with curiosity about how websites work, and has evolved into a love for building secure, efficient applications.
                  </p>
                  <p>
                    When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
                    and continuously learning about cybersecurity best practices to create safer digital experiences.
                  </p>
                  <p>
                    I believe in writing <span className="text-purple-400 font-semibold">clean, maintainable code</span> and building solutions that solve real-world problems 
                    while prioritizing security and user experience.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
          
          {/* Skills Overview */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={0.2 + index * 0.1}>
                <motion.div 
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-2xl p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10 border border-${skill.color.split('-')[1]}-500/20`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <p className="text-slate-400">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <AnimatedSection delay={0.6}>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-500 group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Passion Section */}
        <AnimatedSection delay={0.8}>
          <motion.div 
            className="mt-16 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-purple-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">My Passion</h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
                I'm driven by the challenge of creating technology that not only works flawlessly but also 
                <span className="text-cyan-400"> protects users and their data</span>. Every line of code is an opportunity to build 
                something <span className="text-purple-400">secure, efficient, and meaningful</span>.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}