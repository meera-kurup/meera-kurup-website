import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const bullets = [
  'Own enterprise networking and secure connectivity for Microsoft Foundry and AzureML, shipping features from ideation to GA across IP allowlisting, virtual network integration, private connectivity, and agent tooling.',
  'Drive adoption of secure networking configurations across Foundry and AzureML workspaces, working closely with regulated enterprise customers to unblock deployment at scale.',
  'Improved enterprise supportability by building documentation, templates, and setup flows that meaningfully reduced support ticket volume for networking and permissions issues.',
  'Built customer and field enablement assets — including Learn docs, infrastructure-as-code templates, architecture diagrams, and conference talks — to accelerate enterprise onboarding and self-service.',
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Work Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
            <img
              src="/images/experience/microsoft.png"
              alt="Microsoft"
              className="w-16 h-16 object-contain rounded-xl bg-gray-50 p-2 border border-gray-100 shrink-0"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Microsoft</h3>
              <p className="text-primary font-semibold text-lg mt-0.5">
                Product Manager II — CoreAI
              </p>
              <p className="text-gray-400 text-sm mt-1">Microsoft Foundry · Enterprise Networking &amp; Security</p>
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            I own enterprise networking and security for Microsoft Foundry — converting
            ambiguous blockers from regulated customers into shipped platform capabilities,
            lower support friction, and scalable enablement.
          </p>

          <ul className="space-y-4">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                <CheckCircle2
                  size={18}
                  className="text-primary shrink-0 mt-0.5"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
