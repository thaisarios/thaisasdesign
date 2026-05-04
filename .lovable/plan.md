## Tela de detalhes — PDF Cinema (case study)

Vamos criar uma página dedicada de case study para o PDF Cinema, mantendo a estética do portfólio (irreverente, tech, neon pink/blue/green, scroll vertical imersivo) e inspirada nas referências enviadas (robertfiszer.studio, kawe.ski, etc).

### Estrutura da rota

- Nova rota: `/projetos/pdf-cinema` em `App.tsx`
- Card do projeto 01 na home vira link clicável que leva para essa rota
- Botão "Ver site →" continua linkando para `pdfcinema.com` (externo)

### Imagens (assets)

Copiar as 8 imagens enviadas para `src/assets/projects/pdf-cinema/`:

- `capa1.png` → hero/thumbnail
- `desktop.png`, `desktop2.png`, `desktop3.png` → mockups desktop
- `tablet1.png`, `tablet3.png` → mockups tablet
- `mobile3.png`, `mobile-menu.png` → mockups mobile

A `capa1.png` também substitui o placeholder do card 01 na home (`ProjectSection.tsx`).

### Estrutura da página (scroll vertical imersivo)

```text
1. Hero do projeto
   - Nav minimalista (← voltar / logo THAISA S)
   - "[01] PDF CINEMA" mono-tag (accent neon)
   - Título grande: "Cinema vira interface."
   - Subtítulo: papel + cliente + ano (Lead Product Designer · Pedro Ferreira · 2025)
   - Imagem capa1 em destaque com fade

2. Snapshot / metadados
   - Grid 4 colunas: Cliente · Papel · Entregas · Ano
   - Tags: UX/UI Design, Web Design, Visual Identity, Responsive

3. O desafio
   - "Como traduzir a estética cinematográfica de um assistente de direção em um produto digital que venda o trabalho dele em 5 segundos?"
   - 2 parágrafos curtos baseados no Behance, reescritos com foco em problema + impacto

4. Mockup desktop full-width (desktop.png) com legenda

5. Arquitetura da informação
   - 6 categorias visualizadas como chips/grid: Publicidade · Cinema · Televisão · Internet · Eventos · Drone
   - Texto curto explicando a decisão de IA
   - Mockup desktop2.png ao lado

6. Linguagem visual & navegação
   - Texto sobre paleta neon, scroll suave, transições sutis
   - Mockup desktop3.png

7. Responsividade — seção dupla
   - Tablet (tablet1 + tablet3 lado a lado)
   - Mobile (mobile3 + mobile-menu lado a lado, mockups menores centralizados)
   - Texto curto: "Mesmo impacto, qualquer tela."

8. Resultados / impacto
   - 3 métricas/destaques em cards: bilíngue PT/EN, navegação 6 categorias, contato direto integrado
   - Frase de fechamento sobre conversão / networking

9. CTA final
   - "Quer ver no ar?" → botão para pdfcinema.com
   - "Próximo projeto →" → CSC Digital (placeholder por enquanto, leva pra `#projetos`)
   - Voltar para todos os trabalhos

10. Footer reaproveitado
```

### UX Writing — princípios aplicados

- Voz na 1ª pessoa, ativa ("Eu desenhei", "Decidi", "Resolvi")
- Frases curtas, sem jargão de agência
- Cada seção começa com **problema → decisão → resultado**
- Verbos concretos (mapeei, organizei, validei) em vez de adjetivos vazios
- CTAs com ação clara: "Ver no ar", "Próximo case", "Voltar pros trabalhos"

Exemplos de microcopy:


| Local          | Texto                                                                                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero subtítulo | "Site-portfólio para o assistente de direção e videomaker Pedro Ferreira — onde cada scroll parece um corte de cena."                                                              |
| Desafio        | "O Pedro tinha um portfólio extenso e nenhum lugar pra centralizar. O desafio: criar uma vitrine digital que respirasse cinema sem parecer mais um site de produtora."             |
| AI section     | "Seis categorias, uma navegação. Organizei o trabalho do Pedro por linguagem audiovisual — não por cliente — pra que diretores e produtores achem o que procuram em dois cliques." |
| Visual         | "Rosa e azul neon como acentos, preto cinematográfico como base. Scroll suave e transições sutis pra deixar o conteúdo ser o protagonista."                                        |
| Responsivo     | "Site totalmente responsivo. Mesma narrativa em desktop, tablet e mobile."                                                                                                         |
| Resultado      | "Site bilíngue (PT/EN), arquitetura escalável e contato direto. Pronto pra rodar entre clientes BR e gringos."                                                                     |
| CTA final      | "Curtiu? O site tá no ar em pdfcinema.com."                                                                                                                                        |


### Detalhes técnicos

- Novo arquivo: `src/pages/ProjectPdfCinema.tsx` (página completa)
- Novo componente reutilizável: `src/components/project/CaseStudyNav.tsx` (header com voltar + logo) — vai servir pros próximos cases
- Edits:
  - `src/App.tsx`: registrar rota `/projetos/pdf-cinema`
  - `src/components/ProjectSection.tsx`: adicionar `slug: "pdf-cinema"` no projeto 01, trocar visual placeholder por `capa1.png` importado, e envolver o card num `<Link to="/projetos/pdf-cinema">`
- Stack: React Router (já instalado), framer-motion (já usado) para fade/slide on scroll, Tailwind. Sem novas dependências.
- Mantém `CustomCursor` global (já está em `Index`, mover pra layout/`App` se necessário pra funcionar na nova rota — verificar e ajustar).
- Acessibilidade: alt text descritivo em cada mockup, `aria-label` no link de voltar, foco visível mantendo `data-hover`.

Próximos cases (CSC Digital, Filmes Desmontados) seguirão o mesmo template depois que esse for aprovado.