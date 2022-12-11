//Menu Mobile
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

//Carrossel
let trocaImagem = 4000;

function banner1() {
    document.getElementById("banner").src = "img/img1.jpg";
    setTimeout("banner2()", trocaImagem);
}

function banner2() {
    document.getElementById("banner").src = "img/img2.jpg";
    setTimeout("banner3()", trocaImagem);
}

function banner3() {
    document.getElementById("banner").src = "img/img3.jpg";
    setTimeout("banner1()", trocaImagem);
}


// Validação do CPF
function validacao() {
    console.log('iniciando validacao');
    let cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf.length);
    if (cpf.length == 11) {
        alert('Suas informações foram enviadas')
    } else {
        alert('CPF inválido')
    }
}
