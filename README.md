# cefet-web-space

Uma página espacial.
![Página escura com fundo de estrelas mostrando o título de 'Exploração Espacial' e um texto com campos para preencher sobre a lei de gravitação universal](https://fegemo.github.io/cefet-web/images/cefet-web-space.webp)

## Atividade

Esta atividade é composta de 2 exercícios.


### Exercício 1: cálculo de fórmula

Neste exercício você deve calcular a fórmula da gravitação universal, como
dada na própria página. O código deve ser feito em `exercicio1.js` e
esse arquivo ainda não foi incluído na página.

Para isso, você deve associar um evento de `click` ao botão `#calcular` e,
nessa função, calcular o valor da força gravitacional e preencher o valor
de `#resultado`.


### Exercício 2: galeria de imagens

Agora você vai criar uma galeria de imagens. Os botões `#anterior`
e `#proximo` devem permitir que o usuário alterne a imagem que está
sendo exibida e o código para isso deve ser feito no arquivo `exercicio2.js`.

A ideia geral é usar eventos de `click` nos botões e alterar o
caminho (atributo `src`) da imagem `#slide` (ver [FAQ](#faq) como trocar
um atributo de um elemento HTML). Algo que pode ajudar é manter uma variável
que indique o **índice da imagem atual**.

Ao abrir `exercicio2.js` alunos atenciosos vão reparar que as imagens 
foram dadas como um **vetor de objetos** da seguinte forma:

```js
const imagens = [
  {
    nome: 'nome-da-imagem.webp',
    descricao: 'O texto alternativo que a descreve'
  },
  ...
];
```

Além do atributo `src`, defina também o `alt` com o texto descritivo.
Para acessar uma propriedade de um objeto, lembre-se no [FAQ](#faq).
E também repare que as imagens estão hospedadas em um servidor web.
Portanto, seus caminhos devem ser concatenas (servidor e nome) para
que sejam encontradas.

Por fim, faça com que a galeria seja "circular": ao ultrapassar a 
última ou a primeira imagem, ela deve voltar para a primeira ou a última,
respectivamente. Veja o [FAQ](#faq) se precisar de ideias sobre isso.


### Exercício 3: expandir/retrair parágrafos

No arquivo `exercicio3.js`, faça os botões "+" expadirem ou 
retrairem o texto dos parágrafos, alternadamente.

O arquivo `estilos.css` contém uma regra para uma classe chamada `.expandido`.
Ela contém as propriedades necessárias para que um parágrafo seja exibido
de forma completa, em vez de apenas a primeira linha:

```css
/* estilo inicial do parágrafo */
p {
  height: 1em;            /* parágrafo com altura de 1 linha apenas */
  overflow: hidden;         /* oculta o que não couber no parágrafo */
  text-overflow: ellipsis;  /* coloca reticências ao final od texto */
}

/* estilo quando <p class="expandido"> */
p.expandido {
  height: auto;             /* altura suficiente para mostrar tudo */
}
```

Uma forma bem ruim de resolver seria criar uma função diferente para
o `click` de cada parágrafo. Contudo, as 5 funções fariam exatamente
a mesma coisa porém só apontando para um `<p>` diferente.

Nesse caso, é melhor ter apenas 1 função e parametrizar qual parágrafo
será expandido/retraído. Para pegar todos os `.botao-expandir-retrair`
é possível usar `document.querySelectorAll(...)`. Então, percorre-se
esse vetor associando uma única função ao `click` deles. Mas como
saber qual dos botões foi clicado?

No caso, é possível, dentro da _callback_ de um evento, descobrir
quem foi o **alvo do evento**. Para isso, é necessário usar o
parâmetro `e` (ou `evt`, ou `evento`) da _callback_  de `click`
para detectar que parágrafo contém o botão que foi clicado.

Esse parâmetro possui informações sobre o evento, como **o elemento HTML
que foi clicado** (`e.currentTarget`), as coordenadas (x,y) do mouse
no momento do clique (`e.screenX` e `e.screenY`), qual botão do
mouse foi usado (`e.button`) e [algumas outras coisas][click-event]. Veja
mais no [FAQ](#faq).

O `e.currentTarget` dentro da função de `click` aponta para o elemento HTML
que foi alvo do evento, ou seja, o botão. Mas precisamos alterar o parágrafo
pai do botão, e não o botão mesmo. Para tanto, você deve "navegar" no DOM:
a partir do botão, pegar o pai dele, que é o parágrafo. Veja como
[pegar o pai de um elemento no DOM][subindo-no-dom].

Para expandir um parágrafo, basta colocar a classe `.expandido` nele e,
para retraí-lo, basta remover essa classe. Veja o [FAQ](#faq) se tiver
dúvidas sobre como colocar/remover uma classe em/de um elemento do DOM.
Pode ser mais fácil alternar a classe (em vez de removê-la ou adicioná-la),
como descrito [nos slides][alternando-uma-classe].

Além de expandir/retrair o parágrafo, **o conteúdo do botão** deve alternar
entre `-` e `+`, indicando se o próximo clique vai retrair ou expandir.
O [FAQ](#faq) contém uma pergunta sobre como alterar o conteúdo de um elemento.



## FAQ

1. O que é o DOM mesmo?
   - É a forma como o JavaScript enxerga a página HTML, em uma estrutura
     de árvore. Veja mais no [slide sobre o DOM][dom].
1. Como atribuir um evento de clique a um elemento?
   - Veja o slide sobre [clicando em um botão][clicando-botao].
1. Como pegar mais de um elemento de uma vez?
   - Usando o `document.querySelectorAll` (com `All` no final) e passando um
     seletor que retorne mais de um elemento. Veja o
     [slide sobre o `querySelectorAll`][query-selector-all].
1. Como itero em um _Array_ ou no resultado do `document.querySelectorAll`?
   - Há três formas (veja [slides sobre repetição][iteracao]), mas as duas
     melhores são:
     ```js
     // forma com 'for (let variavel of lista)'
     let itensDaListaOrdenada = document.querySelectorAll('ol > li');
     for (let itemEl of itensDaListaOrdenada) {
       // faz algo com itemEl
     }
     ```
     ```js
     // forma com forEach
     let itensDaListaOrdenada = document.querySelectorAll('ol > li');
     itensDaListaOrdenada.forEach(function(itemEl) {
       // faz algo com itemEl
     });
     ```
1. Como colocar uma classe em um elemento usando JavaScript?
   - Todo elemento do DOM tem uma propriedade `classList`, que possui os
     métodos `elemento.classList.add('nova-classe')`,
     `elemento.classList.remove('classe-a-tirar')` e
     `elemento.classList.toggle('classe-a-colocar-ou-tirar')`. Para mais
     informações, veja o [slide sobre colocando/tirando classes][classes].
1. Como pegar o elemento que foi clicado, dentro da _callback_?
   - Basta usar o `e.currentTarget`, como descrito no
     [slide sobre "argumento de click"][argumento-de-click].
1. Como alterar o conteúdo de um elemento?
   - Todo elemento possui a propriedade `elemento.innerHTML`, que pode ser
     alterada, conforme descrito no
     [slide sobre alteração de conteúdo][alterando-o-conteudo]
1. O que é concatenar Strings?
   - É juntar duas ou mais Strings para formar outra. Veja o
     [slide sobre Strings][tipo-string].
1. Como "chegar à última imagem e **dar a volta**"?
   - É possível fazer isso usando `if/else` e o tamanho do _array_
     (_i.e._, `variavelComArray.length`)
   - **[Desafio]** Há uma forma mais elegante do que essa primeira que
     usa `if/else`, que é usando o operador de resto da divisão (_i.e._, `%`)



[alternando-uma-classe]: https://fegemo.github.io/cefet-web/classes/js2/#alternando-uma-classe
[dom]: https://fegemo.github.io/cefet-web/classes/js2/#o-dom
[click-event]: https://developer.mozilla.org/en-US/docs/Web/Events/click
[clicando-botao]: https://fegemo.github.io/cefet-web/classes/js2/#evento-clique
[query-selector-all]: https://fegemo.github.io/cefet-web/classes/js2/#selecionando-varios-elementos
[subindo-no-dom]: https://fegemo.github.io/cefet-web/classes/js2/#subindo-na-arvore
[iteracao]: https://fegemo.github.io/cefet-web/classes/js1/#for-formas-mais-legais
[classes]: https://fegemo.github.io/cefet-web/classes/js2/#colocando-removendo-classes
[argumento-de-click]: https://fegemo.github.io/cefet-web/classes/js2/#argumento-de-click
[alterando-o-conteudo]: https://fegemo.github.io/cefet-web/classes/js2/#alterando-o-conteudo
[tipo-string]: https://fegemo.github.io/cefet-web/classes/js1/#o-tipo-string
[const]: https://fegemo.github.io/cefet-web/classes/js1/#const-e-var
