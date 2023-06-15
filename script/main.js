const btnNightMode = document.getElementById('nightMode');
const btnNightMode2 = document.getElementById('nightMode2');
const btnNightMode3 = document.getElementById('nightMode3');
const mobileHeader = document.getElementById('mobileHeader');
const mobileMenu = document.getElementById('mobileMenu');
const asideMobile = document.getElementById('aside');
const desktopHeader = document.getElementById('desktop');
const buttons = [...document.getElementsByTagName('button')];
const recomend = document.getElementById('recomendados');
const btnFontUp = document.getElementById('fontUp');
const btnFontDown = document.getElementById('fontDown');
const btnFontUp2 = document.getElementById('fontUp2');
const btnFontDown2 = document.getElementById('fontDown2');
const paragrafros = document.getElementsByTagName('p');
const titulos = document.getElementsByTagName('h3');
const btns = document.getElementsByTagName('button');
const listas = document.getElementsByTagName('li');
const pagProduto = document.getElementById('bodyProduto');
let nmON = 0;
let size = 1;

const arrayParag = [...paragrafros, ...titulos, ...btns, ...listas];

console.log(arrayParag);

const btnPerfil = document.getElementById('perfil');

btnPerfil.addEventListener('click', () => {

    asideMobile.classList.toggle('show');
});

btnNightMode.addEventListener('click', () => {
    mobileHeader.classList.toggle('nmON');
    mobileMenu.classList.toggle('nmON');
    asideMobile.classList.toggle('nmON');
    desktopHeader.classList.toggle('nmON');
    buttons.forEach(e => {
        if (e.style.color == 'white') {
            e.style.color = 'black';
        } else {
            e.style.color = 'white';
            e.style.backgroundColor = 'transparent';
        }
    });
    recomend.classList.toggle('nmON');

});

btnNightMode2.addEventListener('click', () => {
    mobileHeader.classList.toggle('nmON');
    mobileMenu.classList.toggle('nmON');
    asideMobile.classList.toggle('nmON');
    desktopHeader.classList.toggle('nmON');
    buttons.forEach(e => {
        if (e.style.color == 'white') {
            e.style.color = 'black';
        } else {
            e.style.color = 'white';
            e.style.backgroundColor = 'transparent';
        }
    });
    recomend.classList.toggle('nmON');

});

btnFontUp.addEventListener('click', () => {
    size = size + 0.2;
    arrayParag.forEach(e => {

        e.style.fontSize = size + 'rem';

    });
});

btnFontDown.addEventListener('click', () => {
    size = size - 0.2;
    arrayParag.forEach(e => {

        e.style.fontSize = size + 'rem';

    });
});

btnFontUp2.addEventListener('click', () => {
    size = size + 0.2;
    arrayParag.forEach(e => {
        e.style.fontSize = size + 'rem';

    });
});

btnFontDown2.addEventListener('click', () => {
    size = size - 0.2;
    arrayParag.forEach(e => {
        e.style.fontSize = size + 'rem';

    });
});