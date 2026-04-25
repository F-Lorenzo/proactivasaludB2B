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
        <Hero />
        <PainPoints />
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
