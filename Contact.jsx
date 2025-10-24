import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/mnngeqon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'joenthiga678@gmail.com',
      link: 'mailto:joenthiga678@gmail.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Joe Nthiga',
      link: 'https://linkedin.com/in/Joe-Nthiga',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'joenthiga',
      link: 'https://github.com/cashkid12',
      gradient: 'from-gray-500 to-slate-600'
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@joenthiga',
      link: 'https://twitter.com/@VoiceOf254',
      gradient: 'from-blue-400 to-cyan-400'
    }
  ]

  return (
    <section className="min-h-screen pt-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-slate-100">Get In </span>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-4">Let's Connect</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and cybersecurity. Don't hesitate to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-500 group"
                    whileHover={{ x: 5, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className={`text-2xl p-3 rounded-xl bg-gradient-to-r ${method.gradient} bg-opacity-10 border border-${method.gradient.split('-')[1]}-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-slate-400">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Response Time Info */}
              <motion.div 
                className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h4 className="text-lg font-bold text-slate-100 mb-3">Quick Response</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I typically respond within 24 hours. For urgent matters, feel free to connect with me on LinkedIn for a faster response.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.4}>
            <motion.form 
              onSubmit={handleSubmit}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-100 mb-2">Send a Message</h2>
              <p className="text-slate-400 mb-6">Let's start a conversation</p>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl"
                >
                  ❌ There was an error sending your message. Please try again or email me directly.
                </motion.div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-slate-100 placeholder-slate-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-slate-100 placeholder-slate-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-slate-100 placeholder-slate-400 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg ${
                    isSubmitting 
                      ? 'bg-slate-600 text-slate-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-purple-500/25'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </div>

              {/* Form Note */}
              <p className="text-slate-500 text-sm text-center mt-6">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </motion.form>
          </AnimatedSection>
        </div>

        {/* Location/Timezone Info */}
        <AnimatedSection delay={0.8}>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-slate-400">
              Based in Nairobi, Kenya • Available for remote work worldwide • 
              <span className="text-cyan-400"> UTC+3</span>
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}