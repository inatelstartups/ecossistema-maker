# Ecossistema Maker e Fígital — Inatel Startups (Guia do Programador)

Este módulo contém a seção **Ecossistema Maker e Fígital (Fab Lab, Laboratório de Ideação e Podcast Inatalks)** do Inatel Startups, com pop-up modal projetado especificamente para **funcionar em harmonia com os menus e cabeçalhos fixos institucionais do Inatel**.

> **Compatibilidade com o Menu Fixo:** O pop-up modal foi ajustado com posicionamento superior seguro (`padding-top: 155px`), abrindo **estritamente abaixo dos menus fixos do topo da página (~140px)**. Isso garante que o título do pop-up e o botão de fechar (`&times;`) fiquem 100% visíveis, sem jamais ficarem escondidos sob os cabeçalhos.

---

## 🔗 Links Oficiais

- **URL do Frame (GitHub Pages):** [https://inatelstartups.github.io/ecossistema-maker/](https://inatelstartups.github.io/ecossistema-maker/)
- **Repositório GitHub:** [https://github.com/inatelstartups/ecossistema-maker](https://github.com/inatelstartups/ecossistema-maker)

---

## ⚡ Opção 1 (Recomendada): Inserir via Embed (`<iframe>`)

Basta colar o trecho abaixo no local onde a faixa deve aparecer:

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
    window.addEventListener('message', function (event) {
        if (!event.data) return;
        var iframe = document.getElementById('inatel-maker-iframe');
        if (!iframe) return;

        if (event.data.type === 'inatel-maker-resize' && event.data.height) {
            iframe.style.height = event.data.height + 'px';
        }
        if (event.data.type === 'inatel-maker-modal-opened') {
            iframe.style.height = Math.max(920, event.data.height || 920) + 'px';
        }
        if (event.data.type === 'inatel-maker-modal-closed') {
            iframe.style.height = '580px';
        }
    });
</script>
```

---

## 🧩 Opção 2: Inclusão Direta no Código-Fonte

Caso prefira colar o código diretamente no tema/página:
1. **HTML:** Copie a `<section id="maker" class="section">...</section>` e o `<div id="maker-modal" class="modal-overlay">...</div>` do arquivo `index.html`.
2. **CSS:** Adicione os estilos de `style.css`.
3. **Imagens:** Certifique-se de que a pasta `elementos/` (`fablab.jpg`, `lab_ideacao.jpg`, `inatalks.png`) esteja acessível no caminho relativo correspondente.
4. **JS:** Adicione `maker.js` antes do fechamento da tag `</body>`.
