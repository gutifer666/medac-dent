class Appointment {
    constructor(fecha, hora, nombre, apellidos, dni, telefono, fechaNacimiento, observaciones) {
        this.fecha = fecha;  // string en formato 'dd/mm/yyyy'
        this.hora = hora;  // string en formato 'HH:mm'
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.telefono = telefono;
        this.fechaNacimiento = fechaNacimiento;  // string en formato 'dd/mm/yyyy'
        this.observaciones = observaciones;
    }
    validateFecha() {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(this.fecha);
    }
    validateHora() {
        const regex = /^\d{2}:\d{2}$/;
        return regex.test(this.hora);
    }
    validateNombre() {
        return this.nombre.length > 0 && this.nombre.length <= 50;
    }
    validateApellidos() {
        return this.apellidos.length > 0 && this.apellidos.length <= 50;
    }
    validateDNI() {
        const regex = /^\d{8}[A-Za-z]$/;
        return regex.test(this.dni);
    }
    validateTelefono() {
        const regex = /^\d{9}$/;
        return regex.test(this.telefono);
    }
    validateFechaNacimiento() {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(this.fechaNacimiento);
    }
    validateObservaciones() {
        return this.observaciones.length <= 255;  // Suponiendo un límite de 255 caracteres
    }
    validate() {
        //return this.validateFecha() && this.validateHora() && this.validateNombre() && this.validateApellidos() && this.validateDNI() && this.validateTelefono() && this.validateFechaNacimiento() && this.validateObservaciones();
        return this.validateNombre();
    }
}
export default {Appointment};