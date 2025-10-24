import { motion } from 'framer-motion'

export default function ProjectList({ projects, onEdit, onDelete }) {
  const getCategoryColor = (category) => {
    switch(category) {
      case 'frontend': return 'from-purple-500 to-pink-500'
      case 'fullstack': return 'from-cyan-500 to-blue-500'
      case 'backend': return 'from-green-500 to-emerald-500'
      default: return 'from-purple-500 to-cyan-500'
    }
  }

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full border border-yellow-500/30">
                    ⭐ Featured
                  </span>
                )}
                <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                  {project.category}
                </span>
              </div>
              
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm text-slate-500">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1"
                  >
                    🌐 Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1"
                  >
                    💻 GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="flex gap-2 ml-4">
              <motion.button
                onClick={() => onEdit(project)}
                className="p-2 text-cyan-400 hover:bg-cyan-400/10 rounded-xl transition-colors duration-300 border border-cyan-400/20 hover:border-cyan-400/40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Edit project"
              >
                ✏️
              </motion.button>
              <motion.button
                onClick={() => onDelete(project.id)}
                className="p-2 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors duration-300 border border-red-400/20 hover:border-red-400/40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Delete project"
              >
                🗑️
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}

      {projects.length === 0 && (
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-6xl mb-4 text-slate-400">📁</div>
          <h3 className="text-xl font-bold text-slate-300 mb-2">No projects yet</h3>
          <p className="text-slate-500">Add your first project to get started!</p>
        </motion.div>
      )}
    </div>
  )
}