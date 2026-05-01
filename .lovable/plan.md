## Mudanças planejadas

### 1. Hero: "THAISA S" em vez de "Thaisa Shalders"

- Alterar `HeroSection.tsx` para exibir apenas **THAISA S** como nome principal
- Manter o layout tipográfico bold, ajustando a divisão de cores

### 2. Botão "Contato" no hero — melhorar contraste

- O botão atualmente usa `border-foreground/20 text-foreground/70` com hover `text-accent`
- Trocar para um estilo com mais presença: borda e texto mais visíveis, hover com fundo preenchido (ex: `hover:bg-accent hover:text-accent-foreground`)

### 3. Seção "Sobre mim" — remover emojis dos skills

- Substituir os cards com emojis por uma abordagem mais alinhada ao design: tags/badges minimalistas ou uma lista tipográfica com separadores visuais (estilo marquee/mono)
- Remover o placeholder de foto com emoji `👩‍💻`, substituir por um bloco visual abstrato com gradiente

### 4. UX Writing — revisão completa dos textos

Pesquisa e reescrita dos microcopy e CTAs para um tom mais **irreverente, confiante e profissional**:


| Local               | Atual                                               | Proposta                                                                                                                                                           |
| ------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hero subtítulo      | "Criando experiências digitais que fogem do óbvio." | "Criando experiências digitais únicas."                                                                                                                            |
| Hero accent         | "Tecnologia, inovação e um toque de irreverência."  | "Tecnologia, inovação, intuição e funcionalidade."                                                                                                                 |
| Botão projetos      | "Ver projetos"                                      | "Ver projetos"                                                                                                                                                     |
| Botão contato       | "Contato"                                           | "Fala comigo"                                                                                                                                                      |
| Seção projetos      | "Projetos selecionados"                             | "Trabalhos"                                                                                                                                                        |
| About título        | "Design é sobre pessoas, não apenas pixels."        | "Design é sobre pessoas, interação e conxão."                                                                                                                      |
| About bio p1        | texto atual genérico                                | "Sou a Thaisa — designer de produto que vive na interseção entre pesquisa, interface e estratégia. Crio experiências digitais com intenção, inovação e tecnologia" |
| About bio p2        | texto atual                                         | "Gosto de desafios complexos, times multidisciplinares e de questionar o 'sempre foi assim'."                                                                      |
| Processo header     | "Meu processo"                                      | "O processo"                                                                                                                                                       |
| Contato CTA         | "Bora criar algo juntos?"                           | "Tem um projeto? Bora!"                                                                                                                                            |
| Contato sub         | texto atual                                         | "Estou aberta a novos desafios — manda um oi e a gente conversa."                                                                                                  |
| Footer              | "Feito com ♥ e irreverência"                        | "Feito com café e Figma"                                                                                                                                           |
| Projeto coming soon | "Um novo case está sendo preparado..."              | "Algo novo está no forno. Spoiler: vai ser bom."                                                                                                                   |


### Detalhes técnicos

- Arquivos editados: `HeroSection.tsx`, `AboutSection.tsx`, `ContactSection.tsx`, `ProcessSection.tsx`, `ProjectSection.tsx`
- Nenhuma dependência nova necessária