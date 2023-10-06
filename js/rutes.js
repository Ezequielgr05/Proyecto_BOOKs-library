var rutasDeLibros = {
    "ElHombreDeLaMascaraDeHierro": "../pdfs/Accion/ElHombreDeLaMascaraDeHierro.pdf",
    "LaMomia": "../pdfs/Accion/LaMomia.pdf",
    "EsteEsMiPueblo": "../pdfs/Ciencia/EsteEsMiPueblo.pdf",
    "MisCreencias": "../pdfs/Ciencia/MisCreencias.pdf",
    "SobreLaTeoriaDeLaRelatividad": "../pdfs/Ciencia/SobreLaTeoriaDeLaRelatividad.pdf",
    "ElHuesped": "../pdfs/Cuentos/ElHuesped.pdf",
    "Angelesydemonios": "../pdfs/DanBrown/Angelesydemonios.pdf",
    "codigoDaVinci": "../pdfs/DanBrown/codigoDaVinci.pdf",
    "Elsimboloperdido": "../pdfs/DanBrown/Elsimboloperdido.pdf",
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

var rutasEnCache = JSON.parse(localStorage.getItem('rutas'));

function cargarDatos() {

                if (!rutasEnCache) {
                    // inserta los datos en la cache
                    localStorage.setItem('rutas', JSON.stringify(rutasDeLibros));
                }
                else if (JSON.stringify(rutasEnCache) !== JSON.stringify(rutasDeLibros)) {
                    // Compara los datos en caché con los nuevos datos
                    localStorage.setItem('rutas', JSON.stringify(rutasDeLibros));
                    console.log('Datos cargados y almacenados en la caché:', rutasEnJSON);
                } 
                else {
                    // Los datos son iguales, utiliza los datos de la caché
                    console.log('Datos recuperados de la caché:', rutasEnCache);
                }
}

cargarDatos();
 
