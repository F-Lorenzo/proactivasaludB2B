'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, TrendingDown, Users, BarChart3, HeartPulse, Activity } from 'lucide-react'

// Network nodes: center + 4 peripheral
const CENTER = { x: 260, y: 240 }
const NODES = [
  {
    id: 'a',
    x: 60,  y: 70,
    icon: TrendingDown,
    label: 'REDUCCIÓN DE COSTOS',
    value: '−12%',
    sub: 'siniestralidad crónica',
    color: '#80d85b',
    delay: '0s',
    anim: 'floatA',
  },
  {
    id: 'b',
    x: 420, y: 55,
    icon: HeartPulse,
    label: 'PREVENCIÓN ACTIVA',
    value: '5 pilares',
    sub: 'de salud integral',
    color: '#4a90d9',
    delay: '0.5s',
    anim: 'floatB',
  },
  {
    id: 'c',
    x: 30,  y: 390,
    icon: Users,
    label: 'GEN. SILVER',
    value: '+50/+60',
    sub: 'tu segmento clave',
    color: '#7b9fd4',
    delay: '1s',
    anim: 'floatC',
  },
  {
    id: 'd',
    x: 400, y: 380,
    icon: BarChart3,
    label: 'IMPACTO CLÍNICO',
    value: 'Medible',
    sub: 'en indicadores de salud',
    color: '#80d85b',
    delay: '0.3s',
    anim: 'floatD',
  },
]

// Extra mini-badges on the lines (decorative)
const BADGES = [
  { x: 160, y: 145, label: 'GESTIÓN ACTIVA', icon: Activity, color: '#80d85b' },
  { x: 340, y: 130, label: 'SALUD PREVENTIVA', icon: HeartPulse, color: '#4a90d9' },
]

