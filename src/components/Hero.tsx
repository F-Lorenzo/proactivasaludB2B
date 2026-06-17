'use client'

import Image from 'next/image'
import { ArrowRight, ShieldCheck, TrendingDown, Users, BarChart3, HeartPulse } from 'lucide-react'

const WIDGETS = [
  {
    icon: TrendingDown,
    label: 'Reducción de costos',
    value: '−30%',
    sub: 'en siniestralidad crónica',
    pos: 'top-6 -left-8',
    delay: '0s',
    color: '#80d85b',
  },
  {
    icon: HeartPulse,
    label: 'Prevención activa',
    value: '5 pilares',
    sub: 'de salud integral',
    pos: 'top-1/3 -right-6',
    delay: '0.4s',
    color: '#2d65c0',
  },
  {
    icon: Users,
    label: 'Generación Silver',
    value: '+50 / +60',
    sub: 'tu cartera más costosa',
    pos: 'bottom-1/3 -left-8',
    delay: '0.8s',
    color: '#2558a8',
  },
  {
    icon: BarChart3,
    label: 'ROI medible',
    value: '3×',
    sub: 'retorno sobre inversión',
    pos: '-bottom-4 -right-4',
    delay: '0.2s',
    color: '#1a3868',
  },
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(150deg, #daeaf8 0%, #c8dff5 40%, #b8d4f0 70%, #a8c8eb 100%)' }}
    >
      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatD {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .widget-0 { animation: floatA 4s ease-in-out infinite; }
        .widget-1 { animation: floatB 5s ease-in-out infinite; }
        .widget-2 { animation: floatC 4.5s ease-in-out infinite; }
        .widget-3 { animation: floatD 3.8s ease-in-out infinite; }
      `}</style>

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
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-teal" aria-hidden="true" />
              <span className="font-body font-semibold text-xs tracking-widest uppercase text-teal">
                Plataforma Digital de Salud Preventiva
              </span>
            </div>

            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-navy leading-[1.1] tracking-tight">
              El 60–80% del gasto<br />de su cartera es<br />
              <span className="text-navy/50">prevenible.</span>
            </h1>

            <p className="font-body text-xl text-navy/70 max-w-[44ch] leading-relaxed">
              Proactiva Salud trabaja <strong className="text-navy font-semibold">antes del problema</strong>, no después. Gestión activa de salud preventiva para la Generación Silver (+50/+60) de su empresa.
            </p>

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

            {/* Floating widgets */}
            {WIDGETS.map((w, i) => {
              const Icon = w.icon
              return (
                <div
                  key={i}
                  className={`widget-${i} absolute ${w.pos} bg-white rounded-2xl px-4 py-3.5 shadow-elevated`}
                  style={{ animationDelay: w.delay, minWidth: '160px' }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${w.color}18` }}>
                      <Icon size={13} style={{ color: w.color }} aria-hidden="true" />
                    </div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-wide text-ink-soft">{w.label}</p>
                  </div>
                  <p className="font-display font-bold text-xl text-navy leading-none mb-0.5">{w.value}</p>
                  <p className="font-body text-xs text-ink-soft leading-snug">{w.sub}</p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
