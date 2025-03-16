let amigos = []

function adicionarAmigo(){
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if(nome === ""){
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    console.log("Lista de amigos:", amigos);
    atualizarAmigos();
    
    input.value = "";
}

function atualizarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if(amigos.length === 0){
        alert("Adicione amigos para que o sorteio seja possível");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigos[indiceSorteado]}</strong></li>`;
}