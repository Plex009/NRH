/*funcion para abrir barra de navegacion*/
function button(){
    var x = document.getElementById("sidebar");
    var griss = document.getElementById("gris");
    if (x.style.display === "none") {
        x.style.display = "block";
        griss.style.backgroundColor = "#0000005f";
        griss.style.opacity = '1';
        griss.style.visibility = 'visible';
        griss.style.position = "fixed";
    } else {
        x.style.display = "none";
        griss.style.backgroundColor = "#0000005f";
        griss.style.opacity = '1';
        griss.style.visibility = 'hidden';
        griss.style.position = "fixed";
    }
}
/*funcion para abrir inicio de sesion */
function openLogin() {
    document.getElementById("loginModal").style.display = "block";
  }
  
  function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
  }
  var modal = document.getElementById("loginModal");
  
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }

  // Obtener elementos del DOM
var modal1 = document.getElementById("registroModal");
var btn = document.getElementById("registroBtn");
var span = document.getElementsByClassName("close1")[0];

// Abrir ventana emergente al hacer clic en el botón
btn.onclick = function() {
  modal1.style.display = "block";
}

// Cerrar ventana emergente al hacer clic en la "X"
span.onclick = function() {
  modal1.style.display = "none";
}

// Cerrar ventana emergente al hacer clic fuera de ella

// Carrito de compras
function toggleCart() {
  var griss = document.getElementById("gris");
  var cars = document.getElementById("sidebar_cars");
    if (cars.style.display === "none") {
        cars.style.display = "block";
        griss.style.backgroundColor = "#0000005f";
        griss.style.opacity = '1';
        griss.style.visibility = 'visible';
        griss.style.position = "fixed";
    } else {
        cars.style.display = "none";
        griss.style.backgroundColor = "#0000005f";
        griss.style.opacity = '1';
        griss.style.visibility = 'hidden';
        griss.style.position = "fixed";
    }
}
// Aquí puedes agregar lógica adicional para manejar la interacción con el carrito de compras, como agregar productos, actualizar la cantidad, etc.
function buscar() {
  // Obtener el valor ingresado en el campo de búsqueda
  var busqueda = document.getElementById("campo-busqueda").value;
  
  // Realizar alguna acción con el término de búsqueda
  // Por ejemplo, redirigir a una página de resultados de búsqueda
  window.location.href = "resultados.html?busqueda=" + busqueda;
}
