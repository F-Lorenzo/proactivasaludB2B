import { TrendingUp, RefreshCcw, Users } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'
import { PAIN_POINTS } from '@/lib/constants'

const iconMap = {
  TrendingUp,
  RefreshCcw,
  Users,
} as const

export function PainPoints() {
  return (
    <section id="problema" className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <AnimateIn>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-teal" aria-hidden="true" />
              <span className="font-body font-semibold text-xs tracking-widest uppercase text-teal">
                El problema
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white leading-tight tracking-tight">
              Su cartera tiene un problema<br />
              <span className="text-teal">que empeora cada año.</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Pain cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {PAIN_POINTS.map((point, i) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap]
            return (
              <AnimateIn key={point.stat} delay={i * 120}>
                <div className="bg-navy-mid rounded-2xl p-8 lg:p-10 flex flex-col gap-6 h-full">
                  {/* Stat */}
                  <div>
                    <p className="font-display text-5xl lg:text-6xl font-bold text-white leading-none mb-3">
                      {point.stat}
                    </p>
                    <p className="font-body text-lg font-semibold text-white/80 leading-snug">
                      {point.title}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-px bg-teal/40" aria-hidden="true" />

                  {/* Description */}
                  <p className="font-body text-base text-white/55 leading-relaxed flex-1">
                    {point.description}
                  </p>

                  {/* Icon */}
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                      {Icon && <Icon size={18} className="text-teal" aria-hidden="true" />}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* Bottom callout */}
        <AnimateIn delay={400}>
          <div className="mt-12 lg:mt-16 bg-teal/10 rounded-2xl px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-body text-base text-white/80 leading-relaxed">
                <strong className="text-white font-semibold">La ecuación es simple:</strong>{' '}
                sin prevención activa, los afiliados mayores consumen cada vez más servicios costosos.
                La pregunta no es si va a pasar, sino cuándo.
              </p>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  )
}
