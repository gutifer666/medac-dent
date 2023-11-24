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
    agregarCita(cita) {
        let citas = this.obtenerCitas();
        citas.push(cita);
        localStorage.setItem('citas', JSON.stringify(citas));
    }
    obtenerCitas() {
        let citasGuardadas = localStorage.getItem('citas');
        if (citasGuardadas) {
            return JSON.parse(citasGuardadas);
        }
        return [];
    }
}
export default Cita;