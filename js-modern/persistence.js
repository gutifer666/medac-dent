class Persistence{
    #appointment;
    constructor(appointment) {
        this.storage = window.localStorage;
        this.#appointment = appointment;
    }

    save(key, value){
        this.storage.setItem(key, JSON.stringify(value));
    }

    load(key){
        return JSON.parse(this.storage.getItem(key));
    }

    remove(key){
        this.storage.removeItem(key);
    }
    saveAppointment(){
        this.save('appointment', this.#appointment);
    }
    loadAppointment(){
        if (this.load('appointment') == null) {
            return null;
        }
        return this.load('appointment');
    }
    removeAppointment(){
        this.remove('appointment');
    }

}
export default {Persistence};