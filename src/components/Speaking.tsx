import { motion } from 'framer-motion'
import { Youtube } from 'lucide-react'

const IGNITE_VIDEO_ID = 'SBI1qgNvWV4'
const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLMNyhgUGktAE'

export default function Speaking() {
  return (
    <section id="speaking" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
            Conference Talks
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Speaking</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            View all recordings of my presentations at Microsoft Ignite and through the
            Art of the Possible video series. Topics focused around enterprise features and
            network isolation for Microsoft Foundry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-gray-50 rounded-lg border border-gray-100 overflow-hidden"
        >
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${IGNITE_VIDEO_ID}`}
              title="Microsoft Ignite talk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg font-bold text-ink">Microsoft Ignite</h3>
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200 shrink-0"
            >
              <Youtube size={16} />
              Watch all talks on YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
