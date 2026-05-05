## 1. Ajuste rápido — thumbnail Filmes Desmontados

Em `src/components/ProjectSection.tsx`, no bloco `coverNative` do card 03, reduzir o tamanho do título e ajustar o letterbox pra dar mais respiro:

- `text-3xl md:text-5xl` → `text-2xl md:text-4xl`
- `leading-[0.95]` mantém
- aumentar padding lateral em telas médias (`px-6 md:px-10`)
- reduzir um pouco as barras pretas (`h-[12%]` → `h-[10%]`) pra compensar visualmente

Sem mexer em mais nada do card.

---

## 2. Novo case: .navi (`/projetos/navi`)

Esse case é diferente dos outros três — não é "trabalho freela pra cliente", é **a sua sociedade**. A página precisa transmitir isso: dois papéis (design + dev), um produto compartilhado, ainda em construção. O tom deve ser mais "manifesto / declaração" do que "estudo de caso fechado".

### Análise do site referência (navy-portfolio.vercel.app)

- **Estética**: dark navy bem escuro, tipografia serifada grande no hero (display serif), accent verde neon (#3DFF8C aprox.) + magenta (#E940A8 aprox.) nos detalhes do logo
- **Estrutura**: hero → serviços → tecnologias → porque escolher → sobre nós (missão/visão/valores + 2 perfis: Thaisa e Luciana) → trabalhos → contato → footer
- **Posicionamento**: "experiências digitais acessíveis e intuitivas. Interfaces funcionais e inclusivas, pensadas para todos os dispositivos"
- **Diferencial**: design + dev andando juntos, processo colaborativo, foco em acessibilidade

### Thumbnail (card na home)

Nativa em CSS, mesma lógica das outras. Proposta:

```text
┌─────────────────────────────┐
│                             │
│   .navi                     │ ← logo-tipo (ponto magenta + texto + i verde)
│                             │
│   ─────                     │
│   sociedade · em construção │
│                             │
│   design × dev              │ ← em destaque
│                             │
└─────────────────────────────┘
fundo: navy escuro #0A0F1F
accent: verde #3DFF8C + magenta #E940A8 (replicando o logo .navi)
```

A ideia é a thumbnail já anunciar que é algo diferente — uma "marca" e não um projeto-cliente.

### Estrutura da página

```text
HERO
  [04] · .navi · sociedade
  H1: "Quando design e dev sentam na mesma mesa."
  sub: .navi nasceu da nossa vontade — Thaisa (design) + Luciana (dev) —
       de oferecer experiências digitais inteiras, sem o vai-e-vem clássico
       entre quem desenha e quem implementa.
  badge: "Em construção · 2026"

META GRID (4 colunas)
  Sociedade: Thaisa Shalders + Luciana Vivarelli
  Papel: Co-fundadora · Product Designer
  Frentes: UX/UI · Web · Sistemas · Design Systems
  Status: MVP do site no ar (navy-portfolio.vercel.app)

MANIFESTO (texto principal, 2-3 parágrafos curtos)
  Título: "Por que .navi"
  Texto: bloco curto sobre o problema que vocês resolvem (design e dev
  frequentemente trabalham desconectados, isso gera retrabalho, fricção,
  produtos meia-boca) e a aposta de vocês (uma dupla pequena, integrada,
  com mesma régua de qualidade do começo ao fim).

DUPLA (2 cards lado a lado — replicando o "sobre nós" do site)
  ┌──────────────────────┐   ┌──────────────────────┐
  │ Thaisa               │   │ Luciana              │
  │ Product Designer     │   │ Full-Stack Developer │
  │ UX/UI · pesquisa     │   │ React · Flutter      │
  │ design systems       │   │ Python · Node        │
  │ "pontes entre        │   │ "interfaces que      │
  │  ideias e pessoas"   │   │  unem estética e     │
  │                      │   │  usabilidade"        │
  └──────────────────────┘   └──────────────────────┘

O QUE FAZEMOS (grid de serviços, 3 colunas × 2 linhas)
  - UX/UI Design (web, mobile, sistemas)
  - Desenvolvimento full-stack (React, Vue, Node, Python)
  - Pesquisa e prototipagem
  - Design systems e guias visuais
  - Performance e SEO técnico
  - Manutenção e evolução contínua

LINGUAGEM VISUAL (bloco escuro, mesma estética dos outros cases)
  Texto curto: "Navy profundo, verde elétrico e magenta — uma paleta
  que respira tecnologia sem deixar de lado personalidade."
  4 swatches: #0A0F1F (navy) · #3DFF8C (verde) · #E940A8 (magenta) · #F4F4F5 (off-white)
  Tipografia: serif display no título + sans clean no corpo
  (refletindo o site real, sem precisar carregar a mesma fonte —
  posso usar as fontes display que já existem no projeto pra evocar
  o mesmo espírito)

PROCESSO (timeline 4 passos, replica o "como trabalhamos")
  01 Conversa → entender o problema, alinhar escopo
  02 Pesquisa & estratégia → user research, arquitetura
  03 Design + Dev em paralelo → protótipo navegável + base técnica
  04 Entrega & evolução → handoff zero, manutenção contínua

CTA FINAL
  H: "Quer ver o que estamos construindo?"
  Botões: Site .navi (navy-portfolio.vercel.app) · Voltar pro portfólio
```

### Card na home (Project 04)

Hoje o card 04 é "Em breve" (`isComingSoon: true`). Substituir esse pelo card real do .navi, e pode ficar como **último** mesmo (faz sentido narrativamente — os 3 primeiros são clientes, o 4º é o "agora estamos fazendo isso").

Manter a estrutura de "Em breve" não é mais necessária, mas se você quiser manter um quinto card "Em breve" pra próximos trabalhos, é só dizer. (pode ser! pra dar a ideia de sempre estarmos desenvolvendo algo novo)

### Pontos a confirmar

1. Prefere que o card .navi vire o **04** (substituindo o "Em breve") ou que entre como **04** e o "Em breve" vá pra **05**? va para o 5, nesse pode ser "Em andamento"
2. Está ok usar a paleta navy/verde/magenta direto na página, ou quer manter a estética dark/roxo já existente do seu portfólio e só citar a paleta do .navi como conteúdo dentro de um bloco? Manter direto na pagina, acho que conversa (se não a gente muda isso posteriormente)
3. O texto que escrevi no manifesto e nos perfis é uma proposta — quer escrever junto agora ou prefere que eu coloque um placeholder honesto e você revisa depois? Pode deixar como você escreveu por enquanto, depois vamos revisar todos os textos de todo o site.

---

## Detalhes técnicos

- **Arquivos novos**: `src/pages/ProjectNavi.tsx`
- **Arquivos editados**:
  - `src/components/ProjectSection.tsx` — ajuste do título Filmes Desmontados + novo card .navi (com `coverNative` + `caseLink`) substituindo o card "Em breve"
  - `src/App.tsx` — registrar rota `/projetos/navi`
- **Sem novos assets de imagem** (thumbnail e paleta são puro CSS); se quiser depois adicionar screenshots reais do site .navi, dá pra incluir num próximo passo
- **Sem dependências novas**; reutilizar `framer-motion` e os helpers visuais já existentes nos outros cases