let btnAcessar = document.querySelectorAll('.btnAcessar');
let links = [
    './intro/intro.html',
    './win/win.html',
    './word/word.html',
    './excel/excel.html',
    './dep-pessoal/dep-pessoal.html'
];

btnAcessar.forEach((curso, index) => {
    curso.addEventListener('click', () => {
        window.location.href = links[index];
    });
});

let devsBtn = document.querySelectorAll('.devsBtn');
devsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location.href = './devs.html';
    });
});

let inicioBtn = document.querySelectorAll('.inicio');
inicioBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location.href = './home.html'
    });
});


// quantidade intro
import { introDetails } from "./intro/intro.js";
function quantidadeIntro() {
    const introQuantidade = introDetails.videoLink.length;
    let numAulas = document.querySelectorAll('.numAulas');
    if (numAulas.length > 0) {
        numAulas[0].innerHTML = `${introQuantidade + 5}/16`;
    }
}
quantidadeIntro();

// quantidade win
import { winDetails } from "./win/win.js"
function quantidadeWin() {
    const winQuantidade = winDetails.videoLink.length;
    let numAulas = document.querySelectorAll('.numAulas');
    if (numAulas.length > 1) {
        numAulas[1].innerHTML = `${winQuantidade + 5}/16`;
    }
}
quantidadeWin();

// quantidade word
import { wordDetails } from "./word/word.js";
function quantidadeWord() {
    const wordQuantidade = wordDetails.videoLink.length;
    let numAulas = document.querySelectorAll('.numAulas');
    if (numAulas.length > 2) {
        numAulas[2].innerHTML = `${wordQuantidade + 5}/16`;
    }
}
quantidadeWord();

// quantidade excel
import { excelDetails } from "./excel/excel.js"
function quantidadeExcel() {
    const excelQuantidade = excelDetails.videoLink.length;
    let numAulas = document.querySelectorAll('.numAulas');
    if (numAulas.length > 3) {
        numAulas[3].innerHTML = `${excelQuantidade + 5}/16`;
    }
}
quantidadeExcel();

// quantidade dep pessoal
import { depPessoalDetails } from "./dep-pessoal/dep-pessoal.js"
function quantidadeDepPessoal() {
    const depPessoalQuantidade = depPessoalDetails.videoLink.length;
    let numAulas = document.querySelectorAll('.numAulas');
    if (numAulas.length > 4) {
        numAulas[4].innerHTML = `${depPessoalQuantidade + 5}/16`;
    }
}
quantidadeDepPessoal();

let userName = document.querySelectorAll('.userName');
userName.forEach((userName) => {
    userName.innerHTML = `Aluno: Dev David Silva`;
});

const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

// Fechar o modal ao clicar no botão
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Mostrar o modal automaticamente ao carregar a página
window.onload = () => {
    modal.style.display = 'flex';
};