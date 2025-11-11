// Para objetos
let persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
};

for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

// ⚠️ Cuidado: también itera propiedades heredadas
// Mejor usar Object.keys() para arrays
let array = ["a", "b", "c"];
for (let indice in array) {
  console.log(`Índice ${indice}: ${array[indice]}`);
}