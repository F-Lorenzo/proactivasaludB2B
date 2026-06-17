import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(150deg, #1a3868 0%, #1f4a8a 35%, #2558a8 65%, #2d65c0 100%)' }}
    >
      {/* Background texture */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-15"
          style={{ background: 'radial-gradient(ellipse at top right, oklch(0.52 0.13 215), transparent 60%)' }}
        />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-8"
          style={{ background: 'oklch(0.45 0.18 240)', filter: 'blur(100px)' }}
        />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'oklch(0.65 0.15 205)', filter: 'blur(80px)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center min-h-[calc(100vh-4rem)]">

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
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] tracking-tight">
              El 60–80% del gasto<br />de su cartera es<br />
              <span className="text-white/65">prevenible.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-xl text-white/65 max-w-[44ch] leading-relaxed">
              Proactiva Salud trabaja <strong className="text-white/90 font-semibold">antes del problema</strong>, no después. Gestión activa de salud preventiva para la Generación Silver (+50/+60) de su empresa.
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
                className="inline-flex items-center justify-center font-body font-semibold text-base text-white/75 px-8 py-4 rounded border border-white/20 hover:border-white/50 hover:text-white transition-all duration-200"
              >
                Ver el impacto
              </a>
            </div>

            {/* Trust signal */}
            <div className="flex items-center gap-3 pt-2">
              <ShieldCheck size={18} className="text-green flex-shrink-0" aria-hidden="true" />
              <p className="font-body text-sm text-white/50">
                Programa piloto en preparación · Primer cohorte Mayo 2026
              </p>
            </div>
          </div>

          {/* ── Visual ── */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=85"
                alt="Profesional de salud con tableta atendiendo paciente mayor"
                fill
                className="object-cover"
                priority
                sizes="420px"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>

            {/* Stat card — top left */}
            <div className="absolute -top-4 -left-6 text-white rounded-xl px-5 py-4 shadow-elevated"
              style={{ background: 'linear-gradient(135deg, #2558a8 0%, #3578d8 100%)' }}>
              <p className="font-display text-3xl font-bold leading-none">25%</p>
              <p className="font-body text-xs opacity-85 mt-1">costos médicos</p>
              <p className="font-body text-xs opacity-85">evitables</p>
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
