import { Soup, Flame, Clock, Star } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const sopas = [
  {
    nombre: 'Kang Shi Fu - Res',
    descripcion: 'Fideos instantaneos sabor carne de res con especias orientales',
    precio: '$1.200',
    popular: true,
  },
  {
    nombre: 'Kang Shi Fu - Pollo',
    descripcion: 'Fideos instantaneos sabor pollo con vegetales deshidratados',
    precio: '$1.200',
    popular: false,
  },
  {
    nombre: 'Kang Shi Fu - Mariscos',
    descripcion: 'Fideos instantaneos sabor mariscos con toque picante',
    precio: '$1.350',
    popular: true,
  },
  {
    nombre: 'Kang Shi Fu - Cerdo',
    descripcion: 'Fideos instantaneos sabor cerdo con salsa de soja',
    precio: '$1.200',
    popular: false,
  },
  {
    nombre: 'Kang Shi Fu - Vegetales',
    descripcion: 'Fideos instantaneos con mix de vegetales orientales',
    precio: '$1.100',
    popular: false,
  },
  {
    nombre: 'Kang Shi Fu - Extra Picante',
    descripcion: 'Fideos instantaneos con salsa extra picante estilo Sichuan',
    precio: '$1.400',
    popular: true,
  },
]

export default function SopasSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1)

  return (
    <section id="sopas" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 opacity-0 ${
              headerVisible ? 'animate-fade-in-up' : ''
            }`}
          >
            <Soup className="w-4 h-4" /> Importacion Directa
          </span>

          <h2
            className={`font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance opacity-0 ${
              headerVisible ? 'animate-fade-in-up animate-delay-100' : ''
            }`}
          >
            Sopas Kang Shi Fu
          </h2>

          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 ${
              headerVisible ? 'animate-fade-in-up animate-delay-200' : ''
            }`}
          >
            La marca lider de fideos instantaneos en Asia. Autentico sabor oriental en minutos.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sopas.map((sopa, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:-translate-y-1 opacity-0 ${
                cardsVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
            >
              {sopa.popular && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  <Star className="w-3 h-3" /> Popular
                </span>
              )}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Soup className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">{sopa.nombre}</h3>
              <p className="text-muted-foreground text-sm mb-4">{sopa.descripcion}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{sopa.precio}</span>
                <div className="flex items-center gap-3 text-muted-foreground text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 3 min
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-3 h-3" /> Caliente
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 opacity-0 ${
            cardsVisible ? 'animate-fade-in animate-delay-500' : ''
          }`}
        >
          <p className="text-muted-foreground">
            Precios mayoristas disponibles.
            <a href="#contacto" className="text-primary hover:underline ml-1 font-medium transition-colors">
              Consultanos por cantidad
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

