import { getWhatsAppUrl } from '../config/whatsapp'

function Depoimentos() {
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

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Headline */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-losekann-preto mb-4 font-display">
            Quem faz, recomenda. Quem contrata, volta.
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
            Ao longo de quase três décadas, a Losekann construiu algo que nenhuma promoção compra: confiança.
          </p>
        </div>

        {/* Cards de Depoimentos */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
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
            className="group inline-flex items-center gap-3 bg-losekann-dourado hover:bg-losekann-dourado-hover text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>👉</span>
            <span>Quero ter essa experiência</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Depoimentos

