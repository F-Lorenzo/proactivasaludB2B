'use client'

import Image from 'next/image'
import { AnimateIn } from './ui/AnimateIn'
import { IMPACT_STATS } from '@/lib/constants'

function PulsingArrow() {
  return (
    <div className="relative flex flex-col items-center" style={{ width: 40, height: 64 }}>
      <style>{`
        @keyframes arrowPulse1 {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          33% { opacity: 1; transform: translateY(4px); }
        }
        @keyframes arrowPulse2 {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          33% { opacity: 0.2; transform: translateY(0); }
          66% { opacity: 1; transform: translateY(4px); }
        }
        @keyframes arrowPulse3 {
          0%, 66% { opacity: 0.2; transform: translateY(0); }
          100% { opacity: 0.2; transform: translateY(0); }
          83% { opacity: 1; transform: translateY(4px); }
        }
        .ap1 { animation: arrowPulse1 1.6s ease-in-out infinite; }
        .ap2 { animation: arrowPulse2 1.6s ease-in-out infinite; }
        .ap3 { animation: arrowPulse3 1.6s ease-in-out infinite; }
      `}</style>
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          className={`ap${i + 1}`}
          width="28" height="18"
          viewBox="0 0 28 18"
          fill="none"
          aria-hidden="true"
          style={{ marginBottom: i < 2 ? -4 : 0 }}
        >
          <polyline
            points="4,4 14,14 24,4"
            stroke="#80d85b"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}

const colorMap = {
  teal: {
    bg: 'bg-navy',
    text: 'text-teal',
    label: 'text-white font-bold',
    desc: 'text-white/80',
  },
  navy: {
    bg: 'bg-navy-mid',
    text: 'text-white',
    label: 'text-white font-bold',
    desc: 'text-white/80',
  },
} as const

export function Impact() {
  return (
    <section id="impacto" className="bg-navy-muted py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="max-w-2xl mb-12 lg:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-teal" aria-hidden="true" />
              <span className="font-body font-semibold text-xs tracking-widest uppercase text-teal">
                Impacto proyectado
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-navy leading-tight tracking-tight">
              Lo que cambia cuando se<br />
              <span className="text-teal">actúa antes del problema.</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Human image banner */}
        <AnimateIn delay={100}>
          <div className="relative w-full h-56 lg:h-72 rounded-3xl overflow-hidden mb-10 lg:mb-12">
            <Image
              src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85"
              alt="Adultos mayores activos y saludables gracias a gestión preventiva"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(14,36,73,0.75) 0%, rgba(14,36,73,0.35) 60%, transparent 100%)' }} />
            <div className="absolute inset-0 flex items-center px-8 lg:px-12">
              <blockquote className="max-w-md">
                <p className="font-display text-xl lg:text-2xl text-white leading-snug font-bold">
                  "Prevenir cuesta menos que tratar. Siempre."
                </p>
                <p className="font-body text-sm text-white/60 mt-3">
                  Principio de salud preventiva en poblaciones +50
                </p>
              </blockquote>
            </div>
          </div>
        </AnimateIn>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {IMPACT_STATS.map((stat, i) => {
            const isMain = stat.color === 'green'
            const colors = colorMap[stat.color as keyof typeof colorMap] ?? colorMap.navy
            return (
              <AnimateIn key={stat.label} delay={i * 100}>
                <div
                  className={`${isMain ? '' : colors.bg} rounded-2xl p-8 lg:p-9 flex flex-col gap-4 h-full`}
                  style={isMain ? { background: 'linear-gradient(135deg, #1a4a8a 0%, #1e5ba6 50%, #2568c0 100%)' } : undefined}
                >
                  {stat.value === '↓' ? (
                    <PulsingArrow />
                  ) : (
                    <p className={`font-display font-bold leading-none ${isMain ? 'text-7xl lg:text-8xl text-white' : `text-6xl lg:text-7xl ${colors.text}`}`}>
                      {stat.value}
                    </p>
                  )}
                  <div>
                    <p className={`font-body mb-2 ${isMain ? 'text-xl font-bold text-white' : `text-lg ${colors.label}`}`}>
                      {stat.label}
                    </p>
                    <p className={`font-body text-base leading-relaxed ${isMain ? 'text-white/80' : colors.desc}`}>
                      {stat.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* Disclaimer */}
        <AnimateIn delay={450}>
          <p className="mt-10 font-body text-sm text-ink-mid text-center max-w-2xl mx-auto leading-relaxed">
            Proyecciones basadas en estudios de salud preventiva en poblaciones +50. Los resultados
            reales dependen del tamaño y perfil de la cartera. El piloto generará datos específicos
            para su empresa.
          </p>
        </AnimateIn>

      </div>
    </section>
  )
}
