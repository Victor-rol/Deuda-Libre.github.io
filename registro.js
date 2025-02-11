document.addEventListener('DOMContentLoaded', function() {
  // Validación básica: comprobar que las contraseñas coincidan
  const form = document.querySelector('.subscription-form');
  form.addEventListener('submit', function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    if (password !== confirmPassword) {
      e.preventDefault();
      alert('Las contraseñas no coinciden. Por favor, verifica tus datos.');
    }
  });

  // Preseleccionar el plan según el parámetro recibido en la URL
  const urlParams = new URLSearchParams(window.location.search);
  const planParam = urlParams.get('plan'); // Se espera "gratuito" o "premium"
  if (planParam) {
    const planSelect = document.getElementById('plan');
    planSelect.value = planParam;
  }
});
