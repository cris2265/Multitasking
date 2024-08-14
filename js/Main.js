import { contra } from "./database.js";

let root = document.querySelector(".root");

root.innerHTML = `
    <header class="hed">
        <a href="#" class="git">Github</a>
    </header>
    <div class="fondobl">
        <div class="login">
            <div class="parte_1">
                <span class="material-symbols-outlined logito">dynamic_form</span>
                <p class="info">Esta es una seccion para agregar tareas para la hora que quieres y para que no se te olvide cada cosa que tu tienes que hacer a dia a dia, si la tienes en proceso te deja hacer propias tareas para llevar tu orden diario.</p>
            </div>
            <div class="parte_2">
                <h3>Hola</h3>
                <span class="bienvenido">Bienvenido a Multitasking</span>
                <span class="sesion">Iniciar Sesión</span>
                <input type="email" placeholder="Usuario o Correo" class="email">
                <input type="password" placeholder="Contraseña" class="password">
                <a href="#" class="beta">Probar Beta</a>
                <a href="#" class="iniciar">Iniciar</a>
                <a href="#" class="crear">Crear Cuenta</a>
            </div>
        </div>
    </div>
`;

document.querySelector(".beta").addEventListener("click", function() {
    
    // Redirigir a una nueva página
    window.location.href = 'index_2.html';
});
