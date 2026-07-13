import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-paper">
      <div className="max-w-5xl mx-auto pb-10 md:pb-14 border-b border-line">
        <div className="mb-8">
          <p className="font-mono text-ink-soft text-xs uppercase tracking-wide mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">A little bit about me</h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
          <div />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-ink text-lg leading-relaxed mb-5 max-w-[60ch]">
              I'm a Product Manager II at Microsoft on the CoreAI team. I own enterprise
              networking and secure connectivity for{' '}
              <strong className="font-bold">Microsoft Foundry</strong> — shipping features
              that help regulated enterprises adopt AI at scale.
            </p>
            <p className="text-ink text-lg leading-relaxed mb-5 max-w-[60ch]">
              Before Microsoft, I founded and led a handful of community and ed-tech
              ventures — experience that shaped how I approach product today: start from
              the user, ship fast, and measure real impact.
            </p>
            <p className="text-ink-soft text-base leading-relaxed border-l-2 border-accent pl-4">
              Brown University CS graduate. Outside of work: dancing, new trails, and the
              search for the best local restaurant.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
