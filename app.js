// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo;//Se utiliza para almacenar el nombre del amigo
    nombreAmigo = document.getElementById('amigo').value;//obtiene el valor del input

    if (nombreAmigo === "") {//Comprueba si el nombre no está vacío
        alert("Por favor ingrese un nombre válido");
    } else {
        amigos.push(nombreAmigo);//Agrega el nombre al array
    }
}
