## 1. Novo case: Filmes Desmontados (`/projetos/filmes-desmontados`)

Mesma estrutura visual dos outros dois cases (hero, meta grid, blocos alternados, KPIs, CTA), mas com **tom mais enxuto** — você mesma falou que é o mais simples do portfólio. A ideia é não inflar com texto desnecessário e deixar o trabalho respirar.

### Assets a importar

Copiar do upload pra `src/assets/projects/filmes-desmontados/`:

- `desktop1.png` — hero com vídeo reel (Murilo Barbosa Simões)
- `desktop2.png` — página de direção (case "Menino de Areia")
- `desktop3.png` — sobre + contato (com a ilustração icônica do logo)
- `mobile1.png` — home mobile
- `mobile2.png` — listagem mobile

### Thumbnail (card 03 na home)

Você não tem capa pronta. Duas opções nativas, sem precisar de imagem:

```text
Opção A — "letterbox cinema"
┌─────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ ← barra preta superior
│                             │
│   FILMES                    │
│   DESMONTADOS               │ ← Syne bold, off-white sobre bege
│   ─────                     │
│   portfólio · 2025          │ ← Space Grotesk em laranja
│                             │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ ← barra preta inferior
└─────────────────────────────┘
fundo: bege quente (#F0EAD6 aprox., a cor do site real)
```

**Recomendação:** Opção A — limpa, respeita a paleta real (bege + preto + laranja), não compete com as outras capas e funciona como "moldura cinematográfica" que combina com o conceito do estúdio. Construída em puro Tailwind/CSS — zero asset. (Dá pra trocar por uma imagem depois quando você desenhar uma capa real.)

### Estrutura da página

```text
HERO
  [03] · Filmes Desmontados
  H1: "Direção em primeiro plano."
  sub: Site-portfólio para o estúdio Filmes Desmontados — onde
       cada projeto é um corte, e cada categoria, um plano-sequência.
  imagem: desktop1.png (hero com reel)

META GRID (4 colunas)
  Cliente: Filmes Desmontados (Murilo Barbosa Simões)
  Papel: UX/UI Designer
  Entregas: UX/UI · Web Design · Identidade Digital
  Ano: 2025

DESAFIO (texto curto, 2 parágrafos)
  Título: "Apresentar todos seus projetos em um só lugar"
  Texto: trabalho audiovisual espalhado entre redes e WeTransfers;
         faltava um endereço único, sóbrio, que separasse direção
         de assistência de direção sem virar dois sites.

MOCKUP DESKTOP FULL
  desktop2.png + caption "Página de Direção — case Menino de Areia"

ESTRUTURA / IA (2 colunas)
  Esquerda: texto + chips ["Sobre", "Direção", "Assistente de Direção", "Contato"]
  Direita: desktop3.png
  Texto: três frentes com a mesma hierarquia, sem hierarquizar uma
         função sobre a outra — Murilo é diretor E assistente, e o site
         respeita isso.

LINGUAGEM VISUAL (bloco escuro + paleta nativa)
  Mesmo padrão do bloco "Linguagem visual" do PDF Cinema, com:
  - 4 swatches (bege, preto, laranja vibrante, off-white) em CSS puro
  - tipografia: Syne display + sans serif clean
  - frase: "Bege como película, laranja como assinatura. O site
           parece um catálogo de festival — e é essa a intenção."

RESPONSIVO (mobile)
  Grid com mobile1.png e mobile2.png lado a lado, caption
  "Mesma narrativa, do cinema ao bolso."

RESULTADOS (3 KPIs)
  - "1 endereço" → centralizou portfólio antes espalhado em redes
  - "2 papéis" → direção e assistência convivendo sem hierarquia
  - "100% leve" → site estático, carregamento instantâneo, SEO limpo

CTA FINAL
  H: "Quer ver no ar?"
  Botões: filmesdesmontados.com · Behance · Próximo case
```

### Roteamento e card na home

- `src/App.tsx`: adicionar rota `/projetos/filmes-desmontados`.
- `src/components/ProjectSection.tsx`: card 03 ganha `caseLink` e a "thumbnail nativa" Opção A. Como o componente atual espera `coverImage` (`<img>`), vou adicionar suporte a um campo opcional `coverNative?: ReactNode` que renderiza no lugar do `<img>` quando presente. Sem quebrar os outros cards.

---

## 2. Bloco "Design & Paleta" na página PDF Cinema

Inserir uma nova seção entre **"Linguagem visual"** (atual) e **"Responsividade"** — porque a seção atual fala do conceito visual, e essa nova traz a **execução** (paleta, tipografia, componentes). Mesma estética dos cards translúcidos do site.

### Conteúdo

```text
SISTEMA VISUAL
H2: "Cinema também tem design system."

[ Card paleta ]                  [ Card tipografia + componentes ]
┌──────────────────────────┐    ┌──────────────────────────────┐
│ Paleta                   │    │ Tipografia                   │
│ ▓ #0A0A0F  Preto cena    │    │ Sora — display, técnica,     │
│ ▓ #FF2E92  Magenta neon  │    │ ar de roteiro digitado.      │
│ ▓ #00D4FF  Azul lab      │    │                              │
│ ▓ #F4F4F5  Off-white     │    │ [ Botão Primário ]           │
│ ▓ #1F1F26  Carvão        │    │ [ Botão Secundário ]         │
│                          │    │ ● tag · ● tag                │
└──────────────────────────┘    └──────────────────────────────┘
```

- Paleta: 5 swatches em divs com `background` direto (HEX baseados no que já está nas cores do case — magenta/azul). Label do nome + hex em `font-mono-alt`.
- Componentes: mini-vitrine com 1 botão primário (rosa neon), 1 secundário (outline azul), 2 chips. Renderizado em React puro.
- Texto curto entre H2 e os cards: "Cinco cores e uma família tipográfica seguraram um portfólio inteiro. O sistema é pequeno de propósito — pra cada decisão visual ter peso de intenção, como na decupagem de um filme."

### Edição

Apenas `src/pages/ProjectPdfCinema.tsx`. Sem novos imports/assets.

---

## Detalhes técnicos

- Arquivos novos: `src/pages/ProjectFilmesDesmontados.tsx` + 5 imagens em `src/assets/projects/filmes-desmontados/`.
- Arquivos editados: `src/App.tsx`, `src/components/ProjectSection.tsx`, `src/pages/ProjectPdfCinema.tsx`.
- Sem novas dependências.
- Componente da thumbnail nativa fica inline no `ProjectSection.tsx` (não justifica arquivo separado).
- `framer-motion` reutilizando o `fadeUp` já existente.