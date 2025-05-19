window.addEventListener("DOMContentLoaded", () => {

    const h1 = document.getElementById("logoPrincipal");
    h1.classList.remove("animacao-entrada");
    h1.classList.add("animacao-logo-principal");

    const sobre = document.getElementById("butSobre");
    const skills = document.getElementById("butSkills");

    const titulo = document.querySelector("h1");
    const texto = document.querySelectorAll("p");
    const telaPrincipal = document.querySelector("main");
    const minhaImagem = document.getElementById("minhaImagem");
    const minhaSkills = document.querySelectorAll(".minhaSkills");
    const subTitulo = document.querySelector("h2");
    const listaSkills = document.querySelector("ul");

    let secaoAtual = "";

    sobre.addEventListener("click", (e) => {
        e.preventDefault();

        if (secaoAtual === "sobre") return;
        secaoAtual = "sobre";

        skills.style.background = "none";
        sobre.style.background = "#3e3e5e";
        telaPrincipal.style.flexDirection = "column";
        minhaImagem.style.display = "flex";
        titulo.textContent = "Prazer, me sou Dyeggo Rodigues";

        // esconder skills
        minhaSkills.forEach(img => {
            img.style.display = "none";
            img.classList.remove("animacao-entrada");
        });

        subTitulo.style.display = "none";
        listaSkills.style.display = "none";

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

    skills.addEventListener("click", (e) => {
        e.preventDefault();

        if (secaoAtual === "skills") return;
        secaoAtual = "skills";
        
        titulo.textContent = "Minhas Skills";
        sobre.style.background = "none";
        skills.style.background = "#3e3e5e";
        minhaImagem.style.display = "none";
        telaPrincipal.style.flexDirection = "column";
        
        texto.forEach(p => {
            p.style.display = "none";
        });

        titulo.classList.remove("animacao-logo-principal");
        titulo.classList.remove("animacao-entrada");
        void titulo.offsetWidth;

        titulo.classList.add("animacao-entrada");
        minhaSkills.forEach( img => {
            img.style.display = "flex";
            img.classList.add("animacao-entrada");
        });

        subTitulo.classList.add("animacao-entrada");
        listaSkills.classList.add("animacao-entrada");
        subTitulo.style.display = "flex";
        listaSkills.style.display = "flex";

        titulo.addEventListener("animationend", () => {
            titulo.classList.remove("animacao-entrada");
        }, {once: true});

        minhaSkills.addEventListener("animationend", () => {
            minhaSkills.classList.remove("animacao-entrada");
        }, {once: true});

        subTitulo.addEventListener("animationend", () => {
            subTitulo.classList.remove("animacao-entrada");
        }, {once: true});

        listaSkills.addEventListener("animationend", () => {
            listaSkills.classList.remove("animacao-entrada");
        }, {once: true});

    });

});
