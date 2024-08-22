import { contra } from "./database.js"; // Importa el array de credenciales

let root = document.querySelector(".root");

root.innerHTML = `
    <header class="hed">
        <a href="https://github.com/cris2265" class="git">Github</a>
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

    <!-- Modal de Crear Cuenta -->
    <div class="modal-crear-cuenta" style="display: none;">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Crear Cuenta</h2>
            <input type="email" placeholder="Correo" class="nuevo-email">
            <input type="password" placeholder="Contraseña" class="nuevo-password">
            <input type="password" placeholder="Confirmar Contraseña" class="confirmar-password">
            <button class="crear-cuenta-btn">Crear Cuenta</button>
        </div>
    </div>
`;

document.querySelector(".beta").addEventListener("click", function() {
    window.location.href = 'index_2.html';
});

document.querySelector(".iniciar").addEventListener("click", function() {
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;

    let user = contra.find(user => user.email === email && user.password === password);

    if (user) {
        // Guardar el nombre del usuario en localStorage
        localStorage.setItem("nombreUsuario", user.nombre);
        window.location.href = 'index_3.html';
    } else {
        alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
});

document.querySelector(".crear").addEventListener("click", function() {
    document.querySelector(".modal-crear-cuenta").style.display = "flex";
});

document.querySelector(".close-modal").addEventListener("click", function() {
    document.querySelector(".modal-crear-cuenta").style.display = "none";
});

document.querySelector(".crear-cuenta-btn").addEventListener("click", function() {
    let nuevoEmail = document.querySelector(".nuevo-email").value;
    let nuevoPassword = document.querySelector(".nuevo-password").value;
    let confirmarPassword = document.querySelector(".confirmar-password").value;

    if (nuevoPassword === confirmarPassword) {
        let nuevoUsuario = {
            nombre: "Nuevo Usuario", // Puedes pedir al usuario que ingrese su nombre también
            email: nuevoEmail,
            password: nuevoPassword
        };

        // Añadir el nuevo usuario al array contra
        contra.push(nuevoUsuario);

        alert("Cuenta creada exitosamente");
        document.querySelector(".modal-crear-cuenta").style.display = "none";
    } else {
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
    }
});
