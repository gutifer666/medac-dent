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

// Almacenamiento de datos en el navegador
function saveData(event) {
    localStorage.setItem('nombre', document.getElementById('nombre').value);
    localStorage.setItem('apellidos', document.getElementById('apellidos').value);
    localStorage.setItem('dni', document.getElementById('dni').value);
    localStorage.setItem('telefono', document.getElementById('telefono').value);
    localStorage.setItem('fecha-nacimiento', document.getElementById('fecha-nacimiento').value);
    event.preventDefault(); // Detiene el envío del formulario
}
function addToTable() {
    const tbody = document.getElementById('citas-tbody');
    const tr = document.createElement('tr');
    const campos = ['nombre', 'apellidos', 'dni', 'telefono', 'fecha-nacimiento'];
    for (let campo of campos) {
        const td = document.createElement('td');
        td.textContent = localStorage.getItem(campo);
        tr.appendChild(td);
    }
    // Añadir botones de acción
    const tdAcciones = document.createElement('td');
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    tdAcciones.appendChild(btnEditar);
    tdAcciones.appendChild(btnEliminar);
    tr.appendChild(tdAcciones);
    tbody.appendChild(tr);
}
function addCita(event) {
    saveData(event);
    addToTable();
}
 if (document.getElementById('citas-form') != null) {
    document.getElementById('citas-form').addEventListener('submit', addCita);
}

