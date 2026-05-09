## Objetivo

Adicionar um novo case do app **HabitPet** (tamagochi de hábitos) ao portfólio, marcado como "em desenvolvimento", com página de case dedicada e imagens reais do projeto.

## Contexto descoberto

- O projeto referenciado é **Habit Pet** (`goal-pet-quest.lovable.app`), estética pixel/retrô (rosa, ciano, verde lima), ovo/blob como pet inicial.
- Possui 15 assets já prontos (pets em estágios, itens, decorações).
- Estrutura de cases existente: `ProjectXxx.tsx` em `src/pages/` + entrada em `ProjectSection.tsx` + textos em `src/i18n/translations.ts` + rota em `App.tsx`.

## Mudanças

### 1. Copiar assets do projeto Habit Pet

Copiar para `src/assets/projects/habitpet/`:

- `egg.png`, `blob-baby.png`, `blob-adult.png` (evolução do pet)
- `cat-baby.png`, `dragon-baby.png`, `dino-baby.png` (variedade da coleção)
- `acc-shades.png`, `hat-crown.png`, `decor-tv.png` (itens/loja)
- Screenshot da home do app via `fetch_website` salvo como capa.

### 2. Card na home (`ProjectSection.tsx`)

- Renumerar: HabitPet vira **05** (com badge "em desenvolvimento" + link "ver case").
- O card "Em breve" atual passa a ser **06** (ou removido — sugiro manter, vira 06). ok
- Cover nativo no estilo "janela retrô" (barra rosa + tela com ovo) puxando a paleta do app: `#FF6FB5` (rosa), `#5BE3F0` (ciano), `#B8FF5B` (verde).
- Botão "Ver case" leva para `/projetos/habitpet`. Sem link externo (em desenvolvimento), mas com botão opcional "ver protótipo" para o app publicado.

### 3. Nova página `src/pages/ProjectHabitPet.tsx`

Mesma estrutura dos outros cases (Navi como referência):

- Header fixo com voltar + kicker.
- Hero com badge "EM DESENVOLVIMENTO" pulsante, H1 "Transforme hábitos em **um pet feliz**.", parágrafo de intro.
- Faixa de meta (papel, escopo, stack, status).
- Manifesto/conceito: produtividade + cuidado pessoal via tamagochi.
- Galeria de imagens com os assets copiados (grid de pets evoluindo + itens da loja + screenshot da interface).
- Seção de features: Tarefas diárias, Status do pet (fome/energia/felicidade/saúde/higiene), Loja & Coleção, XP/Streak.
- Paleta usada como tokens inline: rosa `#FF6FB5`, ciano `#5BE3F0`, verde `#B8FF5B`, fundo creme `#FFF5F8`.
- Footer com link pro app publicado e CTA "voltar aos projetos".

### 4. Rota e i18n

- Adicionar `<Route path="/projetos/habitpet" element={<ProjectHabitPet />} />` em `App.tsx`.
- Adicionar bloco `habitpet` em `translations.ts` com `subtitle/description/tags` PT+EN.
- Adicionar bloco `habitpetCase` (PT+EN) com todos os textos da página de case.

## Detalhes técnicos

- Imagens importadas via ES6 (`import egg from "@/assets/projects/habitpet/egg.png"`).
- Pixel art: `image-rendering: pixelated` nas tags `<img>` para preservar nitidez.
- Regra do projeto: H1 sem hifenização — usar `break-words` e quebras manuais quando necessário.
- Header alinhado horizontalmente seguindo padrão dos outros cases.
- Animações com `framer-motion` (`fadeUp`) no padrão existente.

## Fora do escopo

- Não vou tocar nos outros cases além de renumerar índices se necessário.
- Não vou adicionar funcionalidade real do app aqui — é apenas página de apresentação.