document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nombre = document.querySelector('input[name="nombre"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const mensaje = document.querySelector('textarea[name="mensaje"]').value;
      
      if (validarEmail(email)) {
        alert('Envío exitoso');
        // Aquí puedes agregar código adicional para enviar los datos del formulario a través de AJAX o cualquier otro método.
      } else {
        alert('Correo electrónico no válido');
      }
    });
    
    function validarEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  