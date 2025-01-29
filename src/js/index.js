let Imagens= ["src/imagens/interior1.jpg", "src/imagens/interior2.jpg"];

let indice = 0;

function trocaDasImagens(){
    indice ++;
    if(indice >= Imagens.length){
        indice =0;
    }
    document.querySelector('.troca-imagens').src=Imagens[indice];

}

setInterval(trocaDasImagens, 4000)


const btn = document.querySelector(".btn").addEventListener('click', ()=>{
    const cards = document.querySelector(".cards")

    cards.classList.add('ativarcards');
    
    btn.classList.remove('animacao');
    btn.classList.add('clicado');
});

const hamburguer = document.querySelector('.hamburguer');
let navList = document.querySelector('.nav-list'); 

hamburguer.addEventListener('click', ()=>{
    navList.classList.toggle('ativar');
});