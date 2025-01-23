//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo");

  let texto = amigo.value;

  if (texto.trim() !== "") {
    listaDeAmigos.push(texto);
    atualizarLista();

    amigo.value = ""; // Limpa o campo de entrada
  } else {
    alert("Por favor, insira um nome.");
  }
}

function atualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar os novos elementos

  for (let i = 0; i < listaDeAmigos.length; i++) {
    const novoItem = document.createElement("li");
    novoItem.textContent = listaDeAmigos[i];
    listaAmigos.appendChild(novoItem);
  }
}
