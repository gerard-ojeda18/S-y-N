import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SopasSection from './components/SopasSection'
import OfertasSection from './components/OfertasSection'
import NosotrosSection from './components/NosotrosSection'
import ContactoSection from './components/ContactoSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SopasSection />
      <OfertasSection />
      <NosotrosSection />
      <ContactoSection />
      <Footer />
    </main>
  )
}
