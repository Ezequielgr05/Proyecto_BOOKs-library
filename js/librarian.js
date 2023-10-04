btnLeer = document.querySelectorAll(".leerBTN")
imgBook = Array.from(document.querySelectorAll(".imgBTN"))
extension = [".jfif", ".jpg", ".jpeg", ".png"]
rutas = JSON.parse(localStorage.getItem('rutas'))


function obtenerRuta(key) {
    let rutaSinFiltrar = imgBook[key].getAttribute("src");
    let partesRuta = rutaSinFiltrar.split("/");
    let nombreArchivo = partesRuta[partesRuta.length - 1]
    
    for (let i = 0; i < extension.length; i++) {
        ((i) => {
            if (nombreArchivo.includes(extension[i])) {
                nombreArchivo = nombreArchivo.replace(extension[i], "");
            }
        })(i);
    }
     return nombreArchivo
}

function irAlLector(){
    var urlBase = window.location.href;
    var partes = urlBase.split('/'); 
    var protocolo = partes[0]
    var host = partes[2]
    var nuevaURL = protocolo + '//' + host + '/html/lectorPDF.html';
    window.location.href = nuevaURL
}


for (var i = 0; i < btnLeer.length; i++) {
    ((i) => {
        btnLeer[i].addEventListener("click", function() {
            nombreArchivo = obtenerRuta(i);
            rutaAUsar = rutas[nombreArchivo]
            localStorage.setItem("rutaDelArchivo", rutaAUsar);
            setTimeout(() => {
                irAlLector()
            }, 100)
        });
    })(i);
}

