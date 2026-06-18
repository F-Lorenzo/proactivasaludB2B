'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, TrendingDown, Users, BarChart3, HeartPulse } from 'lucide-react'

const WIDGETS: { icon: React.ElementType; label: string; value: string; sub: string; pos: string; delay: string; color: string; small?: boolean }[] = [
  {
    icon: TrendingDown,
    label: 'Reducción de costos',
    value: '−30%',
    sub: 'en siniestralidad crónica',
    pos: 'top-24 right-8',
    delay: '0s',
    color: '#80d85b',
  },
  {
    icon: HeartPulse,
    label: 'Prevención activa',
    value: '5 pilares',
    sub: 'de salud integral',
    pos: 'top-1/2 right-8',
    delay: '0.4s',
    color: '#2d65c0',
  },
  {
    icon: Users,
    label: 'Generación Silver',
    value: '+50 / +60',
    sub: 'tu cartera más costosa',
    pos: 'bottom-32 right-8',
    delay: '0.8s',
    color: '#2558a8',
  },
  {
    icon: BarChart3,
    label: 'Diferencial',
    value: 'Gestión activa,',
    sub: 'no solo cobertura',
    pos: 'bottom-8 right-8',
    delay: '0.2s',
    color: '#1a3868',
    small: true,
  },
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'transparent' }}
    >
      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatD { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        .widget-0{animation:floatA 4s ease-in-out infinite}
        .widget-1{animation:floatB 5s ease-in-out infinite}
        .widget-2{animation:floatC 4.5s ease-in-out infinite}
        .widget-3{animation:floatD 3.8s ease-in-out infinite}
      `}</style>

      {/* Full-width panoramic image — right half of viewport */}
      <div className="absolute inset-y-0 right-0 hidden lg:block" style={{ left: '42%' }} aria-hidden="true">
        <div className="relative w-full h-full">
          <Image
            src="/hero.jpg"
            alt="Diagrama financiero B2B de salud preventiva"
            fill
            className="object-cover object-center"
            priority
            sizes="60vw"
          />
          {/* Left-edge fade to blend with gradient background */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(26,61,122,0.95) 0%, rgba(26,61,122,0.4) 25%, transparent 60%)'
          }} />
        </div>
      </div>

      {/* Background texture */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: '#2d65c0', filter: 'blur(100px)' }}
        />
      </div>

      {/* Text content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-0 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="flex flex-col gap-8 animate-fade-up max-w-xl">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-teal" aria-hidden="true" />
            <span className="font-body font-semibold text-xs tracking-widest uppercase text-teal">
              Plataforma Digital de Salud Preventiva
            </span>
          </div>

          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] tracking-tight">
            El 60–80% del gasto<br />de su cartera es<br />
            <span className="text-white/60">prevenible.</span>
          </h1>

          <p className="font-body text-xl text-white/70 max-w-[44ch] leading-relaxed">
            Proactiva Salud trabaja <strong className="text-white font-semibold">antes del problema</strong>, no después. Gestión activa de salud preventiva para la Generación Silver (+50/+60) de su empresa.
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
              className="inline-flex items-center justify-center font-body font-semibold text-base text-white/75 px-8 py-4 rounded border border-white/25 hover:border-white/60 hover:text-white transition-all duration-200"
            >
              Ver el impacto
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <ShieldCheck size={18} className="text-green flex-shrink-0" aria-hidden="true" />
            <p className="font-body text-sm text-white/50">
              Programa piloto en preparación · Primer cohorte Mayo 2026
            </p>
          </div>
        </div>

        {/* Floating widgets — positioned over the image area */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {WIDGETS.map((w, i) => {
            const Icon = w.icon
            return (
              <div
                key={i}
                className={`widget-${i} absolute ${w.pos} bg-white rounded-2xl px-4 py-3.5 shadow-elevated pointer-events-auto`}
                style={{ animationDelay: w.delay, minWidth: '160px' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${w.color}18` }}>
                    <Icon size={13} style={{ color: w.color }} aria-hidden="true" />
                  </div>
                  <p className="font-body text-[10px] font-semibold uppercase tracking-wide text-ink-soft">{w.label}</p>
                </div>
                <p className={`text-navy leading-snug mb-0.5 ${w.small ? 'font-body font-semibold text-sm' : 'font-display font-bold text-xl leading-none'}`}>{w.value}</p>
                <p className="font-body text-xs text-ink-soft leading-snug">{w.sub}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Geometric V transition — peak offset right */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 100, display: 'block' }}>
          <path d="M0,0 L1000,100 L1440,18 L1440,100 L0,100 Z" fill="rgba(20,50,110,0.4)" />
        </svg>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 100, display: 'block', marginTop: -100 }}>
          <path d="M0,0 L980,95 L1440,10 L1440,100 L0,100 Z" fill="rgba(45,101,192,0.55)" />
        </svg>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 100, display: 'block', marginTop: -100 }}>
          <path d="M0,0 L960,88 L1440,2 L1440,100 L0,100 Z" fill="rgba(58,106,191,0.65)" />
        </svg>
      </div>
    </section>
  )
}
