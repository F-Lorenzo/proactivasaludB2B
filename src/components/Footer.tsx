import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'El problema', href: '#problema' },
  { label: 'La solución', href: '#solucion' },
  { label: 'Impacto económico', href: '#impacto' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">

        <div className="grid lg:grid-cols-[1fr_auto_auto] gap-12 lg:gap-20 mb-12 lg:mb-16">

          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex mb-5">
              <Image
                src="/logo.png"
                alt="ProActiva Salud"
                width={160}
                height={80}
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-body text-sm text-white/45 leading-relaxed mb-6">
              Plataforma de salud preventiva integral para la Generación Silver.
              Dirigida a prepagas, aseguradoras y empresas de salud.
            </p>
            <p className="font-body text-xs text-white/30">
              Piloto de lanzamiento · Primera cohorte Mayo 2026
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body font-semibold text-xs tracking-widest uppercase text-white/30 mb-5">
              Secciones
            </p>
            <nav aria-label="Pie de página">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-white/50 hover:text-white transition-colors"
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
              Contacto
            </p>
            <div className="space-y-4">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 group">
                <Phone size={14} className="text-teal/60 flex-shrink-0 group-hover:text-teal transition-colors" aria-hidden="true" />
                <span className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  {CONTACT_INFO.phone}
                </span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 group">
                <Mail size={14} className="text-teal/60 flex-shrink-0 group-hover:text-teal transition-colors" aria-hidden="true" />
                <span className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
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
                <span className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                  {CONTACT_INFO.whatsapp}
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-body text-xs text-white/25">
            © 2026 Proactiva Salud — {CONTACT_INFO.company}
          </p>
          <p className="font-body text-xs text-white/20">
            Todos los derechos reservados
          </p>
        </div>

      </div>
    </footer>
  )
}
