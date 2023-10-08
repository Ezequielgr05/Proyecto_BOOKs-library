btnLeer = document.querySelectorAll(".leerBTN")
imgBook = Array.from(document.querySelectorAll(".imgBTN"))
extension = [".jfif", ".jpg", ".jpeg", ".png"]
rutas = {
    "ElHombreDeLaMascaraDeHierro": "../pdfs/Accion/ElHombreDeLaMascaraDeHierro.pdf",
    "LaMomia": "../pdfs/Accion/LaMomia.pdf",
    "EsteEsMiPueblo": "../pdfs/Ciencia/EsteEsMiPueblo.pdf",
    "MisCreencias": "../pdfs/Ciencia/MisCreencias.pdf",
    "SobreLaTeoriaDeLaRelatividad": "../pdfs/Ciencia/SobreLaTeoriaDeLaRelatividad.pdf",
    "ElHuesped": "../pdfs/Cuentos/ElHuesped.pdf",
    "AngelesYDemonios": "../pdfs/DanBrown/AngelesYDemonios.pdf",
    "CodigoDaVinci": "../pdfs/DanBrown/CodigoDaVinci.pdf",
    "ElSimboloPerdido": "../pdfs/DanBrown/ElSimboloPerdido.pdf",
    "Inferno": "../pdfs/DanBrown/Inferno.pdf",
    "Origen": "../pdfs/DanBrown/Origen.pdf",
    "LaReinaDeLosCondenados": "../pdfs/Fantasia/LaReinaDeLosCondenados.pdf",
    "LaMujerDeCollarDeTerciopelo": "../pdfs/Ficcion/LaMujerDeCollarDeTerciopelo.pdf",
    "MasQuePalabras": "../pdfs/Hearthstopper/MasQuePalabras.pdf",
    "MiPersonaFavorita": "../pdfs/Hearthstopper/MiPersonaFavorita.pdf",
    "UnChicoConoceAOtro": "../pdfs/Hearthstopper/UnChicoConoceAOtro.pdf",
    "UnPasoAdelante": "../pdfs/Hearthstopper/UnPasoAdelante.pdf",
    "CancionDeHieloYFuego": "../pdfs/JuegoDeTronos/LIBRO1-CANCIONDEHIELOYFUEGO.pdf",
    "ChoqueDeReyes": "../pdfs/JuegoDeTronos/LIBRO2-CHOQUEDEREYES.pdf",
    "TormentaDeEspadasI": "../pdfs/JuegoDeTronos/LIBRO3-TORMENTADEESPADASI.pdf",
    "TormentaDeEspadasII": "../pdfs/JuegoDeTronos/LIBRO4-TORMENTADEESPADASII.pdf",
    "DanzaDeDragones": "../pdfs/JuegoDeTronos/LIBRO5-DANZADEDRAGONES.pdf",
    "LaMuerteDeLordEdgware": "../pdfs/Misterio/LaMuerteDeLordEdgware.pdf",
    "LasManzanas": "../pdfs/Misterio/LasManzanas.pdf",
    "ElDiaQueSePerdioElAmor": "../pdfs/Misterio/ElDiaQueSePerdioElAmor.pdf",
    "ElDiaQueSePerdioLaCordura": "../pdfs/Misterio/ElDiaQueSePerdioLaCordura.pdf",
    "ElJuegoDelAlma": "../pdfs/Misterio/ElJuegoDelAlma.pdf",
    "LaChicaDeNieve": "../pdfs/Misterio/LaChicaDeNieve.pdf",
    "LaPacienteSilenciosa": "../pdfs/Misterio/LaPacienteSilenciosa.pdf",
    "ElCondeDeMontecristo": "../pdfs/Novelas/ElCondeDeMontecristo.pdf",
    "ElPrincipito": "../pdfs/Novelas/ElPrincipito.pdf",
    "ElVizcondeDeBragelonne": "../pdfs/Novelas/ElVizcondeDeBragelonne.pdf",
    "LaDamaDeLasCamelias": "../pdfs/Novelas/LaDamaDeLasCamelias.pdf",
    "LazarilloDeTormes": "../pdfs/Novelas/LazarilloDeTormes.pdf",
    "MilYUnaNoches": "../pdfs/Novelas/MilYUnaNoches.pdf",
    "Dracula": "../pdfs/Terror/Dracula.pdf",
    "Asylum": "../pdfs/Terror/Asylum.pdf",
    "Catacomb": "../pdfs/Terror/Catacomb.pdf",
    "EscapeDelAsylum": "../pdfs/Terror/EscapeDelAsylum.pdf",
    "Sanctum": "../pdfs/Terror/Sanctum.pdf",
    "LestatElVampiro": "../pdfs/Terror/LestatElVampiro.pdf"
  };



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

