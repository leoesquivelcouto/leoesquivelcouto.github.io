# leoesquivelcouto.github.io

Meu portfólio e currículo. HTML e CSS escritos à mão, sem framework e sem etapa de build.

- `index.html`: o site
- `cv/index.html`: o currículo (fonte única da página online **e** do PDF)
- `cv/curriculo.pdf`: gerado a partir da página acima
- `assets/`: estilos, script opcional (tema e animação de entrada) e ícone

## Rodar localmente

Qualquer servidor estático serve:

```bash
npx serve .
```

## Atualizar o currículo em PDF

Depois de editar `cv/index.html`, gere o PDF com o Edge (já vem no Windows):

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="$PWD\cv\curriculo.pdf" "file:///$($PWD -replace '\\','/')/cv/index.html"
```

Ou abra a página no navegador → Imprimir → Salvar como PDF (margens: nenhuma; desmarcar cabeçalho e rodapé).
Confira que cabe em **uma página**.

## Publicar no GitHub Pages

1. Crie um repositório público chamado exatamente `leoesquivelcouto.github.io`.
2. Envie estes arquivos para a branch `main`.
3. Em *Settings → Pages*, fonte: `Deploy from a branch`, branch `main`, pasta `/ (root)`.
4. Em 1 a 2 minutos o site estará em `https://leoesquivelcouto.github.io`.

## Antes de publicar

Procure por `[` em todos os arquivos: cada `[PREENCHER]`/`[colchetes]` precisa virar informação real ou ser
removido. No site, esses trechos aparecem marcados em amarelo justamente para não passarem despercebidos.
