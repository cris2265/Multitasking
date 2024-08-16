let lista = document.querySelector(".tareas")

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
    const botonAgregarTarea = document.querySelector(".agregar");
    const inputNombreTarea = document.querySelector(".nombre_tarea");
    const inputNombreUsuario = document.querySelector(".nombre_usuario");
    const inputFecha = document.querySelector(".date");
    const selectEstado = document.querySelector(".estate"); // Obtener el valor del select 'estate'

    const divLista = document.querySelector(".lista");
    const divAsignado = document.querySelector(".asignado");
    const divFecha = document.querySelector(".fecha");
    const divEstado = document.querySelector(".estado");

    // Añadir escuchador de eventos al botón "Agregar tarea"
    botonAgregarTarea.addEventListener("click", function() {
        // Obtener valores de los inputs y el select
        const nombreTarea = inputNombreTarea.value;
        const nombreUsuario = inputNombreUsuario.value;
        const fecha = inputFecha.value;
        const estado = selectEstado.options[selectEstado.selectedIndex].text; // Obtener el texto de la opción seleccionada
        
        // Actualizar los respectivos divs
        divLista.innerHTML += `<div class="tareahecha">${nombreTarea}</div>`;
        divAsignado.innerHTML += `<div class="usuarioasignado">${nombreUsuario}</div>`;
        divFecha.innerHTML += `<div class="fechalista">${fecha}</div>`;
        divEstado.innerHTML += `<div class="estadolisto">${estado}</div>`;  // Mostrar el estado seleccionado

        // Opcionalmente, limpiar los campos de entrada para la próxima tarea
        inputNombreTarea.value = "";
        inputNombreUsuario.value = "";
        inputFecha.value = "";
        selectEstado.selectedIndex = 0; // Reiniciar el select al primer valor
    });
});


