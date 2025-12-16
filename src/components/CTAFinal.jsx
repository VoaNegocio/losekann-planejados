import { useState } from 'react'
import { getWhatsAppUrl } from '../config/whatsapp'
import ImageModal from './ImageModal'
import { FiArrowRight } from 'react-icons/fi'

function CTAFinal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCTAClick = () => {
    window.open(getWhatsAppUrl('ctaFinal'), '_blank')
  }

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-losekann-preto mb-4 font-display">
            Seu projeto começa aqui. E tem endereço.
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Visite nosso showroom e veja de perto materiais, acabamentos e soluções que fazem a diferença no resultado final.
            <br />
            <br />
            Nada substitui conversar com quem entende, ver os detalhes e planejar com calma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Foto da Fachada */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={handleImageClick}
            >
              <img
                src="/foto-fachada-losekann.jpeg"
                alt="Fachada da Losekann Planejados - Rua Sete de Setembro, 148, Suzano/SP"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay sutil no hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-losekann-preto">Clique para ampliar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informações e Mapa */}
          <div className="space-y-6">
            {/* Endereço */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-neutral-200/50">
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
                📍 Endereço
              </h3>
              <p className="text-lg text-neutral-700 mb-2">
                Rua Sete de Setembro, 148
              </p>
              <p className="text-lg text-neutral-700">
                Suzano/SP
              </p>
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 cursor-pointer group hover:shadow-xl transition-all duration-300 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6991145216316!2d-46.314519000000004!3d-23.543322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7b631a8dec4f%3A0xdd0cc706f7aa7dc1!2sLosekann%20M%C3%B3veis%20Planejados!5e0!3m2!1spt-BR!2sbr!4v1765900703262!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Losekann Planejados"
              ></iframe>
              {/* Overlay clicável que cobre todo o mapa */}
              <a
                href="https://www.google.com/maps/place/Losekann+M%C3%B3veis+Planejados/@-23.543322,-46.314519,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce7b631a8dec4f:0xdd0cc706f7aa7dc1!8m2!3d-23.543322!4d-46.314519!16s%2Fg%2F11c5q8v5qj?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/5 transition-colors duration-300"
                aria-label="Abrir localização no Google Maps"
              >
                {/* Mensagem no hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg pointer-events-none">
                  <p className="text-sm font-medium text-losekann-preto">Clique para abrir no Google Maps</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleCTAClick}
            className="group btn-3d-premium inline-flex items-center gap-3 bg-losekann-dourado hover:bg-losekann-dourado-hover text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg relative overflow-hidden animate-pulse-slow"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer"></span>
            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-losekann-dourado/0 via-losekann-dourado/50 to-losekann-dourado/0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-2xl animate-pulse"></span>
            <FiArrowRight className="relative z-10 w-5 h-5" />
            <span className="relative z-10">Agendar visita ao showroom</span>
          </button>
        </div>
      </div>

      {/* Modal de Imagem */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="/foto-fachada-losekann.jpeg"
        imageAlt="Fachada da Losekann Planejados - Rua Sete de Setembro, 148, Suzano/SP"
      />
    </section>
  )
}

export default CTAFinal

