const contenidoGuardado = document.documentElement.innerHTML;

if (/.*Mobi|.*Android/i.test(navigator.userAgent)) {
  if (window.orientation === 0 || window.orientation === 180) {
    document.body.innerHTML = "";
    advertencia = document.createElement("h1");
    advertencia.textContent = "Para poder usar esta web gire el dispositivo";
    advertencia.classList.add("advertencia");
    document.body.appendChild(advertencia);
  } else if (window.orientation === 90 || window.orientation === -90) {
    advertencia = document.querySelector(".advertencia");
    if (advertencia) {
      advertencia.remove();
    }
    document.documentElement.innerHTML = contenidoGuardado;
  }
}

window.addEventListener("orientationchange", () => {
  if (/.*Mobi|.*Android/i.test(navigator.userAgent)) {
    if (window.orientation === 0 || window.orientation === 180) {
      document.body.innerHTML = "";
      advertencia = document.createElement("h1");
      advertencia.textContent = "Para poder usar esta web gire el dispositivo";
      advertencia.classList.add("advertencia");
      document.body.appendChild(advertencia);
    } else if (window.orientation === 90 || window.orientation === -90) {
      advertencia = document.querySelector(".advertencia");
      if (advertencia) {
        advertencia.remove();
      }
      document.documentElement.innerHTML = contenidoGuardado;
    }
  }
});
