import { Soup, Flame, Clock, Star } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SopaNaranja from '../assets/sopa-naranja.png'
import SopaRoja from '../assets/sopa-roja.png'
import SopaVerde from '../assets/sopa-verde.png'
import SopaAmarilla from '../assets/sopa-amarilla.png'
import SopaAzul from '../assets/sopa-azul.jpg'


const sopas = [
  {
    nombre: 'Sabor Carne Picante',
    descripcion: 'Fideos instantáneos con intenso sabor a carne picante. Para los amantes del sabor fuerte.',
    precio: '$12.000',
    popular: true,
    imagen: SopaNaranja,
  },
  {
    nombre: 'Sabor Pollo con Champiñón',
    descripcion: 'Fideos instantáneos con delicioso sabor a pollo y champiñón. Ideal para cualquier momento del día.',
    precio: '$12.000',
    popular: true,
    imagen: SopaVerde,
  },
  {
    nombre: 'Sabor Mariscos',
    descripcion: 'Fideos instantáneos con exquisito sabor a mariscos. Experiencia marina en tu hogar.',
    precio: '$12.000',
    popular: true,
    imagen: SopaAzul
  },
  {
    nombre: 'Sabor Cerdo con Cebollín Frito',
    descripcion: 'Fideos instantáneos con sabor artificial a cerdo y cebollín frito. Preparación rápida y deliciosa.',
    precio: '$12000',
    popular: true,
    imagen: SopaAmarilla,
  },
  {
    nombre: 'Sabor a Estofado de Carne',
    descripcion: 'Fideos instantáneos con rico sabor a carne estofada. Comfort food en minutos.',
    precio: '$12.000',
    popular: true,
    imagen: SopaRoja,
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
                <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  <Star className="w-3 h-3" /> Popular
                </span>
              )}
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
               <img
                src={sopa.imagen}
                alt={sopa.nombre}
                className="w-full h-full object-cover"
                 />
               <div className="absolute top-3 left-3 w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center">
              <Soup className="w-5 h-5 text-primary" />
                </div>
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

