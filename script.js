// Función para mostrar los detalles del producto
function mostrarDetalles(productoId) {
    localStorage.setItem('productoId', productoId); // Guardamos el ID del producto
    window.location.href = 'detalle.html'; // Redirigimos a la página de detalles
}

// Función para navegar entre las imágenes
function cambiarImagen(direccion) {
    const imagenIndex = parseInt(localStorage.getItem('imagenIndex'), 10);
    const productoId = localStorage.getItem('productoSeleccionado');
    
    let nuevoIndex = imagenIndex + direccion;
    
    // Evitamos que el índice se salga de los límites
    if (nuevoIndex < 0) nuevoIndex = 4;  // 4 porque tenemos 5 imágenes (0-4)
    if (nuevoIndex > 4) nuevoIndex = 0;  // Lo reiniciamos a 0 al llegar al final

    localStorage.setItem('imagenIndex', nuevoIndex);
    mostrarImagen(productoId, nuevoIndex);
}

// Función para mostrar la imagen correspondiente
function mostrarImagen(productoId, index) {
    const imagenes = document.querySelectorAll('.imagenes-detalles img');
    imagenes.forEach((img, idx) => {
        if (idx === index) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}
