'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV = [
  { label: 'El problema', href: '#problema' },
  { label: 'La solución', href: '#solucion' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Servicios', href: '#servicios' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card'
          : 'bg-navy/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-colors ${scrolled ? 'bg-navy' : 'bg-teal'}`}>
            <span className="font-display font-bold text-white text-xs leading-none">PS</span>
          </div>
          <span className={`font-display font-bold text-base leading-tight transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}>
            Proactiva<span className={scrolled ? 'text-teal' : 'text-teal-light'}> Salud</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-body text-sm transition-colors ${
                scrolled ? 'text-ink-mid hover:text-navy' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contacto"
          className={`font-body font-semibold text-sm px-5 py-2.5 rounded transition-all duration-200 ${
            scrolled
              ? 'bg-navy text-white hover:bg-navy-mid'
              : 'bg-teal text-white hover:bg-teal-dark'
          }`}
        >
          Solicitar reunión
        </a>
      </div>
    </header>
  )
}
