document.addEventListener('DOMContentLoaded', function() {
    const formularioCita = document.getElementById('formularioCita');

    formularioCita.addEventListener('submit', function(event) {
        event.preventDefault();
        limpiarErrores(); // Función para limpiar errores previos

        // Obtener los valores de los campos del formulario
        let fechaCita = document.getElementById('fechaCita');
        let nombrePaciente = document.getElementById('nombrePaciente');
        let dniPaciente = document.getElementById('dniPaciente');
        let apellidosPaciente = document.getElementById('apellidosPaciente');
        let telefonoPaciente = document.getElementById('telefonoPaciente');
        let fechaNacimientoPaciente = document.getElementById('fechaNacimientoPaciente');
        let observaciones = document.getElementById('observaciones');

        let esValido = true;

        // Validación de cada campo
        if (!validarFechaCita(fechaCita.value)) {
            mostrarError(fechaCita, 'Esta fecha ya está ocupada.');
            esValido = false;
        }
        if (!validarTexto(nombrePaciente.value)) {
            mostrarError(nombrePaciente, 'El nombre del paciente no es válido.');
            esValido = false;
        }
        // Continuar con las validaciones para el resto de campos...
        if (!validarTexto(apellidosPaciente.value)) {
            mostrarError(apellidosPaciente, 'Los apellidos del paciente no son válidos.');
            esValido = false;
        }
        if (!validarDni(dniPaciente.value)) {
            mostrarError(dniPaciente, 'El DNI del paciente no es válido.');
            esValido = false;
        }
        if (!validarTelefono(telefonoPaciente.value)) {
            mostrarError(telefonoPaciente, 'El teléfono del paciente no es válido.');
            esValido = false;
        }
        if (!validarFecha(fechaNacimientoPaciente.value)) {
            mostrarError(fechaNacimientoPaciente, 'La fecha de nacimiento del paciente no es válida.');
            esValido = false;
        }
        if (!validarTexto(observaciones.value)) {
            mostrarError(observaciones, 'Las observaciones no son válidas.');
            esValido = false;
        }

        if (!esValido) {
            return; // Si hay errores, no proceder
        }

        // Si todas las validaciones son correctas, proceder con el guardado de la cita
        let cita = new Cita(fechaCita.value, nombrePaciente.value, dniPaciente.value, apellidosPaciente.value, telefonoPaciente.value, fechaNacimientoPaciente.value, observaciones.value);
        agregarCita(cita);
        mostrarCitas();
        formularioCita.reset(); // Limpiar el formulario
    });
    mostrarCitas(); // Mostrar las citas existentes al cargar la página

    function mostrarError(campo, mensaje) {
        // Resaltar campo con error
        campo.classList.add('error');
        // Mostrar mensaje de error
        let errorDiv = document.createElement('div');
        errorDiv.classList.add('error-mensaje');
        errorDiv.innerText = mensaje;
        campo.parentNode.insertBefore(errorDiv, campo.nextSibling);
    }

    function limpiarErrores() {
        // Remover clases y mensajes de error existentes
        let errores = document.querySelectorAll('.error');
        errores.forEach(function(campo) {
            campo.classList.remove('error');
        });
        let mensajesErrores = document.querySelectorAll('.error-mensaje');
        mensajesErrores.forEach(function(mensaje) {
            mensaje.remove();
        });
    }

    // Funciones de validación...
    function validarTexto(texto) {
        return texto.length > 0;
    }

    function validarTelefono(telefono) {
        return telefono.length > 0;
    }

    function validarDni(dni) {
        // Expresión regular para validar un número de dni de 8 dígitos seguido de una letra
        let regex = /^\d{8}[a-zA-Z]$/;
        return regex.test(dni);
    }

    function validarFecha(fecha) {
        return fecha.length > 0;
    }
    function validarFechaCita(fechaCita) {
        // Comprobar si la cita ya está ocupada
        let citas = obtenerCitas();
        for (let i = 0; i < citas.length; i++) {
            if (citas[i].fechaCita === fechaCita) {
                return false; // La cita ya está ocupada
            }
        }

        // La cita no está ocupada
        return true;
    }

});
/* Gestión de Citas */
class Cita {
    constructor(fechaCita, nombrePaciente, dniPaciente, apellidosPaciente, telefonoPaciente, fechaNacimientoPaciente, observaciones) {
        this.id = Date.now(); // Identificador único basado en el timestamp
        this.fechaCita = fechaCita;
        this.nombrePaciente = nombrePaciente;
        this.dniPaciente = dniPaciente;
        this.apellidosPaciente = apellidosPaciente;
        this.telefonoPaciente = telefonoPaciente;
        this.fechaNacimientoPaciente = fechaNacimientoPaciente;
        this.observaciones = observaciones;
    }
}
/* Funciones para manejar citas */
function agregarCita(cita) {
    let citas = obtenerCitas();
    citas.push(cita);
    localStorage.setItem('citas', JSON.stringify(citas));
}

function obtenerCitas() {
    let citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
        return JSON.parse(citasGuardadas);
    }
    return [];
}
function mostrarCitas() {
    let citas = obtenerCitas();
    let tablaCitas = document.getElementById('tablaCitas').getElementsByTagName('tbody')[0];
    tablaCitas.innerHTML = ''; // Limpiar tabla existente

    citas.forEach((cita, index) => {
        let fila = tablaCitas.insertRow();
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${cita.fechaCita}</td>
            <td>${cita.nombrePaciente}</td>
            <td>${cita.dniPaciente}</td>
            <td>${cita.apellidosPaciente}</td>
            <td>${cita.telefonoPaciente}</td>
            <td>${cita.fechaNacimientoPaciente}</td>
            <td>${cita.observaciones}</td>
            <td>
                <button onclick="eliminarCita(${cita.id})">Eliminar</button>
                <button onclick="cargarCita(${cita.id})">Modificar</button>
            </td>
        `;
    });
}
function eliminarCita(idCita) {
    let citas = obtenerCitas();
    citas = citas.filter(cita => cita.id !== idCita);
    localStorage.setItem('citas', JSON.stringify(citas));
    mostrarCitas(); // Actualizar la vista
}

function cargarCita(idCita) {
    let citas = obtenerCitas();
    let cita = citas.find(cita => cita.id === idCita);
    if (cita) {
        // Cargar los datos de la cita en el formulario para su edición
        document.getElementById('fechaCita').value = cita.fechaCita;
        // Continuar con el resto de campos...
        document.getElementById('nombrePaciente').value = cita.nombrePaciente;
        document.getElementById('dniPaciente').value = cita.dniPaciente;
        document.getElementById('apellidosPaciente').value = cita.apellidosPaciente;
        document.getElementById('telefonoPaciente').value = cita.telefonoPaciente;
        document.getElementById('fechaNacimientoPaciente').value = cita.fechaNacimientoPaciente;
        document.getElementById('observaciones').value = cita.observaciones;
    }
}

