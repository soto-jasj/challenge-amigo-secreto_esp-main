// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadoDeAmigos = [];

function agregarAmigo() {
    nombreIngresado = document.getElementById("amigo");
    nombreTemporal = nombreIngresado.value.trim();
    if (nombreTemporal === "") {
        alert("No se permiten espacios vacios como nombre, ingresa al menos una letra.");
        return;
    }
    listadoDeAmigos.push(nombreTemporal);
    actualizarLista();
    nombreIngresado.value = "";
}

function actualizarLista() {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let contador = 0;
    while (contador < listadoDeAmigos.length) {
        const verListaDeAmigos = document.createElement("li");
        verListaDeAmigos.textContent = listadoDeAmigos[contador];
        lista.appendChild(verListaDeAmigos);
        contador++;
    }
}

function sortearAmigo() {
    if (listadoDeAmigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }
    numeroAlAzar = Math.floor(Math.random() * listadoDeAmigos.length);
    amigoSecretoSeleccionado = listadoDeAmigos[numeroAlAzar];
    resultadoAmigoSecreto = document.getElementById("resultado");
    resultadoAmigoSecreto.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecretoSeleccionado}</strong></li>`;
}
