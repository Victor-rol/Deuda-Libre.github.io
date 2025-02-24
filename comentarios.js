document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.comentario-form');
  form.addEventListener('submit', function(e) {
    // Aquí podrías implementar validaciones adicionales o enviar datos vía AJAX.
    // Por ahora, se muestra un mensaje de agradecimiento.
    alert('¡Gracias por compartir tu comentario!');
  });
});
