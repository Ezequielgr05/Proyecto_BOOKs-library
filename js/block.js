const contenidoGuardado = document.documentElement.innerHTML;

function verificarOrientacion() {
  if (/.*Mobi|.*Android/i.test(navigator.userAgent)) {
    if (
      (window.orientation === 0 && window.innerWidth < 540) || // Bloquear en vertical con ancho menor a 540px
      (window.orientation === 90 && window.innerWidth < 1024) // Bloquear en horizontal con ancho menor a 1024px
    ) {
      document.body.innerHTML = "";
      advertencia = document.createElement("h1");
      advertencia.textContent = "Para poder usar esta web sera necesario usar una tablet o computadora";
      advertencia.classList.add("advertencia");
      document.body.appendChild(advertencia);
    }
  }
}

// Verificar la orientación al cargar la página
verificarOrientacion();

// Agregar un evento para verificar la orientación en cambios
window.addEventListener("DOMContentLoaded", verificarOrientacion);

