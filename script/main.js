const btnNightMode = document.getElementById('nightMode');
const mobileHeader = document.getElementById('mobileHeader');
const mobileMenu = document.getElementById('mobileMenu');
const buttons = [...document.getElementsByTagName('button'), ...document.getElementsByTagName('h3')];
const asideMobile = document.getElementById('aside');
const recomend = document.getElementById('recomendados');
const btnFontUp = document.getElementById('fontUp');
const btnFontDown = document.getElementById('fontDown');
const paragrafros = document.getElementsByTagName('p');
const titulos = document.getElementsByTagName('h3');
const btns = document.getElementsByTagName('button');
let nmON = 0;
let size = 1.4;

const arrayParag = [...paragrafros, ...titulos, ...btns];

console.log(arrayParag);

const btnPerfil = document.getElementById('perfil');

btnPerfil.addEventListener('click', () => {
    if (asideMobile.style.display == 'none'){
        asideMobile.style.display = 'block';

    } else {
        asideMobile.style.display = 'none';
    }
})

btnNightMode.addEventListener('click', () => {
    if (nmON == 0) {
        mobileHeader.classList.add('nmON');
        mobileMenu.classList.add('nmON');
        asideMobile.classList.add('nmON')
        buttons.forEach(e => {
            e.style.color = 'white';
            e.style.backgroundColor = 'transparent'
        });
        recomend.classList.add ('nmON')
        nmON = 1;
    } else {
        mobileHeader.classList.remove('nmON');
        mobileMenu.classList.remove('nmON');
        asideMobile.classList.remove('nmON');
        buttons.forEach(e => {
            e.style.color = 'black';
            e.style.backgroundColor = 'transparent';
        });
        recomend.classList.remove('nmON');
        nmON = 0;
    }
})

btnFontUp.addEventListener('click', () => {
    size = size+0.2;
    arrayParag.forEach(e => {
        
            e.style.fontSize = size + 'rem';
        
    });
})

btnFontDown.addEventListener('click', () => {
    size = size-0.2;
    arrayParag.forEach(e => {
            
            e.style.fontSize = size + 'rem';
        
    });
})