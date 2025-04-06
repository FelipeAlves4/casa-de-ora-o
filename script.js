// Função para animar elementos ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
    const elementos = document.querySelectorAll('.info-card, .horarios-card, .galeria-item');
    
    function verificarVisibilidade() {
        elementos.forEach(elemento => {
            const posicao = elemento.getBoundingClientRect();
            if (posicao.top < window.innerHeight - 100) {
                elemento.classList.add('visivel');
            }
        });
    }

    window.addEventListener('scroll', verificarVisibilidade);
    verificarVisibilidade();
});

// Função para o botão do WhatsApp
function criarBotaoWhatsApp() {
    const botaoWhatsApp = document.createElement('a');
    botaoWhatsApp.href = 'https://wa.me/5514999999999'; // Substitua pelo número correto
    botaoWhatsApp.className = 'whatsapp-button';
    botaoWhatsApp.target = '_blank';
    botaoWhatsApp.innerHTML = `
        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg" 
             alt="WhatsApp" width="30" height="30">
        <span>Fale Conosco</span>
    `;
    document.body.appendChild(botaoWhatsApp);
}

// Inicializar o botão do WhatsApp
criarBotaoWhatsApp();

// Função para scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Função para header responsivo
function headerResponsivo() {
    const header = document.querySelector('header');
    let ultimaPosicaoScroll = window.scrollY;

    window.addEventListener('scroll', () => {
        const posicaoAtual = window.scrollY;
        
        // Esconde o header ao rolar para baixo
        if (posicaoAtual > ultimaPosicaoScroll && posicaoAtual > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        // Adiciona sombra ao header quando rolar a página
        if (posicaoAtual > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        ultimaPosicaoScroll = posicaoAtual;
    });
}

// Inicializar funções do header
headerResponsivo(); 