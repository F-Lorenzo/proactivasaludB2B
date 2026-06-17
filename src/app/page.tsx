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
        <div style={{ background: 'linear-gradient(to bottom, #1a3d7a 0%, #1e4590 30%, #162d60 60%, #0d1e3c 85%, #0b1e3a 100%)' }}>
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
