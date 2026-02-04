import { Tag, Package, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const productos = [
  {
    nombre: 'Almendras Premium',
    descripcion: 'Almendras seleccionadas de primera calidad',
    precioOriginal: '$8.500',
    precioOferta: '$7.200',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Frutos Secos',
  },
  {
    nombre: 'Nueces sin Cascara',
    descripcion: 'Nueces peladas mariposa, frescas y crujientes',
    precioOriginal: '$9.800',
    precioOferta: '$8.500',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Frutos Secos',
  },
  {
    nombre: 'Mix de Frutos Secos',
    descripcion: 'Combinacion de almendras, nueces, castanas y avellanas',
    precioOriginal: null,
    precioOferta: '$6.800',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Mix',
  },
  {
    nombre: 'Pasas de Uva',
    descripcion: 'Pasas de uva sin semilla, dulces y jugosas',
    precioOriginal: '$3.200',
    precioOferta: '$2.800',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Frutas Secas',
  },
  {
    nombre: 'Ajo Blanco',
    descripcion: 'Ajo blanco de primera calidad, grande y fresco',
    precioOriginal: null,
    precioOferta: '$2.500',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Ajos',
  },
  {
    nombre: 'Ajo Colorado',
    descripcion: 'Ajo colorado con intenso sabor y aroma',
    precioOriginal: null,
    precioOferta: '$2.800',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Ajos',
  },
  {
    nombre: 'Ajo Negro',
    descripcion: 'Ajo negro fermentado, suave y dulce',
    precioOriginal: '$6.500',
    precioOferta: '$5.500',
    unidad: 'por 250g',
    oferta: true,
    categoria: 'Ajos',
  },
  {
    nombre: 'Castanas de Caju',
    descripcion: 'Castanas de caju tostadas sin sal',
    precioOriginal: null,
    precioOferta: '$11.500',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Frutos Secos',
  },
  {
    nombre: 'Mani Tostado',
    descripcion: 'Mani tostado con y sin piel disponible',
    precioOriginal: '$2.800',
    precioOferta: '$2.200',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Frutos Secos',
  },
  {
    nombre: 'Ciruelas Secas',
    descripcion: 'Ciruelas deshidratadas sin carozo',
    precioOriginal: null,
    precioOferta: '$4.500',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Frutas Secas',
  },
  {
    nombre: 'Datiles Medjool',
    descripcion: 'Datiles medjool grandes y carnosos',
    precioOriginal: '$8.900',
    precioOferta: '$7.500',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Frutas Secas',
  },
  {
    nombre: 'Pistachos',
    descripcion: 'Pistachos tostados y salados con cascara',
    precioOriginal: null,
    precioOferta: '$14.500',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Frutos Secos',
  },
]

export default function OfertasSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05)
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3)

  return (
    <section id="ofertas" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 opacity-0 ${
              headerVisible ? 'animate-fade-in-up' : ''
            }`}
          >
            <Tag className="w-4 h-4" /> Ofertas Especiales
          </span>

          <h2
            className={`font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance opacity-0 ${
              headerVisible ? 'animate-fade-in-up animate-delay-100' : ''
            }`}
          >
            Nuestros Productos
          </h2>

          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 ${
              headerVisible ? 'animate-fade-in-up animate-delay-200' : ''
            }`}
          >
            Frutos secos, frutas deshidratadas y ajos de la mejor calidad. Precios mayoristas para tu negocio.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.map((producto, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border group opacity-0 ${
                cardsVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: cardsVisible ? `${(index % 4) * 100}ms` : '0ms' }}
            >
              {producto.oferta && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> OFERTA
                </div>
              )}

              <div className="h-32 bg-secondary flex items-center justify-center">
                <Package className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
              </div>

              <div className="p-5">
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  {producto.categoria}
                </span>
                <h3 className="font-serif text-lg font-semibold text-card-foreground mt-1 mb-2">
                  {producto.nombre}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{producto.descripcion}</p>

                <div className="flex items-end justify-between">
                  <div>
                    {producto.precioOriginal && (
                      <span className="text-sm text-muted-foreground line-through block">
                        {producto.precioOriginal}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-primary">{producto.precioOferta}</span>
                    <span className="text-xs text-muted-foreground ml-1">{producto.unidad}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`mt-16 bg-primary/5 rounded-2xl p-8 sm:p-12 text-center border border-primary/10 opacity-0 ${
            ctaVisible ? 'animate-fade-in-up' : ''
          }`}
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Precios Mayoristas Especiales
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Comprando a partir de 10kg obtene descuentos adicionales. Consultanos por precios especiales para comercios y
            revendedores.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Solicitar Cotizacion
          </a>
        </div>
      </div>
    </section>
  )
}
