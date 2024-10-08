function toggleProductos(tituloCategoria) {
    const listaProductos = tituloCategoria.nextElementSibling;
    const todasLasListas = document.querySelectorAll('.productos-lista'); // Selecciona todas las listas de productos

    // Cierra todas las listas de productos
    todasLasListas.forEach(lista => {
        if (lista !== listaProductos) { // Evita cerrar la lista seleccionada
            lista.style.display = 'none';
        }
    });

    // Alterna la visibilidad de la lista seleccionada
    listaProductos.style.display = (listaProductos.style.display === 'none' || listaProductos.style.display === '') ? 'block' : 'none';
}// Obtener la lista de usuarios y el contenedor de opciones
const listaUsuarios = document.querySelector('.lista-usuarios');
const opcionesUsuario = document.getElementById('opciones-usuario');
const configuracionBtn = document.getElementById('configuracion-btn');
const categoriasBtn = document.getElementById('categorias-btn');
const modalConfiguracion = document.getElementById('modal-configuracion');
const closeModalBtn = document.querySelector('.close-btn');
const cerrarSesionBtn = document.getElementById('cerrar-sesion-btn');

listaUsuarios.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI' || event.target.closest('LI')) {
        const usuarioSeleccionado = event.target.closest('LI').dataset.usuario;
        opcionesUsuario.style.display = 'block';

        // Mostrar el modal de configuración al hacer clic en "Cambiar configuración"
        configuracionBtn.onclick = function() {
            opcionesUsuario.style.display = 'none';
            modalConfiguracion.style.display = 'flex';
            document.getElementById('nombre').value = usuarioSeleccionado; 
        categoriasBtn.onclick = function() {
            window.location.href = 'categorias.html'; // Redirigir a Categorías
        };
    }
});


closeModalBtn.onclick = function() {
    modalConfiguracion.style.display = 'none';
};


window.onclick = function(event) {
    if (event.target === modalConfiguracion) {
        modalConfiguracion.style.display = 'none';
    }
};

 "Cerrar sesión"
cerrarSesionBtn.onclick = function() {
    alert('Has cerrado sesión.');
    modalConfiguracion.style.display = 'none';
    window.location.href = "Login.html";



document.getElementById('form-configuracion').addEventListener('submit', function(event) {
    event.preventDefault();
    const nuevoNombre = document.getElementById('nombre').value;
    const nuevaContrasena = document.getElementById('contrasena').value;
    
    alert('Nombre cambiado a: ' + nuevoNombre + '\nContraseña actualizada.');
    
  
    
    modalConfiguracion.style.display = 'none';
});