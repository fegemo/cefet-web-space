function exibeArtigo(idDoArtigo) {
  // itera sobre todos os artigos (.aba-conteudo) e os desativa
  document.querySelectorAll('.aba-conteudo').forEach(function(el) {
    el.classList.remove('ativa');
  });

  // exibe o artigo que tem o id do link clicado
  const artigoParaExibirEl = document.querySelector(idDoArtigo);
  artigoParaExibirEl.classList.add('ativa');
}

// busca e itera sobre todos os itens do menu ("sobre aliens" e
// "sobre philae") para tratar do evento de clique em cada um
const itensDoMenu = document.querySelectorAll('#menu-principal a');
itensDoMenu.forEach(function(el) {
  el.addEventListener('click', function(evento) {
    // descobre quem foi clicado e qual era o href do link e para que id
    // ele apontava
    const hrefDoLink = evento.target.href;
    const idApontadoPeloLink = hrefDoLink.substr(hrefDoLink.lastIndexOf('#'));

    exibeArtigo(idApontadoPeloLink);
  });
});

// verifica se, ao carregar a página, havia um #alguma-coisa na URL da
// página. Em caso afirmativo, se for #aliens ou #philae, ativa as suas
// respectivas abas
if (location.hash) {
  const hrefDosItensDeMenu = Array.from(itensDoMenu).map(function(el) {
    return el.href;
  });
  if (hrefDosItensDeMenu.indexOf(location.hash)) {
    // exibe o artigo que tem o id do link clicado
    exibeArtigo(location.hash);
  }
}
