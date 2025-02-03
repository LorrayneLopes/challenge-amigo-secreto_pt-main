//Declara arrray vazio
let preencherLista = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome) {
    preencherLista.push(nome);

    let listaNomes = document.getElementById("listaAmigos");
    let novoItem = document.createElement("li");
    novoItem.textContent = nome;
    listaNomes.appendChild(novoItem);

    input.value = "";
    input.focus();
  }
}

function sortearAmigo() {
  if (preencherLista.length === 0) {
    alert("Todos os amigos já foram sorteados!");
    return;
  }

  // Sorteia um nome e remove do array
  let indiceSorteado = Math.floor(Math.random() * preencherLista.length);
  let sorteado = preencherLista.splice(indiceSorteado, 1)[0];

  // Limpa a lista de nomes exibida
  let listaNomes = document.getElementById("listaAmigos");
  listaNomes.innerHTML = "";

  // Atualiza a exibição com a mensagem do sorteio
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;

  // Reexibe os nomes restantes
  preencherLista.forEach((nome) => {
    let novoItem = document.createElement("li");
    novoItem.textContent = nome;
    listaNomes.appendChild(novoItem);
  });
}
