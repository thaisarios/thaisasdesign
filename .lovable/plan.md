## Tela de detalhes — CSC Digital (case study de pesquisa)

Diferente do PDF Cinema (entrega de cliente), o CSC Digital é um **estudo de caso de UX** com forte componente de discovery. A página vai destacar **processo, método e decisões** — exatamente o que valoriza um Product Designer pra novos clientes.

### Princípios editoriais

- **Menos é mais.** O Medium tem 10 min de leitura; aqui condensamos pra ~3 min de scroll. Mostrar profundidade sem cansar.
- **Processo > resultado visual.** O valor do case está no método (CSD, How Might We, testes). Telas finais entram como prova, não como protagonista.
- **Voz na 1ª pessoa, ativa.** "Conduzi a pesquisa", "Apliquei o método CSD", "Validei com 4 usuários".
- **Honestidade sobre o contexto.** É um projeto de curso/estudo feito em time — assumir isso dá credibilidade. Mencionar papel (UX/UI Designer) e tamanho do squad (5 pessoas).

### Imagens — quais entram

Não vamos usar todas. Seleção curada:


| Imagem                  | Onde entra                          | Porquê                             |
| ----------------------- | ----------------------------------- | ---------------------------------- |
| `capa-csc.png`          | Hero + thumbnail no card 02         | Identidade visual do projeto       |
| `noticia1.png`          | Seção "O cenário" (lateral pequena) | Dado real que justifica o problema |
| `personas.png`          | Seção "Quem é a família"            | Mostra rigor de pesquisa           |
| `pesquisa-familia.png`  | Seção "Pesquisa quantitativa"       | Números convencem                  |
| `jornada-usuario.png`   | Seção "Mapa de jornada"             | Artefato clássico de UX            |
| `consulta-e-vacina.png` | Pequena ilustração de apoio         | Contexto da jornada                |
| `how-might-we.png`      | Seção "Do problema à solução"       | Mostra processo de ideação         |
| `paleta-2.png`          | Seção "Sistema visual"              | Design system                      |
| `componentes.png`       | Seção "Sistema visual"              | Design system                      |
| `telas-prototipo.png`   | Seção "Protótipo de alta"           | Prova final, full-width            |


10 imagens, todas com função clara. Sem galeria solta.

### Estrutura da página

```text
1. Hero
   - CaseStudyNav (← voltar / THAISA S)
   - "[02] CSC DIGITAL" mono-tag (azul accent — usa hsl(210,80%,60%) que já existe no card)
   - Título: "Caderneta de Saúde da Criança, agora no bolso."
   - Sub: "Estudo de caso · UX/UI Design · Squad de 5 · 2021"
   - Imagem capa-csc full-width

2. Snapshot / metadados (grid 4 col)
   Papel · Time · Método · Ano
   Tags: UX Research, Mobile App, Discovery, Design System

3. O problema (TL;DR no topo)
   "Metade das crianças brasileiras não recebeu todas as vacinas em 2020."
   Parágrafo curto + thumb da notícia ao lado.
   Dado-âncora: a CSC tem 90 páginas, precisa durar 10 anos, e a maioria das famílias usa só pra vacina.

4. Meu papel
   "Conduzi pesquisa, mapeei jornada e desenhei interface ao lado de 4 colegas."
   Bullets curtos do que eu liderei.

5. Discovery — 3 etapas em cards horizontais
   a) Suposições + CSD
   b) Pesquisa quantitativa (77 respostas) → imagem pesquisa-familia
   c) Pesquisa qualitativa (5 entrevistas)
   Cada card: 1 frase de objetivo + 1 frase de aprendizado.

6. Quem é a família (persona)
   Imagem personas.png + parágrafo curto: Gabriela e Ronaldo, 47 e 42, classe média, 3 filhos.
   "Pesquisar antes de desenhar evita resolver o problema errado."

7. Jornada do usuário
   Imagem jornada-usuario.png full-width + 1 parágrafo destacando os pontos de dor identificados.
   (Imagem consulta-e-vacina como detalhe lateral menor.)

8. Do problema à solução — How Might We
   "Como poderíamos incentivar e facilitar o uso das diversas funções da CSC pelas famílias brasileiras?"
   Imagem how-might-we.png + nota sobre matriz impacto×esforço.

9. Sistema visual
   Decisão: partir do guia do Governo (azul institucional) e estender com secundárias quentes pra equilibrar seriedade + leveza.
   Grid: paleta-2.png + componentes.png lado a lado.

10. Protótipo de alta
    Imagem telas-prototipo.png full-width.
    Legenda: "Protótipo navegável validado em 2 rodadas de teste com usuários reais."

11. Aprendizados (não "resultados")
    Cards com 3 takeaways honestos:
    - "Suposição não é dado — CSD ajudou a separar."
    - "Testar com 4 pessoas mudou 6 decisões de UI."
    - "Design system bem ancorado acelerou as iterações."
    Linha final: "Esse projeto me ensinou a tratar pesquisa como ferramenta de produto, não como entregável."

12. CTA final
    "Ver case completo no Behance" → link
    "Ler o artigo no Medium (10 min)" → link
    "Próximo projeto → Filmes Desmontados" (placeholder por enquanto)
    "← Voltar pros trabalhos"
```

