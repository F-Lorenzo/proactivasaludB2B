import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Proactiva Salud — Plataforma de Salud Preventiva para Empresas',
    short_name: 'Proactiva Salud',
    description:
      'Plataforma de bienestar y acompañamiento humano para la Generación Silver, integrada en aseguradoras y empresas de salud.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0a1e45',
    icons: [
      {
        src: '/logo.png',
        sizes: '400x200',
        type: 'image/png',
      },
    ],
  }
}
