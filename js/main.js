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
        if (!validarFecha(fechaCita.value)) {
            mostrarError(fechaCita, 'La fecha de la cita no es válida.');
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
        // ...
    });

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

    function validarDni(dni) {
        return dni.length > 0;
    }

    function validarTelefono(telefono) {
        return telefono.length > 0;
    }

    function validarFecha(fecha) {
        return fecha.length > 0;
    }

});
