let listaDeAmigos = [];
let listadeNomesSorteados = [];

// Função formatar nome inserido
function formatarNomeInserido(nome) {
    const preposicoes = ["da", "de", "do", "dos", "das", "e"]; // Devem permanecer minúsculas

    return nome
        .toLowerCase()
        .split(" ")
        .map((palavra, index) =>
            preposicoes.includes(palavra) && index !== 0
                ? palavra
                : palavra.charAt(0).toUpperCase() + palavra.slice(1)
        ).join(" ");
}

// Função inserir nome na lista
function adicionarAmigo() {
    
    atualizarMensagem("Digite o nome dos seus amigos");

    let amigoInserido = document.getElementById("amigo").value.trim();

    if (amigoInserido === "") {
        alert('Campo adicionar amigo vazio, por favor insira um nome!');
        return;
    }

    if (listaDeAmigos.some(amigo => amigo.toLowerCase() === amigoInserido.toLowerCase())) {
        alert('Nome já inserido, por favor insira outro nome');
        return;
    }

    let amigoFormatado = formatarNomeInserido(amigoInserido);

    listaDeAmigos.push(amigoFormatado);
    console.log(listaDeAmigos);

    document.getElementById("amigo").value = "";

    atualizarListaDeAmigos();

    let buttonReiniciar = document.getElementById("reset-button");
    buttonReiniciar.disabled = false;

}

// Função atualizar lista de nomes e exibí-la
function atualizarListaDeAmigos() {

    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaDeAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Função Sortear amigo e exibí-lo
function sortearAmigo() {

    if (listaDeAmigos.length === 0) {
        alert('Adicione amigos antes de realizar o sorteio!');
        return;
    }

    let nomeSorteado;

    if (listadeNomesSorteados.length < listaDeAmigos.length) {
        do {
            let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
            nomeSorteado = listaDeAmigos[indiceSorteado];
        } while (listadeNomesSorteados.includes(nomeSorteado));
    } else {
        atualizarMensagem("Todos os amigos foram sorteados!");
        return; // Retorna para evitar adicionar um novo sorteio
    }

    let ul = document.getElementById("resultado");
    ul.innerHTML = "";

    let li = document.createElement("li");
    li.textContent = nomeSorteado;
    ul.appendChild(li);

    listadeNomesSorteados.push(nomeSorteado);
    console.log("Nomes sorteados até agora:", listadeNomesSorteados);
}

// Função resetar sorteio
function reiniciarSorteio() {

    let confirmacao = confirm("Tem certeza que deseja reiniciar o sorteio? Essa ação apagará todos os nomes digitados e sorteados.");

    if (confirmacao) {
        // Texto padrão
        atualizarMensagem("Digite o nome dos seus amigos");

        // Resetando a lista de amigos
        listaDeAmigos = [];
        listadeNomesSorteados = [];

        // Limpando exibição na página
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";

        // Desabilitando o botão de reset
        document.getElementById("reset-button").disabled = true;

        console.log("O sorteio foi reiniciado. Lista de amigos está vazia.");
    }
}

//Função atualizar mensagem 
function atualizarMensagem (mensagem){
    let paragrafo = document.querySelector("h2");
    paragrafo.innerHTML = mensagem;
}
