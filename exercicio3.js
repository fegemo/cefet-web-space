// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
const buttonExp = document.querySelectorAll(".botao-expandir-retrair");

buttonExp.forEach((button) =>
  button.addEventListener("click", (e) => {
    buttonExp.forEach((button, index) => {
      const parentElement =
        e.currentTarget === buttonExp[index] && buttonExp[index].parentElement;
      parentElement && parentElement.classList.toggle("expandido");
    });
  })
);
