import { useState } from 'react'
import ImageModal from './ImageModal'

function Autoridade() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Array de 6 imagens para o mosaico
  const projetos = [
    { id: 1, src: '/projeto1.jpg', alt: 'Projeto Losekann 1' },
    { id: 2, src: '/projeto2.jpg', alt: 'Projeto Losekann 2' },
    { id: 3, src: '/projeto3.jpg', alt: 'Projeto Losekann 3' },
    { id: 4, src: '/projeto4.jpg', alt: 'Projeto Losekann 4' },
    { id: 5, src: '/projeto5.jpg', alt: 'Projeto Losekann 5' },
    { id: 6, src: '/projeto6.jpg', alt: 'Projeto Losekann 6' },
  ]

  const handleImageClick = (projeto) => {
    setSelectedImage(projeto)
  }

  const handleScroll = (e) => {
    const container = e.target
    const scrollLeft = container.scrollLeft
    const cardWidth = container.querySelector('[data-index]')?.offsetWidth || 0
    const gap = 16 // gap-4 = 1rem = 16px
    const newIndex = Math.round(scrollLeft / (cardWidth + gap))
    setCurrentIndex(Math.min(newIndex, projetos.length - 1))
  }

  return (
    <section id="autoridade" className="py-16 md:py-24 bg-neutral-50 relative overflow-hidden">
      {/* Padrão geométrico sutil - alinhado com conceito de "planejados" */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(45deg, transparent 30%, rgba(204, 161, 71, 0.03) 30%, rgba(204, 161, 71, 0.03) 50%, transparent 50%, transparent 80%, rgba(204, 161, 71, 0.03) 80%, rgba(204, 161, 71, 0.03) 100%)',
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-losekann-preto mb-4 font-display">
            28 anos criando ambientes que unem estética, funcionalidade e tranquilidade.
          </h2>
        </div>

        {/* Mobile: Carrossel Horizontal */}
        <div className="md:hidden relative">
          <div
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4"
            onScroll={handleScroll}
          >
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {projetos.map((projeto, index) => (
                <div
                  key={projeto.id}
                  data-index={index}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <div
                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
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
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores Mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {projetos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = document.querySelector('[onScroll]')
                  const cardWidth = container?.querySelector('[data-index]')?.offsetWidth || 0
                  const gap = 16
                  container?.scrollTo({
                    left: index * (cardWidth + gap),
                    behavior: 'smooth',
                  })
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-losekann-dourado'
                    : 'w-2 bg-neutral-300'
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6">
          {projetos.map((projeto) => (
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

export default Autoridade

