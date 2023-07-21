window.addEventListener("error", function (e) {
    if (e.target.tagName.toLowerCase() === "img") {
      // Handle 404 error for image
      swal("Error", "Imagen no encontrada!", "error");
    } else {
      // Handle other types of 404 errors
      swal("Error", "Disculpe las molestias. No se ha encontrado la pagina", "error");
    }
  });