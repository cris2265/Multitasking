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
        <div class="lista"></div>
        <div class="asignado"></div>
        <div class="fecha"></div>
        <div class="estado"></div>
    </div>
    <div class="modal">
        <div class="modal-content">
            <span class="close">X</span>
            <input type="text" class="nombre_tarea">
            <input type="text" class="nombre_usuario">
            <input type="date" class="fecha">
            inpu
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
