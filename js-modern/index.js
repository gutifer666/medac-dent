import appointment from "./appointment.js";
import appointmentView from "./appointment-view.js";
import persistence from "./persistence.js";

let Appointment = appointment.Appointment;
let AppointmentView = appointmentView.AppointmentView;
let Persistence = persistence.Persistence;
function addCita() {
    let cita = new Appointment();
    let vistaCita = new AppointmentView(cita);
    let citaValidada = vistaCita.getAppointmentValidated();
    if(citaValidada) {
        new Persistence(citaValidada).saveAppointment();
        vistaCita.addToTable();
    }else {
        console.log('Datos no válidos');
    }
}
function init() {
    document.getElementById('agregar-cita').addEventListener('click', addCita);
    let persistence = new Persistence();
    let cita = persistence.loadAppointment();
    while(cita) {
        let vistaCita = new AppointmentView(cita);
        vistaCita.addToTable();
        cita = persistence.loadAppointment();
    }
}
window.addEventListener('load', init);


