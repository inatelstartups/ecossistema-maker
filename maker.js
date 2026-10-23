document.addEventListener('DOMContentLoaded', () => {

    /* ================= FABLAB MODAL HANDLERS ================= */
    const fablabOverlay = document.getElementById('fablab-modal');
    const fablabClose = fablabOverlay ? fablabOverlay.querySelector('.modal-close') : null;
    const fablabTrigger = document.getElementById('fablab-trigger');

    function openFablabModal(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (fablabOverlay) {
            fablabOverlay.classList.add('open');
            fablabOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeFablabModal() {
        if (fablabOverlay) {
            fablabOverlay.classList.remove('open');
            fablabOverlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    const fablabCard = fablabTrigger ? fablabTrigger.closest('.maker-card') : null;
    if (fablabCard) {
        fablabCard.addEventListener('click', openFablabModal);
        fablabCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openFablabModal();
            }
        });
    }
    if (fablabClose) {
        fablabClose.addEventListener('click', closeFablabModal);
    }
    if (fablabOverlay) {
        fablabOverlay.addEventListener('click', (e) => {
            if (e.target === fablabOverlay) closeFablabModal();
        });
    }

    /* ================= LAB DE IDEAÇÃO MODAL HANDLERS ================= */
    const labIdeacaoOverlay = document.getElementById('lab-ideacao-modal');
    const labIdeacaoClose = labIdeacaoOverlay ? labIdeacaoOverlay.querySelector('.modal-close') : null;
    const labIdeacaoTrigger = document.getElementById('lab-ideacao-trigger');

    function openLabIdeacaoModal(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (labIdeacaoOverlay) {
            labIdeacaoOverlay.classList.add('open');
            labIdeacaoOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLabIdeacaoModal() {
        if (labIdeacaoOverlay) {
            labIdeacaoOverlay.classList.remove('open');
            labIdeacaoOverlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    const labIdeacaoCard = labIdeacaoTrigger ? labIdeacaoTrigger.closest('.maker-card') : null;
    if (labIdeacaoCard) {
        labIdeacaoCard.addEventListener('click', openLabIdeacaoModal);
        labIdeacaoCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLabIdeacaoModal();
            }
        });
    }
    if (labIdeacaoClose) {
        labIdeacaoClose.addEventListener('click', closeLabIdeacaoModal);
    }
    if (labIdeacaoOverlay) {
        labIdeacaoOverlay.addEventListener('click', (e) => {
            if (e.target === labIdeacaoOverlay) closeLabIdeacaoModal();
        });
    }

    /* ================= INATALKS MODAL HANDLERS ================= */
    const inatalksOverlay = document.getElementById('inatalks-modal');
    const inatalksClose = inatalksOverlay ? inatalksOverlay.querySelector('.modal-close') : null;
    const inatalksTrigger = document.getElementById('inatalks-trigger');

    function openInatalksModal(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (inatalksOverlay) {
            inatalksOverlay.classList.add('open');
            inatalksOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeInatalksModal() {
        if (inatalksOverlay) {
            inatalksOverlay.classList.remove('open');
            inatalksOverlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    const inatalksCard = inatalksTrigger ? inatalksTrigger.closest('.maker-card') : null;
    if (inatalksCard) {
        inatalksCard.addEventListener('click', openInatalksModal);
        inatalksCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openInatalksModal();
            }
        });
    }
    if (inatalksClose) {
        inatalksClose.addEventListener('click', closeInatalksModal);
    }
    if (inatalksOverlay) {
        inatalksOverlay.addEventListener('click', (e) => {
            if (e.target === inatalksOverlay) closeInatalksModal();
        });
    }

    /* Global Escape key support to close any open modal */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeFablabModal();
            closeLabIdeacaoModal();
            closeInatalksModal();
        }
    });
});
