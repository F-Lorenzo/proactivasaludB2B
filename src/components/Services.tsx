import { Utensils, Activity, Brain, Monitor, Users, CircleCheck } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'
import { SERVICES } from '@/lib/constants'

const iconMap = {
  Utensils,
  Activity,
  Brain,
  Monitor,
  Users,
} as const

export function Services() {
  const [featured, ...rest] = SERVICES

  const FeaturedIcon = iconMap[featured.icon as keyof typeof iconMap]

  return (
    <section id="servicios" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-teal" aria-hidden="true" />
              <span className="font-body font-semibold text-xs tracking-widest uppercase text-teal">
                Servicios
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-navy leading-tight tracking-tight">
              Cinco pilares que trabajan<br />
              en conjunto.
            </h2>
          </div>
        </AnimateIn>

        {/* Featured service */}
        <AnimateIn>
          <div className="bg-navy rounded-3xl p-8 lg:p-12 mb-6 grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-sm font-bold text-teal">{featured.number}</span>
                <div className="h-px flex-1 max-w-[40px] bg-teal/30" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-white font-bold mb-4 leading-tight">
                {featured.title}
              </h3>
              <p className="font-body text-white/60 text-base leading-relaxed mb-6 max-w-[48ch]">
                {featured.description}
              </p>

              {/* B2B value */}
              <div className="inline-flex items-center gap-2.5 bg-green/15 rounded-lg px-4 py-2.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" aria-hidden="true" />
                <p className="font-body text-sm font-semibold text-green">
                  {featured.b2bValue}
                </p>
              </div>

              <ul className="space-y-3">
                {featured.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CircleCheck size={15} className="text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-body text-sm text-white/65">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full bg-teal/10 flex items-center justify-center">
                {FeaturedIcon && (
                  <FeaturedIcon size={64} className="text-teal opacity-60" aria-hidden="true" />
                )}
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Remaining services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <AnimateIn key={service.number} delay={(i + 1) * 80}>
                <div className="bg-navy-muted rounded-2xl p-6 lg:p-7 flex flex-col gap-5 h-full">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-sm font-bold text-teal flex-shrink-0">
                      {service.number}
                    </span>
                    {Icon && (
                      <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-teal" aria-hidden="true" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-base font-bold text-navy mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-ink-mid leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* B2B value */}
                  <div className="mt-auto pt-4 border-t border-navy/10">
                    <p className="font-body text-xs font-semibold text-green leading-snug">
                      {service.b2bValue}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}
