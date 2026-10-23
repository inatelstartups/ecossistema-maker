# Ecossistema Maker e Fígital — Inatel Startups (Guia do Programador)

Este módulo contém a seção **Ecossistema Maker e Fígital (Fab Lab, Laboratório de Ideação e Estúdio Inatalks)** do Inatel Startups, exatamente idêntica à versão de produção no ar em `inatel.br/startups/plataforma-hubfigital`, mas com **solução definitiva para a sobreposição de cabeçalhos institucionais**.

---

## 🎯 Melhorias e Correções Implementadas

1. **Compatibilidade com o Menu Fixo Institucional:**
   - Todos os 3 modais abrem com posicionamento superior de segurança (`padding-top: 155px` no desktop e `110px` no mobile).
   - O título de cada modal e o botão de fechar (`&times;`) ficam **estritamente abaixo dos menus fixos do topo (~140px)**, nunca mais ficando escondidos.
   - Os modais possuem `max-height: calc(100vh - 190px)` e rolagem interna suave.

2. **Barra Lateral de Rolagem (Scrollbar) Institucional:**
   - Estilizada em tom **azul cobalto oficial** (`#065dc4` com borda `#066ce2`), idêntica ao design system do portal Inatel.

3. **Textos, Modais e CTAs Verbatim da Produção:**
   - **Fab Lab:** Apresentação MIT FabLab, botão modal `Solicitação de Orçamento ➔` direcionando ao Google Forms oficial.
   - **Laboratório de Ideação:** Subtítulo *"Criatividade, conhecimento e cocriação"*, botão modal `Solicitar Reserva do Espaço ➔` (`mailto:startups@inatel.br`).
   - **Estúdio Inatalks:** Apresentação audiovisual 4K com microfones Shure, 2 colunas de benefícios e botão modal `Solicitar Reserva do Estúdio ➔` (`mailto:startups@inatel.br`).

---

## 🔗 Links Oficiais

- **URL do Frame Direto (GitHub Pages):** [https://inatelstartups.github.io/ecossistema-maker/](https://inatelstartups.github.io/ecossistema-maker/)
- **Repositório GitHub:** [https://github.com/inatelstartups/ecossistema-maker](https://github.com/inatelstartups/ecossistema-maker)

---

## ⚡ Opção 1 (Recomendada): Inserir via Embed (`<iframe>`)

Basta colar o trecho abaixo no local exato onde o bloco deve aparecer:

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

        // Auto-redimensionamento dinâmico
        if (event.data.type === 'inatel-maker-resize' && event.data.height) {
            iframe.style.height = event.data.height + 'px';
        }
        // Expansão ao abrir o modal
        if (event.data.type === 'inatel-maker-modal-opened') {
            iframe.style.height = Math.max(950, event.data.height || 950) + 'px';
        }
        // Retorno da altura normal ao fechar
        if (event.data.type === 'inatel-maker-modal-closed') {
            iframe.style.height = '580px';
        }
    });
</script>
```

---

## 🧩 Opção 2: Inclusão Direta no Código-Fonte

Caso prefira mesclar diretamente nos arquivos do site:
1. **HTML:** Copie a tag `<main class="hub-main">` com a `<section id="maker">` e os modais (`#fablab-modal`, `#lab-ideacao-modal`, `#inatalks-modal`) de `index.html`.
2. **CSS:** Adicione os estilos de `style.css`.
3. **Imagens:** Certifique-se de que a pasta `elementos/` (`fablab.jpg`, `lab_ideacao.jpg`, `inatalks.png`) esteja acessível.
4. **JS:** Adicione `maker.js` antes do fechamento de `</body>`.
