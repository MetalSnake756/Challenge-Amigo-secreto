// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresParticipantes = [];  // Array que contendrá los nombres

function agregarAmigo() {
      // Llama a la función cantidadNombres
    let nombreIngresado = document.getElementById("amigo").value; // Obtiene el nombre 
    if (nombreIngresado != "") {
        nombresParticipantes.push(nombreIngresado);  // Agrega el nombre al array
        listaAmigos.innerHTML = "";  // Limpia la lista
        nombresParticipantes.forEach((nombreIngresado, numero) => {  // Recorre el array y agrega los nombres a la lista
            let li = document.createElement("li");  // Crea un elemento li
            li.textContent = `${numero + 1} - ${nombreIngresado}`; // Agrega el texto al li
            listaAmigos.appendChild(li);  // Agrega el li a la lista
            console.log(nombresParticipantes.length); 
        });
        cantidadNombres();  // Llama a la función cantidadNombres
    }
    else {
        alert("Debes ingresar un nombre :3"); // Muestra un alert si no se ingresa un nombre
    }
    document.getElementById("amigo").value = ""; // Limpia el input
}

function cantidadNombres() {
    resultado.innerHTML =""; // Limpia el resultado
    let cantidad = nombresParticipantes.length;  // Obtiene la cantidad de nombres
    if (cantidad == 0) {
        resultado.innerHTML ="No hay nombres ingresados";
        resultado.style.color = "red";
    }
    else {
        resultado.innerHTML = `La cantidad de nombres ingresados es: ${cantidad}`;
        resultado.style.color = "green";
    }
}

function sortearAmigo() {
    if (nombresParticipantes.length == 0) {
        alert("No hay nombres ingresados");
    }
    else {
        let amigoSorteado = nombresParticipantes[Math.floor(Math.random() * nombresParticipantes.length)];  // Obtiene un nombre al azar
        let numeroParticipante = nombresParticipantes.indexOf(amigoSorteado);  // Obtiene la posición del nombre sorteado
        resultado.innerHTML = `El amigo secreto sorteado es: ${numeroParticipante + 1 } - ${amigoSorteado}`;  // Muestra el nombre sorteado
        resultado.style.color = "green";
    }
}

function resetearLista() {
    nombresParticipantes = [];  // Resetea el array
    listaAmigos.innerHTML = "";  // Limpia la lista
    cantidadNombres();  // Llama a la función cantidadNombres
}

document.querySelector("input").addEventListener("keypress", (e) => { // Evento para agregar un amigo al presionar Enter
    if (e.key == "Enter")    // Si la tecla presionada es Enter
    agregarAmigo();  // Llama a la función agregarAmigo
});

cantidadNombres();  // Llama a la función cantidadNombres