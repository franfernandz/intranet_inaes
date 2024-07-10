//*****//

// IMAGEN DIARIA
// Ejemplo de script JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const imagenDia = document.getElementById('imagen--dia');

    function actualizarImagen() {
        const fechaActual = moment();
        const nombreImagen = `imagen_${fechaActual.format('YYYY-MM-DD')}.jpg`;
        const urlImagen = `./images/imagen_diaria/${nombreImagen}`;

        imagenDia.src = urlImagen;
        }

    // Actualiza la imagen al cargar la página
    actualizarImagen();

    // Configura un intervalo para actualizar la imagen cada 24 horas
    setInterval(actualizarImagen, 86400000 ); // 24 horas en milisegundos- 86400000
})

//TOGGLE  MENU
let menu = document.querySelector('#menu--bars');
let iconsLeft = document.querySelector('.header--icons--left');
let iconsRight = document.querySelector('.header--icons--right');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    iconsLeft.classList.toggle('active');
    iconsRight.classList.toggle('active');
}
