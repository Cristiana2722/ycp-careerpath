import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { BookOpen, Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { label: 'Acasă', href: '/#acasa' },
  { label: 'Despre', href: '/#despre' },
  { label: 'Servicii', href: '/#servicii' },
  { label: 'Testimoniale', href: '/#testimoniale' },
  { label: 'Blog', href: '/blog' },
  { label: 'Prețuri', href: '/#preturi' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('ycp-theme')
    setDark(stored === 'dark' || document.documentElement.classList.contains('dark'))

    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('ycp-theme', next ? 'dark' : 'light')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-blue-700 dark:text-blue-400 text-sm tracking-widest">YCP</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wide hidden sm:block">Your Career Path</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.href.startsWith('/blog') ? (
                <Link
                  key={link.label}
                  to={link.href as '/blog'}
                  className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Schimbă tema"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA */}
            <a
              href="/#contact"
              className="hidden sm:inline-flex px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg shadow transition-colors"
            >
              Consultație Gratuită
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
              aria-label="Meniu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-lg">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) =>
              link.href.startsWith('/blog') ? (
                <Link
                  key={link.label}
                  to={link.href as '/blog'}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 bg-blue-700 text-white text-sm font-semibold rounded-lg text-center mt-2"
            >
              Consultație Gratuită
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
