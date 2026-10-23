/* ======================================================================
   INATEL STARTUPS — DATA E HANDLERS PARA ECOSSISTEMA MAKER E FÍGITAL
   Exatamente igual ao site oficial, com abertura abaixo do menu fixo
   ====================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
        document.body.classList.add('in-iframe');
    }

    const allModals = document.querySelectorAll('.modal-overlay');

    function notifyParentResize() {
        if (!isInIframe) return;
        try {
            const height = document.documentElement.scrollHeight || document.body.scrollHeight;
            window.parent.postMessage({
                type: 'inatel-maker-resize',
                height: height
            }, '*');
        } catch (e) {}
    }

    function openModalById(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = isInIframe ? '' : 'hidden';

        if (isInIframe) {
            window.parent.postMessage({
                type: 'inatel-maker-modal-opened',
                height: 920
            }, '*');
        }
    }

    function closeAllModals() {
        allModals.forEach(modal => {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
        });
        document.body.style.overflow = '';

        if (isInIframe) {
            window.parent.postMessage({
                type: 'inatel-maker-modal-closed'
            }, '*');
            notifyParentResize();
        }
    }

    // Clique nos cards Maker
    const makerCards = document.querySelectorAll('.maker-card');
    makerCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const targetId = card.getAttribute('data-modal-target');
            if (targetId) {
                openModalById(targetId);
            }
        });
    });

    // Clique nos botões "Saiba mais"
    const triggers = document.querySelectorAll('.maker-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = trigger.getAttribute('data-target');
            if (targetId) {
                openModalById(targetId);
            }
        });
    });

    // Botões de fechar
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllModals();
        });
    });

    // Fechar ao clicar no backdrop escuro
    allModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });

    // Fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    const resizeObserver = new ResizeObserver(() => {
        notifyParentResize();
    });
    resizeObserver.observe(document.body);
    window.addEventListener('resize', notifyParentResize);

    notifyParentResize();
});
