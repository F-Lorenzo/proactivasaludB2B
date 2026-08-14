'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'
import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  const NAV_LINKS = [
    { label: t.nav.home, href: '#main' },
    { label: t.nav.problema, href: '#problema' },
    { label: t.nav.solucion, href: '#solucion' },
    { label: t.nav.impacto, href: '#impacto' },
    { label: t.nav.servicios, href: '#servicios' },
  ]

  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">

        <div className="grid lg:grid-cols-[1fr_auto_auto] gap-12 lg:gap-20 mb-12 lg:mb-16">

          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex mb-5">
              <Image
                src="/logo.png"
                alt={t.common.logoAlt}
                width={160}
                height={80}
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-body text-sm text-white leading-relaxed mb-6">
              {t.footer.brandDescription}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body font-semibold text-xs tracking-widest uppercase text-white/30 mb-5">
              {t.footer.seccionesLabel}
            </p>
            <nav aria-label="Pie de página">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-white hover:text-teal transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body font-semibold text-xs tracking-widest uppercase text-white/30 mb-5">
              {t.footer.contactoLabel}
            </p>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 group">
                <Mail size={14} className="text-teal/60 flex-shrink-0 group-hover:text-teal transition-colors" aria-hidden="true" />
                <span className="font-body text-sm text-white group-hover:text-teal transition-colors">
                  {CONTACT_INFO.email}
                </span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <MessageCircle size={14} className="text-teal/60 flex-shrink-0 group-hover:text-teal transition-colors" aria-hidden="true" />
                <span className="font-body text-sm text-white group-hover:text-teal transition-colors">
                  {CONTACT_INFO.whatsapp}
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-body text-xs text-white/25">
            {t.footer.copyrightPrefix}{t.common.companyTagline}
          </p>
          <p className="font-body text-xs text-white/20">
            {t.footer.rights}
          </p>
        </div>

      </div>
    </footer>
  )
}
