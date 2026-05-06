## Ajustes de responsividade

### 1. Sobreposição PT/EN × "CASE 0X / 04" no header dos cases

**Arquivos:** `src/pages/ProjectPdfCinema.tsx`, `ProjectCscDigital.tsx`, `ProjectFilmesDesmontados.tsx`, `ProjectNavi.tsx`

O header tem 3 colunas (`justify-between`): voltar | logo | "Case 0X / 04". O `LanguageToggle` é fixo no canto direito (`top-4 right-4 md:top-6 right-6`) e cobre o "CASE 0X".

- Manter o `LanguageToggle` fixo à direita (sem mover).
- Remover o "CASE 0X / 04" do canto direito do header e reposicionar para ficar do lado do PT / BR com um pequeno respiro entre ambos
  &nbsp;

### 2. Título "Caderneta de Saúde da Criança" cortado (CSC)

**Arquivo:** `src/pages/ProjectCscDigital.tsx` (linha 46)

Atual: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl` — em telas estreitas o título quebra mal e "Caderneta" estoura.

- Reduzir a escala base e suavizar a curva: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`.
- Adicionar `break-words hyphens-auto` para evitar overflow horizontal em palavras longas.
- Aplicar a mesma escala ao h1 dos demais cases (PdfCinema, FilmesDesmontados, Navi) para manter consistência visual entre páginas.

### 3. Card "Filmes Desmontados" — sobreposição na home

**Arquivo:** `src/components/ProjectSection.tsx`

Dois problemas:

**a) Título "Filmes Desmontados" do lado esquerdo encosta/sobrepõe a thumbnail em tablet (md):**

- O grid muda para 2 colunas em `md` (≥768px) com `gap-12 md:gap-20`. Em 768–900px o título `text-7xl` é largo demais para a coluna.
- Reduzir tipografia do título do card: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` (era `text-5xl md:text-7xl`).
- Atrasar a virada de grid: usar `lg:grid-cols-2` em vez de `md:grid-cols-2` para que em tablet a thumbnail vá pra baixo (single-column) e só vire 2 colunas em `lg` (≥1024px). Isso resolve o problema de sobreposição lateral em tablets.

**b) Texto "DESMONTADOS" dentro da thumbnail nativa é cortado:**

- No `coverNative` do projeto Filmes (linhas 59–78) o `<h3>` usa `text-2xl md:text-4xl`. Em larguras intermediárias (lg ~1024px) a coluna fica estreita e "DESMONTADOS" não cabe.
- Trocar para escala fluida com `clamp` via classe arbitrária ou usar `text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl` + `leading-[0.95]` + `break-words`. Reduzir o padding interno em telas pequenas: `px-4 sm:px-6 md:px-8 lg:px-10`.
- Como rede de segurança, reduzir o tracking e garantir `min-w-0` nos containers flex para permitir shrink.

### 4. Varredura geral de responsividade

Auditar e ajustar pontos similares encontrados na revisão:

- `**ProjectSection` — número decorativo gigante** (`text-[8rem] md:text-[12rem]` no canto): em mobile pode encostar no toggle PT/EN. Reduzir para `text-[6rem] sm:text-[8rem] md:text-[12rem]` e empurrar mais para dentro (`top-12` em mobile) para não competir com o toggle fixo.
- `**ProjectSection` — botões de ação** (`Ver case`, `Ver site`, `Behance`): em mobile estreito eles quebram em 3 linhas; já está com `flex-wrap`, ok, mas confirmar que não há overflow horizontal.
- **Hero das páginas de case** (todos os 4): mesma redução de escala do h1 (item 2), aplicada uniformemente.
- **Header dos cases — logo central** (`THAISA S`): em mobile muito estreito (≤360px) pode ficar comprimida entre voltar e nada (após mover o "case 0X" pra esquerda); validar que continua centralizada via `justify-between`.
- `**LanguageToggle**` em si: posição `top-4 right-4` ok; verificar que `z-[60]` está acima do header `z-50` (está).

### Resumo técnico das mudanças

```text
src/pages/Project{PdfCinema,CscDigital,FilmesDesmontados,Navi}.tsx
  - Header: mover "CASE 0X / 04" para o lado esquerdo (após botão voltar)
            e ocultar em < sm
  - Hero h1: text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
             + break-words hyphens-auto

src/components/ProjectSection.tsx
  - Grid: md:grid-cols-2 -> lg:grid-cols-2 (gap também ajustado)
  - Título do card: text-4xl sm:text-5xl md:text-6xl lg:text-7xl
  - Número decorativo: escala mobile reduzida + reposicionamento
  - coverNative do Filmes Desmontados:
      h3: text-xl sm:text-2xl md:text-3xl xl:text-4xl + min-w-0 + break-words
      padding: px-4 sm:px-6 lg:px-10
```

Sem mudanças em `translations.ts`, `LanguageToggle.tsx` ou tokens de design.