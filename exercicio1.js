// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const calc = document.getElementById("calcular");

calc.addEventListener("click", () => {
  let resultado = document.getElementById("resultado");

  const inputs = Array.from(document.getElementsByTagName("input"));

  const gravitational_force =
    (inputs[0].value * inputs[1].value * inputs[2].value) /
    inputs[3].value ** 2;

  resultado.value = gravitational_force;
});
