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
    
    // Mostrar spinner o mensaje de carga (simulación)
    const originalButtonText = document.querySelector('.btn-analyze').textContent;
    const btn = document.querySelector('.btn-analyze');
    btn.textContent = 'Analizando...';
    btn.disabled = true;
    
    // Simulación de tiempo de análisis (por ejemplo, 3 segundos)
    setTimeout(() => {
      alert('Análisis completado. Revisa tus reportes financieros.');
      btn.textContent = originalButtonText;
      btn.disabled = false;
    }, 3000);
    
    // Aquí se puede agregar lógica AJAX para enviar los archivos al servidor
  });
});
