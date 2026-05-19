Diagnóstico

Todos os outros cases (PDF Cinema, CSC Digital, Filmes Desmontados, Navi) usam fundo escuro — seja `bg-background` (roxo quase-preto do design system) ou o navy do Navi. Só o **HabitPet** quebra o padrão usando `CREAM` (#FFF5F8) como fundo geral, o que destoa da identidade visual do site.

Consequência adicional: o `LanguageToggle` é fixo no topo e usa `text-foreground` (clarinho, pensado para fundos escuros). Sobre o creme do HabitPet, o "EN" inativo praticamente some.

## Mudança

Inverter a base do HabitPet para escuro, **mantendo** a identidade pixel/retrô (rosa #FF6FB5, ciano #5BE3F0, lima #B8FF5B) — assim a página fica coerente com o resto do site e o toggle PT/EN volta a aparecer naturalmente.

Em `src/pages/ProjectHabitPet.tsx`:

- Fundo geral da página → escuro (INK `#1A1612` ou `bg-background` do design system, para casar com os demais).
- Texto base → `CREAM`. Opacidades de texto secundário viram `CREAM/70`, `CREAM/55`, etc.
- Header fixo → fundo escuro translúcido com borda sutil (igual ao padrão dos outros cases).
- Seções que hoje são **cremes** (Hero, Conceito, Pets, Roadmap) → fundo escuro.
- Seção "status bars" (hoje rosa claro `#FFEAF4`) → fica como faixa de respiro com um tom escuro alternativo (ex.: `#221C19` ou similar), mantendo o ritmo de alternância entre seções.
- A seção "UI / Visual language" que já é escura (INK) permanece como está.
- Cards/tiles (status, pets, roadmap) continuam com superfície **CREAM** internamente — o contraste creme-sobre-escuro reforça o ar de "tela de console retrô" e mantém os assets pixel art legíveis. Borda dos cards passa de INK para CREAM.
- Janela retrô do hero (barra rosa + tela lima com o pet) **não muda** — é o destaque visual.
- CTA final em rosa pleno **permanece** — funciona como remate vibrante.

Resultado: HabitPet entra na mesma família visual escura dos outros cases, sem perder o DNA pixel/candy. O PT/EN volta a ficar legível sem precisar mexer no `LanguageToggle`.

## Fora do escopo

- Não mexer no `LanguageToggle` nem nos outros cases.
- Não alterar conteúdo/textos nem assets.