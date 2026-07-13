import { motion } from 'framer-motion'
import { FileText, Linkedin } from 'lucide-react'
import { asset } from '../utils/asset'

export default function Hero() {
  return (
    <section id="home" className="bg-paper pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-[1.3fr_1fr] gap-12 items-end border-b border-line">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent text-sm uppercase tracking-wide mb-4">
            Product Manager
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-ink leading-[0.95] tracking-tight mb-5">
            Meera
            <br />
            Kurup
          </h1>
          <p className="text-xl text-ink font-semibold mb-3">
            Product Manager II · Microsoft CoreAI
          </p>
          <p className="text-ink-soft text-base mb-8 max-w-md leading-relaxed">
            Shipping enterprise networking and security infrastructure for Microsoft
            Foundry, helping regulated enterprises adopt AI at scale.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={asset('Meera_Kurup_Resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 font-semibold text-sm hover:bg-accent-dark transition-colors duration-200"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/meera-kurup/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink text-ink px-6 py-3 font-semibold text-sm hover:border-accent hover:text-accent-dark transition-colors duration-200"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-first md:order-none max-w-[220px] md:max-w-none mx-auto md:mx-0 w-full"
        >
          <img
            src={asset('images/Meera_Headshot.jpg')}
            alt="Meera Kurup"
            className="w-full aspect-square object-cover border border-line"
          />
          <p className="font-mono text-ink-soft text-xs mt-2">Meera Kurup, Bellevue WA</p>
        </motion.div>
      </div>
    </section>
  )
}
