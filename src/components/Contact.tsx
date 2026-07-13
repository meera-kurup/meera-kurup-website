import { motion } from 'framer-motion'
import { Mail, Twitter, Linkedin } from 'lucide-react'

const socials = [
  { href: 'https://www.linkedin.com/in/meera-kurup/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/TheMeeraKurup', icon: Twitter, label: 'Twitter' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-paper">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-ink-soft text-xs uppercase tracking-wide mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Get in touch</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="text-ink-soft text-lg leading-relaxed max-w-md">
            Product Manager at Microsoft. Always happy to connect, whether it's about
            AI product, enterprise infrastructure, or just to say hello.
          </p>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="mailto:meeraskurup19@gmail.com"
              className="inline-flex items-center gap-2 text-ink font-medium border-b border-transparent hover:border-accent hover:text-accent-dark transition-colors"
            >
              <Mail size={16} className="text-ink-soft" />
              meeraskurup19@gmail.com
            </a>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-line flex items-center justify-center text-ink hover:border-accent hover:text-accent-dark transition-colors duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-line text-center">
        <p className="font-mono text-ink-soft text-sm">© 2026 Meera Kurup. All rights reserved.</p>
      </div>
    </section>
  )
}
