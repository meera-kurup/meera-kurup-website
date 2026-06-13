import { motion } from 'framer-motion'
import { ExternalLink, Github, Youtube } from 'lucide-react'
import { asset } from '../utils/asset'

type Link = { label: string; href: string; icon?: typeof ExternalLink }

const ventures: { tag: string; title: string; description: string; links: Link[]; image: string }[] = [
  {
    tag: 'Founder',
    title: 'CodeIT Girls',
    description:
      'A STEM program in southern NH teaching girls in grades 2–5 to code and pursue technology. Built in partnership with UNH STEM Lab and NCWIT AspireIT.',
    links: [
      { label: 'Read Press', href: 'https://extension.unh.edu/blog/2018/03/coded-success', icon: ExternalLink },
    ],
    image: asset('images/projects/codeitgirls.png'),
  },
  {
    tag: 'Co-founder & CTO',
    title: 'EmpowerU',
    description:
      'An ed-tech startup addressing educational disparities by connecting first-generation college students with the resources they need to access higher education. Led the dev team to build the website and app.',
    links: [
      {
        label: 'BDH Article',
        href: 'https://www.browndailyherald.com/article/2021/11/student-founded-empoweru-looks-to-provide-resources-to-prospective-first-generation-college-students',
        icon: ExternalLink,
      },
    ],
    image: asset('images/projects/empoweru.png'),
  },
  {
    tag: '2018 Congressional App Challenge Winner',
    title: 'ALZPoetry',
    description:
      "A therapeutic app for families of Alzheimer's patients. Family members record themselves reading classic poems, creating a lasting archive of familiar voices their loved ones can return to anytime. Originally built as an iOS app — now being rebuilt as a web app with FastAPI and React.",
    links: [
      { label: 'GitHub', href: 'https://github.com/meera-kurup/ALZPoetry', icon: Github },
      { label: 'Watch Demo', href: 'https://www.youtube.com/watch?v=myzN1LHgtlQ', icon: Youtube },
    ],
    image: asset('images/projects/alzspoetry.png'),
  },
]

export default function EarlyVentures() {
  return (
    <section id="ventures" className="section-padding bg-accent-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
            Where it started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Early Ventures</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Community and social impact work I founded and led before Microsoft.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ventures.map((venture, i) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-accent/20 hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-44 overflow-hidden bg-accent-light">
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent mb-3">
                  {venture.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{venture.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{venture.description}</p>
                <div className="flex flex-wrap gap-3">
                  {venture.links.map((link) => {
                    const Icon = link.icon ?? ExternalLink
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm border border-accent/30 text-gray-700 px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
                      >
                        <Icon size={13} />
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
