
# Taller 2 - Módulo 3

## Taller 1

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

## Taller 2

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

Mensaje de alert al completar los datos de "Reservar cita":
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1733003589/boton-reservar-cita_krx6nc.png)


Implementación de un filter y un forEach al apretar el botón de mostrar doctores o enfermeros:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1733003598/boton-doctores_shcsdb.png)

![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1733003604/boton-enf_pzqw6d.png)

Mensaje de alert al enviar correctamente el formulario (apretar el botón "Enviar"):
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1733003610/contacto-envio-form_lc03y0.png)
## Authors

- Javier Lagos

