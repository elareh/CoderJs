let numeros = [1, 2, 3, 4, 5];

let persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Buenos Aires"
};

persona.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre}`);
};

let nuevoNumero = prompt("Ingresa un número");
numeros.push(parseInt(nuevoNumero));

let nuevoNombre = prompt("Ingresa un nombre");
persona.nombre = nuevoNombre;

console.log("Array actualizado:", numeros);
console.log("Objeto actualizado:", persona);

persona.saludar();