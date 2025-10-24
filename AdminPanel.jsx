import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'

export default function AdminPanel({ onLogout }) {
  const [projects, setProjects] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState(null)

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }, [])

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects))
  }, [projects])

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: editingProject ? editingProject.id : Date.now()
    }

    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => p.id === editingProject.id ? newProject : p))
    } else {
      // Add new project
      setProjects([...projects, newProject])
    }

    setShowForm(false)
    setEditingProject(null)
  }

  const handleEditProject = (project) => {
    setEditingProject(project)
    setShowForm(true)
  }

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== projectId))
    }
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(projects, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'projects-export.json'
    link.click()
  }

  const handleImport = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const importedProjects = JSON.parse(e.target.result)
          setProjects(importedProjects)
        } catch (error) {
          alert('Error importing file. Please check the format.')
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-slate-700"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Project Admin
              </h1>
              <p className="text-slate-400">Manage your portfolio projects</p>
            </div>
            <div className="flex gap-3">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
                <motion.div
                  className="px-4 py-2 border border-green-600 text-green-400 hover:bg-green-600/10 rounded-xl transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Import JSON
                </motion.div>
              </label>
              <motion.button
                onClick={handleExport}
                className="px-4 py-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 rounded-xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Export JSON
              </motion.button>
              <motion.button
                onClick={onLogout}
                className="px-4 py-2 border border-red-600 text-red-400 hover:bg-red-600/10 rounded-xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-slate-700"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-2">
                Projects ({projects.length})
              </h2>
              <p className="text-slate-400">
                Add, edit, or remove projects from your portfolio
              </p>
            </div>
            <motion.button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              + Add Project
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700">
            <div className="text-2xl font-bold text-cyan-400">{projects.length}</div>
            <div className="text-slate-400 text-sm">Total</div>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700">
            <div className="text-2xl font-bold text-purple-400">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-slate-400 text-sm">Featured</div>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700">
            <div className="text-2xl font-bold text-green-400">
              {projects.filter(p => p.category === 'fullstack').length}
            </div>
            <div className="text-slate-400 text-sm">Full Stack</div>
          </div>
        </motion.div>

        {/* Projects List */}
        <ProjectList
          projects={projects}
          onEdit={handleEditProject}
          onDelete={handleDeleteProject}
        />

        {/* Project Form Modal */}
        {showForm && (
          <ProjectForm
            project={editingProject}
            onSubmit={handleAddProject}
            onCancel={() => {
              setShowForm(false)
              setEditingProject(null)
            }}
          />
        )}
      </div>
    </div>
  )
}