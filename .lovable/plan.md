## Objetivo

Conectar o case .04 (Navi) ao próximo case (HabitPet), no mesmo padrão dos cases anteriores (PDF Cinema → CSC, CSC → Filmes, Filmes → Navi).

## Mudança

Na seção final de CTA de `src/pages/ProjectNavi.tsx`, adicionar um link "Próximo case →" apontando para `/projetos/habitpet`, ao lado dos botões já existentes ("ver site" e "voltar").

- Usa `common.nextCase` do `translations.ts` (já existe em PT/EN).
- Estilo coerente com o tema escuro do Navi: borda branca translúcida, hover sutil — mesmo visual dos outros cases adaptado à paleta.

## Fora do escopo

- Não altero conteúdo, textos ou outras seções.
- Não mexo nos demais cases.
