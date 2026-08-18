'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { CONTACT_INFO, WEB3FORMS_ACCESS_KEY } from '@/lib/constants'
import { useLanguage } from '@/contexts/LanguageContext'

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
  const { t } = useLanguage()
  const [form, setForm] = useState<FormState>(EMPTY)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (new FormData(e.currentTarget).get('botcheck')) return

    setSending(true)
    setError(false)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nueva consulta B2B — ${form.empresa}`,
          from_name: form.nombre,
          empresa: form.empresa,
          tipo: form.tipo,
          nombre: form.nombre,
          telefono: form.telefono,
          email: form.email,
          mensaje: form.mensaje,
        }),
      })
      const result = await response.json()

      if (result.success) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
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
                {t.contact.eyebrow}
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-white leading-tight tracking-tight mb-6">
              {t.contact.headline1}<br />
              {t.contact.headline2}
            </h2>
            <p className="font-body text-white/60 text-base leading-relaxed mb-12 max-w-[48ch]">
              {t.contact.body}
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                  <Mail size={16} className="text-teal" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-xs text-white/40 uppercase tracking-wide mb-0.5">{t.contact.emailLabel}</p>
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
                  <p className="font-body text-xs text-white/40 uppercase tracking-wide mb-0.5">{t.contact.whatsappLabel}</p>
                  <p className="font-body text-base text-white font-semibold">{CONTACT_INFO.whatsapp}</p>
                </div>
              </a>
            </div>

            {/* Company */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="font-body text-sm text-white/40">{t.common.companyTagline}</p>
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
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="font-body text-base text-ink-mid leading-relaxed max-w-[36ch] mx-auto">
                    {t.contact.form.successBody}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl text-navy font-bold mb-2">
                  {t.contact.form.title}
                </h3>
                <p className="font-body text-sm text-ink-soft mb-8">
                  {t.contact.form.subtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="empresa" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                        {t.contact.form.empresaLabel}
                      </label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        required
                        minLength={1}
                        maxLength={32}
                        pattern="[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ\s.,&'\-]{0,31}"
                        title={t.contact.form.nameFieldHint}
                        placeholder={t.contact.form.empresaPlaceholder}
                        value={form.empresa}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="tipo" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                        {t.contact.form.tipoLabel}
                      </label>
                      <select
                        id="tipo"
                        name="tipo"
                        required
                        value={form.tipo}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">{t.contact.form.tipoPlaceholder}</option>
                        <option value="prepaga">{t.contact.form.tipoOptions.prepaga}</option>
                        <option value="aseguradora">{t.contact.form.tipoOptions.aseguradora}</option>
                        <option value="mutual">{t.contact.form.tipoOptions.mutual}</option>
                        <option value="otro">{t.contact.form.tipoOptions.otro}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                        {t.contact.form.nombreLabel}
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        minLength={1}
                        maxLength={32}
                        pattern="[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ\s.,&'\-]{0,31}"
                        title={t.contact.form.nameFieldHint}
                        placeholder={t.contact.form.nombrePlaceholder}
                        value={form.nombre}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                        {t.contact.form.telefonoLabel}
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        inputMode="tel"
                        required
                        pattern="\+?[0-9\s\-\(\)]{7,20}"
                        title={t.contact.form.phoneFieldHint}
                        placeholder={t.contact.form.telefonoPlaceholder}
                        value={form.telefono}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                      {t.contact.form.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                      title={t.contact.form.emailFieldHint}
                      placeholder={t.contact.form.emailPlaceholder}
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="font-body text-xs font-semibold text-ink-mid uppercase tracking-wide block mb-1.5">
                      {t.contact.form.mensajeLabel}
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={3}
                      required
                      placeholder={t.contact.form.mensajePlaceholder}
                      value={form.mensaje}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="font-body text-sm text-red-600" role="alert">
                      {t.contact.form.errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 bg-teal text-white font-body font-semibold text-base px-8 py-4 rounded-lg hover:bg-teal-dark transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? t.contact.form.submitting : t.contact.form.submit}
                    {!sending && <ArrowRight size={18} aria-hidden="true" />}
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
