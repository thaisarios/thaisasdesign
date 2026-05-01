# Portfolio thaisas.com - Thaisa Shalders, Product Designer

## Conceito

Um site-portfolio irreverente, colorido e com personalidade forte. A experiencia sera imersiva, com scroll vertical revelando cada projeto como uma historia. O tom visual mistura ousadia (inspirado no Idyllic e Kawe.ski) com transicoes fluidas e scroll-driven (inspirado no Jordan Gilroy e Daniel Gamble).

## Paleta e estilo visual

- Fundo com cores vibrantes que mudam por secao (nao tudo branco, nao tudo preto)
- Tipografia grande e bold para titulos, com uma fonte display expressiva
- Accent colors marcantes (combinacoes ousadas tipo roxo + laranja, ou rosa + verde)
- Elementos graficos decorativos (formas geometricas, stickers, badges irreverentes)
- Cursor personalizado como detalhe interativo
- Animacoes suaves no scroll (fade-in, parallax sutil, scale)

## Estrutura do site (single page com scroll)

### 1. Hero / Abertura

- Nome "Thaisa Shalders" com tipografia grande e expressiva (deixar THAISA S em uma cor e HALDERS em outra - mas SHALDERS junto)
- Subtitulo "Product Designer" com tom irreverente (uma frase com personalidade)
- Animacao de entrada (letras aparecendo, ou elemento interativo)
- Marquee horizontal continuo com skills/tags (tipo "UX/UI - Product Design - Figma - Inovacao")

### 2. Projetos (Scroll vertical imersivo)

Cada projeto ocupa uma secao full-screen ou quase, com scroll revelando o proximo. Para cada projeto: (não precisa ser o projeto todo, de repente só highlights e clicando vai pra uma tela com todo o projeto / processo)

- Imagem/thumbnail grande de destaque
- Nome do projeto em destaque
- Descricao curta (1-2 frases)
- Tags (role, ferramentas)
- Botao "Ver case completo" (linkando para Behance ou pagina interna futura)
- Transicao suave entre projetos (fade + slide)

**Projetos:**

1. **PDF Cinema** - Portfolio website para Pedro Ferreira (assistente de direcao/videomaker). Site: pdfcinema.com
2. **CSC Digital** - Caderneta de Saude da Crianca, app mobile de saude publica
3. **Filmes Desmontados** - Portfolio website para produtora. Site: filmesdesmontados.com
4. **Projeto em andamento** - Placeholder com "Em breve" / "Coming soon" estilizado

### 3. Sobre mim

- Foto ou ilustracao (placeholder por enquanto)
- Bio curta e pessoal, com tom descontraido
- Cards com skills/expertises principais
- Links para LinkedIn, Behance, etc.

### 4. Processo de Design

Inspirado no Daniel Gamble, uma secao mostrando seu processo de trabalho em etapas numeradas:

1. Pesquisa & Descoberta
2. Estrategia & Arquitetura
3. Design & Prototipacao
4. Testes & Iteracao

Cada etapa com icone, titulo e descricao curta, revelando com animacao no scroll.

### 5. Contato / Footer

- CTA forte ("Bora conversar?", "Vamos criar algo juntos?")
- Email clicavel
- Links sociais (LinkedIn, Behance, etc.)
- Footer minimalista com copyright

## Interacoes e animacoes

- Scroll-driven animations: elementos aparecem conforme o usuario rola
- Hover effects nos cards de projeto (scale sutil, cor muda)
- Cursor customizado (circulo que muda de cor/tamanho ao passar sobre elementos)
- Marquee/ticker continuo com palavras-chave
- Transicoes suaves entre secoes com mudanca de cor de fundo
- Numeros dos projetos ([01], [02]...) como nos sites Jordan Gilroy

## Responsividade

- Desktop-first com adaptacao completa para tablet e mobile
- No mobile: projetos empilhados verticalmente, tipografia ajustada
- Menu hamburger no mobile se necessario

## Conteudo placeholder

- Textos de bio e processo serao placeholders editaveis
- Imagens dos projetos: usaremos thumbnails coloridos de placeholder ate voce fornecer as imagens finais
- 4o projeto com visual "coming soon" estilizado

## Detalhes tecnicos

- React + Tailwind CSS + Framer Motion para animacoes
- Scroll-driven animations com Intersection Observer
- Fontes: combinacao de fonte display bold (ex: Space Grotesk ou similar) + corpo clean
- Performance otimizada com lazy loading de imagens
- Meta tags para SEO basico (titulo, descricao, og:image)