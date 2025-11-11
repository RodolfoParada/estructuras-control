// Manejo Básico de Errores con try/catch

// try/catch básico
try {
  let resultado = dividir(10, 0);
  console.log(resultado);
} catch (error) {
  console.log("Error:", error.message);
}

// Función que puede lanzar error
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

// try/catch/finally
function procesarArchivo() {
  try {
    // Intentar leer archivo
    let contenido = leerArchivo("datos.txt");
    console.log("Archivo leído:", contenido);

    // Procesar contenido
    let resultado = JSON.parse(contenido);
    return resultado;

  } catch (error) {
    console.log("Error al procesar archivo:", error.message);
    // Podríamos intentar con un archivo alternativo

  } finally {
    // Siempre se ejecuta
    console.log("Limpieza completada");
  }
}

//throw - Lanzar Errores Personalizados


function validarEdad(edad) {
  if (typeof edad !== "number") {
    throw new TypeError("La edad debe ser un número");
  }

  if (edad < 0) {
    throw new RangeError("La edad no puede ser negativa");
  }

  if (edad > 150) {
    throw new RangeError("La edad parece ser inválida");
  }

  return edad;
}

// Uso con try/catch
try {
  validarEdad(-5);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error de tipo:", error.message);
  } else if (error instanceof RangeError) {
    console.log("Error de rango:", error.message);
  }
}