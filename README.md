# 🛋️ Losekann Planejados - Landing Page

Landing page premium para Losekann Planejados, empresa especializada em móveis planejados com 28 anos de tradição em Suzano - SP.

## 🚀 Tecnologias

- **React 19.2.0** - Framework JavaScript
- **Vite 7.2.4** - Build tool e dev server
- **Tailwind CSS v3.4.17** - Framework CSS utility-first (versão estável)
- **PostCSS 8.4.49** - Processador CSS
- **Autoprefixer 10.4.20** - Adiciona prefixos de vendor automaticamente

## 📦 Instalação

```bash
# Instalar dependências
npm install
```

## 🛠️ Comandos Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Linter
npm run lint
```

## ✅ Configuração Tailwind CSS v3

Este projeto utiliza **Tailwind CSS v3.4.17** (versão estável) ao invés da v4, seguindo os aprendizados documentados em `APRENDIZADODEV_Log.md`.

### Por que Tailwind v3?

- ✅ Mais estável e amplamente testado
- ✅ Funciona perfeitamente com Vite 7.2.4
- ✅ Sem problemas de condição de corrida no modo dev
- ✅ Configuração tradicional e conhecida
- ✅ Todas as classes premium funcionam corretamente

### Estrutura de Configuração

- **`tailwind.config.js`**: Configuração do Tailwind com animações customizadas
- **`postcss.config.js`**: Configuração do PostCSS com Tailwind e Autoprefixer
- **`vite.config.js`**: Configuração do Vite com suporte a PostCSS
- **`src/index.css`**: Diretivas do Tailwind (`@tailwind base/components/utilities`)

### Animações Customizadas Disponíveis

- `animate-pulse-slow`: Pulse suave e lento (3s)
- `animate-shimmer`: Efeito shimmer (brilho que atravessa)
- `animate-float`: Animação de flutuação
- `animate-fade-in-up`: Fade in com movimento para cima

## 📁 Estrutura do Projeto

```
losekann-planejados/
├── public/                    # Arquivos estáticos (imagens, etc)
├── src/
│   ├── components/           # Componentes React organizados
│   │   ├── Header.jsx        # Cabeçalho com navegação
│   │   ├── Hero.jsx          # Dobra 1 - Autoridade Imediata
│   │   ├── Autoridade.jsx    # Dobra 2 - Autoridade + Mosaico
│   │   ├── Projetos.jsx      # Dobra 3 - Galeria por Ambiente
│   │   ├── Depoimentos.jsx   # Dobra 4 - Prova Social
│   │   ├── CTAFinal.jsx      # Dobra 5 - Chamada Final + Localização
│   │   ├── Footer.jsx        # Rodapé
│   │   └── WhatsAppButton.jsx # Botão flutuante WhatsApp
│   ├── config/               # Configurações centralizadas
│   │   └── whatsapp.js       # Configuração WhatsApp (número, mensagens)
│   ├── App.jsx               # Componente principal (orquestrador)
│   ├── main.jsx              # Entry point
│   └── index.css             # Estilos globais + Tailwind
├── index.html                # HTML principal
├── package.json              # Dependências
├── vite.config.js            # Configuração do Vite
├── tailwind.config.js        # Configuração do Tailwind
├── postcss.config.js         # Configuração do PostCSS
└── README.md                 # Este arquivo
```

## 🧩 Componentes Criados

### Estrutura Modular
Todos os componentes estão separados e organizados por seção:

- **Header.jsx**: Navegação fixa com logo e links
- **Hero.jsx**: Primeira dobra com headline, subheadline e CTA principal
- **Autoridade.jsx**: Segunda dobra com mosaico de 6 projetos
- **Projetos.jsx**: Terceira dobra com galeria por ambiente (Dormitório, Cozinha, Banheiro)
- **Depoimentos.jsx**: Quarta dobra com cards de depoimentos
- **CTAFinal.jsx**: Quinta dobra com localização, mapa e CTA final
- **Footer.jsx**: Rodapé com informações de contato
- **WhatsAppButton.jsx**: Botão flutuante sempre visível

### Configuração Centralizada
- **src/config/whatsapp.js**: Número e mensagens do WhatsApp em um único lugar

## 📚 Documentação

- **Branding**: Ver `LOSEKANN_BRANDING.md` para informações sobre o projeto
- **Aprendizados**: Ver `APRENDIZADODEV_Log.md` para padrões e soluções de projetos anteriores

## 🎯 Status do Projeto

1. ✅ Configuração inicial (React + Vite + Tailwind v3)
2. ✅ Estrutura de componentes criada
3. ✅ Todas as 5 dobras implementadas
4. ✅ Header, Footer e WhatsAppButton criados
5. ✅ Configuração centralizada do WhatsApp
6. ⏳ Adicionar imagens reais nos componentes
7. ⏳ Configurar número de WhatsApp real
8. ⏳ Ajustar mapa do Google Maps com coordenadas corretas
9. ⏳ Personalizar paleta de cores (se necessário)
10. ⏳ Adicionar depoimentos reais

---

**Status:** ✅ Projeto configurado e pronto para desenvolvimento

