const cards = document.querySelectorAll('.card');
let cartaEncontrada = false;
let primeiraCarta, segundaCarta;
let bloqueio = false;

function flipCard(){
    if(bloqueio) return;
    if (this === primeiraCarta) return;

    this.classList.add('flip');
    if(!cartaEncontrada){
        cartaEncontrada = true;
        primeiraCarta = this;
        return;
    }
    segundaCarta = this;
    cartaEncontrada = false;
    cartasIguais();
}
function cartasIguais(){
    if(primeiraCarta.dataset.card === segundaCarta.dataset.card){
        esconderCartas();
        window.alert("Parabéns, você acertou!");
        return;
        }
    desvirarCartas(); 
}

function esconderCartas(){
    primeiraCarta.removeEventListener('click',flipCard);
    segundaCarta.removeEventListener('click',flipCard);
    reiniciar();
}

function desvirarCartas(){
        bloqueio = true;
        setTimeout(() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');
        reiniciar();
         }, 1500);
}

function reiniciar(){
    [cartaEncontrada, bloqueio] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}

(function embaralhar(){
        cards.forEach((card) =>{
    let randonPosition = Math.floor(Math.random()* 12);
    card.style.order = randonPosition;
    
        })
    }
)();

cards.forEach((card) =>{
    card.addEventListener('click', flipCard)

});


 

