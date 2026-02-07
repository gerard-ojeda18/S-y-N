import Header from './components/Header'
import HeroSection from './components/HeroSection'
import OfertasSection from './components/OfertasSection'
import SopasSection from './components/SopasSection'
import NosotrosSection from './components/NosotrosSection'
import ContactoSection from './components/ContactoSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <OfertasSection />
      <SopasSection />
      <NosotrosSection />
      <ContactoSection />
      <Footer />
    </main>
  )
}
