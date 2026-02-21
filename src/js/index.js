const url = "http://127.0.0.1:8000";

let Imagens = ["src/imagens/interior1.jpg", "src/imagens/interior2.jpg"];

let indice = 0;

function trocaDasImagens() {
    indice++;
    if (indice >= Imagens.length) {
        indice = 0;
    }
    document.querySelector('.troca-imagens').src = Imagens[indice];

}

setInterval(trocaDasImagens, 4000)


const btn = document.querySelector(".btn").addEventListener('click', () => {
    const cards = document.querySelector(".cards")

    cards.classList.add('ativarcards');

    btn.classList.remove('animacao');
    btn.classList.add('clicado');
});

const hamburguer = document.querySelector('.hamburguer');
let navList = document.querySelector('.nav-list');

hamburguer.addEventListener('click', () => {
    navList.classList.toggle('ativar');
});


async function pegarProdutos() {

    let path = `${url}/items/produtos`;
    let conteudo = await fetch(path);

    let resp = await conteudo.json()

    let card = '';
    resp.msg.forEach(el => {
        card += `<div  class="cards-novidades">
        <img src="${"../../backend/" + el.imagemProd
            }" alt="imagem de um lustre na cor preta">

        <div class= "valorEinfo" >
                    <span>${el.preco}</span>
                    <p>${el.nome}</p>
            </div >
        <div class="carrinho-card">
            <button>  <i class='bx bx-cart-download'></i> Adicionar</button>
           
        </div>
        </div > `
    });

    document.querySelector('.cards').innerHTML = card;
    console.log(resp)

}


pegarProdutos(); 