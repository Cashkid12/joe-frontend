import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ProjectForm({ project, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: [],
    liveUrl: '',
    githubUrl: '',
    category: 'frontend',
    featured: false
  })

  const [currentTech, setCurrentTech] = useState('')

  useEffect(() => {
    if (project) {
      setFormData(project)
    }
  }, [project])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleAddTech = () => {
    if (currentTech.trim() && !formData.technologies.includes(currentTech.trim())) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, currentTech.trim()]
      })
      setCurrentTech('')
    }
  }

  const handleRemoveTech = (techToRemove) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter(tech => tech !== techToRemove)
    })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTech()
    }
  }

  const getCategoryColor = (category) => {
    switch(category) {
      case 'frontend': return 'from-purple-500 to-pink-500'
      case 'fullstack': return 'from-cyan-500 to-blue-500'
      case 'backend': return 'from-green-500 to-emerald-500'
      default: return 'from-purple-500 to-cyan-500'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onCancel}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">📁</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-100">
              {project ? 'Edit Project' : 'Add New Project'}
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-100 placeholder-slate-400"
                required
                placeholder="Amazing Project"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-100"
              >
                <option value="frontend">Frontend</option>
                <option value="fullstack">Full Stack</option>
                <option value="backend">Backend</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="3"
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-100 placeholder-slate-400 resize-none"
              required
              placeholder="Describe your project..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Live URL
              </label>
              <input
                type="url"
                value={formData.liveUrl}
                onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-100 placeholder-slate-400"
                placeholder="https://your-project.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                GitHub URL
              </label>
              <input
                type="url"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-100 placeholder-slate-400"
                placeholder="https://github.com/yourusername/project"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-100 placeholder-slate-400"
              placeholder="/images/projects/project.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Technologies
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={currentTech}
                onChange={(e) => setCurrentTech(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-100 placeholder-slate-400"
                placeholder="Add technology (press Enter)"
              />
              <motion.button
                type="button"
                onClick={handleAddTech}
                className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-slate-200 rounded-xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add
              </motion.button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2 px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => handleRemoveTech(tech)}
                    className="text-slate-400 hover:text-red-400 transition-colors"
                  >
                    ×
                  </button>
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500 bg-slate-600 border-slate-500"
            />
            <label htmlFor="featured" className="text-sm font-medium text-slate-300">
              ⭐ Feature this project on portfolio homepage
            </label>
          </div>

          {/* Preview */}
          <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
            <h4 className="text-sm font-medium text-slate-300 mb-3">Preview</h4>
            <div className="flex items-center gap-3">
              <div className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${getCategoryColor(formData.category)} text-white`}>
                {formData.category}
              </div>
              {formData.featured && (
                <div className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full border border-yellow-500/30">
                  Featured
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-slate-700">
            <motion.button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {project ? 'Update Project' : 'Add Project'}
            </motion.button>
            <motion.button
              type="button"
              onClick={onCancel}
              className="flex-1 border border-slate-600 text-slate-300 hover:bg-slate-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}