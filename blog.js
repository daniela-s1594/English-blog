// Función para obtener los comentarios almacenados en el almacenamiento local
function obtenerComentarios() {
  var comentarios = localStorage.getItem("comentarios");
  if (comentarios === null) {
    return [];
  } else {
    return comentarios.split(",");
  }
}

// Función para actualizar la sección de comentarios en la página web
function actualizarSeccionComentarios() {
  var seccionComentarios = document.getElementById("seccion-comentarios");

  // Limpiar la sección de comentarios existentes
  while (seccionComentarios.firstChild) {
    seccionComentarios.removeChild(seccionComentarios.firstChild);
  }

  // Agregar cada comentario a la sección de comentarios
  var comentarios = obtenerComentarios();
  for (var i = 0; i < comentarios.length; i++) {
    var comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");
    comentarioDiv.textContent = comentarios[i];
    seccionComentarios.appendChild(comentarioDiv);
  }
}

const form = document.getElementById('comment-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Aquí irá el código para enviar el comentario
});
