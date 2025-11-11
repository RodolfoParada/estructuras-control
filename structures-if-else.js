// Task 1: Estructura Condicionesles IF-ELSE

let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// if/else if/else para múltiples condiciones
let calificacion = 100;

if(calificacion === 95) {
    console.log("Nivel DIOS");
}
if (calificacion >= 90) {
  console.log("Excelente");
} else if (calificacion >= 80) {
  console.log("Muy bien");
} else if (calificacion >= 70) {
  console.log("Bien");
} else {
  console.log("Necesitas mejorar");
}


//Operador Ternario - Condicional en Una Línea
// Sintaxis: condición ? valor_si_true : valor_si_false
let esMayor = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(esMayor);

// Puede anidarse, pero no abuses
let categoria = calificacion >= 90 ? "A" :
                calificacion >= 80 ? "B" :
                calificacion >= 70 ? "C" : "D";