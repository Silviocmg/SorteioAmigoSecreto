let listaDeAmigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo");

  let texto = amigo.value;

  if (texto.trim() !== "") {
    listaDeAmigos.push(texto);
    atualizarLista();

    amigo.value = "";
  } else {
    alert("Por favor, insira um nome.");
  }
}

function atualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < listaDeAmigos.length; i++) {
    let novoItem = document.createElement("li");
    novoItem.textContent = listaDeAmigos[i];
    listaAmigos.appendChild(novoItem);
  }
}

function sortearAmigo() {
  let resultadoElement = document.getElementById("resultado");
  if (listaDeAmigos.length === 0) {
    alert("Não há amigos para sortear. Adicione pelo menos um amigo.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  let amigoSorteado = listaDeAmigos[indiceAleatorio];

  resultadoElement.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
