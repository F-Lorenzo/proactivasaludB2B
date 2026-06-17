import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PainPoints } from '@/components/PainPoints'
import { Solution } from '@/components/Solution'
import { Impact } from '@/components/Impact'
import { Services } from '@/components/Services'
import { BusinessValue } from '@/components/BusinessValue'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <div style={{ background: 'linear-gradient(to bottom, #1a3d7a 0%, #2050a0 20%, #3a6abf 45%, #8ab4e0 68%, #cce0f5 82%, #ffffff 100%)' }}>
          <Hero />
          <PainPoints />
        </div>
        <Solution />
        <Impact />
        <Services />
        <BusinessValue />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
