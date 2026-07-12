import { motion } from 'framer-motion'
import { CheckCircle2, Youtube } from 'lucide-react'

const bullets = [
  'Own enterprise networking and secure connectivity for Microsoft Foundry and AzureML, shipping features from ideation to GA across IP allowlisting, virtual network integration, private connectivity, and agent tooling.',
  'Drive adoption of secure networking configurations across Foundry and AzureML workspaces, working closely with regulated enterprise customers to unblock deployment at scale.',
  'Improved enterprise supportability by building documentation, templates, and setup flows that meaningfully reduced support ticket volume for networking and permissions issues.',
  'Built customer and field enablement assets — including Learn docs, infrastructure-as-code templates, architecture diagrams, and conference talks — to accelerate enterprise onboarding and self-service.',
]

const IGNITE_VIDEO_ID = 'SBI1qgNvWV4'
const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLMNyhgUGktAE'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-paper">
      <div className="max-w-5xl mx-auto pb-10 md:pb-14 border-b border-line">
        <div className="mb-10">
          <p className="font-mono text-ink-soft text-xs uppercase tracking-wide mb-2">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Work Experience</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-6 pb-10 border-b border-line"
        >
          <span className="font-bold text-ink text-sm">Microsoft</span>
          <div>
            <p className="text-lg font-bold text-ink mb-1">Product Manager II — CoreAI</p>
            <p className="font-mono text-ink-soft text-sm mb-4">
              Microsoft Foundry · Enterprise Networking &amp; Security
            </p>
            <ul className="space-y-3">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-ink leading-relaxed">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="pt-10"
        >
          <p className="font-mono text-ink-soft text-xs uppercase tracking-wide mb-3">
            Speaking
          </p>
          <p className="text-ink-soft leading-relaxed max-w-[60ch] mb-5">
            View recordings of my presentations at Microsoft Ignite and through the Art of
            the Possible video series. Topics focused around enterprise features and
            network isolation for Microsoft Foundry.
          </p>
          <div className="aspect-video max-w-xl border border-line mb-4">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${IGNITE_VIDEO_ID}`}
              title="Microsoft Ignite talk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink border-b border-ink hover:border-accent hover:text-accent-dark transition-colors duration-200"
          >
            <Youtube size={16} />
            Watch all talks on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  )
}
