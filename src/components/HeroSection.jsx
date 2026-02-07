import { ArrowDown } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-primary pt-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-secondary blur-3xl" />
      </div>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className={`inline-block px-4 py-2 bg-secondary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 opacity-0 ${
            isVisible ? 'animate-fade-in-up' : ''
          }`}
        >
          Distribuidora Mayorista
        </span>

        <h1
          className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 text-balance opacity-0 ${
            isVisible ? 'animate-fade-in-up animate-delay-100' : ''
          }`}
        >
          SyN
        </h1>

        <p
          className={`text-xl sm:text-2xl text-primary-foreground max-w-2xl mx-auto mb-4 text-pretty opacity-0 ${
            isVisible ? 'animate-fade-in-up animate-delay-200' : ''
          }`}
        >
          Frutos Secos, Especias, Semillas, Sopas Kang Shi Fu y mas
        </p>

        <p
          className={`text-lg text-primary-foreground max-w-xl mx-auto mb-10 opacity-0 ${
            isVisible ? 'animate-fade-in-up animate-delay-300' : ''
          }`}
        >
          Calidad y frescura en cada producto. Tu mejor aliado para abastecer tu negocio.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center opacity-0 ${
            isVisible ? 'animate-fade-in-up animate-delay-400' : ''
          }`}
        >
          <a
            href="#ofertas"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
          >
            Ver Productos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105"
          >
            Contactanos
          </a>
        </div>

        <a
          href="#sopas"
          className={`inline-flex items-center gap-2 mt-16 text-primary-foreground hover:text-primary-foreground transition-colors animate-bounce opacity-0 ${
            isVisible ? 'animate-fade-in animate-delay-500' : ''
          }`}
        >
          <span className="text-sm">Explorar mas</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
