btnLeer = document.querySelectorAll(".leerBTN")
imgBook = Array.from(document.querySelectorAll(".imgBTN"))
extension = [".jfif", ".jpg", ".jpeg", ".png"]
rutas = {
    'ElHombreDeLaMascaraDeHierro': '../pdfs/Accion/ElHombreDeLaMascaraDeHierro.pdf',
    'ElSeñorDelTiempo1ElIniciado': '../pdfs/Accion/ElSeñorDelTiempo1ElIniciado.pdf',
    'ElSeñorDelTiempo2ElProscrito': '../pdfs/Accion/ElSeñorDelTiempo2ElProscrito.pdf',
    'ElSeñorDelTiempo3ElOrdenYElcaos': '../pdfs/Accion/ElSeñorDelTiempo3ElOrdenYElcaos.pdf',
    'LaMomia': '../pdfs/Accion/LaMomia.pdf',
    'LosTresMosqueteros': '../pdfs/Accion/LosTresMosqueteros.pdf',
    'StarWarsElResurgirDeLaFuerzaOscura': '../pdfs/Accion/StarWarsElResurgirDeLaFuerzaOscura.pdf',
    'StarWarsHerederoDelImperio': '../pdfs/Accion/StarWarsHerederoDelImperio.pdf',
    'StarWarsLaUltimaOrden': '../pdfs/Accion/StarWarsLaUltimaOrden.pdf',
    'YoRobot': '../pdfs/Accion/YoRobot.pdf',
    'AngelesYDemonios': '../pdfs/DanBrown/AngelesYDemonios.pdf',
    'CodigoDaVinci': '../pdfs/DanBrown/CodigoDaVinci.pdf',
    'ElSimboloPerdido': '../pdfs/DanBrown/ElSimboloPerdido.pdf',
    'Inferno': '../pdfs/DanBrown/Inferno.pdf',
    'Origen': '../pdfs/DanBrown/Origen.pdf',
    '1HarryPotterYLaPiedraFilosofal': '../pdfs/Fantasia/1HarryPotterYLaPiedraFilosofal.pdf',
    '2HarryPotterYLaCamaraSecreta': '../pdfs/Fantasia/2HarryPotterYLaCamaraSecreta.pdf',
    '3HarryPotterYElPrisioneroDeAzkaban': '../pdfs/Fantasia/3HarryPotterYElPrisioneroDeAzkaban.pdf',
    '4HarryPotterYElCalizDeFuego': '../pdfs/Fantasia/4HarryPotterYElCalizDeFuego.pdf',
    '5HarryPotterYLaOrdendelFenix': '../pdfs/Fantasia/5HarryPotterYLaOrdendelFenix.pdf',
    '6HarryPotterYElMisterioDelPrincipe': '../pdfs/Fantasia/6HarryPotterYElMisterioDelPrincipe.PDF',
    '7HarryPotterYLasReliquiasDeLaMuerte': '../pdfs/Fantasia/7HarryPotterYLasReliquiasDeLaMuerte.pdf',
    '8HarryPotterYLaOtraHistoria': '../pdfs/Fantasia/8HarryPotterYLaOtraHistoria.pdf',
    'ElRetornoDelReyI': '../pdfs/Fantasia/ElRetornoDelReyI.pdf',
    'ElRetornoDelReyII': '../pdfs/Fantasia/ElRetornoDelReyII.pdf',
    '62ModelosParaArmar': '../pdfs/Ficcion/62ModelosParaArmar.pdf',
    'Bestiario': '../pdfs/Ficcion/Bestiario.pdf',
    'Historiasdecronopiosyfamas': '../pdfs/Ficcion/Historiasdecronopiosyfamas.pdf',
    'LaMujerDeCollarDeTerciopelo': '../pdfs/Ficcion/LaMujerDeCollarDeTerciopelo.pdf',
    'LasArmasSecretas': '../pdfs/Ficcion/LasArmasSecretas.pdf',
    'Rayuela': '../pdfs/Ficcion/Rayuela.pdf',
    'TodosLosFuegosElFuego': '../pdfs/Ficcion/TodosLosFuegosElFuego.pdf',
    'UnaCiudadFlotante': '../pdfs/Ficcion/UnaCiudadFlotante.pdf',
    'UnTalLucas': '../pdfs/Ficcion/UnTalLucas.pdf',
    'ViajeAlCentroDeLaTierra': '../pdfs/Ficcion/ViajeAlCentroDeLaTierra.pdf',
    'MasQuePalabras': '../pdfs/Hearthstopper/MasQuePalabras.pdf',
    'MiPersonaFavorita': '../pdfs/Hearthstopper/MiPersonaFavorita.pdf',
    'UnChicoConoceAOtro': '../pdfs/Hearthstopper/UnChicoConoceAOtro.pdf',
    'UnPasoAdelante': '../pdfs/Hearthstopper/UnPasoAdelante.pdf',
    'CancionDeHieloYFuego': '../pdfs/JuegoDeTronos/LIBRO1-CANCIONDEHIELOYFUEGO.pdf',
    'ChoqueDeReyes': '../pdfs/JuegoDeTronos/LIBRO2-CHOQUEDEREYES.PDF',
    'TormentaDeEspadasI': '../pdfs/JuegoDeTronos/LIBRO3-TORMENTADEESPADASI.pdf',
    'TormentaDeEspadasII': '../pdfs/JuegoDeTronos/LIBRO4-TORMENTADEESPADASII.pdf',
    'DanzaDeDragones': '../pdfs/JuegoDeTronos/LIBRO5-DANZADEDRAGONES.pdf',
    'ElDiaQueSePerdioElAmor': '../pdfs/Misterio/ElDiaQueSePerdioElAmor.pdf',
    'ElDiaQueSePerdioLaCordura': '../pdfs/Misterio/ElDiaQueSePerdioLaCordura.pdf',
    'ElJuegoDelAlma': '../pdfs/Misterio/ElJuegoDelAlma.pdf',
    'FantomasContraLasMultinacionales': '../pdfs/Misterio/FantomasContraLasMultinacionales.pdf',
    'LaChicaDeNieve': '../pdfs/Misterio/LaChicaDeNieve.pdf',
    'LaMuerteDeLordEdgware': '../pdfs/Misterio/LaMuerteDeLordEdgware.pdf',
    'LaPacienteSilenciosa': '../pdfs/Misterio/LaPacienteSilenciosa.pdf',
    'LasAventurasDeSherlockHolmes': '../pdfs/Misterio/LasAventurasDeSherlockHolmes.pdf',
    'LasManzanas': '../pdfs/Misterio/LasManzanas.pdf',
    'SherlockHolmes': '../pdfs/Misterio/SherlockHolmes.pdf',
    'LaGuitarraAzul': '../pdfs/Misterio/LaGuitarraAzul.pdf',
    'ElCondeDeMontecristo': '../pdfs/Novelas/ElCondeDeMontecristo.pdf',
    'ElHuesped': '../pdfs/Novelas/ElHuesped.pdf',
    'ElPrincipito': '../pdfs/Novelas/ElPrincipito.pdf',
    'ElVizcondeDeBragelonne': '../pdfs/Novelas/ElVizcondeDeBragelonne.pdf',
    'LaCasadelosespiritus': '../pdfs/Novelas/LaCasadelosespiritus.pdf',
    'LaDamaDeLasCamelias': '../pdfs/Novelas/LaDamaDeLasCamelias.pdf',
    'LazarilloDeTormes': '../pdfs/Novelas/LazarilloDeTormes.pdf',
    'MilYUnaNoches': '../pdfs/Novelas/MilYUnaNoches.pdf',
    'PeterPan': '../pdfs/Novelas/PeterPan.pdf',
    'Ulises': '../pdfs/Novelas/Ulises.pdf',
    '20PoemasDeAmor': '../pdfs/Romance/20PoemasDeAmor.pdf',
    'CienSonetosDeAmor': '../pdfs/Romance/CienSonetosDeAmor.pdf',
    'DeAmorYDeMuerte': '../pdfs/Romance/DeAmorYDeMuerte.pdf',
    'ElAmorEnLosTiemposDelColera': '../pdfs/Romance/ElAmorEnLosTiemposDelColera.pdf',
    'RomanceroGitano': '../pdfs/Romance/RomanceroGitano.pdf',
    'RomeoYJulieta': '../pdfs/Romance/RomeoYJulieta.pdf',
    'SonetosDeAmor': '../pdfs/Romance/SonetosDeAmor.pdf',
    'SueñoDeUnaNocheDeSanJuan': '../pdfs/Romance/SueñoDeUnaNocheDeSanJuan.pdf',
    'SueñoDeUnaNocheDeVerano': '../pdfs/Romance/SueñoDeUnaNocheDeVerano.pdf',
    'ElArteDeAmar': '../pdfs/Romance/ElArteDeAmar.pdf',
    'Asylum': '../pdfs/Terror/Asylum.pdf',
    'Catacomb': '../pdfs/Terror/Catacomb.pdf',
    'Dracula': '../pdfs/Terror/Dracula.pdf',
    'ElCastilloDeLosCarpatos': '../pdfs/Terror/ElCastilloDeLosCarpatos.pdf',
    'ElCazadorDeSueños': '../pdfs/Terror/ElCazadorDeSueños.pdf',
    'ElFantasmaDeLaOpera': '../pdfs/Terror/ElFantasmaDeLaOpera.pdf',
    'ElResplandor': '../pdfs/Terror/ElResplandor.pdf',
    'EscapeDelAsylum': '../pdfs/Terror/EscapeDelAsylum.pdf',
    'LestatElVampiro': '../pdfs/Terror/LestatElVampiro.pdf',
    'Sanctum': '../pdfs/Terror/Sanctum.pdf'
}

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
    if (host.includes(5500)) {
        var nuevaURL = protocolo + '//' + host + '/html/lectorPDF.html';
    }
    else if (host.includes("github")) {
        var nuevaURL = protocolo + '//' + host + '/Proyecto_BOOKs-library/html/lectorPDF.html';
    } else {
        var nuevaURL = protocolo + '//' + host + '/html/lectorPDF.html';
    }
    window.location.href = nuevaURL
}

