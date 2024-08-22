import { guardarAsignaciones, obtenerAsignaciones } from "./Storage.js";

guardarAsignaciones
export let lista = document.querySelector(".tareas")

lista.innerHTML = `
    <div class="header">
        <span class="material-symbols-outlined icono">format_list_bulleted</span>
        <h3 class="titulo">Multitasking</h3>
        <input type="text" class="buscar" placeholder="Buscar">
        <button class="mas">+</button>
        <button class="emoji">0</button>
    </div>
    <div class="cuerpo">
        <span class="titulo_1">Nombre de la Tarea</span>
        <span class="titulo_2">Asignado</span>
        <span class="titulo_3">Fecha de Entrega</span>
        <span class="titulo_4">Estado</span>
        <div class="lista">
            <div class="tareahecha">hola</div>
        </div>
        <div class="asignado">
            <div class="usuarioasignado">hoilads</div>
        </div>
        <div class="fecha">
            <div class="fechalista">24/6/2024</div>
        </div>
        <div class="estado">
            <div class="estadolisto">incompleto</div>
        </div>
    </div>
    <div class="modal">
        <div class="modal-content">
            <span class="close">X</span>
            <input type="text" class="nombre_tarea" placeholder="Asignacion Tarea">
            <input type="text" class="nombre_usuario" placeholder="Usuario">
            <input type="date" class="date">
            <select class="estate">
                <option value="0" selected disabled>Selecciona el Progreso</option>
                <option value="1" data-color="red">Sin Asignar</option>
                <option value="2" data-color="orange">En Progreso</option>
                <option value="3" data-color="green">Completado</option>
                <option value="4" data-color="green">Completado con Retraso</option>
                <option value="5" data-color="green">No presentado</option>
            </select>
            <span class="agregar">Agregar tarea</span>
        </div>
    </div>
`


document.querySelector(".mas").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == document.querySelector(".modal")) {
        document.querySelector(".modal").style.display = "none";
    }
});



document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos necesarios
    let botonAgregarTarea = document.querySelector(".agregar");
    let inputNombreTarea = document.querySelector(".nombre_tarea");
    let inputNombreUsuario = document.querySelector(".nombre_usuario");
    let inputFecha = document.querySelector(".date");
    let selectEstado = document.querySelector(".estate");
    let divLista = document.querySelector(".lista");
    let divAsignado = document.querySelector(".asignado");
    let divFecha = document.querySelector(".fecha");
    let divEstado = document.querySelector(".estado");

    // Función para obtener asignaciones desde localStorage
    function obtenerAsignaciones() {
        let datos = localStorage.getItem("asignaciones");
        return datos ? JSON.parse(datos) : [];
    }

    // Función para guardar asignaciones en localStorage
    function guardarAsignaciones(asignaciones) {
        localStorage.setItem("asignaciones", JSON.stringify(asignaciones));
    }

    // Función para pintar las asignaciones en los divs
    function pintarAsignaciones() {
        let asignaciones = obtenerAsignaciones();

        asignaciones.forEach((asignacion, index) => {
            divLista.innerHTML += `<div class="tareahecha"> <span class="work">${asignacion.nombre}</span> <button class="eliminar" data-index="${index}">X</button></div>`;
            divAsignado.innerHTML += `<div class="usuarioasignado">${asignacion.persona}</div>`;
            divFecha.innerHTML += `<div class="fechalista">${asignacion.fechasignada}</div>`;
            divEstado.innerHTML += `<div class="estadolisto">${asignacion.estate}</div>`;
        });

        // Añadir el evento de eliminar a cada botón
        document.querySelectorAll(".eliminar").forEach(boton => {
            boton.addEventListener("click", function() {
                let index = this.getAttribute("data-index");
                eliminarAsignacion(index);
            });
        });
    }

    // Función para eliminar una asignación
    function eliminarAsignacion(index) {
        let asignaciones = obtenerAsignaciones();
        asignaciones.splice(index, 1);
        guardarAsignaciones(asignaciones);
        actualizarPantalla();
    }

    // Función para actualizar la pantalla después de eliminar una tarea
    function actualizarPantalla() {
        divLista.innerHTML = "";
        divAsignado.innerHTML = "";
        divFecha.innerHTML = "";
        divEstado.innerHTML = "";
        pintarAsignaciones();
    }

    // Pintar asignaciones al cargar la página
    pintarAsignaciones();

    // Añadir escuchador de eventos al botón "Agregar tarea"
    botonAgregarTarea.addEventListener("click", function(event) {
        event.preventDefault();

        // Obtener valores de los inputs y el select
        let nombreTarea = inputNombreTarea.value;
        let nombreUsuario = inputNombreUsuario.value;
        let fecha = inputFecha.value;
        let estado = selectEstado.options[selectEstado.selectedIndex].text;

        // Crear un objeto con los datos de la tarea
        let nuevaAsignacion = {
            nombre: nombreTarea,
            persona: nombreUsuario,
            fechasignada: fecha,
            estate: estado
        };

        // Obtener la base de datos actual y añadir la nueva asignación
        let database = obtenerAsignaciones();
        database.push(nuevaAsignacion);

        // Guardar la base de datos actualizada en localStorage
        guardarAsignaciones(database);

        // Actualizar la pantalla para mostrar la nueva tarea
        actualizarPantalla();

        // Limpiar los campos de entrada para la próxima tarea
        inputNombreTarea.value = "";
        inputNombreUsuario.value = "";
        inputFecha.value = "";
        selectEstado.selectedIndex = 0;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el nombre del usuario desde localStorage
    let nombreUsuario = localStorage.getItem("nombreUsuario");
    
    if (nombreUsuario) {
        // Obtener la letra inicial del nombre del usuario
        let inicial = nombreUsuario.charAt(0).toUpperCase();
        
        // Cambiar el contenido del div con la letra inicial
        let userDiv = document.querySelector(".emoji");
        if (userDiv) {
            userDiv.textContent = inicial;
        }
    }
});
