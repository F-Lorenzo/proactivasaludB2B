import type { Metadata } from 'next'
import { Libre_Baskerville, Figtree } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { SkipLink } from '@/components/SkipLink'
import { SITE_URL } from '@/lib/seo'
import './globals.css'

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
  display: 'swap',
})

const figtree = Figtree({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Proactiva Salud — Plataforma de Salud Preventiva para Empresas',
  description:
    'Reducí hasta un 25% los costos médicos de tu cartera con prevención activa para la Generación Silver. Dirigido a empresas de salud, prepagas y aseguradoras.',
  keywords:
    'salud preventiva, prepaga, aseguradora, generación silver, reducción de costos, Proactiva Salud',
  authors: [{ name: 'Proactiva Salud' }],
  creator: 'Proactiva Salud',
  publisher: 'Proactiva Salud',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Proactiva Salud — Salud Preventiva para Empresas de Salud',
    description: 'Prevención integral antes del problema. Gestión activa de la Generación Silver.',
    url: SITE_URL,
    siteName: 'Proactiva Salud',
    type: 'website',
    locale: 'es_AR',
    images: [
      {
        url: '/hero.jpg',
        width: 2000,
        height: 1000,
        alt: 'Proactiva Salud — Plataforma de Salud Preventiva para Empresas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proactiva Salud — Salud Preventiva para Empresas de Salud',
    description: 'Prevención integral antes del problema. Gestión activa de la Generación Silver.',
    images: ['/hero.jpg'],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Proactiva Salud',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Plataforma de bienestar y acompañamiento humano para la Generación Silver, integrada en aseguradoras y empresas de salud.',
  email: 'info@proactivasalud.com',
  sameAs: ['https://www.proactivasalud.com'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${libreBaskerville.variable} ${figtree.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          <SkipLink />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
