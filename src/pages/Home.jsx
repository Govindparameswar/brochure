import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Panchakarma from '../components/Panchakarma'
import CoreTherapies from '../components/CoreTherapies'
import Programmes from '../components/Programmes'
import Doctor from '../components/Doctor'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Panchakarma />
      <CoreTherapies />
      <Programmes />
      <Doctor />
      <Pricing />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
