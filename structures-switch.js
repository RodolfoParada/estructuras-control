//switch - Para Múltiples Opciones Basadas en un Valor
let diaSemana = "lunes";

switch (diaSemana) {
  case "lunes":
    console.log("Inicio de semana laboral");
    break;
  case "viernes":
    console.log("¡Viernes!");
    break;
  case "sabado":
  case "domingo":
    console.log("Fin de semana");
    break;
  default:
    console.log("Día de semana normal");
}

// switch con expresiones (ES6+)
let calificacion = "A";

switch (true) {
  case calificacion === "A":
    console.log("Excelente trabajo");
    break;
  case calificacion === "B":
    console.log("Buen trabajo");
    break;
  default:
    console.log("Sigue practicando");
}