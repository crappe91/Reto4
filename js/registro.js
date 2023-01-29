// Obtén el formulario
let form = document.getElementById("formulario");
alert ("Rellena los datos para entrar");
// Añade un evento submit al formulario
form.addEventListener("submit", function(event) {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault();

  
  // Obtén los valores de los campos de input
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;

  // Comprueba si algún campo está vacío
  if (nombre.length === 0 || email.length === 0) {
    alert("Por favor, rellene todos los campos del formulario");
    return;
  }

  // Crea un objeto con los datos recogidos
  let datos = {
    nombre: nombre,
    email: email
  };

  // Guarda los datos en el local storage
  localStorage.setItem("datos", JSON.stringify(datos));

  // Alerta de éxito
  alert("Datos guardados en el local storage");
 
  if (JSON.parse(localStorage.getItem('datos')).nombre != null){
 // Redirecciona a index HTML
 window.location.href = "index.html";
  }
  
});
