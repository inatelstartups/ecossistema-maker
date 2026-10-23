/* ======================================================================
   INATEL STARTUPS — ECOSSISTEMA MAKER E FÍGITAL
   Lógica do Modal Pop-up Compatível com Menus Fixos
   ====================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Detecta se está sendo executado dentro de um <iframe>
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
        document.body.classList.add('in-iframe');
    }

    // Dados detalhados dos espaços do Ecossistema Maker
    const makerData = {
        fablab: {
            id: 'fablab',
            badge: 'Fab Lab Oficial • Rede MIT',
            title: 'Fab Lab Inatel',
            subtitle: 'Prototipagem rápida, fabricação digital e validação de hardware',
            image: 'elementos/fablab.jpg',
            imageAlt: 'Fab Lab Inatel - Equipamentos de Fabricação Digital MIT',
            paragraphs: [
                'O Fab Lab Inatel integra a rede mundial de laboratórios de fabricação digital criada pelo MIT (Massachusetts Institute of Technology). Um espaço de inovação aberta preparado para apoiar alunos, startups, pesquisadores e empresas a transformarem ideias em protótipos funcionais com maquinário de ponta e suporte técnico especializado.',
                'Da concepção à manufatura física: realize modelagem 3D, fresagem de placas de circuito impresso (PCI), cortes a laser milimétricos e validação ágil de hardware físico com metodologia maker e engenharia aplicada.'
            ],
            features: [
                {
                    title: 'Impressão 3D Avançada',
                    desc: 'Tecnologias FDM e SLA de alta resolução para peças estruturais, gabinetes e protótipos complexos.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'
                },
                {
                    title: 'Corte e Gravação a Laser',
                    desc: 'Corte milimétrico em acrílico, MDF, tecidos e EVA, além de gravação precisa em superfícies metálicas e polímeros.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m0-13l2.1 2.1m8.8 8.8l2.1 2.1"></path></svg>'
                },
                {
                    title: 'Fresagem de Circuitos (PCI)',
                    desc: 'Usinagem rápida de placas eletrônicas de dupla face para montagem e testes de circuitos sem espera de importação.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><line x1="9" y1="9" x2="9" y2="9.01"></line><line x1="15" y1="9" x2="15" y2="9.01"></line><line x1="9" y1="15" x2="9" y2="15.01"></line><line x1="15" y1="15" x2="15" y2="15.01"></line></svg>'
                },
                {
                    title: 'Fresadoras CNC de Precisão',
                    desc: 'Usinagem em madeira, polímeros técnicos e ligas leves para criação de mockups funcionais e caixas industriais.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>'
                }
            ],
            ctaPrimaryText: 'Solicitar Atendimento Fab Lab',
            ctaPrimaryUrl: 'mailto:startups@inatel.br?subject=Solicita%C3%A7%C3%A3o%20de%20Atendimento%20-%20Fab%20Lab%20Inatel',
            ctaSecondaryText: 'Dúvidas e Equipamentos',
            ctaSecondaryUrl: 'mailto:startups@inatel.br?subject=D%C3%BAvidas%20sobre%20Equipamentos%20-%20Fab%20Lab'
        },
        ideacao: {
            id: 'ideacao',
            badge: 'Cocriação & Metodologias Ágeis',
            title: 'Laboratório de Ideação',
            subtitle: 'Espaço modular e colaborativo para dinâmicas de Design Thinking e inovação',
            image: 'elementos/lab_ideacao.jpg',
            imageAlt: 'Laboratório de Ideação Inatel - Espaço modular e criativo',
            paragraphs: [
                'O Laboratório de Ideação é um ambiente lúdico, flexível e totalmente adaptável projetado para estimular a ideação, o pensamento criativo e dinâmicas colaborativas. É o local de convergência onde founders e equipes multidisciplinares desenham modelos de negócio e soluções orientadas ao usuário.',
                'Com mobiliário móvel, múltiplos painéis para escrita, recursos visuais e kits de ideação, o espaço apoia desde reuniões de brainstorm até hackathons de imersão e workshops intensivos de validação de propostas de valor.'
            ],
            features: [
                {
                    title: 'Layout 100% Modular',
                    desc: 'Mobiliário com rodízios configurável instantaneamente para apresentações, ilhas de trabalho ou plenárias.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'
                },
                {
                    title: 'Design Thinking & Validação',
                    desc: 'Facilitação prática com ferramentas visuais (Lean Canvas, Mapa de Empatia e Jornada do Usuário).',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 3.3 2 6.1 5 7.4V19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1.6c3-1.3 5-4.1 5-7.4a8 8 0 0 0-8-8z"></path><line x1="9" y1="21" x2="15" y2="21"></line></svg>'
                },
                {
                    title: 'Hackathons e Dinâmicas',
                    desc: 'Infraestrutura completa de conectividade e energia dimensionada para maratonas de desenvolvimento criativo.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'
                },
                {
                    title: 'Apoio Metodológico Inatel',
                    desc: 'Acompanhamento de especialistas do Hub em frameworks modernos de empreendedorismo inovador.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
                }
            ],
            ctaPrimaryText: 'Reservar Espaço de Ideação',
            ctaPrimaryUrl: 'mailto:startups@inatel.br?subject=Reserva%20de%20Espa%C3%A7o%20-%20Laborat%C3%B3rio%20de%20Idea%C3%A7%C3%A3o',
            ctaSecondaryText: 'Consultar Disponibilidade',
            ctaSecondaryUrl: 'mailto:startups@inatel.br?subject=Disponibilidade%20-%20Laborat%C3%B3rio%20de%20Idea%C3%A7%C3%A3o'
        },
        inatalks: {
            id: 'inatalks',
            badge: 'Produção Audiovisual 4K',
            title: 'Estúdio Inatalks',
            subtitle: 'Captação multi-câmera em 4K e gravação de alta fidelidade para podcasts e cursos',
            image: 'elementos/inatalks.png',
            imageAlt: 'Estúdio Inatalks - Gravação profissional de podcasts e cursos',
            paragraphs: [
                'O Estúdio Inatalks oferece infraestrutura audiovisual profissional no campus Inatel para produção de conteúdos de alta relevância por startups, mentores e parceiros do ecossistema. Um ambiente acusticamente tratado e decorado para gravações com padrão de excelência.',
                'Captação multi-câmera em resolução 4K Ultra HD, microfones padrão ouro broadcast e suporte técnico hands-on em tempo integral. E o melhor: você finaliza sua sessão e já leva todos os arquivos brutos copiados na hora para sua edição.'
            ],
            features: [
                {
                    title: 'Captação Multi-câmera 4K',
                    desc: 'Sensores de alta fidelidade e enquadramentos dinâmicos para valorizar o convidado e o moderador.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>'
                },
                {
                    title: 'Microfones Shure Padrão Ouro',
                    desc: 'Microfonia de estúdio com pré-amplificadores profissionais, filtros pop e isolamento de ruído ambiente.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>'
                },
                {
                    title: 'Lounge Climatizado e Conforto',
                    desc: 'Área de convivência aconchegante para alinhamento pré-gravação e conforto total dos convidados.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path><path d="M6 18v2"></path><path d="M18 18v2"></path></svg>'
                },
                {
                    title: 'Entrega Imediata dos Brutos',
                    desc: 'Ao encerrar a gravação, leve imediatamente todos os arquivos de áudio e vídeo na íntegra para agilizar a publicação.',
                    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>'
                }
            ],
            ctaPrimaryText: 'Solicitar Reserva do Estúdio',
            ctaPrimaryUrl: 'mailto:startups@inatel.br?subject=Reserva%20de%20Est%C3%BAdio%20-%20Inatalks',
            ctaSecondaryText: 'Falar com a Produção',
            ctaSecondaryUrl: 'mailto:startups@inatel.br?subject=D%C3%BAvidas%20sobre%20Est%C3%BAdio%20Inatalks'
        }
    };

    // Elementos DOM do Modal
    const modalOverlay = document.getElementById('maker-modal');
    const modalBadge = document.getElementById('maker-modal-badge');
    const modalTitle = document.getElementById('maker-modal-title');
    const modalSubtitle = document.getElementById('maker-modal-subtitle');
    const modalImg = document.getElementById('maker-modal-img');
    const modalTexts = document.getElementById('maker-modal-texts');
    const modalFeatures = document.getElementById('maker-modal-features');
    const modalCtaPrimary = document.getElementById('maker-modal-cta-primary');
    const modalCtaSecondary = document.getElementById('maker-modal-cta-secondary');
    const modalCloseBtn = document.getElementById('maker-modal-close');

    // Cards clicáveis
    const cards = document.querySelectorAll('.maker-card');

    // Comunicação com página hospedeira (Auto-resize)
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

    // Abre o pop-up com os dados do espaço selecionado
    function openModal(spaceKey) {
        const data = makerData[spaceKey];
        if (!data || !modalOverlay) return;

        modalBadge.textContent = data.badge;
        modalTitle.textContent = data.title;
        modalSubtitle.textContent = data.subtitle;

        modalImg.src = data.image;
        modalImg.alt = data.imageAlt;

        // Renderiza textos
        modalTexts.innerHTML = data.paragraphs.map(p => `<p>${p}</p>`).join('');

        // Renderiza features
        modalFeatures.innerHTML = data.features.map(f => `
            <div class="maker-modal-feature-item">
                <div class="maker-modal-feature-icon">${f.icon}</div>
                <div class="maker-modal-feature-text">
                    <strong>${f.title}</strong>
                    <span>${f.desc}</span>
                </div>
            </div>
        `).join('');

        // CTAs
        modalCtaPrimary.innerHTML = `
            <span>${data.ctaPrimaryText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        `;
        modalCtaPrimary.href = data.ctaPrimaryUrl;

        modalCtaSecondary.textContent = data.ctaSecondaryText;
        modalCtaSecondary.href = data.ctaSecondaryUrl;

        // Exibe modal
        modalOverlay.classList.add('open');
        modalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = isInIframe ? '' : 'hidden';

        // Notifica o iframe pai para acomodar o pop-up
        if (isInIframe) {
            window.parent.postMessage({
                type: 'inatel-maker-modal-opened',
                height: 920
            }, '*');
        }
    }

    // Fecha o modal
    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('open');
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        if (isInIframe) {
            window.parent.postMessage({
                type: 'inatel-maker-modal-closed'
            }, '*');
            notifyParentResize();
        }
    }

    // Listeners nos cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const spaceKey = card.getAttribute('data-space');
            openModal(spaceKey);
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const spaceKey = card.getAttribute('data-space');
                openModal(spaceKey);
            }
        });
    });

    // Fechar pelo botão X
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    // Fechar ao clicar no backdrop (fora da caixa de conteúdo)
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
            closeModal();
        }
    });

    // ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
        notifyParentResize();
    });
    resizeObserver.observe(document.body);
    window.addEventListener('resize', notifyParentResize);

    notifyParentResize();
});
