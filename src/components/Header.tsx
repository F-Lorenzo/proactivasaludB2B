'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const NAV = [
    { label: t.nav.mainSite, href: 'https://www.proactivasalud.com', external: true },
    { label: t.nav.home, href: '#main' },
    { label: t.nav.problema, href: '#problema' },
    { label: t.nav.solucion, href: '#solucion' },
    { label: t.nav.impacto, href: '#impacto' },
    { label: t.nav.servicios, href: '#servicios' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card'
          : 'bg-white shadow-card'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 xl:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <Image
            src="/logo.png"
            alt={t.common.logoAlt}
            width={250}
            height={125}
            className="h-[125px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="hidden xl:flex items-center gap-4 flex-shrink min-w-0" aria-label="Navegación principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="font-body text-sm font-bold text-navy hover:text-teal transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language switcher + CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <LanguageSwitcher />
          <a
            href="#contacto"
            className={`font-body font-semibold text-sm px-4 py-2.5 rounded transition-all duration-200 whitespace-nowrap ${
              scrolled
                ? 'bg-navy text-white hover:bg-navy-mid'
                : 'bg-teal text-white hover:bg-teal-dark'
            }`}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
