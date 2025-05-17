const sobre = document.getElementById("butSobre");

const titulo = document.querySelector("h1");
const texto = document.querySelectorAll("p");
const telaPrincipal = document.querySelector("main");
const minhaImagem = document.getElementById("minhaImagem");

let secaoAtual = "";

sobre.addEventListener("click", (e) => {
    e.preventDefault();
    sobre.style.background = "#3e3e5e";
    telaPrincipal.style.flexDirection = "column";
    minhaImagem.style.display = "flex";
    titulo.textContent = "Prazer, me sou Dyeggo Rodigues";

    if (secaoAtual === "sobre") return;
    secaoAtual = "sobre";

    telaPrincipal.classList.add("animacao-entrada");
    titulo.classList.add("animacao-entrada");
    minhaImagem.classList.add("animacao-entrada");
    texto.forEach(p => {
        p.style.display = "block";
    });

    
    telaPrincipal.addEventListener("animationend", () => {
        telaPrincipal.classList.remove("animacao-entrada");
    }, {once: true});
    
    titulo.addEventListener("animationend", () => {
        titulo.classList.remove("animacao-entrada");
    }, {once: true});

    minhaImagem.addEventListener("animationend", () => {
        minhaImagem.classList.remove("animacao-entrada");
    }, {once: true});

});
