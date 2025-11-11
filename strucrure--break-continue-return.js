//Control de Flujo y Manejo de Errores 
//break, continue y return

// break - sale del bucle completamente
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Encontré el 5, saliendo...");
    break;
  }
  console.log(i);
}

// continue - salta a la siguiente iteración
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Saltando el 2...");
    continue;
  }
  console.log(i);
}

// return - sale de la función
function encontrarNumero(array, numeroBuscado) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numeroBuscado) {
      console.log(`Encontrado en posición ${i}`);
      return i; // Sale de la función
    }
  }
  return -1; // No encontrado
}