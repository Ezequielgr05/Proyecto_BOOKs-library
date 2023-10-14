info = Array.from(document.querySelectorAll(".info"))
imgBookInfo = Array.from(document.querySelectorAll(".imgBTNInfo"))
extension = [".jfif", ".jpg", ".jpeg", ".png"]

libros = {
    'ElHombreDeLaMascaraDeHierro': 'Una emocionante novela de aventuras ambientada en la Francia del siglo XVII que narra la historia de un hombre misterioso prisionero de una máscara de hierro.',
    'ElSeñorDelTiempo1ElIniciado': 'La primera entrega de una apasionante saga de ciencia ficción donde los viajes en el tiempo desencadenan una épica lucha entre el bien y el mal.',
    'ElSeñorDelTiempo2ElProscrito': 'En la segunda parte de la saga, nuestros héroes deben enfrentar desafíos aún mayores en su lucha contra las fuerzas oscuras que amenazan el tiempo mismo.',
    'ElSeñorDelTiempo3ElOrdenYElCaos': 'La batalla final se desata en esta tercera entrega, donde los destinos se entrelazan y el orden y el caos se enfrentan en una épica confrontación.',
    'LaMomia': 'Una emocionante novela de aventuras que sigue a un grupo de intrépidos arqueólogos mientras descubren la tumba de una antigua momia y desencadenan una maldición ancestral.',
    'LosTresMosqueteros': 'Una clásica historia de capa y espada que sigue las hazañas de los tres mosqueteros y su joven amigo DArtagnan en la Francia del siglo XVII.',
    'StarWarsElResurgirDeLaFuerzaOscura': 'Una aventura épica en el universo de Star Wars que sigue las luchas de los héroes contra las fuerzas oscuras que amenazan la galaxia.',
    'StarWarsHerederoDelImperio': 'En esta novela de Star Wars, el Gran Almirante Thrawn amenaza con desestabilizar la Nueva República, y nuestros héroes deben unirse para detenerlo.',
    'StarWarsLaUltimaOrden': 'La última entrega de la trilogía de Star Wars, donde la lucha entre la Resistencia y la Primera Orden alcanza su punto culminante.',
    'YoRobot': 'Un clásico de la ciencia ficción que explora las implicaciones éticas de la inteligencia artificial a través de una serie de historias interconectadas.',
    'AngelesYDemonios': 'Un trepidante thriller de Dan Brown en el que el profesor Robert Langdon se enfrenta a una antigua sociedad secreta, Los Illuminati, en una carrera contrarreloj para evitar una catástrofe.',
    'CodigoDaVinci': 'El famoso bestseller de Dan Brown que sigue a Robert Langdon en su investigación sobre los misteriosos símbolos ocultos en obras de arte y la búsqueda del Santo Grial.',
    'ElSimboloPerdido': 'Robert Langdon se embarca en una nueva aventura en Washington D.C., donde descubre secretos masones y conspiraciones en esta emocionante novela.',
    'Inferno': 'Langdon se encuentra en Italia y se enfrenta a una serie de enigmas relacionados con el Infierno de Dante mientras intenta evitar una plaga global en esta obra de suspenso.',
    'Origen': 'Langdon viaja a España en esta entrega, donde investiga el origen de la humanidad y desentraña misteriosos secretos religiosos y científicos.',
    '1HarryPotterYLaPiedraFilosofal': 'La primera entrega de la icónica serie de Harry Potter, donde un joven mago descubre su herencia mágica y comienza su educación en Hogwarts.',
    '2HarryPotterYLaCamaraSecreta': 'Harry Potter regresa a Hogwarts para su segundo año y se enfrenta a nuevos peligros, incluyendo la apertura de la misteriosa Cámara de los Secretos.',
    '3HarryPotterYElPrisioneroDeAzkaban': 'En su tercer año en Hogwarts, Harry descubre secretos sobre su familia y se enfrenta al peligroso prisionero Sirius Black.',
    '4HarryPotterYElCalizDeFuego': 'Harry se convierte en uno de los campeones en el Torneo de los Tres Magos, pero descubre conspiraciones oscuras en esta emocionante entrega.',
    '5HarryPotterYLaOrdenDelFenix': 'Harry lidera un grupo de estudiantes que se oponen a la tiranía de Dolores Umbridge mientras Lord Voldemort planea su regreso.',
    '6HarryPotterYElMisterioDelPrincipe': 'En su sexto año en Hogwarts, Harry descubre más sobre el pasado de Lord Voldemort y se enfrenta a desafíos que cambiarán el rumbo de la historia mágica.',
    '7HarryPotterYLasReliquiasDeLaMuerte': 'La emocionante conclusión de la serie de Harry Potter, donde Harry y sus amigos buscan y luchan contra los Horrocruxes mientras enfrentan a Lord Voldemort.',
    '8HarryPotterYLaOtraHistoria': 'Un epílogo especial que sigue a los personajes principales de Harry Potter mientras envían a sus propios hijos a Hogwarts, cerrando el ciclo de la historia.',
    'ElRetornoDelReyI': 'La tercera parte de "El Señor de los Anillos" de J.R.R. Tolkien, donde la Compañía del Anillo se enfrenta a batallas épicas mientras se acerca el enfrentamiento final con Sauron.',
    'ElRetornoDelReyII': 'La emocionante conclusión de "El Señor de los Anillos", donde se deciden los destinos de los personajes y se enfrenta a Sauron en la Batalla de los Campos del Pelennor.',
    '62ModelosParaArmar': 'Una colección de cuentos de Julio Cortázar que exploran la imaginación y la realidad, desafiando las convenciones literarias.',
    'BESTIARIO': 'Cuentos de Julio Cortázar que exploran el mundo de lo extraño y lo misterioso a través de la lente de lo cotidiano.',
    'HistoriasDeCronopiosYFamas': 'Una colección de relatos breves de Julio Cortázar que juegan con la realidad y la fantasía a través de personajes llamados cronopios y famas.',
    'LaMujerDeCollarDeTerciopelo': 'Una novela de A. S. Byatt que entrelaza la historia victoriana y la contemporánea a través de una historia de amor y misterio.',
    'LasArmasSecretas': 'Cuentos de Julio Cortázar que exploran la condición humana, la política y la soledad en una variedad de situaciones.',
    'Rayuela': 'Una obra innovadora de Julio Cortázar que permite a los lectores elegir su propio camino a través de la historia, desafiando las convenciones literarias.',
    'TodosLosFuegosElFuego': 'Cuentos de Julio Cortázar que exploran la soledad y el absurdo en la vida cotidiana.',
    'UnaCiudadFlotante': 'Una novela de Jules Verne que narra la historia de una ciudad flotante construida en un iceberg y las aventuras de quienes la habitan.',
    'UnTalLucas': 'Una obra autobiográfica de Julio Cortázar que relata sus experiencias de vida y reflexiones personales.',
    'ViajeAlCentroDeLaTierra': 'Una clásica novela de aventuras de Jules Verne en la que un profesor y su sobrino se embarcan en un viaje al centro de la Tierra a través de un volcán.',
    'MasQuePalabras': 'Una historia de amor entre dos chicos que exploran su relación y enfrentan desafíos en su camino hacia la aceptación y la felicidad.',
    'MiPersonaFavorita': 'La continuación de la historia de amor entre los dos chicos mientras enfrentan nuevos desafíos y profundizan su relación.',
    'UnChicoConoceAOtro': 'Un nuevo comienzo en la relación de los dos chicos mientras enfrentan los altibajos de la vida y el amor.',
    'UnPasoAdelante': 'Los personajes siguen creciendo y aprendiendo mientras enfrentan cambios en sus vidas y relaciones.',
    'CancionDeHieloYFuego': 'El primer libro de la serie "Canción de Hielo y Fuego" de George R.R. Martin, que presenta un mundo de intriga política, traición y batallas en Westeros.',
    'ChocqueDeReyes': 'El segundo libro de la serie "Canción de Hielo y Fuego" de George R.R. Martin, donde continúan las luchas por el poder en Westeros y se desatan nuevas intrigas y traiciones.',
    'TormentaDeEspadasI': 'La tercera entrega de la serie "Canción de Hielo y Fuego" de George R.R. Martin, que presenta batallas, traiciones y desafíos en un mundo lleno de personajes memorables.',
    'TormentaDeEspadasII': 'La cuarta parte de la serie "Canción de Hielo y Fuego" de George R.R. Martin, que narra las consecuencias de las luchas por el trono de hierro y los peligros que acechan a Westeros.',
    'DanzaDeDragones': 'El quinto libro de la serie "Canción de Hielo y Fuego" de George R.R. Martin, que continúa las historias entrelazadas de personajes en un mundo lleno de giros y sorpresas.',
    'ElDiaQueSePerdioElAmor': 'Un misterio apasionante que sigue a un detective en su búsqueda de respuestas en un caso de asesinato que se complica con secretos y traiciones.',
    'ElDiaQueSePerdioLaCordura': 'Una historia llena de suspense que sigue a un psiquiatra que se ve envuelto en un juego mortal de manipulación mental y misterio.',
    'ElJuegoDelAlma': 'Un thriller psicológico que sigue a un psicólogo que se enfrenta a un enigmático paciente y descubre oscuros secretos sobre su propia vida.',
    'FantomasContraLasMultinacionales': 'Una novela de misterio que sigue al famoso ladrón Fantomas mientras se enfrenta a poderosas corporaciones en un mundo de intriga y crímenes.',
    'LaChicaDeNieve': 'Una novela de misterio que sigue a una detective en la búsqueda de una niña desaparecida en un caso lleno de giros y sorpresas.',
    'LaMuerteDeLordEdgware': 'Una novela de misterio de Agatha Christie que sigue al famoso detective Hércules Poirot mientras investiga un asesinato en una cena de celebridades.',
    'LaPacienteSilenciosa': 'Un thriller psicológico que sigue a un terapeuta que intenta ayudar a una paciente que se niega a hablar después de ser acusada de asesinato.',
    'LasAventurasDeSherlockHolmes': 'Una colección de historias de misterio de Arthur Conan Doyle que presentan a Sherlock Holmes resolviendo una variedad de casos intrigantes.',
    'LasManzanas': 'Una novela de misterio de Agatha Christie que sigue a Miss Marple mientras investiga un asesinato en una aldea aparentemente tranquila.',
    'SherlockHolmes': 'Una colección de las aventuras clásicas de Sherlock Holmes, el famoso detective creado por Arthur Conan Doyle.',
    'LaGuitarraAzul': 'Una novela de misterio que sigue a un músico que hereda una guitarra azul que parece tener un poder misterioso y peligroso.',
    'ElCondeDeMonteCristo': 'Una emocionante novela de aventuras de Alexandre Dumas que narra la historia de Edmond Dantès y su búsqueda de venganza tras ser traicionado y encarcelado injustamente.',
    'ElHuesped': 'Una novela de Albert Camus que sigue a un maestro de escuela que se ve envuelto en un crimen después de que un visitante arabe sea asesinado en su casa.',
    'ElPrincipito': 'Un cuento clásico de Antoine de Saint-Exupéry sobre un joven príncipe que viaja por diferentes planetas y aprende lecciones valiosas sobre la vida y el amor.',
    'ElVizcondeDeBragelonne': 'La tercera parte de la serie "Los Tres Mosqueteros" de Alexandre Dumas, que sigue las aventuras de DArtagnan y sus amigos en la corte de Luis XIV.',
    'LaCasaDeLosEspiritus': 'Una novela de Isabel Allende que combina elementos de realismo mágico con una historia familiar y política en una casa llena de secretos.',
    'LaDamaDeLasCamelias': 'Una novela de Alexandre Dumas hijo que narra la historia de amor y tragedia de Marguerite Gautier, una cortesana parisina.',
    'LazarilloDeTormes': 'Una novela picaresca clásica que sigue las travesías y aventuras de Lázaro, un joven astuto y hambriento en la España del siglo XVI.',
    'MilYUnaNoches': 'Una colección de historias y cuentos de Oriente Medio, incluyendo cuentos como "Aladino y la lámpara maravillosa" y "Simbad el Marino".',
    'PeterPan': 'La clásica historia de J.M. Barrie sobre el niño que nunca crece y su viaje a la tierra de Nunca Jamás con Wendy, John, Michael y los Niños Perdidos.',
    'Ulises': 'La obra maestra de James Joyce que sigue un día en la vida de Leopold Bloom en Dublín, Irlanda, explorando temas de la condición humana y la conciencia.',
    '20PoemasDeAmor': 'Una colección de veinte hermosos poemas de amor del poeta chileno Pablo Neruda, que exploran las complejidades y las emociones del amor.',
    'CienSonetosDeAmor': 'Cien sonetos de amor escritos por Pablo Neruda, que expresan una amplia gama de emociones y experiencias en el contexto del amor.',
    'DeAmorYDeMuerte': 'Una colección de cuentos cortos de Stefan Zweig que exploran temas de amor y muerte en narraciones emocionales y evocadoras.',
    'ElAmorEnLosTiemposDelColera': 'Una novela de Gabriel García Márquez que narra una historia de amor que dura más de cincuenta años y explora las complejidades de las relaciones humanas.',
    'RomanceroGitano': 'La obra maestra de Federico García Lorca que incluye una serie de romances y poemas que evocan la cultura gitana y las pasiones humanas.',
    'RomeoYJulieta': 'El clásico drama romántico de William Shakespeare que narra la historia de amor prohibido entre Romeo y Julieta en Verona.',
    'SonetosDeAmor': 'Una colección de sonetos de William Shakespeare que exploran temas de amor, belleza y el paso del tiempo.',
    'SueñoDeUnaNocheDeSanJuan': 'Una comedia mágica de William Shakespeare que involucra a hadas, amantes y una noche de confusión y amor en un bosque encantado.',
    'SueñoDeUnaNocheDeVerano': 'Una obra de teatro de William Shakespeare que combina comedia y romance en una historia que tiene lugar en una noche mágica en el bosque.',
    'ElArteDeAmar': 'Un poema didáctico en verso escrito por el poeta romano Ovidio, que ofrece consejos sobre el arte del amor y las relaciones románticas.',
    'Asylum': 'Una novela de terror psicológico de Madeleine Roux que sigue a un grupo de estudiantes en un internado convertido en asilo psiquiátrico, donde descubren oscuros secretos.',
    'Catacomb': 'La tercera entrega de la serie "Asylum" de Madeleine Roux, que continúa la historia de terror y misterio en el internado Brookline.',
    'Dracula': 'El clásico de Bram Stoker que introduce al icónico vampiro Conde Drácula y sigue a un grupo de personas que intentan detener su maldad.',
    'ElCastilloDeLosCarpatos': 'Una novela de terror gótico de Jules Verne que narra la historia de un castillo en los Cárpatos y las misteriosas fuerzas que lo rodean.',
    'ElCazadorDeSueños': 'Una novela de terror de Stephen King que sigue a un grupo de amigos que se enfrentan a terribles pesadillas y horrores sobrenaturales.',
    'ElFantasmaDeLaOpera': 'La clásica novela de terror gótico de Gaston Leroux que narra la historia de un misterioso fantasma que habita la ópera de París.',
    'ElResplandor': 'La novela de Stephen King que sigue a un hombre y su familia mientras cuidan un hotel aislado durante el invierno, enfrentándose a fuerzas sobrenaturales y locura.',
    'EscapeDelAsylum': 'La segunda entrega de la serie "Asylum" de Madeleine Roux, que sigue a los personajes mientras intentan descubrir los secretos del asilo Brookline.',
    'LestatElVampiro': 'Una novela de Anne Rice que sigue la vida de Lestat de Lioncourt, un vampiro inmortal que narra sus experiencias a lo largo de los siglos.',
    'Sanctum': 'La segunda entrega de la serie "Asylum" de Madeleine Roux, que continúa la historia de terror y misterio en el internado Brookline.'
}

function filtrarRuta(iterable) {
    let rutaSinFiltrar = imgBookInfo[iterable].getAttribute("src");
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
            console.log(i)
            sinopsisInfo = libros[datos]
            mostrar(sinopsisInfo)
        })
    })(i)
}