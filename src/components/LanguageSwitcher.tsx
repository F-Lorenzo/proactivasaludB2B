'use client'

import Image from 'next/image'
import { useLanguage, type Language } from '@/contexts/LanguageContext'

const FLAGS: { lang: Language; flag: string }[] = [
  { lang: 'es', flag: 'https://flagcdn.com/w80/ar.png' },
  { lang: 'en', flag: 'https://flagcdn.com/w80/us.png' },
  { lang: 'pt', flag: 'https://flagcdn.com/w80/br.png' },
]

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Idioma / Language / Idioma">
      {FLAGS.map(({ lang: flagLang, flag }) => (
        <button
          key={flagLang}
          type="button"
          aria-pressed={lang === flagLang}
          aria-label={t.languageSwitcher[flagLang]}
          onClick={() => setLang(flagLang)}
          className={`w-6 h-6 rounded-full overflow-hidden flex-shrink-0 transition-all duration-200 ${
            lang === flagLang
              ? 'ring-2 ring-teal ring-offset-1 scale-110'
              : 'ring-1 ring-navy/15 opacity-60 hover:opacity-100'
          }`}
        >
          <Image
            src={flag}
            alt={t.languageSwitcher[flagLang]}
            width={24}
            height={24}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  )
}
