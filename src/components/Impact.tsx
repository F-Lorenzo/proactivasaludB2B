import { AnimateIn } from './ui/AnimateIn'
import { IMPACT_STATS } from '@/lib/constants'

const colorMap = {
  green: {
    bg: 'bg-green',
    text: 'text-white',
    label: 'text-white/80',
    desc: 'text-white/65',
  },
  teal: {
    bg: 'bg-navy',
    text: 'text-teal',
    label: 'text-white/80',
    desc: 'text-white/55',
  },
  navy: {
    bg: 'bg-navy-mid',
    text: 'text-white',
    label: 'text-white/70',
    desc: 'text-white/50',
  },
} as const

export function Impact() {
  return (
    <section id="impacto" className="bg-navy-muted py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="max-w-2xl mb-16 lg:mb-20">
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

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {IMPACT_STATS.map((stat, i) => {
            const colors = colorMap[stat.color as keyof typeof colorMap] ?? colorMap.navy
            return (
              <AnimateIn key={stat.label} delay={i * 100}>
                <div className={`${colors.bg} rounded-2xl p-8 lg:p-9 flex flex-col gap-4 h-full`}>
                  <p className={`font-display text-5xl lg:text-6xl font-bold leading-none ${colors.text}`}>
                    {stat.value}
                  </p>
                  <div>
                    <p className={`font-body font-semibold text-base ${colors.label} mb-2`}>
                      {stat.label}
                    </p>
                    <p className={`font-body text-sm leading-relaxed ${colors.desc}`}>
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
          <p className="mt-8 font-body text-xs text-ink-soft text-center max-w-2xl mx-auto leading-relaxed">
            Proyecciones basadas en estudios de salud preventiva en poblaciones +50. Los resultados
            reales dependen del tamaño y perfil de la cartera. El piloto generará datos específicos
            para su empresa.
          </p>
        </AnimateIn>

      </div>
    </section>
  )
}
