/* ==========================================
   ACESSIBILIDADE
========================================== */

const botaoAcessibilidade =
document.getElementById("btn-acessibilidade");

const painelAcessibilidade =
document.getElementById("painel-acessibilidade");

const aumentarFonte =
document.getElementById("aumentar-fonte");

const diminuirFonte =
document.getElementById("diminuir-fonte");

const altoContraste =
document.getElementById("alto-contraste");

/* tamanho global do site */

let tamanhoFonteGlobal = 100;

/* abrir painel */

botaoAcessibilidade.addEventListener("click", () => {

    painelAcessibilidade.classList.toggle("ativo");

});

/* aumentar fonte */

aumentarFonte.addEventListener("click", () => {

    if(tamanhoFonteGlobal < 180){

        tamanhoFonteGlobal += 10;

        document.documentElement.style.fontSize =
        tamanhoFonteGlobal + "%";

    }

});

/* diminuir fonte */

diminuirFonte.addEventListener("click", () => {

    if(tamanhoFonteGlobal > 70){

        tamanhoFonteGlobal -= 10;

        document.documentElement.style.fontSize =
        tamanhoFonteGlobal + "%";

    }

});

/* contraste */

altoContraste.addEventListener("click", () => {

    document.body.classList.toggle(
        "modo-contraste"
    );

});

/* fechar painel clicando fora */

document.addEventListener("click", (e) => {

    if(
        !painelAcessibilidade.contains(e.target) &&
        !botaoAcessibilidade.contains(e.target)
    ){

        painelAcessibilidade.classList.remove(
            "ativo"
        );

    }

});

/* ==========================================
   REVEAL AO ROLAR
========================================== */

const reveals =
document.querySelectorAll(".reveal");

function revelarElementos(){

    reveals.forEach((elemento)=>{

        const alturaTela =
        window.innerHeight;

        const topoElemento =
        elemento.getBoundingClientRect().top;

        const pontoVisivel = 120;

        if(topoElemento < alturaTela - pontoVisivel){

            elemento.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revelarElementos
);

revelarElementos();

/* ==========================================
   PARALLAX HERO
========================================== */

const hero =
document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth / 2 - e.clientX) / 40;

    const y =
    (window.innerHeight / 2 - e.clientY) / 40;

    hero.style.transform =
    `translate(${x}px, ${y}px)`;

});

/* ==========================================
   EFEITO 3D NOS CARDS
========================================== */

const cards =
document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width) - 0.5) * 20;

        const rotateX =
        ((y / rect.height) - 0.5) * -20;

        card.style.transform =

        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

/* ==========================================
   CONTADOR ANIMADO
========================================== */

const numeros =
document.querySelectorAll(".stat h3");

function iniciarContadores(){

    numeros.forEach((numero)=>{

        const alvo =
        parseInt(
        numero.innerText.replace("%","")
        );

        let contador = 0;

        const velocidade = alvo / 60;

        const atualizar = ()=>{

            contador += velocidade;

            if(contador < alvo){

                numero.innerText =
                Math.floor(contador) + "%";

                requestAnimationFrame(
                atualizar
                );

            }else{

                numero.innerText =
                alvo + "%";

            }

        };

        atualizar();

    });

}

let contadorExecutado = false;

window.addEventListener("scroll",()=>{

    const secaoImpacto =
    document.querySelector("#impacto");

    if(!secaoImpacto) return;

    const topo =
    secaoImpacto.getBoundingClientRect().top;

    if(
        topo < window.innerHeight &&
        !contadorExecutado
    ){

        iniciarContadores();

        contadorExecutado = true;

    }

});

/* ==========================================
   BRILHO DINÂMICO NOS CARDS
========================================== */

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =

        `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(110,255,123,.25),
        rgba(255,255,255,.05)
        )
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background =
        "rgba(255,255,255,.05)";

    });

});

/* ==========================================
   SCROLL SUAVE MENU
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const destino =
        document.querySelector(
        link.getAttribute("href")
        );

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});