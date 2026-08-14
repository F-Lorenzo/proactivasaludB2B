'use client'

import { TrendingDown, UserCheck, Zap, Heart, UserPlus } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'
import { useLanguage } from '@/contexts/LanguageContext'

const ICONS = [TrendingDown, UserCheck, Zap, Heart, UserPlus]

export function BusinessValue() {
  const { t } = useLanguage()
  const [primary, ...secondary] = t.businessValue.items
  const [, ...secondaryIcons] = ICONS
  const PrimaryIcon = ICONS[0]

  return (
    <section className="bg-navy-muted py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateIn>
          <div className="max-w-4xl mb-16 lg:mb-20">
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-navy leading-tight tracking-tight whitespace-normal">
              <span className="block">{t.businessValue.headline1}</span>
              <span className="block">{t.businessValue.headline2}</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Primary value — full width */}
        <AnimateIn>
          <div className="bg-navy rounded-3xl p-8 lg:p-12 mb-6 grid lg:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <PrimaryIcon size={28} className="text-teal" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-2xl lg:text-3xl text-teal font-bold mb-4 leading-tight">
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
            const Icon = secondaryIcons[i]
            return (
              <AnimateIn key={item.title} delay={(i + 1) * 80}>
                <div className="bg-white rounded-2xl p-6 lg:p-7 flex flex-col gap-5 h-full shadow-card">
                  <div className="w-10 h-10 rounded-xl bg-navy/25 flex items-center justify-center">
                    <Icon size={18} className="text-navy" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm font-semibold text-navy leading-relaxed">
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
