class Cita {
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
}
class Validador {
    static fecha(fecha) {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(fecha);
    }

    static hora(hora) {
        const regex = /^\d{2}:\d{2}$/;
        return regex.test(hora);
    }

    static nombre(nombre) {
        return nombre.length > 0 && nombre.length <= 50;
    }

    static apellidos(apellidos) {
        return apellidos.length > 0 && apellidos.length <= 50;
    }

    static DNI(dni) {
        const regex = /^\d{8}[A-Za-z]$/;
        return regex.test(dni);
    }

    static telefono(telefono) {
        const regex = /^\d{9}$/;
        return regex.test(telefono);
    }

    static fechaNacimiento(fechaNacimiento) {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(fechaNacimiento);
    }

    static observaciones(observaciones) {
        return observaciones.length <= 255;  // Suponiendo un límite de 255 caracteres
    }
}
function getFormDatas() {
    console.log('getFormDatas');
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let dni = document.getElementById('dni').value;
    if (!Validador.DNI(dni)) {
        alert('El DNI no es válido');
        return;
    }
    let telefono = document.getElementById('telefono').value;
    if (!Validador.telefono(telefono)) {
        alert('El teléfono no es válido');
        return;
    }
    let fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    let observaciones = document.getElementById('observaciones').value;
    return new Cita(fecha, hora, nombre, apellidos, dni, telefono, fechaNacimiento, observaciones);
}
function agregarCitaATabla(cita) {
    const tbody = document.getElementById('citas-tbody');

    const tr = document.createElement('tr');

    const campos = ['fecha', 'hora', 'nombre', 'apellidos', 'dni', 'telefono', 'fechaNacimiento', 'observaciones'];
    for (let campo of campos) {
        const td = document.createElement('td');
        td.textContent = cita[campo];
        tr.appendChild(td);
    }

    // Añadir botones de acción (opcional)
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
function addCita() {
    let cita = getFormDatas();
    agregarCitaATabla(cita);
}
function init() {
    document.getElementById('agregar-cita').addEventListener('click', addCita);
}
window.addEventListener('load', init);


