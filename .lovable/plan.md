## Ajuste da paleta no case CSC Digital

A seção "Sistema visual" mostra a paleta como um card grande com 8 swatches quadrados ocupando muito espaço vertical. Vou compactar.

### Mudança

Substituir o card atual (linhas 581–619 de `src/pages/ProjectCscDigital.tsx`) por uma linha única de "chips" de cor inline, no mesmo estilo dos chips de tags já usados no resto do case.

Cada cor vira um chip pequeno: bolinha colorida + hex em `font-mono-alt text-[10px]`. O conjunto fica numa única linha (com `flex-wrap` pra mobile), precedido pelo rótulo "Paleta".

### Resultado visual

```
Paleta   (●#1351B4)  (●#2670E8)  (●#FF8A3D)  (●#FFD9B3)  (●#168821)  (●#FFCD07)  (●#E52207)  (●#1B1B1B)
```

- Sem card grande nem aspect-square por cor.
- Mesma linguagem dos chips de tags do hero do case → integra com o resto da página.
- Em mobile, os chips quebram em 2 linhas naturalmente.
- O texto explicativo da seção ("Azul institucional, com o tempero certo…") continua igual logo acima.

### Detalhe técnico

- Remove o wrapper `grid md:grid-cols-1` e o card interno.
- Coloca um único `motion.div` com `flex flex-wrap items-center gap-2`.
- Cada chip: `pl-1.5 pr-3 py-1.5 rounded-full border border-border/30 bg-card/40` com bolinha `w-5 h-5 rounded-full` + hex.
- Mantém os 8 hex atuais e o título "Paleta" em `text-[10px] uppercase tracking-[0.25em]` na cor `CSC_BLUE`.