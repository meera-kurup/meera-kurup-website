import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

// Section links point at the home page (base URL) + anchor, so they work from any route —
// e.g. from /newsletter they navigate home and scroll to the section.
const base = import.meta.env.BASE_URL
const sectionLinks = [
  { label: 'Home', href: base },
  { label: 'About', href: `${base}#about` },
  { label: 'Experience', href: `${base}#experience` },
  { label: 'Early Ventures', href: `${base}#ventures` },
  { label: 'Contact', href: `${base}#contact` },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href={base} className="text-lg font-semibold text-primary">
          Meera Kurup
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600 items-center">
          {sectionLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-primary transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/newsletter"
              className="text-primary hover:text-primary-dark transition-colors duration-200"
            >
              Newsletter
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4 text-sm font-medium text-gray-700">
            {sectionLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/newsletter"
                onClick={() => setOpen(false)}
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
