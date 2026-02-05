import { Tag, Package, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const productos = [
  {
    nombre: 'Almendras Premium',
    descripcion: 'Almendras seleccionadas sin cáscara, ideales para un snack saludable. 🥜',
    precioOriginal: '$30.000',
    precioOferta: '$28.000',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Frutos Secos',
  },
  {
    nombre: 'Nueces sin Cascara',
    descripcion: 'Nueces frescas, perfectas para repostería y consumo directo. 🌰',
    precioOriginal: '$25.000',
    precioOferta: '$22.000',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Frutos Secos',
  },
  {
    nombre: 'Mix de Frutos Secos',
    descripcion: 'Combinación de pasas de uva, mani, almendras y nueces. 🥣',
    precioOriginal: null,
    precioOferta: '$15.000',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Mix',
  },
  {
    nombre: 'Mix Premium',
    descripcion: 'Combinacion de almendras, nueces y caju (Productos seleccionados). 🥣',
    precioOriginal: '$30.000',
    precioOferta: '$28.000',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Mix',
  },
  {
    nombre: 'Pasas de Uva',
    descripcion: 'Dulzura natural y textura suave para tus recetas o snacks. 🌿',
    precioOriginal: null,
    precioOferta: '$12.000',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Frutos secos',
  },
  {
    nombre: 'Ajos variados',
    descripcion: 'Intenso y aromático, ideal para realzar el sabor de tus comidas. 🧄',
    precioOriginal: null,
    precioOferta: '$7.000',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Ajos',
  },
  {
    nombre: 'Arándanos Deshidratados',
    descripcion: 'Arándanos dulces y naturales, perfectos para ensaladas o snacks. 🫐',
    precioOriginal: '$22.000',
    precioOferta: '$20.000',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Frutos secos',
  },
  {
    nombre: 'Castanas de Caju',
    descripcion: 'Fruto seco nutritivo y sabroso, ideal como snack o para recetas. 🌰',
    precioOriginal: null,
    precioOferta: '$21.000',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Frutos Secos',
  },
  {
    nombre: 'Flores de jamaica',
    descripcion: 'Naturales, de sabor intenso y refrescante, ideales para infusiones. 🌺',
    precioOriginal: '$22.000',
    precioOferta: '$20.000',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Frutos Secos',
  },
  {
    nombre: 'Flores de jamaica deshidratadas',
    descripcion: 'Ricas en antioxidantes, ayudan a la digestión e ideales para infusiones.🌺',
    precioOriginal: null,
    precioOferta: '$4.500',
    unidad: 'por kg',
    oferta: false,
    categoria: 'Frutas Secas',
  },
  {
    nombre: 'Datiles Medjool',
    descripcion: 'Naturales, dulces y energéticos, recetas saludables y endulzante natural. 🌴',
    precioOriginal: '$20.000',
    precioOferta: '$18.000',
    unidad: 'por kg',
    oferta: true,
    categoria: 'Frutas Secas',
  },
  {
    nombre: 'Semillas de chía',
    descripcion: 'Naturales, ideales para sumar a licuados y preparaciones saludables.🌱',
    precioOriginal: null,
    precioOferta: '$12.000',
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
            Comprando al por mayor accedés a descuentos especiales y mejores condiciones comerciales. Ofrecemos precios preferenciales para comercios y revendedores, pensados para maximizar tu rentabilidad. Consultanos y recibí una cotización personalizada.
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
