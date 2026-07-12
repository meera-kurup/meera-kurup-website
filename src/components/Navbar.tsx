import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const base = import.meta.env.BASE_URL
const sectionLinks = [
  { label: 'Home', href: base },
  { label: 'About', href: `${base}#about` },
  { label: 'Early Ventures', href: `${base}#ventures` },
  { label: 'Experience', href: `${base}#experience` },
  { label: 'Speaking', href: `${base}#speaking` },
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
          </ul>
        </div>
      )}
    </nav>
  )
}
