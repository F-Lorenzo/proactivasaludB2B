import type { Metadata } from 'next'
import { Libre_Baskerville, Figtree } from 'next/font/google'
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
  title: 'Proactiva Salud — Plataforma de Salud Preventiva para Empresas',
  description:
    'Reducí hasta un 25% los costos médicos de tu cartera con prevención activa para la Generación Silver. Dirigido a empresas de salud, prepagas y aseguradoras.',
  keywords:
    'salud preventiva, prepaga, aseguradora, generación silver, reducción de costos, Proactiva Salud',
  openGraph: {
    title: 'Proactiva Salud — Salud Preventiva para Empresas de Salud',
    description: 'Prevención integral antes del problema. Gestión activa de la Generación Silver.',
    type: 'website',
    locale: 'es_AR',
  },
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
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:rounded-lg"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  )
}
