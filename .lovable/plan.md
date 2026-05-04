## Ajustes na página CSC Digital

### 1. Thumbnail no card 02 (`ProjectSection.tsx`)
- Hoje a `capa-csc.png` usa `object-cover` centralizado, e o nome "CSC Digital" da arte fica cortado.
- Trocar para `object-cover object-left` no `<img>` do card quando `project.number === "02"` (ou sempre — fica seguro pros outros porque já usam crops chapados). Solução mais limpa: passar uma prop opcional `objectPosition` no `Project` e setar `"left"` só no CSC.

### 2. Imagens que saem da página de detalhes
Remover dos imports e do JSX:
- `personas.png`
- `pesquisa-familia.png`
- `jornada-usuario.png`
- `consulta-e-vacina.png`
- `how-might-we.png`
- `paleta-2.png`
- `componentes.png`

Mantém: `capa-csc.png` (hero), `noticia1.png` (problema), `telas-prototipo.png` (protótipo).

Os arquivos físicos podem ficar na pasta por enquanto (sem custo); se preferir, deletamos depois.

### 3. Substituir cada bloco por composição nativa do site
A linguagem do portfólio é: tipografia grande, cards com `border-border/30 bg-card/40 backdrop-blur-sm`, mono labels em `CSC_BLUE`, muito respiro, números grandes. Vou traduzir cada artefato pra esse idioma — sem screenshots de Figma.

**a) Pesquisa quantitativa** (era `pesquisa-familia.png`)
Substituir por um bloco de "data viz tipográfica":
```text
┌─────────────────────────────────────────┐
│  77        51%        2 dias            │
│  famílias  só usa     de coleta         │
│            pra vacina                   │
└─────────────────────────────────────────┘
```
Três KPIs grandes em `font-display` com cor `CSC_BLUE` + descrição em `text-muted-foreground`. Mesmo padrão visual dos cards de "Aprendizados".

**b) Persona Gabriela & Ronaldo** (era `personas.png`)
Substituir por um card duplo lado a lado:
- Cada card: avatar com inicial em círculo (G / R) usando bg `CSC_BLUE/20`, nome + idade + 1 linha de contexto, e 3 bullets (Dor / Tarefa / Necessidade) em mono labels.
- Coerente com o resto do site (sem ilustração foto-realista).

**c) Jornada do usuário** (era `jornada-usuario.png` + `consulta-e-vacina.png`)
Substituir por uma timeline horizontal de 4 etapas (Agendamento → Consulta → Imunização → Cuidados):
- Linha fina com 4 nodes (círculos) em `CSC_BLUE`.
- Sob cada node: nome da etapa, 1 frase de objetivo, 1 frase de dor mapeada.
- Em mobile vira vertical.
- Remove o bloco `consulta-e-vacina` inteiro.

**d) How Might We** (era `how-might-we.png`)
Já existe a pergunta como `<h2>` gigante na seção. Substituir a imagem por um trio de cards "Dor → HMW → Solução priorizada", mostrando 3 exemplos:
- "Famílias esquecem vacinas" → "Como lembrar sem ser invasivo?" → "Notificações por idade da criança"
- "Caderneta fica em casa" → "Como tornar portátil?" → "Histórico médico no app"
- "Pais dividem cuidado" → "Como sincronizar entre responsáveis?" → "Conta familiar compartilhada"
Layout 3 colunas, mesmo card style.

**e) Sistema visual** (eram `paleta-2.png` + `componentes.png`)
Substituir por dois cards lado a lado, todos com CSS puro:
- **Paleta**: grid de 6–8 swatches coloridos (divs com bg + label do hex). Azul institucional + 2 secundárias quentes + 3 status (success/warning/error). Renderizado em HTML puro, fica idêntico em qualidade ao Figma e combina com o tom do site.
- **Componentes**: pequena vitrine com 1 botão primário, 1 secundário, 1 chip e um mock de header — todos estilizados em React com Tailwind. Mostra o sistema vivo, não uma foto dele.

### 4. Detalhes técnicos
- Editar apenas `src/pages/ProjectCscDigital.tsx` e `src/components/ProjectSection.tsx`.
- Remover os 7 imports não usados.
- Manter `framer-motion` `fadeUp`, espaçamentos e estrutura geral — só trocar o conteúdo das 5 seções.
- Sem novas dependências, sem novos assets, sem mudança de rota.
- Tipografia continua usando `font-display` (títulos) e `font-mono-alt` (labels). Cor de destaque continua `CSC_BLUE` (`hsl(210,80%,60%)`).

### Resultado esperado
A página fica 100% coerente com a estética do portfólio: dark, tipográfica, com cards translúcidos e dados como protagonistas. Os artefatos de UX viram **demonstração de pensamento**, não capturas de tela do Figma — o que valoriza mais o trabalho de Product Designer e respeita a linguagem visual do site.