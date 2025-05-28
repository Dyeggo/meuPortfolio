const secoes = document.querySelectorAll('section');

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    const elementos = entrada.target.querySelectorAll('.revelar'); // <-- aqui fora

    if (entrada.isIntersecting) {
      // Revela todos os .revelar dentro dessa seção com delay
      elementos.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('visivel');
        }, i * 200);
      });
    } else {
      // Remove a classe quando sai da tela
      elementos.forEach((el) => {
        el.classList.remove('visivel');
      });
    }
  });
});


secoes.forEach(secao => observer.observe(secao));