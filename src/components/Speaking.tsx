import { motion } from 'framer-motion'
import { Youtube } from 'lucide-react'

const IGNITE_VIDEO_ID = 'SBI1qgNvWV4'

// "Art of the Possible" series — swap in the playlist URL once created.
const ART_OF_POSSIBLE_VIDEO_IDS = ['1OQas0uPlLE', '5KwDsYSqm1I', 'fNlExLtjH7g']
const ART_OF_POSSIBLE_URL = `https://www.youtube.com/watch?v=${ART_OF_POSSIBLE_VIDEO_IDS[0]}`

export default function Speaking() {
  return (
    <section id="speaking" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
            Conference Talks
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Speaking</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden"
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
            <div className="p-6">
              <h3 className="text-lg font-bold text-ink">Microsoft Ignite</h3>
              <p className="text-gray-500 text-sm mt-1">Talk title and description pending.</p>
            </div>
          </motion.div>

          <motion.a
            href={ART_OF_POSSIBLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-gray-50 rounded-lg border border-gray-100 overflow-hidden flex flex-col hover:border-primary/40 transition-colors duration-200"
          >
            <div className="aspect-video">
              <img
                src={`https://img.youtube.com/vi/${ART_OF_POSSIBLE_VIDEO_IDS[0]}/hqdefault.jpg`}
                alt="Art of the Possible"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-ink">Art of the Possible</h3>
                <p className="text-gray-500 text-sm mt-1">Series description pending.</p>
              </div>
              <Youtube size={20} className="text-primary shrink-0 mt-1 group-hover:text-primary-dark" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
