import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { asset } from '../utils/asset'

type Stint = {
  title: string
  meta: string
  summary?: string
  bullets: string[]
}

type Company = {
  name: string
  logo: string
  stints: Stint[]
}

const companies: Company[] = [
  {
    name: 'Microsoft',
    logo: asset('images/experience/microsoft.png'),
    stints: [
      {
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
        title: 'Program Management Intern',
        meta: 'Bellevue, WA · May – August 2022',
        bullets: [
          'Led the AzureML and Azure Synapse interoperability project for the new Azure data analytics SaaS offering.',
          'Designed UX mocks and high-level spec docs outlining the user experience of sharing models and data.',
          'Conducted user interviews with top AzureML customers and worked with CSAs, PMs, engineers, and designers to make data-driven and technically feasible recommendations.',
        ],
      },
    ],
  },
  {
    name: 'Bloomberg',
    logo: asset('images/experience/bloomberg.png'),
    stints: [
      {
        title: 'Desktop Build Group Quant Intern',
        meta: 'New York, NY · June – August 2021',
        bullets: [
          'Developed applications on BQuant, an interactive platform combining Python with Bloomberg data and the Bloomberg Query Language (BQL), for a major market client base.',
          'Awarded Bloomberg Values Intern of the Summer.',
        ],
      },
    ],
  },
  {
    name: 'Brown University',
    logo: asset('images/experience/brown.png'),
    stints: [
      {
        title: 'Undergraduate Teaching Assistant',
        meta: 'April 2021 – Present',
        bullets: [
          'Head Teaching Assistant for Cybersecurity Ethics, Data Engineering, and the Entrepreneurship Practicum.',
        ],
      },
    ],
  },
  {
    name: 'NIH',
    logo: asset('images/experience/nih.png'),
    stints: [
      {
        title: 'Data Science Intern & Civic Digital Fellow',
        meta: 'Bethesda, MD · June – August 2020',
        bullets: [
          'Interpreted and analyzed internal NIH and FDA COVID-19 clinical trials data using Qlik Sense and Palantir Foundry.',
        ],
      },
    ],
  },
  {
    name: 'Northwoods Software Corporation',
    logo: asset('images/experience/northwoods.png'),
    stints: [
      {
        title: 'Software Engineering Intern',
        meta: 'Nashua, NH · June – July 2019',
        bullets: [
          'Programmed interactive explanatory diagrams and a Scratch editor for new GoJS product users in JavaScript.',
        ],
      },
    ],
  },
  {
    name: 'Fidelity Investments',
    logo: asset('images/experience/fidelity.png'),
    stints: [
      {
        title: 'Data Engineering Intern',
        meta: 'Merrimack, NH · June – August 2018',
        bullets: [
          'Built a full-stack GUI for database administrators to access, edit, and add metadata to databases.',
        ],
      },
      {
        title: 'Software Engineering Intern',
        meta: 'Merrimack, NH · June – August 2017',
        bullets: [
          'Designed a webpage in HTML/CSS used daily by database teams, hosted on a local server using Angular.',
          'Led a team to design a finance application teaching children investing and money management basics.',
        ],
      },
    ],
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
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 object-contain rounded-lg bg-gray-50 p-2 border border-gray-100 shrink-0"
                />
                <h3 className="text-2xl font-bold text-ink">{company.name}</h3>
              </div>

              <div className="space-y-8">
                {company.stints.map((stint, j) => (
                  <div
                    key={stint.title}
                    className={j > 0 ? 'pt-6 border-t border-gray-100' : ''}
                  >
                    <p className="text-primary font-semibold text-lg">{stint.title}</p>
                    <p className="text-gray-400 text-sm mt-1 mb-4">{stint.meta}</p>

                    {stint.summary && (
                      <p className="text-gray-600 mb-4 leading-relaxed">{stint.summary}</p>
                    )}

                    <ul className="space-y-3">
                      {stint.bullets.map((bullet, k) => (
                        <li key={k} className="flex gap-3 text-gray-600 leading-relaxed">
                          <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
