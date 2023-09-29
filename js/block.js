const contenidoGuardado = document.documentElement.innerHTML;

if (/.*Mobi|.*Android/i.test(navigator.userAgent)) {
    if (window.orientation === 0 || window.orientation === 180) {
        document.body.innerHTML = '';
    }
    else if (window.orientation === 90 || window.orientation === -90) {
        document.documentElement.innerHTML = contenidoGuardado;
    }
}


window.addEventListener("orientationchange", () => {
    if (/.*Mobi|.*Android/i.test(navigator.userAgent)) {
        if (window.orientation === 0 || window.orientation === 180) {
            document.body.innerHTML = '';
        }
        else if (window.orientation === 90 || window.orientation === -90) {
            document.documentElement.innerHTML = contenidoGuardado;
        }
    }
});

