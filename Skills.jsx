import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "💻",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS3/Tailwind", level: 92, color: "from-cyan-500 to-blue-500" },
        { name: "Vite", level: 85, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      gradient: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
        { name: "Express", level: 82, color: "from-gray-400 to-gray-600" },
        { name: "REST APIs", level: 88, color: "from-emerald-500 to-teal-500" },
        { name: "Python", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "Django", level: 75, color: "from-green-600 to-emerald-600" }
      ]
    },
    {
      category: "Database & Tools",
      icon: "🗄️",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "MongoDB", level: 82, color: "from-green-500 to-emerald-500" },
        { name: "PostgreSQL", level: 78, color: "from-blue-600 to-indigo-600" },
        { name: "Git & GitHub", level: 90, color: "from-gray-500 to-gray-700" },
        { name: "VS Code", level: 92, color: "from-blue-500 to-cyan-500" },
        { name: "Linux", level: 75, color: "from-yellow-600 to-orange-600" }
      ]
    },
    {
      category: "Cybersecurity & Learning",
      icon: "🛡️",
      gradient: "from-red-500 to-pink-500",
      skills: [
        { name: "Web Security", level: 25, color: "from-red-500 to-pink-500" },
        { name: "Secure Coding", level: 36, color: "from-green-500 to-emerald-500" },
        { name: "Network Basics", level: 48, color: "from-blue-500 to-cyan-500" },
        { name: "Problem Solving", level: 50, color: "from-purple-500 to-pink-500" },
        { name: "Continuous Learning", level: 95, color: "from-indigo-500 to-purple-500" }
      ]
    }
  ]

  const featuredSkills = [
    {
      icon: "🚀",
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔒",
      title: "Security Focused",
      description: "Building with security best practices in mind",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: "💡",
      title: "Problem Solver",
      description: "Creative solutions for complex challenges",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="min-h-screen pt-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-slate-100">My </span>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            </motion.h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Continuously expanding my technical toolkit to build better, more secure applications. 
              Always learning, always growing.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.category} delay={categoryIndex * 0.2}>
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 group"
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`text-2xl p-3 rounded-xl bg-gradient-to-r ${category.gradient} bg-opacity-10 border border-${category.gradient.split('-')[1]}-500/20`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                      {category.category}
                    </h3>
                    <div className={`w-12 h-1 bg-gradient-to-r ${category.gradient} rounded-full mt-2`}></div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden shadow-inner">
                        <motion.div 
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        >
                          {/* Animated shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{ x: [-100, 300] }}
                            transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.2 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Featured Skills */}
        <AnimatedSection delay={0.8}>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredSkills.map((skill, index) => (
              <motion.div 
                key={skill.title}
                className="text-center p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className={`text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 p-3 rounded-xl bg-gradient-to-r ${skill.gradient} bg-opacity-10 border border-${skill.gradient.split('-')[1]}-500/20 inline-block`}>
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Learning Journey */}
        <AnimatedSection delay={1.0}>
          <motion.div 
            className="mt-16 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-cyan-500/30 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Always Learning</h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and security practices to stay at the forefront of web development.
            </p>
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              {['Next.js', 'TypeScript', 'GraphQL', 'Docker', 'AWS'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}