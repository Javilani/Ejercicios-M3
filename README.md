
# Ejercicios Módulo 3

# Menú de Navegación

- [Taller 1](#taller-1)
- [Taller 2](#taller-2)
- [Laboratorio 1](#laboratorio-1)
- [Laboratorio 2](#laboratorio-2)

# Taller 1

### Decisión sobre el uso de JavaScript avanzado o TypeScript
Al analizar la viabilidad de implementar JavaScript (JS) o TypeScript (TS) en el desarrollo del proyecto del hospital Akilar, se consideraron las siguientes observaciones:

**Ventajas de TypeScript:**
TS permite identificar errores con mayor anticipación, lo que mejora la calidad del código y facilita la organización en proyectos de gran tamaño.

**Desventajas de TypeScript:**
TS está diseñado principalmente para proyectos de mayor escala, y dado que este proyecto es de menor envergadura, su implementación no sería esencial en este momento.

**Preferencia del desarrollador:**
El desarrollador tiene experiencia trabajando con JS y se siente más cómodo utilizándolo. Adoptar TS implicaría invertir tiempo en aprender y configurar el lenguaje, lo que retrasaría el avance del proyecto.

**Conclusión:**
Se decidió continuar utilizando JavaScript para este proyecto, ya que se adapta mejor tanto al tamaño del proyecto como a las habilidades del desarrollador, asegurando un desarrollo más eficiente en el corto plazo. TypeScript podría considerarse en futuras expansiones del proyecto si su complejidad aumenta significativamente.

# Taller 2

### Event Loop en JavaScript
JavaScript es un lenguaje single-threaded, lo que significa que solo puede ejecutar una operación a la vez en un solo hilo de ejecución. Sin embargo, debido a su naturaleza asincrónica, JavaScript puede manejar múltiples operaciones simultáneamente sin bloquear el hilo principal, gracias al event loop. El event loop es el mecanismo que permite que JavaScript gestione tareas de manera no bloqueante.

El event loop se encarga de manejar el flujo de ejecución de las operaciones, utilizando tres componentes principales: call stack, heap, y message queue.

**1. Call Stack:** Contiene las funciones que se están ejecutando. Cuando una función termina, se elimina de la pila.

**2. Heap:** Almacena objetos y otros datos dinámicos en memoria.

**3. Message Queue:** Guarda las tareas asincrónicas (callbacks, promesas, etc.) que deben ejecutarse después de que el call stack se haya vaciado.

**4. Event Loop:** Se asegura de que el callback de la cola de mensajes se mueva al call stack cuando esté vacío.

### Integración de Prompts y Validación de Datos
En la página de **contacto** y al apretar el **botón Reservar Cita**, los usuarios completan un formulario algunos de los siguientes campos (dependiendo de cual de las dos opciones se aplica):

- **Nombre**
- **Edad**
- **Correo Electrónico**
- **Asunto**
- **Mensaje**

### Validación de Datos:
- **Nombre, Edad, Correo Electrónico, Asunto y Mensaje**: Se verifica que todos los campos estén completos antes de enviar el formulario.
- **Correo Electrónico**: Utiliza una expresión regular para validar que el correo electrónico ingresado tenga un formato correcto (ejemplo: `ejemplo@dominio.com`).

El código de `assets/js/appContacto.js` está diseñado para manejar errores que puedan ocurrir durante el ingreso de datos. Si algún campo es dejado vacío o el formato del correo es incorrecto, se lanzará un mensaje de error y el formulario no se enviará. Esto se realiza mediante un bloque `try/catch` para capturar posibles excepciones y gestionar errores de manera controlada.

### Explicación del Scope de Variables y Uso de Operadores
#### Scope de las Variables:
La mayoría de las variables utilizadas para almacenar los valores, tanto de los campos del formulario (nombre, correo, asunto, mensaje) o para reservar cita se definen dentro de su función correspondiente, lo que significa que su scope es limitado a esa función. Estas variables no son accesibles fuera de la función.

#### Uso de Operadores:
- **Operadores de Comparación** (`===`, `!==`): Se usan para verificar si los campos están vacíos o si el correo tiene un formato válido.
- **Operadores Lógicos** (`&&`): Se usan para combinar las condiciones dentro de las validaciones. Por ejemplo, para verificar que todos los campos estén completos antes de continuar con el envío.

### Instrucciones para el Uso del Debugger y el Manejo de Errores con try/catch
#### Uso del `Debugger`:
El `debugger` es utilizado en `appContacto.js` para detener la ejecución del código en un punto específico y permitir al desarrollador inspeccionar el valor de las variables. En este proyecto, el `debugger` se coloca antes de realizar las validaciones para que el desarrollador pueda verificar el estado de las variables. Una vez que el código se detiene en el `debugger`, puedes inspeccionar el valor de las variables usando las herramientas de desarrollo del navegador, en la consola, para verificar que los valores sean correctos antes de proceder con el envío del formulario.

#### Manejo de Errores con `try/catch`:
El bloque `try/catch` también implementado en `appContacto.js` se usa para capturar cualquier error que ocurra durante la ejecución del código. Si se produce un error (por ejemplo, si el formato del correo electrónico no es válido o si algún campo está vacío), el bloque catch captura el error y muestra un mensaje al usuario indicando lo que salió mal.

# Laboratorio 1

## Gestión de Pacientes, Citas y Equipo Médico

### Complejidad de los Algoritmos
**Big-O y Complejidad Ciclomática**
1. **Agregar Paciente:**

- Complejidad Big-O: 𝑂(1) (agregar un elemento al final de un arreglo es constante).
- Ciclomática: Baja, con una sola decisión condicional para validar el nombre.
2. **Atender Paciente:**

- Complejidad Big-O: 𝑂(𝑛), ya que al usar shift() se deben desplazar los elementos restantes en el arreglo.
- Ciclomática: Baja, con una única decisión condicional.
3. **Ordenar Doctores:**

- Complejidad Big-O: 𝑂(𝑛log𝑛), debido al algoritmo de ordenación utilizado por .sort().
- Ciclomática: Moderada, ya que implica un bucle y funciones comparativas.
4. **Buscar Doctor:**

- Complejidad Big-O: 𝑂(𝑛), donde 𝑛 es el número de doctores, ya que utiliza find() para recorrer la lista.
- Ciclomática: Baja, con un único condicional para verificar si se encontró el doctor.
5. **Recorrer Doctores:**

- Complejidad Big-O: 𝑂(𝑛), ya que se recorre el arreglo completo de doctores.
- Ciclomática: Baja, con bucles simples y sin decisiones complejas.
6. **Cargar Datos desde JSON:**

- Complejidad Big-O: 𝑂(𝑛), donde 𝑛 es el número de elementos en el JSON.
- Ciclomática: Baja, ya que implica operaciones secuenciales.

### Implementación de Objetos JSON
El archivo `equipoMedico.json` contiene los datos del equipo médico organizados en dos categorías principales: doctores y enfermeros. Cada doctor tiene propiedades como nombre, especialidad, años de experiencia, y detalles anidados (horarios y contacto).

#### Operaciones Realizadas

1. **Clonación:**

- Se realiza una copia profunda del arreglo de doctores utilizando JSON.parse(JSON.stringify(obj)), garantizando que los cambios realizados en la copia no afecten al original.
- Ejemplo:

        const doctoresClonados = JSON.parse(JSON.stringify(data.doctores));

2. **Merge:**

- Combina los datos de doctores con servicios médicos en un solo objeto.
- Ejemplo:

        const doctoresYServicios = {
                doctores: data.doctores,
                servicios: servicios
        };

3. **Recorrido:**

- Itera sobre los doctores para extraer información y mostrarla en consola o en la interfaz.
- Ejemplo:

        data.doctores.map(doctor => `Nombre: ${doctor.nombre}, Especialidad: ${doctor.especialidad}`);

## Estructuras de Datos Implementadas

### Arreglos

Los arreglos se utilizan para almacenar listas de pacientes y doctores en el proyecto.

**Operaciones**:
  - `push()`: Agrega pacientes o doctores al final del arreglo.
  - `shift()`: Atiende al primer paciente, eliminándolo del inicio del arreglo.
  - `find()` y `findIndex()`: Permiten buscar elementos específicos dentro del arreglo.

**Ventaja**:
  - Son simples de implementar y eficientes para acceso secuencial, lo que los hace ideales para manejar listas de pacientes y doctores.

### Colas

Las colas se implementan utilizando arreglos para gestionar la atención de pacientes en orden.

**Operaciones**:
  - `push()`: Agrega pacientes al final de la cola.
  - `shift()`: Atiende al primer paciente, eliminándolo de la cola.

**Ventaja**:
  - Siguen el principio FIFO (First In, First Out), lo que es ideal para simular el flujo de atención de pacientes.

### Clases

La clase `Paciente` encapsula la lógica para crear y gestionar pacientes como objetos, mejorando la organización y modularidad del código.

**Ventaja**:
  - Facilita la extensión y reutilización del código, permitiendo agregar nuevos métodos y propiedades relacionadas con los pacientes de forma más sencilla.

### Descripción de los Algoritmos Implementados

1. **Reservar Cita**
- Descripción: Solicita y valida información del paciente (nombre, edad, correo electrónico).
- Complejidad: 𝑂(1) para cada entrada validada.
- Ejemplo de código:

        function obtenerNombre() {
            let nombre;
            while (true) {
                nombre = prompt("Nombre del paciente: ");
                if (nombre.trim() !== "") return nombre;
               alert("El nombre no puede estar vacío.");
            }
        }

2. **Buscar Doctor**
- Descripción: Encuentra un doctor en el arreglo basado en su nombre.
- Complejidad: 𝑂(𝑛).
- Ejemplo de código:

        const encontrado = doctores.find(doctor => doctor.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));


3. **Mostrar Doctores**
- Descripción: Itera sobre el arreglo de doctores y actualiza un elemento HTML con la lista.
- Complejidad: 𝑂(𝑛).
- Ejemplo de código:

        doctores.forEach((doctor, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Doctor ${index + 1}: Nombre: ${doctor.nombre}, Especialidad: ${doctor.especialidad}`;
            listaElement.appendChild(listItem);
        });


4. **Ordenar Doctores**
- Descripción: Ordena el arreglo de doctores por años de experiencia en orden descendente.
- Complejidad: 𝑂(𝑛log⁡𝑛).
- Ejemplo de código:

        doctores.sort((a, b) => b.aniosExperiencia - a.aniosExperiencia);


5. **Clonación**
- Descripción: Realiza una copia profunda del arreglo de doctores.
- Complejidad: 𝑂(𝑛).
- Ejemplo de código:

        const doctoresClonados = JSON.parse(JSON.stringify(data.doctores));

6. **Merge**
- Descripción: Fusiona datos de doctores y servicios médicos.
- Complejidad: 𝑂(𝑛+𝑚), donde 𝑛 es el número de doctores y 𝑚 el número de servicios.
- Ejemplo de código:

        const doctoresYServicios = {
            doctores: data.doctores,
            servicios: servicios
        };

# Laboratorio 2

## Programación funcional de JavaScript

### Currying
El **currying** es una técnica que permite transformar una función que toma múltiples argumentos en una serie de funciones que toman un solo argumento.

**Ejemplo Implementado:** La función `calcularCostoConsulta` utilizada en el archivo `appContacto.js`, implementa currying para calcular el costo total de las consultas de un paciente.

        const calcularCostoConsulta = (precioConsulta) => (numeroConsultas) => precioConsulta * numeroConsultas;

        // Uso:
        const costoPorConsulta = calcularCostoConsulta(20000);
        const costoTotal = costoPorConsulta(5); // Resultado: 100000


### Funciones Flecha
Las **funciones flecha** ofrecen una sintaxis concisa y mejoran la legibilidad del código. En este proyecto, se utilizaron para calcular el tiempo promedio de espera de los pacientes.

**Ejemplo Implementado:**

        const calcularPromedioEspera = (tiempos) => 
                tiempos.reduce((total, tiempo) => total + tiempo, 0) / tiempos.length;

        // Uso:
        const tiempos = [15, 20, 10, 25];
        const promedio = calcularPromedioEspera(tiempos); // Resultado: 17.5

### Recursión
La **recursión** se emplea para calcular de forma acumulativa un resultado al dividir un problema en subproblemas más pequeños.

**Ejemplo Implementado:** La función `calcularHorasSemanalesRecursivo` implementada en `appAdmin.js` calcula de forma recursiva las horas de consulta disponibles para un doctor a lo largo de la semana.

        function calcularHorasSemanalesRecursivo(horarios, dias, index = 0, total = 0) {
                if (index >= dias.length) return total; // Caso base
                const horasDia = horarios[dias[index]] ? calcularHoras(horarios[dias[index]]) : 0;
                return calcularHorasSemanalesRecursivo(horarios, dias, index + 1, total + horasDia);
        }

        // Uso:
        const horarios = { lunes: "09:00 - 13:00", miércoles: "14:00 - 18:00" };
        const diasSemana = ["lunes", "miércoles"];
        const totalHoras = calcularHorasSemanalesRecursivo(horarios, diasSemana); // Resultado: 8

### Composición de Funciones
La **composición de funciones** combina varias funciones simples para formar una función más compleja. Esto ayuda a crear cadenas de operaciones reutilizables.

**Ejemplo Implementado:** La función `compose(f, g)` toma dos funciones y las combina. La primera función (`f`) se aplica al resultado de la segunda función (`g`). En este caso, se utiliza para combinar el cálculo del costo con el descuento.

        function compose(f, g) {
                return function(x) {
                        return f(g(x));
        };
}



## Programación Orientada a Eventos y Programación Asíncrona

### Funcionalidades Implementadas

#### **1. Captura de Eventos del Usuario**
#### a. Envío del Formulario de Contacto
- Se implementó un **listener** que detecta el envío del formulario en la página de contacto.
- Al enviar el formulario, se captura el evento `submit`, se previene el comportamiento predeterminado del navegador, y se muestra un mensaje de confirmación al usuario, confirmando que su mensaje fue recibido exitosamente.

#### b. Evento Personalizado: Llegada de un Nuevo Paciente
- Se creó un evento personalizado nuevoPaciente que simula la llegada de un paciente.
- Al hacer clic en el botón Agregar Paciente, se solicita el nombre del paciente, se agrega a la cola y se dispara el evento.
- Un escuchador captura el evento y muestra una notificación con el nombre del paciente agregado.


#### **2. Asincronía y Manejo de Datos**
#### a. Simulación de Llamadas a una API REST
- Se implementó una función asíncrona utilizando `async/await` para simular la obtención de datos de los doctores desde una API REST.
- La función utiliza `Promise` para manejar los casos de éxito (donde se obtienen los datos correctamente) o fallo (donde ocurre un error).

#### b. Manejo de Errores con `try/catch`
- La obtención de datos asíncronos está envuelta en un bloque `try/catch` que asegura que cualquier error durante la simulación sea capturado.
- Si ocurre un error, se muestra un mensaje informativo al usuario y se registra el error en la consola para depuración.

#### c. Callback Personalizado para Manejo de Errores
- Se definió un callback (`onErrorCallback`) que se invoca específicamente cuando falla la obtención de datos.
- Este callback recibe el error como argumento y lo procesa mostrando un mensaje personalizado en la consola.
- Este diseño modular permite que el manejo de errores sea reutilizable en diferentes partes del proyecto.


## Programación Orientada a Objetos en JavaScript

En el archivo `estructura.js` se implementaron clases en JavaScript utilizando conceptos fundamentales de programación orientada a objetos (POO) como herencia, encapsulación, y polimorfismo. El código incluye una clase base Doctor y una subclase Cirujano que extiende las funcionalidades de la clase base.

### 📚 Estructura del código

#### Clase `Doctor`

**Propiedades:**

- nombre: Nombre del doctor.
- especialidad: Especialidad del doctor.
- aniosDeExperiencia (encapsulada): Simulada como privada usando un closure.

**Métodos:**

- mostrarInformacion(): Retorna la información básica del doctor.
- atenderPaciente(numeroDePacientes): Incrementa el número de pacientes atendidos.
- obtenerTotalPacientes(): Devuelve el total de pacientes atendidos.
- calcularConsultasRealizadas(): Método genérico que puede ser sobrescrito por las subclases.

**Encapsulación:** 
- La propiedad aniosDeExperiencia está protegida mediante un getter (getAniosDeExperiencia) y un setter (setAniosDeExperiencia). Esto asegura que solo valores válidos sean asignados.


#### Subclase `Cirujano`

La clase `Cirujano` extiende `Doctor` e incluye funcionalidades específicas para médicos especializados en cirugía:

**Propiedades adicionales:**

- `especialidadQuirurgica`: Campo que define el tipo de cirugía en el que se especializa.
- `operacionesRealizadas`: Número de operaciones realizadas por el cirujano.
**Métodos sobrescritos (polimorfismo):**

- `calcularConsultasRealizadas()`: Calcula el número de operaciones realizadas en lugar de consultas médicas.

**Métodos adicionales:**

- `registrarOperacion(cantidad)`: Permite registrar el número de operaciones realizadas, asegurando que no se introduzcan valores negativos.


### 🔑 Conceptos aplicados

#### 1. Encapsulación
La propiedad aniosDeExperiencia está protegida mediante un closure en la clase Doctor. Solo puede ser accedida o modificada a través de métodos específicos (getAniosDeExperiencia y setAniosDeExperiencia).

#### 2. Herencia
La clase Cirujano extiende la clase Doctor, heredando todas sus propiedades y métodos. Esto permite que Cirujano reutilice y extienda las funcionalidades definidas en Doctor.

#### 3. Polimorfismo
El método calcularConsultasRealizadas es sobrescrito en Cirujano para adaptarlo al contexto de la subclase. En lugar de calcular consultas, devuelve el número de operaciones realizadas.










## Instrucciones para Visualizar el Proyecto

### Requisitos Previos

- Tener **Node.js** y **npm** instalados en tu computadora.
- Tener **SASS** instalado globalmente. Si no lo tienes, puedes instalarlo ejecutando el siguiente comando:

        npm install -g sass

### Pasos para Ejecutar el Proyecto

1. Clona el repositorio en tu máquina local:

        git clone <URL del repositorio>
        cd <nombre del repositorio>
2. Instala las dependencias necesarias (si es que usas alguna para el proyecto):

        npm install
3. Compila los archivos SASS en CSS ejecutando el siguiente comando:

        sass --watch assets/scss:assets/css
4. Abre el archivo `index.html` (o cualquier otro archivo HTML del proyecto) en tu navegador:
- Utiliza Live Server (si estás trabajando en VS Code) para ver la página en tu navegador
- Haz clic derecho sobre `index.html`.
- Selecciona "Open with Live Server" para iniciar la página en tu navegador.

## Screenshots

- Implementación cálculo de horas disponibles por Doctor:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1733600213/horas-disponibles_d7xooj.png)


- Cálculo de Costos y Promedio de espera:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1733600219/promEspera-Costos_dxb0hi.png)


## Authors

- Javier Lagos

