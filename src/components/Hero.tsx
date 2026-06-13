import { motion } from 'framer-motion'
import { FileText, Linkedin } from 'lucide-react'
import { asset } from '../utils/asset'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-primary-light via-white to-accent-light pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <img
              src={asset('images/Meera_Profile.jpg')}
              alt="Meera Kurup"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
            />
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Welcome
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-3">
            Meera Kurup
          </h1>
          <p className="text-xl text-accent font-medium mb-2">
            Product Manager II · Microsoft CoreAI
          </p>
          <p className="text-gray-500 text-base mb-8 max-w-md">
            Building enterprise AI infrastructure on Microsoft Foundry. Brown CS alum.
            Passionate about the intersection of AI, product, and social impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/Meera_Kurup_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/meera-kurup/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-200"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={asset('images/Meera_Hiking.JPG')}
            alt="Meera hiking"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-xl ring-4 ring-white"
          />
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path fill="#629677" fillOpacity="0.08" d="M0,40L60,45C120,51,240,61,360,58C480,56,600,40,720,35C840,29,960,35,1080,42C1200,48,1320,56,1380,58L1440,61L1440,80L0,80Z" />
        </svg>
      </div>
    </section>
  )
}
