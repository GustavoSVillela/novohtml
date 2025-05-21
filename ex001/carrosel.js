//pegar p HTML todo
// pegar o botão
// saber que está sendo clicado no botão
//saber o que está sendo clicado no botão 

//pegar o elements 
//mover o carrosel


const btnRight =  window.document.querySelector('.-right');
const btnleft =  window.document.querySelector('.-left');

const elements = window.document.querySelector('.elements');
let pixels = 0;

btnRight.addEventListener('click', function(){
    pixels = pixels + 50
    elements.style = `transform: translateX(${pixels}px);`
});

btnleft.addEventListener('click', function(){
    pixels = pixels - 50
    elements.style = `transform: translateX(${pixels}px);`
});