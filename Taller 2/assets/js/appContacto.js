// Agregar un event listener para manejar el formulario cuando se haga submit
document.querySelector('.form').addEventListener('submit', function(event) {
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
