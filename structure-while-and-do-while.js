// while - verifica condición antes de ejecutar
let contador = 0;
while (contador < 3) {
  console.log(`Contador: ${contador}`);
  contador++;
}

// do-while - ejecuta al menos una vez
let numero;
do {
  numero = Math.floor(Math.random() * 10);
  console.log(`Número generado: ${numero}`);
} while (numero !== 5);