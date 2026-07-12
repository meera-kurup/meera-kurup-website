import { motion } from 'framer-motion'
import { asset } from '../utils/asset'

export default function About() {
  return (
    <section id="about" className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={asset('images/Its_Meera.png')}
              alt="Meera Kurup"
              className="rounded-lg w-full max-w-md mx-auto shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-3">
              My Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A little bit about me
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              I'm a Product Manager II at Microsoft on the CoreAI team. I own enterprise
              networking and secure connectivity for{' '}
              <span className="text-white font-medium">Microsoft Foundry</span> —
              shipping features that help regulated enterprises adopt AI at scale.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              Before Microsoft, I founded and led a handful of community and ed-tech
              ventures — experience that shaped how I approach product today: start from
              the user, ship fast, and measure real impact.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              I'm a Brown University CS graduate. Outside of work, you'll find me dancing,
              exploring new trails, or hunting down the best local restaurant.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
