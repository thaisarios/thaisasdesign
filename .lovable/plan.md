# Versão em inglês (PT / EN)

Adicionar suporte bilíngue ao portfólio com um seletor minimalista fixo no canto superior direito da tela.

## Decisão de UX/UI

**Posicionamento**: toggle fixo (`position: fixed`) no canto superior direito, visível em todas as páginas (home + cases). Some/diminui sutilmente ao rolar pra não competir com conteúdo.

**Visual**: dois rótulos `PT` / `EN` em `font-mono-alt`, uppercase, separados por uma barra `/`. O idioma ativo fica com a cor `accent` (verde-água) e opacidade total; o inativo fica em `text-foreground/40`. Sem caixa, sem fundo — só tipografia, alinhado com o tom minimalista do site.

```text
                                          PT / EN
```

**Interação**: clique alterna o idioma instantaneamente (sem reload). Persistência via `localStorage` para lembrar a preferência. Detecção inicial via `navigator.language` (se começar com `en`, abre em EN; senão PT).

**Acessibilidade**: `aria-label="Mudar idioma"`, `lang` atualizado no `<html>`.

## Arquitetura técnica

**Sem libs externas** (não precisa de `react-i18next` para esse volume). Solução enxuta:

1. **`src/i18n/translations.ts`** — objeto único com todas as strings:
   ```ts
   export const translations = {
     pt: { hero: { role: "Product Designer", ... }, projects: {...}, ... },
     en: { hero: { role: "Product Designer", ... }, projects: {...}, ... },
   }
   ```

2. **`src/i18n/LanguageContext.tsx`** — Context + provider com `lang`, `setLang`, e helper `t(path)` para acessar as strings.

3. **`src/hooks/useT.ts`** — hook curtinho que retorna `{ t, lang, setLang }`.

4. **`src/components/LanguageToggle.tsx`** — o componente fixo PT / EN no canto superior direito.

5. **Wrapper** em `App.tsx`: envolver `<BrowserRouter>` com `<LanguageProvider>` e renderizar `<LanguageToggle />` globalmente.

## Conteúdo a traduzir

- **HeroSection**: "Product Designer", "Criando experiências digitais únicas...", botões "Ver projetos" / "Fale comigo", labels do popover (WhatsApp, E-mail).
- **Marquee**: termos rotativos (se houver).
- **ProjectSection**: header "Trabalhos / 05 cases", e para cada projeto: `subtitle`, `description`, `tags`, botões "Ver case", "Ver site", "Case no Behance", badge "Lead Designer", "Em desenvolvimento", textos do projeto "Em breve".
- **AboutSection** e **ProcessSection**: títulos, parágrafos, listas.
- **ContactSection**: "Contato", "Tem um projeto? Bora!", subtítulo, label do WhatsApp, footer ("Feito com café e Figma").
- **4 páginas de case** (`ProjectPdfCinema`, `ProjectCscDigital`, `ProjectFilmesDesmontados`, `ProjectNavi`): cabeçalhos (Papel, Ano, Cliente, etc.), seções (Contexto, Desafio, Processo, Resultado…), botões de navegação ("Voltar", "Próximo case"), legendas de imagem.

Os títulos próprios (PDF Cinema, CSC Digital, Filmes Desmontados, .navi, Thaisa S) **não mudam**. Termos como "Product Designer" também ficam iguais nos dois idiomas.

## Detalhes de comportamento

- Ao trocar idioma na home, a posição de scroll é mantida.
- O toggle tem `z-index` alto (acima do `CustomCursor` no z-stack mas sem capturar o cursor — usa `data-hover` para manter o estilo de cursor custom).
- Atualiza `document.documentElement.lang` para `pt-BR` / `en` quando o idioma muda.

## Fora de escopo

- Roteamento por URL (`/en/...`) — desnecessário para um portfólio; o toggle + localStorage é suficiente e mais leve.
- Tradução automática via API.
- SEO multilíngue com `hreflang` (pode ser adicionado depois se publicar e quiser indexação separada).
