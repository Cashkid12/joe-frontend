import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { projectsData, projectCategories } from '../data/projectsData'
import { useState, useEffect } from 'react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [projects, setProjects] = useState([])

  // Load projects from localStorage or fallback to default data
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    } else {
      // Use the default projects data if nothing in localStorage
      setProjects(projectsData)
    }
  }, [])

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => 
                           tech.toLowerCase().includes(searchTerm.toLowerCase())
                         )
    return matchesCategory && matchesSearch
  })

  const getCategoryColor = (category) => {
    switch(category) {
      case 'frontend': return 'from-purple-500 to-pink-500'
      case 'fullstack': return 'from-cyan-500 to-blue-500'
      case 'backend': return 'from-green-500 to-emerald-500'
      default: return 'from-purple-500 to-cyan-500'
    }
  }

  return (
    <section className="min-h-screen pt-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-slate-100">My </span>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </motion.h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills and passion for building amazing web experiences.
              Each project tells a story of challenges overcome and lessons learned.
            </p>
          </div>
        </AnimatedSection>

        {/* Filters and Search */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map(category => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 border ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25 border-transparent'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border-slate-600 hover:border-purple-400/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                🔍
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64 text-slate-100 placeholder-slate-400"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500/50 overflow-hidden group transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                      {project.category}
                    </span>
                  </div>
                  {/* Project Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <div className="text-4xl opacity-20">💻</div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-slate-600 hover:border-cyan-400 hover:bg-cyan-400/10 text-slate-300 hover:text-cyan-400 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-16">
              <div className="text-6xl mb-4 text-slate-400">🔍</div>
              <h3 className="text-2xl font-bold text-slate-300 mb-2">No projects found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </div>
          </AnimatedSection>
        )}

        {/* CTA Section */}
        <AnimatedSection delay={0.6}>
          <motion.div 
            className="mt-16 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-cyan-500/30 text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Like What You See?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}