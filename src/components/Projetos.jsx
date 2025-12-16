import { useState } from 'react'
import { getWhatsAppUrl } from '../config/whatsapp'
import ImageModal from './ImageModal'
import { FiArrowRight } from 'react-icons/fi'

function Projetos() {
  const [ambienteSelecionado, setAmbienteSelecionado] = useState('dormitorio')
  const [selectedImage, setSelectedImage] = useState(null)

  // Dados dos projetos por ambiente
  const projetosPorAmbiente = {
    dormitorio: [
      { id: 1, src: '/projetos/dormitorio/dormitorio1.jpg', alt: 'Dormitório 1' },
      { id: 2, src: '/projetos/dormitorio/dormitorio2.jpg', alt: 'Dormitório 2' },
      { id: 3, src: '/projetos/dormitorio/dormitorio3.jpg', alt: 'Dormitório 3' },
      { id: 4, src: '/projetos/dormitorio/dormitorio4.jpg', alt: 'Dormitório 4' },
    ],
    cozinha: [
      { id: 1, src: '/projetos/cozinha/cozinha1.jpg', alt: 'Cozinha 1' },
      { id: 2, src: '/projetos/cozinha/cozinha2.jpg', alt: 'Cozinha 2' },
      { id: 3, src: '/projetos/cozinha/cozinha3.jpg', alt: 'Cozinha 3' },
      { id: 4, src: '/projetos/cozinha/cozinha4.png', alt: 'Cozinha 4' },
    ],
    banheiro: [
      { id: 1, src: '/projetos/banheiro/banheiro1.jpg', alt: 'Banheiro 1' },
      { id: 2, src: '/projetos/banheiro/banheiro2.png', alt: 'Banheiro 2' },
      { id: 3, src: '/projetos/banheiro/banheiro3.png', alt: 'Banheiro 3' },
      { id: 4, src: '/projetos/banheiro/banheiro4.png', alt: 'Banheiro 4' },
    ],
  }

  const handleCTAClick = () => {
    window.open(getWhatsAppUrl('projetos'), '_blank')
  }

  const handleImageClick = (projeto) => {
    setSelectedImage(projeto)
  }

  return (
    <section id="projetos" className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50/30 to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Headline */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-losekann-preto mb-4 font-display">
            Projetos reais. Ambientes prontos. Resultado final.
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
            Cozinhas, dormitórios, salas, home offices, lavanderias e ambientes completos — sempre sob medida para cada cliente.
          </p>
        </div>

        {/* Seleção de Ambiente */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          <button
            onClick={() => setAmbienteSelecionado('dormitorio')}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 ${
              ambienteSelecionado === 'dormitorio'
                ? 'bg-losekann-dourado text-white shadow-lg'
                : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
            }`}
          >
            Dormitório
          </button>
          <button
            onClick={() => setAmbienteSelecionado('cozinha')}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 ${
              ambienteSelecionado === 'cozinha'
                ? 'bg-losekann-dourado text-white shadow-lg'
                : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
            }`}
          >
            Cozinha
          </button>
          <button
            onClick={() => setAmbienteSelecionado('banheiro')}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 ${
              ambienteSelecionado === 'banheiro'
                ? 'bg-losekann-dourado text-white shadow-lg'
                : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
            }`}
          >
            Banheiro
          </button>
        </div>

        {/* Galeria do Ambiente Selecionado */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {projetosPorAmbiente[ambienteSelecionado].map((projeto) => (
            <div
              key={projeto.id}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleImageClick(projeto)}
            >
              <img
                src={projeto.src}
                alt={projeto.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay sutil no hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Premium 3D */}
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
            <span className="relative z-10">Quero um projeto assim</span>
          </button>
        </div>
      </div>

      {/* Modal de Imagem */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </section>
  )
}

export default Projetos

