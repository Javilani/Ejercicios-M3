// Cargar el archivo JSON
fetch('./assets/js/equipoMedico.json')
    .then(response => response.json())
    .then(data => {
        // Arreglo para almacenar doctores
        let doctores = [...data.doctores];

        // Función para clonar los doctores
        window.clonarDoctores = function () {
            const doctoresClonados = JSON.parse(JSON.stringify(data.doctores));
            doctoresClonados[0].nombre = "Dr. Carlos Méndez (Clonado)";
            console.log('Clonación:', doctoresClonados);
            console.log('Original (sin cambios):', data.doctores);
            alert('Clonación realizada (ver consola)');
        };

        // Función para hacer el merge de doctores y servicios
        window.mergeDoctoresServicios = function () {
            const servicios = [
                { "nombre": "Cardiología", "descripcion": "Tratamientos de enfermedades del corazón" },
                { "nombre": "Pediatría", "descripcion": "Atención integral para niños" },
                { "nombre": "Cirugía General", "descripcion": "Intervenciones quirúrgicas para diversas patologías" }
            ];

            const doctoresYServicios = {
                doctores: data.doctores,
                servicios: servicios
            };

            console.log('Merge:', doctoresYServicios);
            alert('Merge realizado (ver consola)');
        };

        // Función para recorrer los doctores
        window.recorrerDoctores = function () {
            const doctoresListados = data.doctores.map(doctor => {
                return `Nombre: ${doctor.nombre}, Especialidad: ${doctor.especialidad}, Disponibilidad: ${doctor.disponibilidad}`;
            });

            console.log('Doctores Disponibles:');
            console.log(doctoresListados.join('\n')); // Mostrar la lista de doctores

            // Convertir el objeto doctores a una cadena JSON y mostrarla
            const doctoresJsonString = JSON.stringify(data.doctores, null, 2);
            console.log('JSON.stringify de doctores:', doctoresJsonString);

            alert('Recorrido realizado (ver consola)');
        };

        window.agregarDoctor = function () {
            // Solicitar datos del nuevo doctor
            const nombre = prompt('Ingrese el nombre del doctor:');
            if (!nombre) {
                alert('No se ingresó un nombre. Operación cancelada.');
                return;
            }

            const especialidad = prompt('Ingrese la especialidad del doctor:');
            if (!especialidad) {
                alert('No se ingresó una especialidad. Operación cancelada.');
                return;
            }

            const aniosExperiencia = prompt('Ingrese los años de experiencia del doctor:');
            if (!aniosExperiencia || isNaN(aniosExperiencia)) {
                alert('Los años de experiencia deben ser un número válido. Operación cancelada.');
                return;
            }

            // Crear el objeto del nuevo doctor
            const nuevoDoctor = {
                nombre: nombre,
                especialidad: especialidad,
                aniosExperiencia: Number(aniosExperiencia)
            };

            // Agregar el objeto al arreglo de doctores
            doctores.push(nuevoDoctor);

            // Mostrar el resultado
            console.log('Nuevo doctor agregado:', nuevoDoctor);
            alert(`Doctor agregado exitosamente:\nNombre: ${nombre}\nEspecialidad: ${especialidad}\nAños de experiencia: ${aniosExperiencia}`);
        };

        // Función para eliminar un doctor
        window.eliminarDoctor = function () {
            // Solicitar el nombre del doctor a eliminar
            const nombre = prompt('Ingrese el nombre del doctor que desea eliminar:');
            if (!nombre) {
                alert('No se ingresó un nombre. Operación cancelada.');
                return;
            }

            // Buscar el índice del doctor en el arreglo
            const indice = doctores.findIndex(doctor => doctor.nombre.toLowerCase() === nombre.toLowerCase());

            if (indice !== -1) {
                // Si se encuentra, eliminar al doctor del arreglo
                const doctorEliminado = doctores.splice(indice, 1)[0];
                console.log('Doctor eliminado:', doctorEliminado);
                alert(`Doctor "${doctorEliminado.nombre}" eliminado exitosamente.`);
            } else {
                // Si no se encuentra, mostrar un mensaje de error
                alert(`No se encontró un doctor con el nombre "${nombre}".`);
            }
        };

        // Función para buscar un doctor por su nombre
        window.buscarDoctor = function () {
            const nombreBuscado = prompt('Ingrese el nombre del doctor a buscar:');
            if (!nombreBuscado) {
                alert('No se ingresó un nombre. Operación cancelada.');
                return;
            }

            const encontrado = doctores.find(doctor => doctor.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));
            if (encontrado) {
                const infoDoctor = `
                Nombre: ${encontrado.nombre}
                Especialidad: ${encontrado.especialidad}
                Años de experiencia: ${encontrado.aniosExperiencia}
                `;
                console.log('Doctor encontrado:', encontrado);
                alert(`Doctor encontrado:\n${infoDoctor.trim()}`);
            } else {
                alert('Doctor no encontrado.');
            }
        };

        // Función para mostrar todos los doctores
        window.mostrarDoctores = function () {
            const listaElement = document.getElementById('listaDoctores'); // Contenedor en el HTML
            listaElement.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

            if (doctores.length === 0) {
                listaElement.innerHTML = '<li>No hay doctores registrados.</li>';
                console.log('No hay doctores registrados.');
                return;
            }

            // Crear y agregar elementos <li> por cada doctor
            doctores.forEach((doctor, index) => {
                const listItem = document.createElement('li'); // Crear un nuevo elemento <li>
                listItem.textContent = `Doctor ${index + 1}: Nombre: ${doctor.nombre}, Especialidad: ${doctor.especialidad}, Años de experiencia: ${doctor.aniosExperiencia}`;
                listaElement.appendChild(listItem); // Añadir el <li> al <ul>
            });

            console.log('Lista de doctores actualizada en el HTML.');
        };

        // Función para ordenar los doctores por años de experiencia
        window.ordenar = function () {
            // Ordenar el array de doctores por años de experiencia (de mayor a menor)
            doctores.sort((a, b) => b.aniosExperiencia - a.aniosExperiencia);

            // Actualizar la lista en el HTML
            const listaElement = document.getElementById('listaDoctores');
            listaElement.innerHTML = ''; // Limpiar la lista antes de actualizar

            if (doctores.length === 0) {
                listaElement.innerHTML = '<li>No hay doctores registrados.</li>';
                console.log('No hay doctores registrados.');
                return;
            }

            // Crear la lista ordenada
            doctores.forEach((doctor, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `Doctor ${index + 1}: Nombre: ${doctor.nombre}, Especialidad: ${doctor.especialidad}, Años de experiencia: ${doctor.aniosExperiencia}`;
                listaElement.appendChild(listItem);
            });

            console.log('Doctores ordenados por años de experiencia de mayor a menor.');
        };

        // Pila para las citas de pacientes
        const citas = [];
        // Función para agendar una cita
        window.reservarCita = function () {
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

            // Crear objeto del paciente
            const paciente = {
                nombre,
                edad,
                email
            };

            // Confirmación de datos ingresados
            const confirmacion = confirm(`Por favor confirma los datos ingresados:\n\nNombre: ${paciente.nombre}\nEdad: ${paciente.edad}\nEmail: ${paciente.email}`);

            if (confirmacion) {
                // Agregar al array de citas
                citas.push(paciente);
                console.log('Cita agendada:', paciente);
                alert(`Cita agendada para:\n\nNombre: ${paciente.nombre}\nEdad: ${paciente.edad}\nEmail: ${paciente.email}`);
            } else {
                alert("La cita no fue agendada.");
            }
        },

            // Función para ver la última cita
            window.verUltimaCita = function () {
                const resultadoDiv = document.getElementById('resultadoCitas');
                resultadoDiv.innerHTML = ''; // Limpiar contenido previo

                if (citas.length > 0) {
                    const ultimaCita = citas[citas.length - 1];
                    const infoCita = `
            <p><strong>Última cita agendada:</strong></p>
            <ul>
                <li><strong>Nombre:</strong> ${ultimaCita.nombre}</li>
                <li><strong>Edad:</strong> ${ultimaCita.edad}</li>
                <li><strong>Email:</strong> ${ultimaCita.email}</li>
            </ul>
        `;
                    resultadoDiv.innerHTML = infoCita;
                    console.log('Última cita agendada:', ultimaCita);
                } else {
                    resultadoDiv.innerHTML = '<p>No hay citas agendadas.</p>';
                }
            };

        // Función para atender una cita
        window.atenderCita = function () {
            const resultadoDiv = document.getElementById('resultadoCitas');
            resultadoDiv.innerHTML = ''; // Limpiar contenido previo

            if (citas.length > 0) {
                const atendida = citas.pop();
                const infoCita = `
            <p><strong>Cita atendida:</strong></p>
            <ul>
                <li><strong>Nombre:</strong> ${atendida.nombre}</li>
                <li><strong>Edad:</strong> ${atendida.edad}</li>
                <li><strong>Email:</strong> ${atendida.email}</li>
            </ul>
        `;
                resultadoDiv.innerHTML = infoCita;
                console.log('Cita atendida:', atendida);
            } else {
                resultadoDiv.innerHTML = '<p>No hay citas para atender.</p>';
            }
        };
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
