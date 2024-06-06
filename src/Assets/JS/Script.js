// script.js

/* global gtag */

export const initializeScripts = () => {
    const handleClickPacote = (event) => {
        const rotulo = event.target.dataset.rotulo;
        console.log(rotulo);

        if (typeof gtag === 'function') {
            gtag('event', 'click', { 'event_category': 'cardVet', 'event_label': rotulo });
        }
    };

    const handleVerDatasClick = (event) => {
        event.preventDefault();
        const cardId = event.target.getAttribute('data-card');
        const card = document.getElementById(cardId);

        if (card) {
            card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            card.style.transform = 'rotateY(-180deg) scaleX(-1)';
            card.classList.add('show-dates');
        }

        const destino = document.getElementById('destino');
        if (destino) {
            destino.style.transition = 'margin-top 0.5s ease';
            destino.style.marginTop = '30px';
        }

        const oferta2025 = document.getElementById('oferta-2025');
        if (oferta2025) {
            oferta2025.style.transition = 'margin-top 0.5s ease';
            oferta2025.style.marginTop = '600px';
        }
    };

    const handleVoltarClick = (event) => {
        event.preventDefault();
        const cardId = event.target.getAttribute('data-card');
        const card = document.getElementById(cardId);

        if (card) {
            card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            card.style.transform = 'rotateY(0deg)';
            card.classList.remove('show-dates');
        }

        const destino = document.getElementById('destino');
        if (destino) {
            destino.style.transition = 'margin-top 0.5s ease';
            destino.style.marginTop = '1%';
        }

        const oferta2025 = document.getElementById('oferta-2025');
        if (oferta2025) {
            oferta2025.style.transition = 'margin-top 0.5s ease';
            oferta2025.style.marginTop = '550px';
        }
    };

    const handleLinkEsgotadoClick = (event) => {
        event.preventDefault();
    };

    const verDatasButtons = document.querySelectorAll('.ver-datas');
    const voltarButtons = document.querySelectorAll('.voltar');
    const linksEsgotados = document.querySelectorAll('.esgotado');

    verDatasButtons.forEach(button => {
        button.addEventListener('click', handleVerDatasClick);
    });

    voltarButtons.forEach(button => {
        button.addEventListener('click', handleVoltarClick);
    });

    linksEsgotados.forEach(link => {
        link.addEventListener('click', handleLinkEsgotadoClick);
    });

    const pacoteButtons = document.querySelectorAll('.clickPacote');
    pacoteButtons.forEach(button => {
        button.addEventListener('click', handleClickPacote);
    });

    return () => {
        verDatasButtons.forEach(button => {
            button.removeEventListener('click', handleVerDatasClick);
        });

        voltarButtons.forEach(button => {
            button.removeEventListener('click', handleVoltarClick);
        });

        linksEsgotados.forEach(link => {
            link.removeEventListener('click', handleLinkEsgotadoClick);
        });

        pacoteButtons.forEach(button => {
            button.removeEventListener('click', handleClickPacote);
        });
    };
};
