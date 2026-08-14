'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function SkipLink() {
  const { t } = useLanguage()

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:rounded-lg"
    >
      {t.skipLink}
    </a>
  )
}
