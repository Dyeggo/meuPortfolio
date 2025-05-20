window.addEventListener("DOMContentLoaded", () => {

    const h1 = document.querySelector(".logoPrincipal");
    h1.style.display = "block";
    h1.classList.add("animacao-logo-principal");
    removerAnimacaoFinal(h1);

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
    
    //funçao para remover a animação no  final
    function removerAnimacaoFinal (elemento) {
        elemento.addEventListener("animationend", () => {
            elemento.classList.remove("animacao-entrada");
        }, {once: true});
    }

    sobre.addEventListener("click", (e) => {
        e.preventDefault();

        if (secaoAtual === "sobre") return;
        secaoAtual = "sobre";

        h1.style.display = "none";
        skills.style.background = "none";
        sobre.style.background = "#3e3e5e";
        telaPrincipal.style.flexDirection = "column";
        minhaImagem.style.display = "flex";
        titulo.textContent = "Prazer, sou Dyeggo Rodigues.";

        // esconder skills
        minhaSkills.forEach(img => {
            img.style.display = "none";
            img.classList.remove("animacao-entrada");
        });

        subTitulo.style.display = "none";
        listaSkills.style.display = "none";

        telaPrincipal.classList.add("animacao-entrada");
        removerAnimacaoFinal(telaPrincipal);

        titulo.classList.add("animacao-entrada");
        removerAnimacaoFinal(titulo);

        minhaImagem.classList.add("animacao-entrada");
        removerAnimacaoFinal(minhaImagem);

        texto.forEach(p => {
            p.style.display = "block";
        });
    });

    skills.addEventListener("click", (e) => {
        e.preventDefault();

        if (secaoAtual === "skills") return;
        secaoAtual = "skills";
        
        h1.style.display = "none";
        titulo.textContent = "Hard Skills";
        sobre.style.background = "none";
        skills.style.background = "#3e3e5e";
        minhaImagem.style.display = "none";
        telaPrincipal.style.flexDirection = "column";
        texto.forEach(p => {
            p.style.display = "none";
        });

        titulo.classList.remove("animacao-logo-principal");
        titulo.classList.add("animacao-entrada");
        removerAnimacaoFinal(titulo);

        minhaSkills.forEach( img => {
            img.style.display = "flex";
            img.classList.add("animacao-entrada");
            removerAnimacaoFinal(img);
        });

        subTitulo.classList.add("animacao-entrada");
        removerAnimacaoFinal(subTitulo);
        subTitulo.style.display = "flex";

        listaSkills.classList.add("animacao-entrada");
        removerAnimacaoFinal(listaSkills);
        listaSkills.style.display = "flex";
    });

});
