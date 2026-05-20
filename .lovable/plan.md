# Atualizar favicon para SVG personalizado

## O que vou fazer no Lovable

1. Copiar `user-uploads://Frame_55.svg` para `public/favicon.svg`.
2. Atualizar `index.html`:
   - Trocar `<link rel="icon" type="image/x-icon" href="/favicon.ico">` por `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`.
3. Deletar o `public/favicon.ico` antigo (browsers pedem `/favicon.ico` por padrão e ele sobrescreveria o novo).

## O que você precisa fazer (Vercel + GitHub)

Nada manual. Como o Lovable está sincronizado com o GitHub, as mudanças serão commitadas automaticamente no repositório, e a Vercel vai detectar o push e fazer o redeploy sozinha.

Após o deploy:
- Forçar refresh no navegador (Ctrl/Cmd + Shift + R) — o favicon antigo fica em cache de forma agressiva.
- Se ainda aparecer o antigo, abrir `https://seusite.com/favicon.svg` direto no navegador para confirmar que está servindo, e limpar cache da aba.

## Observação

O SVG tem fundo `#14101C` (quase preto) com círculo rosa e anel verde — vai aparecer bem tanto em abas claras quanto escuras.
