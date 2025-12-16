// Configuração centralizada do WhatsApp
const WHATSAPP_NUMBER = '5511999999999' // Substituir pelo número real

const MESSAGES = {
  hero: 'Olá! Gostaria de solicitar um orçamento personalizado.',
  projetos: 'Olá! Quero um projeto assim. Gostaria de mais informações.',
  depoimentos: 'Olá! Quero ter essa experiência. Como posso agendar?',
  ctaFinal: 'Olá! Gostaria de agendar uma visita ao showroom.',
  whatsappButton: 'Olá! Gostaria de solicitar um orçamento personalizado.',
}

export const getWhatsAppUrl = (section = 'whatsappButton') => {
  const message = encodeURIComponent(MESSAGES[section] || MESSAGES.whatsappButton)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

export { WHATSAPP_NUMBER, MESSAGES }

