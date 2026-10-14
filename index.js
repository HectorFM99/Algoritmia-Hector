//1
const fijo = 3;
for (let i = 1; i < 10; i++) {
    console.log(fijo * i);
}

//2
function pedirNumeros() {
  const numeros = [];

  while (true) {
    const entrada = prompt("Introduce un número (0 para terminar):");


    const numero = parseInt(entrada);

    if (isNaN(numero)) break;  
    if (numero === 0) break;   
    numeros.push(numero);
  }

  numeros.sort((a, b) => a - b);  
  return numeros;
}

//3
function esBisiesto(año) {
  return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}
const año = parseInt(prompt("Introduce un año:"));
if (esBisiesto(año)) {
  console.log(año + " es un año bisiesto.");
} else {
  console.log(año + " no es un año bisiesto.");
}

//4
function contarCaracteres(data, caracter) {
  let total = 0;
  const objetivo = caracter.toLowerCase();

  for (let i = 0; i < data.length; i++) {      
    const palabra = data[i];
    for (let j = 0; j < palabra.length; j++) { 
      if (palabra[j].toLowerCase() === objetivo) {
        total++;
      }
    }
  }

  return total;
}