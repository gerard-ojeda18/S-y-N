import { useState } from 'react'
import { Send, MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: '',
  })

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2)
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.1)
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation(0.1)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mensaje = `Hola SyN Distribuidora!%0A%0A*Nombre:* ${formData.nombre}%0A*Telefono:* ${formData.telefono}%0A%0A*Consulta:*%0A${formData.mensaje}`
    const whatsappUrl = `https://wa.me/5491141401840?text=${mensaje}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 opacity-0 ${
              headerVisible ? 'animate-fade-in-up' : ''
            }`}
          >
            <MessageCircle className="w-4 h-4" /> Contacto
          </span>

          <h2
            className={`font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance opacity-0 ${
              headerVisible ? 'animate-fade-in-up animate-delay-100' : ''
            }`}
          >
            Escribinos por WhatsApp
          </h2>

          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 ${
              headerVisible ? 'animate-fade-in-up animate-delay-200' : ''
            }`}
          >
            Completa el formulario y te responderemos a la brevedad. Tambien podes contactarnos directamente por WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div
            ref={formRef}
            className={`bg-card rounded-2xl p-8 sm:p-10 border border-border shadow-sm opacity-0 ${
              formVisible ? 'animate-slide-in-left' : ''
            }`}
          >
            <h3 className="font-serif text-2xl font-bold text-card-foreground mb-6">
              Envianos tu consulta
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                  Telefono / WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  placeholder="11 1234-5678"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Que productos te interesan? Contanos sobre tu negocio..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BD5A] transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" /> Enviar por WhatsApp
              </button>
            </form>
          </div>

          <div ref={infoRef} className="space-y-8">
            <div
              className={`bg-primary rounded-2xl p-8 sm:p-10 text-primary-foreground opacity-0 ${
                infoVisible ? 'animate-slide-in-right' : ''
              }`}
            >
              <h3 className="font-serif text-2xl font-bold mb-6">Informacion de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">WhatsApp</p>
                    <p className="text-primary-foreground/80">+54 11 4140-1840</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Ubicacion</p>
                    <p className="text-primary-foreground/80">Tristan Suarez, Provincia de Buenos Aires</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Horario de atencion</p>
                    <p className="text-primary-foreground/80">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-primary-foreground/80">Sabados: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-secondary rounded-2xl p-8 border border-border opacity-0 ${
                infoVisible ? 'animate-slide-in-right animate-delay-200' : ''
              }`}
            >
              <h4 className="font-serif text-xl font-bold text-foreground mb-4">Compra minima</h4>
              <p className="text-muted-foreground mb-4">
                Para pedidos mayoristas, consultar la compra minima.
              </p>
              <p className="text-muted-foreground">
                Aceptamos transferencia, efectivo y Mercado Pago.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
