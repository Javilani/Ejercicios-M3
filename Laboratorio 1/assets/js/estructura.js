class Paciente {
    constructor() {
        this.lista = []; // Arreglo para almacenar pacientes
    }

    // Método para agregar un paciente
    agregarPaciente(nombre) {
        const paciente = { nombre };
        this.lista.push(paciente);
    }

    // Método para atender al primer paciente en la cola
    atenderPaciente() {
        if (this.lista.length > 0) {
            return this.lista.shift(); // Elimina y retorna el primer paciente
        }
        return null; // Si no hay pacientes, retorna null
    }
}