function NetworkDiagram() {
  const W = 520
  const H = 480

  return (
    <div className="relative select-none" style={{ width: W, height: H }}>
      <style>{`
        @keyframes floatA{0%,100%{transform:translate(0,0)}50%{transform:translate(0,-7px)}}
        @keyframes floatB{0%,100%{transform:translate(0,0)}50%{transform:translate(0,-5px)}}
        @keyframes floatC{0%,100%{transform:translate(0,0)}50%{transform:translate(0,-9px)}}
        @keyframes floatD{0%,100%{transform:translate(0,0)}50%{transform:translate(0,-6px)}}
        @keyframes pulse{0%,100%{opacity:.4;r:4}50%{opacity:.9;r:6}}
        .net-float-a{animation:floatA 4s ease-in-out infinite}
        .net-float-b{animation:floatB 5s ease-in-out infinite}
        .net-float-c{animation:floatC 4.5s ease-in-out infinite}
        .net-float-d{animation:floatD 3.8s ease-in-out infinite}
        .net-dot{animation:pulse 2.4s ease-in-out infinite}
      `}</style>

      {/* SVG lines layer */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width={W} height={H}
        viewBox={`0 0 ${W} ${H}`}
      >
        <defs>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#80d85b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#80d85b" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle glow around center */}
        <circle cx={CENTER.x} cy={CENTER.y} r="90" fill="url(#glowGrad)" />

        {/* Lines from center to each node */}
        {NODES.map((n) => (
          <line
            key={n.id}
            x1={CENTER.x} y1={CENTER.y}
            x2={n.x + 68} y2={n.y + 36}
            stroke={n.color}
            strokeWidth="1"
            strokeOpacity="0.35"
            strokeDasharray="4 4"
          />
        ))}

        {/* Cross lines between nodes (peripheral connections) */}
        <line x1={NODES[0].x+68} y1={NODES[0].y+36} x2={NODES[1].x+68} y2={NODES[1].y+36}
          stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" strokeDasharray="3 6" />
        <line x1={NODES[2].x+68} y1={NODES[2].y+36} x2={NODES[3].x+68} y2={NODES[3].y+36}
          stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" strokeDasharray="3 6" />
        <line x1={NODES[0].x+68} y1={NODES[0].y+36} x2={NODES[2].x+68} y2={NODES[2].y+36}
          stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="3 8" />
        <line x1={NODES[1].x+68} y1={NODES[1].y+36} x2={NODES[3].x+68} y2={NODES[3].y+36}
          stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="3 8" />

        {/* Dots on lines */}
        {NODES.map((n) => {
          const mx = (CENTER.x + n.x + 68) / 2
          const my = (CENTER.y + n.y + 36) / 2
          return (
            <circle key={`dot-${n.id}`} className="net-dot" cx={mx} cy={my} r="4"
              fill={n.color} opacity="0.6"
              style={{ animationDelay: n.delay }} />
          )
        })}

        {/* Center node circle */}
        <circle cx={CENTER.x} cy={CENTER.y} r="5" fill="#80d85b" opacity="0.8" />
        <circle cx={CENTER.x} cy={CENTER.y} r="10" fill="none" stroke="#80d85b" strokeWidth="1" opacity="0.3" />
      </svg>

      {/* Center card */}
      <div
        className="absolute rounded-2xl px-5 py-4 shadow-elevated"
        style={{
          left: CENTER.x - 110, top: CENTER.y - 56,
          width: 220,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <p className="font-body text-[10px] font-bold uppercase tracking-widest text-ink-soft mb-1.5">Proactiva Salud</p>
        <p className="font-display text-base font-bold text-navy leading-snug mb-1">Gestión activa,<br />no solo cobertura</p>
        <div className="w-full h-px bg-navy/8 my-2" />
        <p className="font-body text-xs text-ink-soft">Plataforma preventiva B2B para Generación Silver</p>
      </div>

      {/* Peripheral nodes */}
      {NODES.map((n, i) => {
        const Icon = n.icon
        const floatClass = `net-float-${n.id}`
        return (
          <div
            key={n.id}
            className={`${floatClass} absolute rounded-xl px-3 py-2.5 shadow-elevated`}
            style={{
              left: n.x, top: n.y,
              width: 136,
              background: 'rgba(18,36,72,0.82)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${n.color}30`,
              animationDelay: n.delay,
            }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${n.color}22` }}>
                <Icon size={11} style={{ color: n.color }} aria-hidden="true" />
              </div>
              <p className="font-body text-[9px] font-bold uppercase tracking-wide"
                style={{ color: `${n.color}cc` }}>{n.label}</p>
            </div>
            <p className="font-display font-bold text-white leading-none mb-0.5"
              style={{ fontSize: n.value.length > 4 ? 16 : 22 }}>{n.value}</p>
            <p className="font-body text-white/50 leading-snug" style={{ fontSize: 10 }}>{n.sub}</p>
          </div>
        )
      })}
    </div>
  )
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'transparent' }}
    >
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
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(26,61,122,0.97) 0%, rgba(26,61,122,0.6) 30%, rgba(26,61,122,0.25) 60%, transparent 100%)'
          }} />
        </div>
      </div>

      {/* Background texture */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: '#2d65c0', filter: 'blur(100px)' }}
        />
      </div>

      {/* Main layout */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-0 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid lg:grid-cols-[1fr_560px] gap-8 items-center w-full">

          {/* Text */}
          <div className="flex flex-col gap-8 animate-fade-up">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-teal" aria-hidden="true" />
              <span className="font-body font-semibold text-xs tracking-widest uppercase text-teal">
                Plataforma Digital de Salud Preventiva
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] tracking-tight">
              Más del 40% de los ingresos totales<br />de las empresas de salud, son<br />
              <span className="text-white/60">absorbidos por la población +50.</span>
            </h1>
            <p className="font-body text-xl text-white/70 max-w-[50ch] leading-relaxed">
              Proactiva Salud combina <strong className="text-white font-semibold">tecnología, seguimiento humano y programas de bienestar integral</strong>, que mejoran la adherencia, ordenan la demanda asistencial y generan impacto real económico sobre el gasto médico anual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-teal text-white font-body font-semibold text-base px-8 py-4 rounded hover:bg-teal-dark transition-colors">
                Solicitar presentación
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#impacto"
                className="inline-flex items-center justify-center font-body font-semibold text-base text-white/75 px-8 py-4 rounded border border-white/25 hover:border-white/60 hover:text-white transition-all duration-200">
                Ver el impacto
              </a>
            </div>
          </div>

          {/* Network diagram */}
          <div className="hidden lg:flex items-center justify-center">
            <NetworkDiagram />
          </div>

        </div>
      </div>

      {/* Soft bottom fade — blends into the section below */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none h-48"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(26,61,122,0.15) 40%, rgba(58,106,191,0.25) 100%)' }}
      />
    </section>
  )
}
