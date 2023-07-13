<<<<<<< HEAD
document.getElementById('formContacto').addEventListener('submit', function(event) {
  event.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;

  // Creo el json
  let formData = {
    nombre: nombre,
    apellido: apellido,
    email: email
  };

  // Convierto en string
  let formDataString = JSON.stringify(formData);

  // Guardo la info
  localStorage.setItem('formData', formDataString);


alert('Formulario enviado. Los datos han sido guardados en el almacenamiento local.');
});
=======
const empleados = [
  {nombre: "Juan", edad: "30", sueldo: "5000"},
  {nombre: "Roberto", edad: "40", sueldo: "1000"},
  {nombre: "Martin", edad: "19", sueldo: "3000"},
  {nombre: "Jorge", edad: "25", sueldo: "10000"},
];

let nombreEmpleado = prompt("Ingrese nombre de empleado");
let edadEmpleado = prompt ("Indique a partir de que edad quisiera listar a los empleados");

const resultado1 = empleados.find((el) => el.nombre === nombreEmpleado);
const resultado2 = empleados.filter((el) => el.edad > edadEmpleado);


console.log(resultado1);
console.log(resultado2);
>>>>>>> 31fddc736395d8ecace6648f45d57c2f8f35a25e
