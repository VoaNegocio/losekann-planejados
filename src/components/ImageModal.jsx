import { useEffect } from 'react'

function ImageModal({ isOpen, onClose, imageSrc, imageAlt }) {
  // Fechar com ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Previne scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !imageSrc) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 cursor-pointer animate-fade-in-up"
      onClick={onClose}
    >
      {/* Overlay com feedback visual */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>

      {/* Container do modal */}
      <div
        className="relative max-w-7xl w-full max-h-[90vh] cursor-default animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        style={{ animationDelay: '0.1s' }}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-losekann-dourado transition-all duration-300 p-2 md:p-2.5 rounded-full hover:bg-white/20 bg-black/40 backdrop-blur-sm z-20 shadow-lg hover:scale-110"
          aria-label="Fechar modal"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Imagem */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 p-4 md:p-6 relative">
          <img
            src={imageSrc}
            alt={imageAlt || 'Imagem ampliada'}
            className="w-full h-full max-h-[85vh] object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default ImageModal

