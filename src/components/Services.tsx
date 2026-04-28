import Image from 'next/image'
import { CircleCheck } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'
import { SERVICES } from '@/lib/constants'

const serviceImages: Record<string, string> = {
  '02': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
  '03': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  '04': 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=400&q=80',
  '05': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80',
}

const serviceImageAlts: Record<string, string> = {
  '02': 'Adulto mayor de 50 años realizando actividad física supervisada',
  '03': 'Persona mayor en sesión de bienestar psicológico',
  '04': 'Adulto mayor en teleconsulta médica desde su hogar',
  '05': 'Grupo de adultos mayores en taller de coaching de longevidad',
}

export function Services() {
  const [featured, ...rest] = SERVICES

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
          <div className="bg-navy rounded-3xl overflow-hidden mb-6 grid lg:grid-cols-[1fr_340px]">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-sm font-bold text-teal">{featured.number}</span>
                <div className="h-px flex-1 max-w-[40px] bg-teal/30" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-white font-bold mb-4 leading-tight">
                {featured.title}
              </h3>
              <p className="font-body text-white/70 text-base leading-relaxed mb-6 max-w-[48ch]">
                {featured.description}
              </p>

              {/* B2B value */}
              <div className="inline-flex items-center gap-2.5 rounded-lg px-4 py-2.5 mb-8"
                style={{ background: 'rgba(37, 104, 192, 0.2)' }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#60a5fa' }} aria-hidden="true" />
                <p className="font-body text-sm font-semibold" style={{ color: '#93c5fd' }}>
                  {featured.b2bValue}
                </p>
              </div>

              <ul className="space-y-3">
                {featured.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CircleCheck size={15} className="text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-body text-sm text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo */}
            <div className="relative hidden lg:block min-h-[360px]">
              <Image
                src="https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=600&q=85"
                alt="Adulto mayor de 50 años en consulta de nutrición saludable con profesional"
                fill
                className="object-cover"
                sizes="340px"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
          </div>
        </AnimateIn>

        {/* Remaining services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((service, i) => (
            <AnimateIn key={service.number} delay={(i + 1) * 80}>
              <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-card border border-navy/8">

                {/* Image */}
                <div className="relative h-44 flex-shrink-0">
                  <Image
                    src={serviceImages[service.number]}
                    alt={serviceImageAlts[service.number]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-navy/25" />
                  <span className="absolute top-3 left-3 font-display text-sm font-bold text-white bg-navy/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    {service.number}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
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
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-1.5" aria-hidden="true" />
                      <p className="font-body text-xs font-semibold text-teal leading-snug">
                        {service.b2bValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