### UX Writing — exemplos


| Local        | Texto                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| Hero sub     | "Como transformei 90 páginas de papel em um app que cabe na rotina de família brasileira."                   |
| Problema     | "A CSC tem 90 páginas e precisa durar 10 anos. Adivinha quantas famílias mantêm ela atualizada."             |
| Meu papel    | "Conduzi pesquisa quanti+quali, mapeei jornada e desenhei interface ao lado de 4 colegas de squad."          |
| Discovery    | "Antes de desenhar uma tela, ouvimos 77 famílias"                                                            |
| Persona      | "Gabriela esquece a caderneta. Ronaldo nem sempre tem acesso. O app resolve os dois."                        |
| Sistema      | "Mantive o azul institucional do Governo e adicionei uma paleta secundária quente pra desengessar."          |
| Aprendizados | "Esse projeto me ensinou a tratar pesquisa como ferramenta de produto — não como entregável somente bonito." |
| CTA Behance  | "Ver case completo no Behance"                                                                               |
| CTA Medium   | "Ler o making-of no Medium (10 min)"                                                                         |


### Detalhes técnicos

- Copiar 10 imagens pra `src/assets/projects/csc-digital/` (capa-csc, noticia1, personas, pesquisa-familia, jornada-usuario, consulta-e-vacina, how-might-we, paleta-2, componentes, telas-prototipo)
- Novo arquivo: `src/pages/ProjectCscDigital.tsx` — mesma arquitetura do `ProjectPdfCinema.tsx` (framer-motion `fadeUp`, sticky `CaseStudyNav`, seções com `motion.section`)
- Rota nova em `App.tsx`: `/projetos/csc-digital`
- Edit em `src/components/ProjectSection.tsx`:
  - Importar `cscCover` de `@/assets/projects/csc-digital/capa-csc.png`
  - No projeto 02, adicionar `caseLink: "/projetos/csc-digital"` e `coverImage: cscCover`
- Paleta: usar o azul `hsl(210,80%,60%)` (já é o accent do card 02) como cor de destaque da página, mantendo `bg-background` escuro do site. Sem inventar tema novo — fica coerente com o portfólio.
- Componente `CaseStudyNav` já existe (criado no PDF Cinema) → reutilizado.
- Acessibilidade: alt descritivo em cada imagem, contraste validado, `aria-label` no voltar.
- Sem novas dependências.

Depois desse aprovado, o Filmes Desmontados segue o mesmo template do PDF Cinema (mais visual, menos processo).