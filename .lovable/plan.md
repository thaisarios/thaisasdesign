# Substituir favicon pelo novo SVG

1. Copiar `user-uploads://Frame_55_1.svg` para `public/favicon.svg` (sobrescrevendo o atual).
2. `index.html` já aponta para `/favicon.svg` — sem mudança necessária.

Após o deploy automático na Vercel, fazer hard refresh (Ctrl/Cmd + Shift + R) para ver o novo ícone.
