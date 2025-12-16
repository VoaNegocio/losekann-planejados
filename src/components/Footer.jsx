function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-losekann-preto text-neutral-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Losekann Planejados</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              28 anos criando ambientes sob medida em Suzano. Qualidade, prazo e acompanhamento do início ao fim.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-neutral-400">📍</span>{' '}
                Rua Sete de Setembro, 148 — Suzano/SP
              </p>
              <p>
                <span className="text-neutral-400">📞</span>{' '}
                <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#projetos"
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                Projetos
              </a>
              <a
                href="#depoimentos"
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="#contato"
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} Losekann Planejados. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 text-neutral-400 hover:text-white transition-colors"
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

