import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Login from './components/Admin/Login'
import AdminPanel from './components/Admin/AdminPanel'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (status) => {
    setIsAuthenticated(status)
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    setIsAuthenticated(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-100 flex flex-col">
      {!window.location.pathname.includes('/admin') && <Header />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/admin" 
            element={
              isAuthenticated ? (
                <AdminPanel onLogout={handleLogout} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            } 
          />
        </Routes>
      </main>

      {!window.location.pathname.includes('/admin') && <Footer />}
    </div>
  )
}

export default App