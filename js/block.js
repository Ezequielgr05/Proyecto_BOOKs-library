const contenidoGuardado = document.documentElement.innerHTML;

function verificarOrientacion() {
  if (/.*Mobi|.*Android/i.test(navigator.userAgent)) {
    if (
      (window.orientation === 0 && window.innerWidth < 540) ||
      (window.orientation === 90 && window.innerWidth < 1024)
    ) {
      document.body.innerHTML = "";
      advertencia = document.createElement("h1");
      advertencia.textContent = "Para poder usar esta web sera necesario usar una tablet o computadora";
      advertencia.classList.add("advertencia");
      document.body.appendChild(advertencia);
    }
    else {
    setTimeout(() => {
      window.location.href = "/inicio.html";
    }, 1500);
    }
  }
  else {
    setTimeout(() => {
      window.location.href = "/inicio.html";
    }, 1500);
    }
}

verificarOrientacion();

window.addEventListener("DOMContentLoaded", verificarOrientacion);

