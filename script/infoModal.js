// Função que exibe o modal ao carregar a página
window.onload = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // Exibe o modal
};

// Selecionar o botão de fechar
const closeModal = document.getElementById('closeModal');

// Fechar o modal ao clicar no botão
closeModal.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Esconde o modal
});

// Função para controlar o slide
let currentSlide = 0;

// Função para mudar o slide
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Adicionar evento ao botão Info para exibir o modal
const infoBtn = document.getElementById('info');
infoBtn.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // Exibe o modal

    // Inicializa o slide no modal
    currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
});