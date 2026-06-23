'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV = [
  { label: 'Inicio', href: '#main' },
  { label: 'Costo asistencial', href: '#problema' },
  { label: 'Modelo preventivo', href: '#solucion' },
  { label: 'Impacto económico', href: '#impacto' },
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
          : 'bg-white shadow-card'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="ProActiva Salud"
            width={160}
            height={80}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-base font-bold text-navy hover:text-teal transition-colors"
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
