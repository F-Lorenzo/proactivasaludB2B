import { CircleCheck, X } from 'lucide-react'
import { AnimateIn } from './ui/AnimateIn'
import { DIFFERENTIALS } from '@/lib/constants'

export function Solution() {
  return (
    <section id="solucion" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <div>
            <AnimateIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-teal" aria-hidden="true" />
                <span className="font-body font-bold text-sm tracking-widest uppercase text-navy">
                  Modelo preventivo
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-navy leading-tight tracking-tight mb-6">
                Gestión activa de salud,<br />
                no solo cobertura.
              </h2>
              <p className="font-body text-lg text-ink-mid leading-relaxed mb-10 max-w-[52ch]">
                Proactiva Salud interviene <strong className="text-navy font-semibold">antes de que aparezca el problema</strong>.
                Un programa integral de prevención para la Generación Silver que reduce el gasto
                asistencial de forma sostenida y medible.
              </p>
            </AnimateIn>

            {/* Differentials */}
            <AnimateIn delay={150}>
              <div className="space-y-4">
                {DIFFERENTIALS.map((diff, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_1fr] gap-4"
                  >
                    <div className="flex items-start gap-3 bg-green-light rounded-xl px-4 py-3.5">
                      <CircleCheck size={16} className="text-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-body text-sm font-semibold text-ink">{diff.yes}</span>
                    </div>
                    <div className="flex items-start gap-3 bg-navy-light border border-navy/10 rounded-xl px-4 py-3.5">
                      <X size={16} className="text-ink-mid flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-body text-sm font-medium text-ink-mid">{diff.no}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Program overview */}
          <AnimateIn delay={200}>
            <div className="bg-navy rounded-3xl p-8 lg:p-10">
              <p className="font-body font-bold text-sm tracking-widest uppercase text-teal mb-6">
                Cómo funciona
              </p>

              <div className="space-y-6">
                {[
                  {
                    number: '01',
                    title: 'Diagnóstico de la cartera',
                    body: 'Identificamos el segmento Silver (+50/+60) y su perfil de riesgo actual.',
                  },
                  {
                    number: '02',
                    title: 'Programa personalizado',
                    body: 'Cada afiliado recibe un plan de 5 pilares: nutrición, actividad física, psicología, bienestar y coaching.',
                  },
                  {
                    number: '03',
                    title: 'Seguimiento continuo',
                    body: 'Teleconsultas programadas, sin traslados. El profesional llega al afiliado, no al revés.',
                  },
                  {
                    number: '04',
                    title: 'Reportes de impacto',
                    body: 'Datos de adherencia, evolución de indicadores y estimación de costos evitados para su empresa.',
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <span className="font-display text-sm font-bold text-teal flex-shrink-0 w-6 pt-0.5">
                      {step.number}
                    </span>
                    <div>
                      <p className="font-body font-semibold text-white text-base mb-1">
                        {step.title}
                      </p>
                      <p className="font-body text-sm text-white/75 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="font-body text-sm text-white/60">
                  Piloto de lanzamiento · Primer cohorte <strong className="text-white/85 font-semibold">Mayo 2026</strong>
                </p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
