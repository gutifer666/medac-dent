
class AppointmentView {
    #appointment;
    constructor(appointment) {
        this.#appointment = appointment;
    }
    getAppointmentValidated() {
        this.#appointment.fecha = document.getElementById('fecha').value;
        this.#appointment.hora = document.getElementById('hora').value;
        this.#appointment.nombre = document.getElementById('nombre').value;
        this.#appointment.apellidos = document.getElementById('apellidos').value;
        this.#appointment.dni = document.getElementById('dni').value;
        this.#appointment.telefono = document.getElementById('telefono').value;
        this.#appointment.fechaNacimiento = document.getElementById('fecha-nacimiento').value;
        this.#appointment.observaciones = document.getElementById('observaciones').value;
        if(this.#appointment.validate()) {
            return this.#appointment;
        } else {
            return null;
        }
    }
    addToTable() {
        const tbody = document.getElementById('citas-tbody');
        const tr = document.createElement('tr');
        const campos = ['fecha', 'hora', 'nombre', 'apellidos', 'dni', 'telefono', 'fechaNacimiento', 'observaciones'];
        for (let campo of campos) {
            const td = document.createElement('td');
            td.textContent = this.#appointment[campo];
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
};
export default {AppointmentView};