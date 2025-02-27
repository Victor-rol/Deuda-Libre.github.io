document.addEventListener('DOMContentLoaded', function() {
  const excelForm = document.getElementById('excel-form');

  excelForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Verificar que se hayan seleccionado ambos archivos
    const file1 = document.getElementById('excel1').files[0];
    const file2 = document.getElementById('excel2').files[0];
    
    if (!file1 || !file2) {
      alert('Por favor, selecciona ambos archivos Excel.');
      return;
    }
    
    // Mostrar mensaje de análisis (simulación)
    const btn = document.querySelector('.btn-analyze');
    btn.textContent = 'Analizando...';
    btn.disabled = true;
    
    // Simulación del proceso de análisis y redirección tras 3 segundos
    setTimeout(() => {
      // Redirigir a la página cuaternaria
      window.location.href = "simulation.html";
    }, 3000);
    
    // Aquí se puede agregar lógica AJAX para enviar los archivos al servidor si se desea
  });
});
