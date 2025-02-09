// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo;//Se utiliza para almacenar el nombre del amigo
    nombreAmigo = document.getElementById('amigo').value;//obtiene el valor del input

    if (nombreAmigo === "") {//Comprueba si el nombre no está vacío
        alert("Por favor ingrese un nombre válido");
    } else {
        amigos.push(nombreAmigo);//Agrega el nombre al array
        mostrarAmigos();//Muestra los amigos en la lista
        limpiarInput();//Limpia el input
    }
}

function mostrarAmigos() {
    let listaAmigos = "";
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos += `<li>${amigos[i]}</li>`;
    }
    asignarElementos("#listaAmigos", listaAmigos);
    limpiarInput();
}

function asignarElementos(elemento, valor) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = valor;
    return;
}

function limpiarInput() {
    document.querySelector('input').value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor ingrese al menos un amigo");
    } else if (amigos.length < 2) {
        alert("Por favor ingrese al menos dos amigos");
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        asignarElementos('#resultado', amigoSorteado);
    }
}