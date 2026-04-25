import { TrendingDown, UserCheck, Zap, Heart, UserPlus } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'
import { BUSINESS_VALUE } from '@/lib/constants'

const iconMap = {
  TrendingDown,
  UserCheck,
  Zap,
  Heart,
  UserPlus,
} as const

export function BusinessValue() {
  const [primary, ...secondary] = BUSINESS_VALUE

  const PrimaryIcon = iconMap[primary.icon as keyof typeof iconMap]

  return (
    <section className="bg-navy-muted py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-teal" aria-hidden="true" />
              <span className="font-body font-semibold text-xs tracking-widest uppercase text-teal">
                Por qué importa
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-navy leading-tight tracking-tight">
              El valor para su empresa,<br />
              más allá de la salud.
            </h2>
          </div>
        </AnimateIn>

        {/* Primary value — full width */}
        <AnimateIn>
          <div className="bg-teal rounded-3xl p-8 lg:p-12 mb-6 grid lg:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
              {PrimaryIcon && <PrimaryIcon size={28} className="text-white" aria-hidden="true" />}
            </div>
            <div>
              <h3 className="font-display text-2xl lg:text-3xl text-white font-bold mb-4 leading-tight">
                {primary.title}
              </h3>
              <p className="font-body text-white/75 text-base leading-relaxed max-w-[64ch]">
                {primary.description}
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Secondary values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {secondary.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <AnimateIn key={item.title} delay={(i + 1) * 80}>
                <div className="bg-white rounded-2xl p-6 lg:p-7 flex flex-col gap-5 h-full shadow-card">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
                    {Icon && <Icon size={18} className="text-navy" aria-hidden="true" />}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-ink-mid leading-relaxed">
                      {item.description}
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
