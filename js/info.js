info = Array.from(document.querySelectorAll(".info"))
imgBook = Array.from(document.querySelectorAll(".imgBTN"))
extension = [".jfif", ".jpg", ".jpeg", ".png"]

libros = {
    "ElHombreDeLaMascaraDeHierro": "Una emocionante novela de acción ambientada en la época de los mosqueteros. Sigue las aventuras de un misterioso prisionero con una máscara de hierro cuya identidad es un enigma.",
    "LaMomia": "Una aventura llena de misterio y peligros en busca de una antigua momia. Un grupo de exploradores se adentra en tierras desconocidas en busca de tesoros y secretos enterrados.",
    "EsteEsMiPueblo": "Un libro que explora la ciencia y la cultura de un pueblo en particular. Descubre las tradiciones, costumbres y el conocimiento ancestral que definen a esta comunidad única.",
    "MisCreencias": "Reflexiones personales sobre creencias y valores. El autor comparte sus pensamientos sobre la vida, la moralidad y la espiritualidad en una serie de ensayos perspicaces.",
    "SobreLaTeoriaDeLaRelatividad": "Una introducción a la teoría de la relatividad de Albert Einstein. Explora los conceptos fundamentales de la física moderna y cómo cambió nuestra comprensión del universo.",
    "ElHuesped": "Un misterio que gira en torno a la llegada de un misterioso huésped a una casa. La trama se desarrolla mientras los habitantes de la casa intentan descubrir la verdad detrás de su visita.",
    "Angelesydemonios": "Un thriller que combina misterio, conspiración y simbología. El profesor Robert Langdon se involucra en una carrera contra el tiempo para evitar una amenaza a nivel mundial.",
    "codigoDaVinci": "Una obra que desentraña secretos ocultos a lo largo de la historia. Un enigma milenario y una serie de pistas conducen a un viaje lleno de descubrimientos y peligros.",
    "Elsimboloperdido": "Otra emocionante aventura de Robert Langdon en busca de símbolos perdidos. Esta vez, la trama se desarrolla en Washington, D.C., y aborda temas masones.",
    "Inferno": "Un viaje por Italia lleno de enigmas y peligros. Robert Langdon debe resolver un acertijo relacionado con la obra de Dante Alighieri para detener una amenaza global.",
    "Origen": "Robert Langdon se enfrenta a preguntas sobre el origen de la humanidad. La trama explora temas de religión, ciencia y tecnología en un contexto internacional.",
    "LaReinaDeLosCondenados": "Una historia de vampiros y poderes sobrenaturales. Lestat de Lioncourt, el vampiro legendario, emerge como una figura central en el mundo de los vampiros.",
    "LaMujerDeCollarDeTerciopelo": "Una novela de misterio y romance ambientada en la alta sociedad. Una historia de amor prohibido se entrelaza con secretos y traiciones en el Londres victoriano.",
    "MasQuePalabras": "Una historia de amor en formato de novela gráfica. Nick y Charlie enfrentan desafíos en su relación mientras exploran sus sentimientos y la identidad.",
    "MiPersonaFavorita": "Una obra que celebra la importancia de las personas en nuestras vidas. Un tributo a la amistad y al impacto que las personas especiales tienen en nosotros.",
    "UnChicoConoceAOtro": "La continuación de la historia de Nick y Charlie en la serie Heartstopper. Los personajes enfrentan desafíos y descubrimientos en su relación.",
    "UnPasoAdelante": "Los desafíos y alegrías de crecer y enfrentar nuevas etapas en la vida. Los personajes exploran temas de identidad y aceptación mientras avanzan en su camino.",
    "CancionDeHieloYFuego": "El primer libro de la serie que inspiró la famosa serie de televisión Juego de Tronos. Intrigas políticas, traiciones y conflictos se desarrollan en el continente de Westeros.",
    "ChoqueDeReyes": "Las luchas de poder y traiciones en el continente de Westeros continúan. La guerra por el Trono de Hierro se intensifica, y nuevos personajes entran en escena.",
    "TormentaDeEspadasI": "La guerra se desata en Westeros en este emocionante libro de la saga. Personajes clave se enfrentan a desafíos mortales y las alianzas cambian constantemente.",
    "TormentaDeEspadasII": "La saga de Canción de Hielo y Fuego continúa con nuevas sorpresas y peligros. Los personajes luchan por sobrevivir en un mundo lleno de conspiraciones.",
    "DanzaDeDragones": "Las intrigas políticas y el regreso de los dragones en un mundo en conflicto. La lucha por el poder y la supervivencia continúa en este emocionante libro.",
    "LaMuerteDeLordEdgware": "Un misterio de Agatha Christie lleno de giros y sorpresas. El detective Hercule Poirot investiga un asesinato en una sociedad de alta alcurnia.",
    "LasManzanas": "Una novela de misterio que gira en torno a un oscuro secreto en una comunidad. Una serie de eventos extraños lleva a la revelación de secretos enterrados.",
    "ElDiaQueSePerdioElAmor": "Un thriller psicológico sobre secretos y traiciones en una relación. Una mujer descubre que su esposo podría estar ocultando un oscuro pasado.",
    "ElDiaQueSePerdioLaCordura": "Una historia de misterio y suspense en la que la cordura se pone a prueba. Dos desconocidos se ven envueltos en una trama siniestra y peligrosa.",
    "ElJuegoDelAlma": "Un thriller psicológico que explora los límites de la mente humana. Los personajes enfrentan oscuros secretos y traumas del pasado.",
    "LaChicaDeNieve": "Un oscuro misterio relacionado con la desaparición de una joven. Una detective debe desentrañar un caso en el que nada es lo que parece.",
    "LaPacienteSilenciosa": "Una historia de suspense y psicología en un ambiente hospitalario. Una paciente aparentemente muda es el enigma central de la trama.",
    "ElCondeDeMontecristo": "Una novela clásica de venganza y justicia ambientada en el siglo XIX. Edmond Dantès busca vengarse de aquellos que lo traicionaron.",
    "ElPrincipito": "Una tierna y filosófica historia que encanta a lectores de todas las edades. El Principito viaja de planeta en planeta en busca de significado y amistad.",
    "ElVizcondeDeBragelonne": "La continuación de las aventuras de los mosqueteros de Alejandro Dumas. Athos, Porthos, Aramis y D'Artagnan se embarcan en nuevas peripecias.",
    "LaDamaDeLasCamelias": "Una conmovedora historia de amor y tragedia en la alta sociedad parisina. La relación entre Armand y Marguerite es un retrato de la pasión y el sacrificio.",
    "LazarilloDeTormes": "Una obra clásica de la literatura española que narra las aventuras de un pícaro. Lazarillo sobrevive a través de astucia y humor en un mundo hostil.",
    "MilYUnaNoches": "Una colección de cuentos orientales llenos de magia y aventura. Scheherazade narra historias fascinantes para aplacar al rey y salvar su vida.",
    "Dracula": "El clásico del terror que introdujo al vampiro más famoso, el Conde Drácula. El conde busca extender su influencia y choca con un grupo de valientes cazadores de vampiros.",
    "Asylum": "Una novela de terror ambientada en un siniestro hospital psiquiátrico. Un estudiante se adentra en los misterios oscuros del pasado de su escuela.",
    "Catacomb": "Continúa la historia de terror y misterio en el mundo subterráneo de París. Los personajes enfrentan amenazas sobrenaturales y secretos ocultos.",
    "EscapeDelAsylum": "El suspense y el horror persisten en esta secuela de Asylum. Los sobrevivientes de la pesadilla del pasado deben enfrentar nuevas amenazas.",
    "Sanctum": "Los secretos oscuros del pasado emergen en el tercer libro de la serie Asylum. Los personajes se adentran en lo desconocido y enfrentan peligros mortales.",
    "LestatElVampiro": "La saga de los vampiros de Anne Rice continúa con las aventuras de Lestat. El vampiro rebelde narra su historia y su búsqueda de sentido en la inmortalidad."
};

function filtrarRuta(iterable) {
    let rutaSinFiltrar = imgBook[iterable].getAttribute("src");
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

function mostrar(text) {
    sinopsisText = document.querySelector("#sinopsis")
    sinopsisText.innerHTML = text;

    // Inicializar el modal de Bootstrap
    new bootstrap.Modal(document.getElementById("info")).show();
  }

for (let i = 0; i < info.length; i++) {
    ((i) => {
        info[i].addEventListener("click", () => {
            info[i].id = "info"
            datos = filtrarRuta(i)
            sinopsis = libros[datos]
            mostrar(sinopsis)
        })
    })(i)
}