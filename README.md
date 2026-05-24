# Brunna Andrade — Página de Links

Página estilo Linktree, leve e elegante, para hospedar no GitHub Pages.

## 📁 Estrutura

```
brunna-links/
├── index.html      ← estrutura da página (não precisa editar)
├── styles.css      ← visual (cores, fontes — só edite se quiser mudar o design)
├── app.js          ← funcionamento do carrossel (não precisa editar)
├── data.js         ← AQUI VOCÊ EDITA: fotos, links e textos
└── images/         ← AQUI VOCÊ COLOCA as fotos do carrossel
    ├── foto-1.jpeg
    ├── foto-2.jpeg
    └── ...
```

## ✏️ Como atualizar a página

### Trocar/adicionar fotos do Hero

1. Coloque os arquivos `.jpeg` ou `.png` na pasta `images/`.
2. Abra `data.js` e edite a lista `PHOTOS`:

```js
const PHOTOS = [
  { src: "images/foto-1.jpeg", alt: "Descrição" },
  { src: "images/foto-2.jpeg", alt: "Outra foto" },
  // adicione quantas quiser
];
```

💡 **Dicas para as fotos:**
- Proporção vertical (3:4) fica melhor.
- Tamanho recomendado: 720 × 960px (suficiente pra ficar nítido sem pesar).
- Salve como `.jpeg` com qualidade ~80% pra carregar rápido.

### Trocar/adicionar links

Em `data.js`, edite a lista `LINKS`:

```js
const LINKS = [
  {
    icon: "whatsapp",       // ícones disponíveis abaixo
    title: "Texto principal",
    subtitle: "Texto pequeno (opcional)",
    href: "https://...",
    highlight: true,        // opcional — dá destaque dourado
  },
];
```

**Ícones disponíveis:** `whatsapp`, `instagram`, `tiktok`, `shop`, `portfolio`, `link`

### ⚠️ Coloque seus links reais

Em `data.js`, troque:
- `wa.me/55SEUNUMERO` → seu número com DDD (ex: `5511999998888`)
- `instagram.com/SEUUSUARIO` → seu @ do Instagram
- `tiktok.com/@SEUUSUARIO` → seu @ do TikTok
- URLs dos sites Cílios & Beleza e portfólio

## 🚀 Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `brunna-links` ou `username.github.io`).
2. Faça upload de **todos** os arquivos (incluindo a pasta `images`).
3. Vá em **Settings → Pages**.
4. Em "Source", escolha branch `main`, pasta `/ (root)` e salve.
5. Aguarde ~1min. Seu site estará em:
   - `https://seuusuario.github.io/brunna-links/` (se nomeou o repo `brunna-links`)
   - `https://seuusuario.github.io/` (se nomeou `seuusuario.github.io`)

## 🎨 Personalização avançada

Em `styles.css`, no topo do arquivo, há variáveis de cor (`:root`). Trocando elas, muda toda a paleta:

```css
--gold:        #d4a574;   /* dourado principal */
--gold-bright: #f5d49a;   /* dourado claro */
--bg-deep:     #14090a;   /* fundo */
```

## 🤝 Atualização posterior

Pode trocar imagens diretamente pelo GitHub:
1. Vá até a pasta `images/` no GitHub.
2. Apague a antiga, faça upload da nova com o **mesmo nome**.
3. Em ~1 minuto o site atualiza sozinho.
