function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/losekann-logo-tipografia-preta.png"
              alt="Losekann Planejados"
              className="h-8 md:h-10 lg:h-12 object-contain"
            />
          </button>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#projetos"
              className="text-neutral-700 hover:text-losekann-dourado transition-colors font-medium"
            >
              Projetos
            </a>
            <a
              href="#depoimentos"
              className="text-neutral-700 hover:text-losekann-dourado transition-colors font-medium"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-neutral-700 hover:text-losekann-dourado transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          {/* CTA Mobile */}
          <div className="md:hidden">
            <a
              href="#contato"
              className="px-4 py-2 bg-losekann-dourado text-white rounded-lg text-sm font-medium hover:bg-losekann-dourado-hover transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

