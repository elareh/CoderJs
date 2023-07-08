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