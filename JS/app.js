function sumaNumeros() { let numeros = []; let sum = 0;

    for (let i = 1; i <= 10; i++) { let numero = parseInt(prompt("Ingrese el número " + i)); numeros.push(numeros); }
    
    for (let j = 0; j < numeros.length; j++) { sum += numeros[j]; }
    
    alert("La suma de los 10 números es: " + sum); }
    
    sumaNumeros();