// Validación de nombre
function validateName(event) {
    let name = document.forms["myForm"]["nombre"].value;
    if (name == "") {
        document.getElementById("errorName").innerHTML = "El nombre es obligatorio";
        event.preventDefault(); // Detiene el envío del formulario
    } else {
        document.getElementById("errorName").innerHTML = ""; // Limpia el mensaje de error si pasa la validación
    }
}

// Validación de apellido
function validateSurname(event) {
    let surname = document.forms["myForm"]["apellidos"].value;
    if (surname == "") {
        document.getElementById("errorSurname").innerHTML = "Los apellidos son obligatorios";
        event.preventDefault(); // Detiene el envío del formulario
    } else {
        document.getElementById("errorSurname").innerHTML = ""; // Limpia el mensaje de error si pasa la validación
    }
}
// Añadir las funciones de validación al evento 'submit'
let form = document.getElementById('citas-form');
form.addEventListener('submit', validateName);
form.addEventListener('submit', validateSurname);
