import { Users, Truck, Award, Heart } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'


const valores = [
  {
    icon: Award,
    titulo: 'Calidad Premium',
    descripcion: 'Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad.',
  },
  {
    icon: Truck,
    titulo: 'Entrega Rapida',
    descripcion: 'Hacemos envios con tiempos de entrega optimizados.',
  },
  {
    icon: Users,
    titulo: 'Atencion Personalizada',
    descripcion: 'Te asesoramos para que encuentres los mejores productos para tu negocio.',
  },
  {
    icon: Heart,
    titulo: 'Compromiso',
    descripcion: 'Mas de 10 años trabajando con pasion por los productos naturales.',
  },
]

export default function NosotrosSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.2)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1)
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3)

  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={textRef}>
            <span
              className={`inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0 ${
                textVisible ? 'animate-slide-in-left' : ''
              }`}
            >
              Sobre Nosotros
            </span>

            <h2
              className={`font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance opacity-0 ${
                textVisible ? 'animate-slide-in-left animate-delay-100' : ''
              }`}
            >
              Tu aliado en frutos secos y productos orientales
            </h2>

            <div
              className={`space-y-4 text-muted-foreground opacity-0 ${
                textVisible ? 'animate-slide-in-left animate-delay-200' : ''
              }`}
            >
              <p>
                En <strong className="text-foreground">SyN Distribuidora</strong> nos especializamos en la venta
                mayorista de frutos secos premium, frutas deshidratadas y productos importados de Asia.
              </p>
              <p>
                Somos distribuidores oficiales de las sopas instantaneas{' '}
                <strong className="text-foreground">Kang Shi Fu</strong>, la marca numero uno en China, trayendo sabores
                autenticos directamente a tu negocio.
              </p>
              <p>
                Trabajamos con comercios, dieteticas, supermercados y emprendedores en todo el pais, ofreciendo precios
                competitivos y la mejor calidad del mercado.
              </p>
            </div>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6">
            {valores.map((valor, index) => (
              <div
                key={index}
                className={`bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 opacity-0 ${
                  cardsVisible ? 'animate-slide-in-right' : ''
                }`}
                style={{ animationDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <valor.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">{valor.titulo}</h3>
                <p className="text-muted-foreground text-sm">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className={`opacity-0 ${statsVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Años de experiencia</p>
          </div>
          <div className={`opacity-0 ${statsVisible ? 'animate-fade-in-up animate-delay-100' : ''}`}>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Clientes satisfechos</p>
          </div>
          <div className={`opacity-0 ${statsVisible ? 'animate-fade-in-up animate-delay-200' : ''}`}>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Productos disponibles</p>
          </div>
          <div className={`opacity-0 ${statsVisible ? 'animate-fade-in-up animate-delay-300' : ''}`}>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-2">24h</div>
            <p className="text-muted-foreground">Respuesta garantizada</p>
          </div>
        </div>
      </div>
    </section>
  )
}
