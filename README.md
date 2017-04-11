# cefet-web-space

Uma página espacial.

## Atividade

Esta atividade é composta de 2 exercícios.

### Exercício 1: expandir/retrair parágrafos

Você deve criar um código em Javascript, no arquivo `exercicio1.js`, para
fazer os botões "+" expadirem ou retrairem o texto dos parágrafos, de
acordo com o contexto.

O botão deve expandir ou retrair apenas o parágrafo dentro do qual ele está.

Uma classe CSS `.expandido` contém as propriedades necessárias para que
o parágrafo seja exibido de forma completa. Uma regra para ela já está
descrita no arquivo `estilos.css` da seguinte forma:

```css
p {
  white-space: nowrap;
  height: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
}

p.expandido {
  white-space: normal;
  height: auto;
}
```

Assim, para que um parágrafo seja completamente mostrado, ele deve possuir a
classe `.expandido`.

Além de expandir/retrair o parágrafo, você deve alternar entre `-` e `+`
no conteúdo do botão.

### Exercício 2: galeria de imagens

Neste exercício você vai criar uma galeria de imagens.

- Funcionamento:
  - Botões mostram a próxima imagem ou a anterior
  - Quando chegar na última imagem, voltar para a primeira
- Você pode fazer de pelo menos 2 formas:
  1. Ter apenas uma <img> e trocar o src dela para o da imagem corrente
  1. Ter uma <img> para cada imagem exibidas numa linha e transladar de
     acordo com a imagem corrente
