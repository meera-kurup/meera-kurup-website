import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { asset } from '../utils/asset'

type Role = {
  company: string
  logo: string
  title: string
  meta: string
  summary?: string
  bullets: string[]
}

// Bloomberg/Fidelity/NIH entries are placeholders — swap in real title/dates/bullets.
const roles: Role[] = [
  {
    company: 'Microsoft',
    logo: asset('images/experience/microsoft.png'),
    title: 'Product Manager II — CoreAI',
    meta: 'Microsoft Foundry · Enterprise Networking & Security',
    summary:
      'I own enterprise networking and security for Microsoft Foundry — converting ambiguous blockers from regulated customers into shipped platform capabilities, lower support friction, and scalable enablement.',
    bullets: [
      'Own enterprise networking and secure connectivity for Microsoft Foundry and AzureML, shipping features from ideation to GA across IP allowlisting, virtual network integration, private connectivity, and agent tooling.',
      'Drive adoption of secure networking configurations across Foundry and AzureML workspaces, working closely with regulated enterprise customers to unblock deployment at scale.',
      'Improved enterprise supportability by building documentation, templates, and setup flows that meaningfully reduced support ticket volume for networking and permissions issues.',
      'Built customer and field enablement assets — including Learn docs, infrastructure-as-code templates, architecture diagrams, and conference talks — to accelerate enterprise onboarding and self-service.',
    ],
  },
  {
    company: 'Bloomberg',
    logo: asset('images/experience/bloomberg.png'),
    title: 'Title pending',
    meta: 'Dates & location pending',
    bullets: ['Add 2-4 bullet points describing impact and responsibilities.'],
  },
  {
    company: 'Fidelity',
    logo: asset('images/experience/fidelity.png'),
    title: 'Title pending',
    meta: 'Dates & location pending',
    bullets: ['Add 2-4 bullet points describing impact and responsibilities.'],
  },
  {
    company: 'NIH',
    logo: asset('images/experience/nih.png'),
    title: 'Title pending',
    meta: 'Dates & location pending',
    bullets: ['Add 2-4 bullet points describing impact and responsibilities.'],
  },
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
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Work Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                <img
                  src={role.logo}
                  alt={role.company}
                  className="w-16 h-16 object-contain rounded-lg bg-gray-50 p-2 border border-gray-100 shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold text-ink">{role.company}</h3>
                  <p className="text-primary font-semibold text-lg mt-0.5">{role.title}</p>
                  <p className="text-gray-400 text-sm mt-1">{role.meta}</p>
                </div>
              </div>

              {role.summary && (
                <p className="text-gray-600 mb-6 leading-relaxed">{role.summary}</p>
              )}

              <ul className="space-y-4">
                {role.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-gray-600 leading-relaxed">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
