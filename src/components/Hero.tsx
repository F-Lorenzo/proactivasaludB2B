import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(150deg, #daeaf8 0%, #c8dff5 40%, #b8d4f0 70%, #a8c8eb 100%)' }}
    >
      {/* Background texture */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20"
          style={{ background: 'radial-gradient(ellipse at top right, #80d85b, transparent 60%)' }}
        />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: '#2d65c0', filter: 'blur(100px)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_546px] gap-16 items-center min-h-[calc(100vh-4rem)]">

          {/* ── Text ── */}
          <div className="flex flex-col gap-8 animate-fade-up">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-teal" aria-hidden="true" />
              <span className="font-body font-semibold text-xs tracking-widest uppercase text-teal">
                Plataforma Digital de Salud Preventiva
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-navy leading-[1.1] tracking-tight">
              El 60–80% del gasto<br />de su cartera es<br />
              <span className="text-navy/50">prevenible.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-xl text-navy/70 max-w-[44ch] leading-relaxed">
              Proactiva Salud trabaja <strong className="text-navy font-semibold">antes del problema</strong>, no después. Gestión activa de salud preventiva para la Generación Silver (+50/+60) de su empresa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-teal text-white font-body font-semibold text-base px-8 py-4 rounded hover:bg-teal-dark transition-colors"
              >
                Solicitar presentación
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#impacto"
                className="inline-flex items-center justify-center font-body font-semibold text-base text-navy/75 px-8 py-4 rounded border border-navy/25 hover:border-navy/60 hover:text-navy transition-all duration-200"
              >
                Ver el impacto
              </a>
            </div>

            {/* Trust signal */}
            <div className="flex items-center gap-3 pt-2">
              <ShieldCheck size={18} className="text-green flex-shrink-0" aria-hidden="true" />
              <p className="font-body text-sm text-navy/50">
                Programa piloto en preparación · Primer cohorte Mayo 2026
              </p>
            </div>
          </div>

          {/* ── Visual ── */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/hero.jpg"
                alt="Diagrama financiero B2B de salud preventiva"
                fill
                className="object-cover"
                priority
                sizes="546px"
              />
              <div className="absolute inset-0 bg-navy/10" />
            </div>

            {/* Differential card — bottom right */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3.5 shadow-elevated max-w-[180px]">
              <p className="font-body text-xs text-ink-soft font-semibold uppercase tracking-wide mb-1">Diferencial</p>
              <p className="font-body text-sm font-semibold text-navy leading-snug">
                Gestión activa, no solo cobertura
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
