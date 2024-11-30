// Datos del equipo médico
const equipoMedico = [
    {
        nombre: "Dr. Carlos Méndez",
        especialidad: "Cardiología",
        descripcion: "Con más de 15 años de experiencia en el cuidado cardiovascular, el Dr. Méndez se especializa en el diagnóstico y tratamiento de enfermedades del corazón. Es conocido por su enfoque humano y su compromiso con la prevención de enfermedades a través de una vida saludable.",
        esDoctor: true,
        img: "assets/img/doctor-carlos.jpeg",
    },
    {
        nombre: "Dra. Laura Salazar",
        especialidad: "Pediatría",
        descripcion: "La Dra. Salazar ha dedicado su carrera a la salud infantil, brindando una atención integral y empática a sus pequeños pacientes y sus familias. Con más de 10 años de experiencia, es experta en desarrollo infantil y en el manejo de enfermedades pediátricas.",
        esDoctor: true,
        img: "assets/img/doctora-laura.avif",
    },
    {
        nombre: "Dra. Isabel Torres",
        especialidad: "Ginecología y Obstetricia",
        descripcion: "La Dra. Torres se dedica al cuidado integral de la salud femenina, acompañando a sus pacientes en todas las etapas de su vida. Con más de 12 años de experiencia, es reconocida por su compromiso en promover una salud ginecológica óptima y por su enfoque cálido y profesional en el área de la obstetricia.",
        esDoctor: true,
        img: "assets/img/doctora-isabel.jpg",
    },
    {
        nombre: "Dr. Antonio Gómez",
        especialidad: "Cirugía General",
        descripcion: "El Dr. Gómez cuenta con una amplia trayectoria en cirugía general y mínimamente invasiva. Su habilidad técnica y su precisión han sido fundamentales para el éxito de muchas intervenciones quirúrgicas. Su prioridad es garantizar la seguridad y la rápida recuperación de sus pacientes.",
        esDoctor: true,
        img: "assets/img/doctor-antonio.webp",
    },
    {
        nombre: "Enf. María López",
        especialidad: "Enfermería",
        descripcion: "La enfermera María López se ha especializado en el cuidado de niños y adolescentes, brindando apoyo tanto a los pequeños pacientes como a sus familias durante su tratamiento.",
        esDoctor: false,
        img: "assets/img/enfermera-maria.webp",
    },
    {
        nombre: "Enf. Pedro Ramos",
        especialidad: "Enfermería",
        descripcion: "Pedro Ramos es un enfermero con una gran trayectoria en el manejo de situaciones críticas y de urgencia. Con más de 15 años de experiencia en el área de emergencias, Pedro ha trabajado en múltiples unidades de cuidados intensivos, atendiendo a pacientes en condiciones críticas y apoyando a los médicos en intervenciones urgentes.",
        esDoctor: false,
        img: "assets/img/enfermero-pedro.jpg",
    },
    {
        nombre: "Enf. Ana Gómez",
        especialidad: "Cuidado Intensivo",
        descripcion: "Con años de experiencia en unidades de cuidados intensivos, la enfermera Ana Gómez es conocida por su dedicación y habilidad en el manejo de situaciones críticas, brindando apoyo y atención especializada a pacientes en estado grave.",
        esDoctor: false,
        img: "assets/img/enfermera-ana.webp"
    }
];

// Seleccionar contenedor de la lista de doctores
const listaDoctores = document.querySelector(".listaDoctores");
const btnDoctores = document.getElementById("btn-doctores");
const btnEnfermeros = document.getElementById("btn-enfermeros");

// Función para mostrar contenido filtrado
function mostrarMiembros(filtro) {
    listaDoctores.innerHTML = ""; // Limpiar contenido anterior

    equipoMedico
        .filter((miembro) => miembro.esDoctor === (filtro === "doctores"))
        .forEach((miembro) => {
            const card = document.createElement("div");
            card.classList.add("listaDoctores__doctores");
            card.innerHTML = `
                <img class="listaDoctores__img" src="${miembro.img}" alt="${miembro.nombre}" width="300px">
                <h3>${miembro.nombre}</h3>
                <h4>Especialidad: ${miembro.especialidad}</h4>
                <p>${miembro.descripcion}</p>
            `;
            listaDoctores.appendChild(card);
        });
}

// Asociar los eventos de los botones
btnDoctores.addEventListener("click", () => mostrarMiembros("doctores"));
btnEnfermeros.addEventListener("click", () => mostrarMiembros("enfermeros"));