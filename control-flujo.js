// Ejercicio: Crea una función que valide un formulario de registro usando diferentes estructuras de control. 
// Debe verificar: nombre no vacío, email válido, edad entre 18-99, y contraseña segura. 
// Usa try/catch para manejar errores y proporciona mensajes específicos para cada tipo de validación fallida.

let formularioRegistro = [
  { nombres: "Juan Pablo", apellidos: "Moreno Narajo", edad:25, email:"juanPa@mail.com", password:"juan1234"},
  { nombres: "Inés Joaquina", apellidos: "Gómez Ruiz", edad:27, email:"inesGomez@mail.com", password:"Ines1234"},
  { nombres: "Luisa Andrea", apellidos: "Fernández López", edad:30, email:"luisaAndrea@mail.com", password:"luisa1234"},
  { nombres: "Paulina Maria", apellidos: "Sánchez Torres",edad:28, email:"PaulinaMaria@mail.com", password:"Paulina1234"},
  { nombres: "Jesús Salvador", apellidos: "Ramírez Díaz", edad:75, email:"JesusSal@mail.com", password:"Jesus1234"},
  { nombres: "", apellidos: "Vega Morales", edad:22, email:"VegaMoral@mail.com", password:"vega1234"},
  { nombres: "Luis Santos", apellidos: "", edad:23, email:"luisSa@mail.com", password:"Luis1234"},
  { nombres: "Ana Bella", apellidos: "Lindorfo Contreras", edad: "00", email:"AnaBella@mail.com", password:"vega1234"},
  { nombres: "Maria Enriqueta", apellidos: "Volados Moreno", edad:26, email:"", password:"Maria1234"},
   { nombres: "Cenicienta duermiente", apellidos: "Nieves de Verano", edad:29, email:"CanicientaDu@mail.com", password:""},
];


//función para validar formulario
function validarFormulario(usuario) {
try {
    // valida nombre
    if (!usuario.nombres || usuario.nombres.trim() === "") {
        throw new Error("El nombre no puede estar vacío.");
    }
    //validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(usuario.email)) {
       throw new Error(`El correo "${usuario.email}" no es válido.`);
    }
    
    // valida edad
    if (isNaN(usuario.edad) || usuario.edad < 18 || usuario.edad > 99) {
        throw new Error("La edad debe estar entre 18 y 99 años.");
    }

      //Validar contraseña
    // (Simularemos que el usuario tiene una propiedad "password")
    if (!usuario.password) {
      throw new Error("Debe ingresar una contraseña.");
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(usuario.password)) {
      throw new Error("La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.");
    }

    // Si todas las validaciones pasan
    console.log(`Registro válido: ${usuario.nombres} ${usuario.apellidos}`);
  } catch (error) {
    console.error(`Error en registro de ${usuario.nombres}: ${error.message}`);
  }


   }



// Recorrer y validar todos los registros
formularioRegistro.forEach(usuario => validarFormulario(usuario));