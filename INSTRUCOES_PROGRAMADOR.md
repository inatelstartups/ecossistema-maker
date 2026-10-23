# Ecossistema Maker e Fígital — Inatel Startups (Guia de Implementação)

Este módulo contém a seção **Ecossistema Maker e Fígital (Fab Lab, Laboratório de Ideação e Podcast Inatalks)** do Inatel Startups, desenvolvida com **layout expansível inline (in-place drawer)**.

> **Por que este layout resolve os problemas anteriores:** Em vez de abrir pop-ups modais flutuantes que ficavam encobertos pelos cabeçalhos fixos do site (ou cortados dentro de frames), ao clicar em qualquer card os detalhes se expandem suavemente **dentro da própria seção**. O script avisa a página mãe via `postMessage` para aumentar a altura do frame em tempo real, sem jamais colidir com os menus fixos.

---

## 🔗 Links Oficiais do Projeto

- **URL do Frame (GitHub Pages):** [https://inatelstartups.github.io/ecossistema-maker/](https://inatelstartups.github.io/ecossistema-maker/)
- **Repositório GitHub:** [https://github.com/inatelstartups/ecossistema-maker](https://github.com/inatelstartups/ecossistema-maker)

---

## ⚡ Opção 1 (Recomendada): Inserir via Embed (`<iframe>`)

Basta colar o trecho abaixo no local onde a seção deve ser exibida no site:

```html
<!-- ECOSSISTEMA MAKER E FÍGITAL — INATEL STARTUPS -->
<div id="inatel-maker-embed-wrapper" style="width: 100%; overflow: hidden;">
    <iframe
        id="inatel-maker-iframe"
        src="https://inatelstartups.github.io/ecossistema-maker/"
        title="Ecossistema Maker e Fígital - Inatel Startups"
        style="width: 100%; min-height: 580px; border: none; display: block; background: transparent;"
        scrolling="no"
        loading="lazy"
        allowtransparency="true"
    ></iframe>
</div>

<script>
    // Ajusta automaticamente a altura do frame em tempo real ao abrir/fechar detalhes
    window.addEventListener('message', function (event) {
        if (event.data && event.data.type === 'inatel-maker-resize' && event.data.height) {
            var iframe = document.getElementById('inatel-maker-iframe');
            if (iframe) {
                iframe.style.height = event.data.height + 'px';
            }
        }
    });
</script>
```

---

## 🧩 Opção 2: Integração Direta no Código-Fonte

Caso prefira incorporar diretamente no código da página sem `<iframe>`:
1. **HTML:** Copie a `<section id="maker" class="section">...</section>` do arquivo `index.html`.
2. **CSS:** Adicione os estilos de `style.css`.
3. **Imagens:** Certifique-se de que a pasta `elementos/` (`fablab.jpg`, `lab_ideacao.jpg`, `inatalks.png`) esteja acessível no caminho relativo correspondente.
4. **JS:** Inclua o script `maker.js` antes do fechamento do `</body>`.
