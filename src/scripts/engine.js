const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
];

let cartasAbertas = [];
let emojisEmbaralhados = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {

    let caixa = document.createElement("div");
    caixa.className = "item";
    caixa.innerHTML = emojisEmbaralhados[i];
    caixa.onclick = clique;
    document.querySelector(".jogo").appendChild(caixa);
}

//Armazena as cartas que foram selecionadas no array "cartasAbertas".
function clique() {

    if(cartasAbertas.length < 2){
        this.classList.add("cartaAberta");
        cartasAbertas.push(this);
    }
    
    if(cartasAbertas.length == 2){
        setTimeout(verificarCombinacao, 500);
    }
}

function verificarCombinacao(){

    if(cartasAbertas[0].innerHTML == cartasAbertas[1].innerHTML){
        cartasAbertas[0].classList.add("cartaCombinada");
        cartasAbertas[1].classList.add("cartaCombinada");
    } else {
        cartasAbertas[0].classList.remove("cartaAberta");
        cartasAbertas[1].classList.remove("cartaAberta");
    }

    verificarVitoria();
    cartasAbertas = [];
}

function verificarVitoria(){

    if (document.querySelectorAll("cartaCombinada").length === emojis.length){
        alert("Você venceu! Eita que memória boa!");
    }
}