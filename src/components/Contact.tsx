import { motion } from 'framer-motion'
import { Mail, Twitter, Linkedin } from 'lucide-react'
import { asset } from '../utils/asset'

const photos = [
  { src: asset('images/photos/british_columbia.jpg'), alt: 'British Columbia' },
  { src: asset('images/photos/brown.jpg'), alt: 'Brown University' },
  { src: asset('images/photos/rainier.JPG'), alt: 'Mount Rainier' },
  { src: asset('images/photos/maine.jpg'), alt: 'Maine' },
  { src: asset('images/photos/boston.jpg'), alt: 'Boston' },
]

const socials = [
  { href: 'https://www.linkedin.com/in/meera-kurup/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/TheMeeraKurup', icon: Twitter, label: 'Twitter' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Say Hi</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              PM at Microsoft. Brown CS alum. Always happy to connect — whether it's about
              AI product, enterprise infrastructure, social impact, or just to say hello.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <Mail size={18} className="text-white/60" />
              <a
                href="mailto:meeraskurup19@gmail.com"
                className="text-white hover:text-primary-light transition-colors font-medium"
              >
                meeraskurup19@gmail.com
              </a>
            </div>

            <div>
              <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4">
                Connect
              </p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-2"
          >
            {photos.map((photo, i) => (
              <div
                key={photo.alt}
                className={`overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: i === 0 ? '200px' : '96px' }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/20 text-center">
        <p className="text-white/40 text-sm">© 2026 Meera Kurup. All rights reserved.</p>
      </div>
    </section>
  )
}
