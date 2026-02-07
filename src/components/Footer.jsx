import { Instagram, Facebook, Phone } from 'lucide-react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#ofertas', label: 'Ofertas' },
  { href: '#sopas', label: 'Sopas Kang Shi Fu' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#inicio" className="inline-block mb-4">
              <span className="font-serif text-3xl font-bold text-primary">SyN</span>
            </a>
            <p className="text-background/70 mb-6">
              Distribuidora mayorista de frutos secos premium y sopas Kang Shi Fu. Calidad y frescura garantizada.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5491141401840"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Enlaces</h4>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Productos destacados</h4>
            <ul className="flex flex-col gap-3 text-background/70">
              <li>Almendras Premium</li>
              <li>Nueces sin Cascara</li>
              <li>Mix de Frutos Secos</li>
              <li>Sopas Kang Shi Fu</li>
              <li>Ajos Variados</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm text-center sm:text-left">
            2025 SyN Distribuidora. Todos los derechos reservados.
          </p>
          <p className="text-background/50 text-sm">Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  )
}

