class VistaCitas {
    constructor() {
        this.citas = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : [];
    }
    eliminarCita(idCita) {
        this.citas = this.citas.filter(cita => cita.id !== idCita);
        localStorage.setItem('citas', JSON.stringify(this.citas));
        this.mostrarCitas(); // Actualizar la vista
    }

    cargarCita(idCita) {
        let cita = this.citas.find(cita => cita.id === idCita);
        if (cita) {
            document.getElementById('fechaCita').value = cita.fechaCita;
            document.getElementById('nombrePaciente').value = cita.nombrePaciente;
            document.getElementById('dniPaciente').value = cita.dniPaciente;
            document.getElementById('apellidosPaciente').value = cita.apellidosPaciente;
            document.getElementById('telefonoPaciente').value = cita.telefonoPaciente;
            document.getElementById('fechaNacimientoPaciente').value = cita.fechaNacimientoPaciente;
            document.getElementById('observaciones').value = cita.observaciones;
        }
    }
    mostrarCitas (){
        let tablaCitas = document.getElementById('tablaCitas').getElementsByTagName('tbody')[0];
        tablaCitas.innerHTML = ''; // Limpiar tabla existente

        this.citas.forEach((cita, index) => {
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
                    <button onclick="window.vistaCitas.eliminarCita(${cita.id})">Eliminar</button>
                    <button onclick="window.vistaCitas.cargarCita(${cita.id})">Modificar</button>
                </td>
            `;
        });
    }
}

export default VistaCitas;