function tituloDelLibro(text) {
    fraseSeparada = text.replace(/([A-Z])/g, ' $1');
    letraCapital = fraseSeparada[1]
    fraseSinPrimerLetra = fraseSeparada.substring(2).toLowerCase()
    fraseFinal = `${letraCapital}${fraseSinPrimerLetra}`
    return fraseFinal
}

function obtenerDireccionRelativa() {
    const urlActual = window.location.href;
    const partes = urlActual.split('/');
    partes.splice(0, 3);
    const rutaFinal = partes.join('/');

    return `../${rutaFinal}`;
}


for (var i = 0; i < btnLeer.length; i++) {
    ((i) => {
        btnLeer[i].addEventListener("click", function() {
            nombreArchivo = obtenerRuta(i);
            console.log(nombreArchivo)

            // Utiliza la función auxiliar para obtener el valor de i
            let currentIndex = i;

            rutaAUsar = rutas[nombreArchivo]
            console.log(rutaAUsar)

            // Accede a imgBook usando el valor currentIndex
            rutaImg = imgBook[currentIndex].getAttribute("src")
            console.log(rutaImg)

            tituloLibro = tituloDelLibro(nombreArchivo)
            console.log(tituloLibro)

            arrayNuevoLibro = [rutaAUsar, tituloLibro, rutaImg]
            console.log(arrayNuevoLibro)

            rutaActual = obtenerDireccionRelativa();
            console.log(rutaActual)
            localStorage.setItem("rutaRedireccion", rutaActual)

            if (!(localStorage.getItem("librosLeyendo"))) {
                matrizDeLibros = JSON.stringify([arrayNuevoLibro])
                console.log(matrizDeLibros)
                localStorage.setItem("librosLeyendo", matrizDeLibros)
            } else {
                matrizDeLibros = JSON.parse(localStorage.getItem("librosLeyendo"))
                console.log(matrizDeLibros)

                // Verifica si el libro ya está en la lista
                const index = matrizDeLibros.findIndex(libro => libro[1] === tituloLibro);

                if (index !== -1) {
                    // Si el libro ya está, elimínalo de su posición actual
                    matrizDeLibros.splice(index, 1);
                }

                // Agrega el libro al final de la lista
                matrizDeLibros.push(arrayNuevoLibro);

                // Verifica si la lista tiene más de 5 libros
                if (matrizDeLibros.length > 5) {
                    matrizDeLibros.shift(); // Elimina el primer libro
                }

                matrizDeLibros = JSON.stringify(matrizDeLibros)
                console.log(matrizDeLibros)
                localStorage.setItem("librosLeyendo", matrizDeLibros)
            }

            setTimeout(() => {
                irAlLector()
            }, 100)
        });
    })(i);
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("terminoDeLeer")) {
        const tituloLeyendoLibro = Array.from(document.querySelectorAll(".tituloLeyendo"))
        matrizDeLibros = JSON.parse(localStorage.getItem("librosLeyendo"))

        const componenteRelacionado = event.target.getAttribute('data-componente');
        const tituloAEliminarLibro = tituloLeyendoLibro[componenteRelacionado].innerHTML
        
        matrizDeLibros = matrizDeLibros.filter(libro => libro[1] !== tituloAEliminarLibro);
        localStorage.setItem("librosLeyendo", JSON.stringify(matrizDeLibros));
        
        location.reload();
    }
});
