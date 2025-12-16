import { useState } from 'react'
import { getWhatsAppUrl } from '../config/whatsapp'
import { FiArrowRight } from 'react-icons/fi'

function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const depoimentos = [
    {
      id: 1,
      texto: 'Desde o primeiro atendimento até a montagem, tudo foi exatamente como combinado.',
      autor: 'Cliente Satisfeito',
    },
    {
      id: 2,
      texto: 'Qualidade, prazo e acabamento impecável.',
      autor: 'Cliente Satisfeito',
    },
    {
      id: 3,
      texto: 'Profissionalismo e atenção aos detalhes em cada etapa do projeto.',
      autor: 'Cliente Satisfeito',
    },
  ]

  const handleCTAClick = () => {
    window.open(getWhatsAppUrl('depoimentos'), '_blank')
  }

  const handleScroll = (e) => {
    const container = e.target
    const scrollLeft = container.scrollLeft
    const firstCard = container.querySelector('[data-index="0"]')
    const cardWidth = firstCard?.offsetWidth || 0
    const gap = 24 // gap-6 = 1.5rem = 24px
    const newIndex = Math.round(scrollLeft / (cardWidth + gap))
    setCurrentIndex(Math.min(newIndex, depoimentos.length - 1))
  }

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 via-losekann-dourado/5 to-neutral-50 relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-losekann-dourado/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-losekann-dourado/3 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-losekann-preto mb-4 font-display">
            Quem faz, recomenda. Quem contrata, volta.
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
            Ao longo de quase três décadas, a Losekann construiu algo que nenhuma promoção compra: confiança.
          </p>
        </div>

        {/* Mobile: Carrossel Horizontal */}
        <div className="md:hidden relative mb-12">
          <div
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4"
            onScroll={handleScroll}
          >
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {depoimentos.map((depoimento, index) => (
                <div
                  key={depoimento.id}
                  data-index={index}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <div className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-2xl shadow-lg border border-neutral-200/50 h-full">
                    {/* Estrelas */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    {/* Texto do Depoimento */}
                    <p className="text-neutral-700 text-base leading-relaxed mb-6">
                      "{depoimento.texto}"
                    </p>

                    {/* Autor */}
                    <p className="text-neutral-500 text-sm font-medium">
                      — {depoimento.autor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores Mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = document.querySelector('#depoimentos [onScroll]')
                  const firstCard = container?.querySelector('[data-index="0"]')
                  const cardWidth = firstCard?.offsetWidth || 0
                  const gap = 24
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
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {depoimentos.map((depoimento) => (
            <div
              key={depoimento.id}
              className="bg-gradient-to-br from-neutral-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-neutral-200/50"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Texto do Depoimento */}
              <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-6">
                "{depoimento.texto}"
              </p>

              {/* Autor */}
              <p className="text-neutral-500 text-sm font-medium">
                — {depoimento.autor}
              </p>
            </div>
          ))}
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
            <span className="relative z-10">Quero ter essa experiência</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Depoimentos

