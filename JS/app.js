document.getElementById('formContacto').addEventListener('submit', function(event) {
  event.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;

  // Creo el json
  let formData = {
    nombre: nombre,
    apellido: apellido,
    email: email
  };

  // Convierto en string
  let formDataString = JSON.stringify(formData);

  // Guardo la info
  localStorage.setItem('formData', formDataString);


alert('Formulario enviado. Los datos han sido guardados en el almacenamiento local.');
});