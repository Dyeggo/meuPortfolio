window.addEventListener("DOMContentLoaded", () => {

    const h1 = document.querySelector(".logoPrincipal");
    h1.style.display = "block";
    h1.classList.add("animacao-logo-principal");
    removerAnimacaoFinal(h1);

    const sobre = document.getElementById("butSobre");
    const skills = document.getElementById("butSkills");
    const projetos = document.getElementById("butProjetos");

    const secaoSobre = document.querySelector(".secaoSobre");
    const secaoSkills = document.querySelector(".secaoSkills");
    const secaoProjetos = document.querySelector(".secaoProjetos");

    const menuBotao = document.querySelector(".menuBotao");
    const botaoFechar = document.querySelector(".botaoFechar");
    const menuLateral = document.querySelector("aside");

    let secaoAtual = "";
    
    //funçao para remover a animação no  final
    function removerAnimacaoFinal (elemento) {
        elemento.addEventListener("animationend", () => {
            elemento.classList.remove("animacao-logo-principal");
        }, {once: true});
    }

    sobre.addEventListener("click", (e) => {
        e.preventDefault();

        if (secaoAtual === "sobre") return;
        secaoAtual = "sobre";

        h1.style.display = "none";
        skills.style.background = "none";
        projetos.style.background = "none";
        sobre.style.background = "#3e3e5e";
        secaoSobre.style.display = "flex";
        secaoProjetos.style.display = "none";
        secaoSkills.style.display = "none";

        if (window.innerWidth <= 768) {
            menuLateral.style.display = "none";
        }

    });

    skills.addEventListener("click", (e) => {
        e.preventDefault();

        if (secaoAtual === "skills") return;
        secaoAtual = "skills";
        
        h1.style.display = "none";
        sobre.style.background = "none";
        projetos.style.background = "none";
        skills.style.background = "#3e3e5e";
        secaoSobre.style.display = "none";
        secaoSkills.style.display = "flex";
        secaoProjetos.style.display = "none";

        if (window.innerWidth <= 768) {
            menuLateral.style.display = "none";
        }
    });

    projetos.addEventListener("click", (e) => {
        e.preventDefault();

        if (secaoAtual === "projetos") return;
        secaoAtual = "projetos";

        h1.style.display = "none";
        sobre.style.background = "none";
        skills.style.background = "none";
        projetos.style.background = "#3e3e5e";
        secaoSkills.style.display = "none";
        secaoSobre.style.display = "none";
        secaoProjetos.style.display = "flex";

        if (window.innerWidth <= 768) {
            menuLateral.style.display = "none";
        }
    });

    menuBotao.addEventListener("click", (e) => {
        e.preventDefault();
        
        menuLateral.style.display = "flex";
        menuLateral.classList.remove("animar-sair");
        menuLateral.classList.add("animar-entrar");
    });

    botaoFechar.addEventListener("click", (e) => {
        e.preventDefault();

        menuLateral.classList.remove("animar-entrar");
        menuLateral.classList.add("animar-sair");
        
        // Só esconde depois que a animação termina
        menuLateral.addEventListener("animationend", function esconder() {
            menuLateral.style.display = "none";
            menuLateral.classList.remove("animar-sair");
            menuLateral.removeEventListener("animationend", esconder);
        });
    });

});
