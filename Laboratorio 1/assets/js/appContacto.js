function reservarCita() {
    // Función para solicitar nombre
    function obtenerNombre() {
        let nombre;
        while (true) {
            nombre = prompt("Nombre del paciente: ");
            if (nombre.trim() !== "") {
                return nombre;
            } else {
                alert("El nombre no puede estar vacío. Intente nuevamente.");
            }
        }
    }

    // Función para solicitar edad
    function obtenerEdad() {
        let edad;
        while (true) {
            edad = Number(prompt("Edad del paciente: "));
            if (typeof edad === "number" && !isNaN(edad) && Number.isInteger(edad)) {
                return edad;
            } else {
                alert("La edad ingresada no es válida. Intente nuevamente y asegúrese de ingresar un número.");
            }
        }
    }

    // Función para solicitar correo
    function obtenerEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let email;
        while (true) {
            email = prompt("Por favor, ingresa tu correo electrónico: ");
            if (emailRegex.test(email)) {
                return email;
            } else {
                alert("El correo ingresado no es válido. Intente nuevamente.");
            }
        }
    }

    // Solicitar datos
    const nombre = obtenerNombre();
    console.log(`Nombre ingresado: ${nombre}`);

    const edad = obtenerEdad();
    console.log(`Edad ingresada: ${edad}`);

    const email = obtenerEmail();
    console.log(`Correo ingresado: ${email}`);

    // Confirmación de datos ingresados
    alert(`Datos ingresados:\nNombre: ${nombre}\nEdad: ${edad}\nEmail: ${email}`);
}



// Agregar un event listener para manejar el formulario cuando se haga submit
document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    try {
        // Pausar la ejecución aquí para verificar el estado del código antes de procesar el formulario
        debugger;

        // Obtener los valores de los campos del formulario
        const nombre = document.querySelector('input[name="nombre"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const asunto = document.querySelector('input[name="asunto"]').value;
        const mensaje = document.querySelector('textarea[name="mensaje"]').value;

        // Validar que no haya campos vacíos
        if (!nombre || !email || !asunto || !mensaje) {
            throw new Error('Todos los campos son obligatorios. Por favor, completa todo el formulario.');
        }

        // Validación del correo electrónico usando expresión regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('El correo electrónico ingresado no tiene un formato válido. Ejemplo: juanperez@mail.com');
        }

        // Si todo es correcto, mostrar un mensaje de éxito
        alert('Formulario enviado correctamente. ¡Gracias por contactarnos!');
        // Mostrar los datos enviados en la consola para fines de depuración
        console.log('Formulario enviado con los siguientes datos:');
        console.log(`Nombre: ${nombre}`);
        console.log(`Correo Electrónico: ${email}`);
        console.log(`Asunto: ${asunto}`);
        console.log(`Mensaje: ${mensaje}`);

    } catch (error) {
        // Si ocurre un error, mostrar el mensaje de error
        alert(`Error: ${error.message}`);
    }
});


// Crear instancia de la clase Paciente
let colaPacientes = new Paciente(); // Clase definida en estructura.js

// Función para agregar un paciente (solo nombre)
window.agregarPaciente = function () {
    const nombre = prompt('Ingrese el nombre del paciente:');
    if (nombre) {
        colaPacientes.agregarPaciente(nombre);
        console.log('Paciente agregado a la cola:', nombre);
        alert(`${nombre} agregado a la cola.`);
    }
};

// Función para ver la cola de pacientes
window.verColaPacientes = function () {
    const resultadoDiv = document.getElementById('resultadoPacientes');
    resultadoDiv.innerHTML = ''; // Limpiar contenido previo

    if (colaPacientes.lista.length > 0) {
        const listaPacientes = colaPacientes.lista.map(paciente => {
            return `<li><strong>Nombre:</strong> ${paciente.nombre}</li>`;
        }).join('');

        resultadoDiv.innerHTML = `
            <p><strong>Cola de Pacientes:</strong></p>
            <ul>${listaPacientes}</ul>
        `;
        console.log('Cola de pacientes:', colaPacientes.lista);
    } else {
        resultadoDiv.innerHTML = '<p>No hay pacientes en la cola.</p>';
    }
};

// Función para atender a un paciente
window.atenderPaciente = function () {
    const resultadoDiv = document.getElementById('resultadoPacientes');
    resultadoDiv.innerHTML = ''; // Limpiar contenido previo

    const atendido = colaPacientes.atenderPaciente();
    if (atendido) {
        const infoPaciente = `
            <p><strong>Paciente atendido:</strong></p>
            <ul>
                <li><strong>Nombre:</strong> ${atendido.nombre}</li>
            </ul>
        `;
        resultadoDiv.innerHTML = infoPaciente;
        console.log('Paciente atendido:', atendido);
    } else {
        resultadoDiv.innerHTML = '<p>No hay pacientes para atender.</p>';
    }
};