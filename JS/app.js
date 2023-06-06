function calculadoraSteam(nombreJuego, precio) {
    while (isNaN(precio)) {
        console.log("El precio ingresado no es un número válido");
        precio = prompt("Ingrese el precio del juego como se muestra en Steam");
    }

    let precioFinal = precio * 1.75;
    console.log("El precio final para " + nombreJuego + " es de " + precioFinal);
}

debugger
let nombreJuego = prompt("Ingrese el nombre del juego: ");
let precio = prompt("Ingrese el precio del juego como se muestra en Steam");

calculadoraSteam(nombreJuego, precio);

