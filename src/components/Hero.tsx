import { motion } from 'framer-motion'
import { FileText, Linkedin } from 'lucide-react'
import { asset } from '../utils/asset'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-primary-light pt-16"
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
              className="w-16 h-16 rounded-lg object-cover ring-1 ring-primary/20"
            />
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Product Manager
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-ink leading-tight mb-3">
            Meera Kurup
          </h1>
          <p className="text-xl text-accent font-medium mb-2">
            Product Manager II · Microsoft CoreAI
          </p>
          <p className="text-ink/60 text-base mb-8 max-w-md">
            Shipping enterprise networking and security infrastructure for Microsoft
            Foundry — helping regulated enterprises adopt AI at scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={asset('Meera_Kurup_Resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/meera-kurup/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200"
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
            alt="Meera Kurup"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
