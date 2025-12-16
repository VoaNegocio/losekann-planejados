import { useState } from 'react'
import { getWhatsAppUrl } from '../config/whatsapp'
import ImageModal from './ImageModal'
import { FiArrowRight } from 'react-icons/fi'

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCTAClick = () => {
    window.open(getWhatsAppUrl('hero'), '_blank')
  }

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  return (
    <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white via-neutral-50/30 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Conteúdo Texto */}
          <div className="space-y-6 md:space-y-8 order-1 md:order-1">
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-losekann-preto leading-tight font-display">
              Planejados sob medida, entregues em até{' '}
              <span className="text-losekann-dourado">45 dias</span>, com qualidade que impressiona
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              Há <span className="font-semibold text-losekann-dourado">28 anos</span> em Suzano, a Losekann Planejados desenvolve projetos exclusivos com padrão, prazo e acompanhamento do início ao fim.
            </p>

            {/* CTA Desktop - Visível apenas no desktop */}
            <div className="pt-4 hidden md:block">
              <button
                onClick={handleCTAClick}
                className="group btn-3d-premium inline-flex items-center gap-3 bg-losekann-dourado hover:bg-losekann-dourado-hover text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg relative overflow-hidden animate-pulse-slow"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer"></span>
                {/* Glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-losekann-dourado/0 via-losekann-dourado/50 to-losekann-dourado/0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-2xl animate-pulse"></span>
                <FiArrowRight className="relative z-10 w-5 h-5" />
                <span className="relative z-10">Solicitar orçamento personalizado</span>
              </button>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative order-2 md:order-2">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={handleImageClick}
            >
              <img
                src="/img-hero.jpg"
                alt="Móveis planejados Losekann - Projeto sob medida"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              {/* Overlay sutil no hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-losekann-preto">Clique para ampliar</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Mobile - Visível apenas no mobile, abaixo da imagem */}
          <div className="pt-4 md:hidden order-3">
            <button
              onClick={handleCTAClick}
              className="group btn-3d-premium w-full inline-flex items-center justify-center gap-3 bg-losekann-dourado hover:bg-losekann-dourado-hover text-white px-8 py-4 rounded-xl font-semibold text-base relative overflow-hidden animate-pulse-slow"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer"></span>
              {/* Glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-losekann-dourado/0 via-losekann-dourado/50 to-losekann-dourado/0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-2xl animate-pulse"></span>
              <FiArrowRight className="relative z-10 w-5 h-5" />
              <span className="relative z-10">Solicitar orçamento personalizado</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Imagem */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="/img-hero.jpg"
        imageAlt="Móveis planejados Losekann - Projeto sob medida"
      />
    </section>
  )
}

export default Hero

