import VistaCitas from "./VistaCitas.js";

class Formulario {
    constructor() {
        // Obtener los valores de los campos del formulario
        this.formularioCita = document.getElementById('formularioCita');
        this.fechaCita = document.getElementById('fechaCita');
        this.nombrePaciente = document.getElementById('nombrePaciente');
        this.dniPaciente = document.getElementById('dniPaciente');
        this.apellidosPaciente = document.getElementById('apellidosPaciente');
        this.telefonoPaciente = document.getElementById('telefonoPaciente');
        this.fechaNacimientoPaciente = document.getElementById('fechaNacimientoPaciente');
        this.observaciones = document.getElementById('observaciones');
        this.eventos();
    }

    eventos() {
        this.formularioCita.addEventListener('submit', (event) => {
            event.preventDefault();
            this.limpiarErrores(); // Función para limpiar errores previos
            this.validarCampos();
        });
    }

    limpiarErrores() {
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

    validarCampos() {
        let esValido = true;

        // Validación de cada campo
        if (!validarFechaCita(this.fechaCita.value)) {
            this.mostrarError(this.fechaCita, 'Esta fecha ya está ocupada.');
            esValido = false;
        }
        if (!validarTexto(this.nombrePaciente.value)) {
            this.mostrarError(this.nombrePaciente, 'El nombre del paciente no es válido.');
            esValido = false;
        }
        // Continuar con las validaciones para el resto de campos...
        if (!validarTexto(this.apellidosPaciente.value)) {
            this.mostrarError(this.apellidosPaciente, 'Los apellidos del paciente no son válidos.');
            esValido = false;
        }
        if (!validarDni(this.dniPaciente.value)) {
            this.mostrarError(this.dniPaciente, 'El DNI del paciente no es válido.');
            esValido = false;
        }
        if (!validarTelefono(this.telefonoPaciente.value)) {
            this.mostrarError(this.telefonoPaciente, 'El teléfono del paciente no es válido.');
            esValido = false;
        }
        if (!validarFecha(this.fechaNacimientoPaciente.value)) {
            this.mostrarError(this.fechaNacimientoPaciente, 'La fecha de nacimiento del paciente no es válida.');
            esValido = false;
        }
        if (!validarTexto(this.observaciones.value)) {
            this.mostrarError(this.observaciones, 'Las observaciones no son válidas.');
            esValido = false;
        }
        return esValido;
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
            let vistaCitas = new VistaCitas();
            let citas = vistaCitas.citas;

            for (let i = 0; i < citas.length; i++) {
                if (citas[i].fechaCita === fechaCita) {
                    return false; // La cita ya está ocupada
                }
            }
            // La cita no está ocupada
            return true;
        }
    }
    mostrarError(campo, mensaje) {
        // Resaltar campo con error
        campo.classList.add('error');
        // Mostrar mensaje de error
        let errorDiv = document.createElement('div');
        errorDiv.classList.add('error-mensaje');
        errorDiv.innerText = mensaje;
        campo.parentNode.insertBefore(errorDiv, campo.nextSibling);
    }

    reset() {
        this.formularioCita.reset();
    }
}

export default Formulario;