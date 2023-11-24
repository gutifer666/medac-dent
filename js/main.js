import Formulario from './formulario.js';
import Cita from './cita.js';
import VistaCitas from './vistaCitas.js';
document.addEventListener('DOMContentLoaded', function() {
    let formulario = new Formulario();
    window.vistaCitas = new VistaCitas();

    window.vistaCitas.mostrarCitas(); // Mostrar las citas existentes al cargar la página
    if (formulario.validarCampos()) {
        let cita = new Cita(
            formulario.fechaCita.value,
            formulario.nombrePaciente.value,
            formulario.dniPaciente.value,
            formulario.apellidosPaciente.value,
            formulario.telefonoPaciente.value,
            formulario.fechaNacimientoPaciente.value,
            formulario.observaciones.value);
        cita.agregarCita(cita);
        window.vistaCitas.mostrarCitas();
        formulario.reset(); // Limpiar el formulario
    }

});

