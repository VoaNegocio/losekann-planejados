# 📁 Estrutura de Imagens - Losekann Planejados

## Onde Colocar as Imagens

Todas as imagens devem ser colocadas na pasta `public/` na raiz do projeto.

### 📂 Estrutura de Pastas

```
public/
├── hero-image.jpg                    # Imagem do Hero (Dobra 1)
├── fachada-loja.jpg                  # Foto da fachada da loja (Dobra 5)
├── projetos/
│   ├── projeto-1.jpg                 # Projeto 1 do mosaico (Dobra 2)
│   ├── projeto-2.jpg                 # Projeto 2 do mosaico (Dobra 2)
│   ├── projeto-3.jpg                 # Projeto 3 do mosaico (Dobra 2)
│   ├── projeto-4.jpg                 # Projeto 4 do mosaico (Dobra 2)
│   ├── projeto-5.jpg                 # Projeto 5 do mosaico (Dobra 2)
│   ├── projeto-6.jpg                 # Projeto 6 do mosaico (Dobra 2)
│   ├── dormitorio/
│   │   ├── dorm-1.jpg                # Dormitório 1
│   │   ├── dorm-2.jpg                # Dormitório 2
│   │   ├── dorm-3.jpg                # Dormitório 3
│   │   └── dorm-4.jpg                # Dormitório 4
│   ├── cozinha/
│   │   ├── coz-1.jpg                 # Cozinha 1
│   │   ├── coz-2.jpg                 # Cozinha 2
│   │   ├── coz-3.jpg                 # Cozinha 3
│   │   └── coz-4.jpg                 # Cozinha 4
│   └── banheiro/
│       ├── ban-1.jpg                 # Banheiro 1
│       ├── ban-2.jpg                 # Banheiro 2
│       ├── ban-3.jpg                 # Banheiro 3
│       └── ban-4.jpg                 # Banheiro 4
└── logo.png                          # Logo da Losekann (opcional)
```

## 📋 Checklist de Imagens Necessárias

### Dobra 1 - Hero Section
- [ ] `hero-image.jpg` - Imagem principal do hero (lateral dos textos)

### Dobra 2 - Autoridade (Mosaico)
- [ ] `projetos/projeto-1.jpg`
- [ ] `projetos/projeto-2.jpg`
- [ ] `projetos/projeto-3.jpg`
- [ ] `projetos/projeto-4.jpg`
- [ ] `projetos/projeto-5.jpg`
- [ ] `projetos/projeto-6.jpg`

### Dobra 3 - Projetos por Ambiente
- [ ] **Dormitório**: 4 imagens em `projetos/dormitorio/`
- [ ] **Cozinha**: 4 imagens em `projetos/cozinha/`
- [ ] **Banheiro**: 4 imagens em `projetos/banheiro/`

### Dobra 5 - CTA Final
- [ ] `fachada-loja.jpg` - Foto da fachada da loja

### Opcional
- [ ] `logo.png` - Logo da Losekann (para usar no Header)

## 💡 Dicas

1. **Formatos recomendados**: JPG ou PNG
2. **Otimização**: Comprima as imagens antes de adicionar (use ferramentas como TinyPNG, ImageOptim, etc.)
3. **Tamanhos sugeridos**:
   - Hero: 1200x800px ou similar
   - Mosaico: 800x800px (quadrado)
   - Galeria por ambiente: 800x800px (quadrado)
   - Fachada: 1200x800px ou similar

4. **Como referenciar no código**: 
   - As imagens em `public/` são acessadas com `/` no início
   - Exemplo: `/hero-image.jpg` ou `/projetos/projeto-1.jpg`

## ⚠️ Importante

- **NÃO** coloque imagens dentro de `src/`
- Todas as imagens devem estar em `public/`
- Os caminhos nos componentes já estão configurados corretamente
- Se uma imagem não existir, o componente mostrará um placeholder automático

