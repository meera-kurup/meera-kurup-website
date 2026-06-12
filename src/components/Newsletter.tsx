import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getIssues, withBase } from '../lib/newsletter'

function formatDate(d: string) {
  if (!d) return ''
  const date = new Date(d)
  return Number.isNaN(date.getTime())
    ? d
    : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Newsletter() {
  const issues = getIssues()

  return (
    <section className="section-padding pt-28 bg-accent-light min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
            Weekly newsletter
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Breakout</h1>
          <p className="text-gray-500 mt-3 max-w-2xl">
            One breakout startup, broken down like an investor would — what they do, the
            market, the growth signals, and my thesis. New issue most weeks.
          </p>
        </motion.div>

        {issues.length === 0 ? (
          <p className="text-gray-500">First issue coming soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {issues.map((issue, i) => {
              const cover = withBase(issue.cover)
              return (
                <motion.div
                  key={issue.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={`/newsletter/${issue.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-accent/20 hover:shadow-md transition-shadow duration-300 h-full"
                  >
                    <div className="h-40 overflow-hidden bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      {cover ? (
                        <img
                          src={cover}
                          alt={issue.company}
                          className="w-full h-full object-cover"
                          onError={(e) => (e.currentTarget.style.display = 'none')}
                        />
                      ) : (
                        <span className="text-white text-4xl font-bold">
                          {issue.company.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-xs">
                        <span className="font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                          {issue.sector}
                        </span>
                        <span className="text-gray-400">
                          Issue #{issue.issue} · {formatDate(issue.date)}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {issue.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">{issue.summary}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Read issue
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Substack subscribe CTA — placeholder until the Substack launches */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary-light p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Get it in your inbox</h3>
          <p className="text-gray-600 mb-5 max-w-md mx-auto">
            A new breakout startup, broken down, most weeks. Email subscriptions coming soon
            via Substack.
          </p>
          <a
            href="#"
            aria-disabled="true"
            className="inline-flex items-center gap-2 text-sm font-medium border border-primary text-primary px-5 py-2.5 rounded-full opacity-60 cursor-not-allowed"
            onClick={(e) => e.preventDefault()}
          >
            Subscribe (coming soon)
          </a>
        </div>
      </div>
    </section>
  )
}
