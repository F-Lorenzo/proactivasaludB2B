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
        <div style={{ background: 'linear-gradient(to bottom, #0a1e45 0%, #0e2558 15%, #162e70 35%, #2a5aaa 52%, #7aaee0 65%, #b0d0f0 78%, #ddeeff 88%, #f5faff 94%, #ffffff 100%)' }}>
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
