'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

type FormState = {
  empresa: string
  nombre: string
  email: string
  telefono: string
  tipo: string
  mensaje: string
}

const EMPTY: FormState = {
  empresa: '',
  nombre: '',
  email: '',
  telefono: '',
  tipo: '',
  mensaje: '',
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [sent, setSent] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const inputClass =
    'w-full font-body text-sm text-ink bg-white border border-navy/12 rounded-lg px-4 py-3 placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors'

  return (
    <section id="contacto" className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_520px] gap-16 lg:gap-24 items-start">

          {/* Left: info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-teal" aria-hidden="true" />
              <span className="font-body font-bold text-sm tracking-widest uppercase text-teal">
                Contacto
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white leading-tight tracking-tight mb-6">
              Menos gasto reactivo,<br />
              más prevención cuantificable.
            </h2>
            <p className="font-body text-white/60 text-base leading-relaxed mb-12 max-w-[48ch]">
              Si gestiona una Empresa que brinda servicios de salud a la población Silver +50,
              descubra cómo Proactiva Salud puede integrarse a su operación para reducir presión
              asistencial, mejorar adherencia y generar impacto económico comprobable.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                  <Phone size={16} className="text-teal" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-xs text-white/40 uppercase tracking-wide mb-0.5">Teléfono</p>
                  <p className="font-body text-base text-white font-semibold">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                  <Mail size={16} className="text-teal" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-xs text-white/40 uppercase tracking-wide mb-0.5">Email</p>
                  <p className="font-body text-base text-white font-semibold">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                  <MessageCircle size={16} className="text-teal" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-xs text-white/40 uppercase tracking-wide mb-0.5">WhatsApp</p>
                  <p className="font-body text-base text-white font-semibold">{CONTACT_INFO.whatsapp}</p>
                </div>
              </a>
            </div>

            {/* Company */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="font-body text-sm text-white/40">{CONTACT_INFO.company}</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-surface rounded-3xl p-8 lg:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
                <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center">
                  <ArrowRight size={24} className="text-green" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy font-bold mb-3">
                    Recibimos su consulta
                  </h3>
                  <p className="font-body text-base text-ink-mid leading-relaxed max-w-[36ch] mx-auto">
                    Nos pondremos en contacto con usted a la brevedad para coordinar una presentación.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl text-navy font-bold mb-2">
                  Solicitar presentación
                </h3>
                <p className="font-body text-sm text-ink-soft mb-8">
                  Complete el formulario y un especialista lo contactará.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="empresa" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                        Empresa *
                      </label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        required
                        placeholder="Nombre de la empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="tipo" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                        Tipo *
                      </label>
                      <select
                        id="tipo"
                        name="tipo"
                        required
                        value={form.tipo}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Seleccionar tipo</option>
                        <option value="prepaga">Prepaga / Medicina prepaga</option>
                        <option value="aseguradora">Aseguradora de vida</option>
                        <option value="mutual">Mutual / Obra social</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                        Nombre *
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        placeholder="Su nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="+54 11 ..."
                        value={form.telefono}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                      Email corporativo *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="usted@empresa.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={3}
                      placeholder="Cuéntenos sobre su cartera o consulta específica"
                      value={form.mensaje}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-teal text-white font-body font-semibold text-base px-8 py-4 rounded-lg hover:bg-teal-dark transition-colors mt-2"
                  >
                    Solicitar presentación
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
