// constantes
const rutasPdf = {
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
    'LIBRO1-CANCIONDEHIELOYFUEGO': '../pdfs/JuegoDeTronos/LIBRO1-CANCIONDEHIELOYFUEGO.pdf',
    'LIBRO2-CHOQUEDEREYES': '../pdfs/JuegoDeTronos/LIBRO2-CHOQUEDEREYES.PDF',
    'LIBRO3-TORMENTADEESPADASI': '../pdfs/JuegoDeTronos/LIBRO3-TORMENTADEESPADASI.pdf',
    'LIBRO4-TORMENTADEESPADASII': '../pdfs/JuegoDeTronos/LIBRO4-TORMENTADEESPADASII.pdf',
    'LIBRO5-DANZADEDRAGONES': '../pdfs/JuegoDeTronos/LIBRO5-DANZADEDRAGONES.pdf',
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
const rutasImg = {
    'ElHombreDeLaMascaraDeHierro': '../img/portadas/Accion/ElHombreDeLaMascaraDeHierro.jpg',
    'ElSeñorDelTiempo1ElIniciado': '../img/portadas/Accion/ElSeñorDelTiempo1ElIniciado.jfif',
    'ElSeñorDelTiempo2ElProscrito': '../img/portadas/Accion/ElSeñorDelTiempo2ElProscrito.jfif',
    'ElSeñorDelTiempo3ElOrdenYElCaos': '../img/portadas/Accion/ElSeñorDelTiempo3ElOrdenYElCaos.jfif',
    'LaMomia': '../img/portadas/Accion/LaMomia.jpg',
    'LosTresMosqueteros': '../img/portadas/Accion/LosTresMosqueteros.jfif',
    'StarWarsElResurgirDeLaFuerzaOscura': '../img/portadas/Accion/StarWarsElResurgirDeLaFuerzaOscura.jfif',
    'StarWarsHerederoDelImperio': '../img/portadas/Accion/StarWarsHerederoDelImperio.jfif',
    'StarWarsLaUltimaOrden': '../img/portadas/Accion/StarWarsLaUltimaOrden.jfif',
    'YoRobot': '../img/portadas/Accion/YoRobot.jfif',
    'AngelesYDemonios': '../img/portadas/DanBrown/AngelesYDemonios.jpg',
    'CodigoDaVinci': '../img/portadas/DanBrown/CodigoDaVinci.jpg',
    'ElSimboloPerdido': '../img/portadas/DanBrown/ElSimboloPerdido.jfif',
    'Inferno': '../img/portadas/DanBrown/Inferno.jpg',
    'Origen': '../img/portadas/DanBrown/Origen.jpg',
    '1HarryPotterYLaPiedraFilosofal': '../img/portadas/Fantasia/1HarryPotterYLaPiedraFilosofal.jfif',
    '2HarryPotterYLaCamaraSecreta': '../img/portadas/Fantasia/2HarryPotterYLaCamaraSecreta.jfif',
    '3HarryPotterYElPrisioneroDeAzkaban': '../img/portadas/Fantasia/3HarryPotterYElPrisioneroDeAzkaban.jfif',
    '4HarryPotterYElCalizDeFuego': '../img/portadas/Fantasia/4HarryPotterYElCalizDeFuego.jfif',
    '5HarryPotterYLaOrdenDelFenix': '../img/portadas/Fantasia/5HarryPotterYLaOrdenDelFenix.jfif',
    '6HarryPotterYElMisterioDelPrincipe': '../img/portadas/Fantasia/6HarryPotterYElMisterioDelPrincipe.jfif',
    '7HarryPotterYLasReliquiasDeLaMuerte': '../img/portadas/Fantasia/7HarryPotterYLasReliquiasDeLaMuerte.jfif',
    '8HarryPotterYLaOtraHistoria': '../img/portadas/Fantasia/8HarryPotterYLaOtraHistoria.jfif',
    'ElRetornoDelReyI': '../img/portadas/Fantasia/ElRetornoDelReyI.jfif',
    'ElRetornoDelReyII': '../img/portadas/Fantasia/ElRetornoDelReyII.jfif',
    '62ModelosParaArmar': '../img/portadas/Ficcion/62ModelosParaArmar.jfif',
    'BESTIARIO': '../img/portadas/Ficcion/BESTIARIO.jfif',
    'HistoriasDeCronopiosYFamas': '../img/portadas/Ficcion/HistoriasDeCronopiosYFamas.jfif',
    'LaMujerDeCollarDeTerciopelo': '../img/portadas/Ficcion/LaMujerDeCollarDeTerciopelo.jfif',
    'LasArmasSecretas': '../img/portadas/Ficcion/LasArmasSecretas.jfif',
    'Rayuela': '../img/portadas/Ficcion/Rayuela.jfif',
    'TodosLosFuegosElFuego': '../img/portadas/Ficcion/TodosLosFuegosElFuego.jfif',
    'UnaCiudadFlotante': '../img/portadas/Ficcion/UnaCiudadFlotante.jfif',
    'UnTalLucas': '../img/portadas/Ficcion/UnTalLucas.jfif',
    'ViajeAlCentroDeLaTierra': '../img/portadas/Ficcion/ViajeAlCentroDeLaTierra.jfif',
    'MasQuePalabras': '../img/portadas/Hearthstopper/MasQuePalabras.jpg',
    'MiPersonaFavorita': '../img/portadas/Hearthstopper/MiPersonaFavorita.jpg',
    'UnChicoConoceAOtro': '../img/portadas/Hearthstopper/UnChicoConoceAOtro.jfif',
    'UnPasoAdelante': '../img/portadas/Hearthstopper/UnPasoAdelante.jpeg',
    'CancionDeHieloYFuego': '../img/portadas/JuegoDeTronos/CancionDeHieloYFuego.jfif',
    'ChoqueDeReyes': '../img/portadas/JuegoDeTronos/ChoqueDeReyes.jfif',
    'DanzaDeDragones': '../img/portadas/JuegoDeTronos/DanzaDeDragones.jpg',
    'TormentaDeEspadasI': '../img/portadas/JuegoDeTronos/TormentaDeEspadasI.jpg',
    'TormentaDeEspadasII': '../img/portadas/JuegoDeTronos/TormentaDeEspadasII.jpg',
    'ElDiaQueSePerdioElAmor': '../img/portadas/Misterio/ElDiaQueSePerdioElAmor.jfif',
    'ElDiaQueSePerdioLaCordura': '../img/portadas/Misterio/ElDiaQueSePerdioLaCordura.jfif',
    'ElJuegoDelAlma': '../img/portadas/Misterio/ElJuegoDelAlma.jfif',
    'LaChicaDeNieve': '../img/portadas/Misterio/LaChicaDeNieve.jfif',
    'LaGuitarraAzul': '../img/portadas/Misterio/LaGuitarraAzul.jfif',
    'LaMuerteDeLordEdgware': '../img/portadas/Misterio/LaMuerteDeLordEdgware.jfif',
    'LaPacienteSilenciosa': '../img/portadas/Misterio/LaPacienteSilenciosa.jpg',
    'LasAventurasDeSherlockHolmes': '../img/portadas/Misterio/LasAventurasDeSherlockHolmes.jfif',
    'LasManzanas': '../img/portadas/Misterio/LasManzanas.jpg',
    'SherlockHolmes': '../img/portadas/Misterio/SherlockHolmes.jfif',
    'ElCondeDeMonteCristo': '../img/portadas/Novelas/ElCondeDeMonteCristo.jfif',
    'ElHuesped': '../img/portadas/Novelas/ElHuesped.jfif',
    'ElPrincipito': '../img/portadas/Novelas/ElPrincipito.jpg',
    'ElVizcondeDeBragelonne': '../img/portadas/Novelas/ElVizcondeDeBragelonne.jfif',
    'LaCasaDeLosEspiritus': '../img/portadas/Novelas/LaCasaDeLosEspiritus.jfif',
    'LaDamaDeLasCamelias': '../img/portadas/Novelas/LaDamaDeLasCamelias.jfif',
    'LazarilloDeTormes': '../img/portadas/Novelas/LazarilloDeTormes.jfif',
    'MilYUnaNoches': '../img/portadas/Novelas/MilYUnaNoches.jfif',
    'PeterPan': '../img/portadas/Novelas/PeterPan.jfif',
    'Ulises': '../img/portadas/Novelas/Ulises.jfif',
    '20PoemasDeAmor': '../img/portadas/Romance/20PoemasDeAmor.jfif',
    'CienSonetosDeAmor': '../img/portadas/Romance/CienSonetosDeAmor.jfif',
    'DeAmorYDeMuerte': '../img/portadas/Romance/DeAmorYDeMuerte.jfif',
    'ElAmorEnLosTiemposDelColera': '../img/portadas/Romance/ElAmorEnLosTiemposDelColera.jfif',
    'ElArteAmar': '../img/portadas/Romance/ElArteAmar.jfif',
    'RomanceroGitano': '../img/portadas/Romance/RomanceroGitano.jfif',
    'RomeoYJulieta': '../img/portadas/Romance/RomeoYJulieta.jfif',
    'SonetosDeAmor': '../img/portadas/Romance/SonetosDeAmor.jfif',
    'SueñoDeUnaNocheDeSanJuan': '../img/portadas/Romance/SueñoDeUnaNocheDeSanJuan.jfif',
    'SueñoDeUnaNocheDeVerano': '../img/portadas/Romance/SueñoDeUnaNocheDeVerano.jfif',
    'Asylum': '../img/portadas/Terror/Asylum.jfif',
    'Catacomb': '../img/portadas/Terror/Catacomb.jfif',
    'Dracula': '../img/portadas/Terror/Dracula.jpg',
    'ElCastilloDeLosCarpatos': '../img/portadas/Terror/ElCastilloDeLosCarpatos.jfif',
    'ElCazadorDeSueños': '../img/portadas/Terror/ElCazadorDeSueños.jfif',
    'ElFantasmaDeLaOpera': '../img/portadas/Terror/ElFantasmaDeLaOpera.jfif',
    'ElResplandor': '../img/portadas/Terror/ElResplandor.jfif',
    'EscapeDelAsylum': '../img/portadas/Terror/EscapeDelAsylum.jpg',
    'LestatElVampiro': '../img/portadas/Terror/LestatElVampiro.jfif',
    'Sanctum': '../img/portadas/Terror/Sanctum.jpg'
}
const sinopsis = {
    'ElHombreDeLaMascaraDeHierro': 'Una emocionante novela de aventuras ambientada en la Francia del siglo XVII que narra la historia de un hombre misterioso prisionero de una máscara de hierro.',
    'ElSeñorDelTiempo1ElIniciado': 'La primera entrega de una apasionante saga de ciencia ficción donde los viajes en el tiempo desencadenan una épica lucha entre el bien y el mal.',
    'ElSeñorDelTiempo2ElProscrito': 'En la segunda parte de la saga, nuestros héroes deben enfrentar desafíos aún mayores en su lucha contra las fuerzas oscuras que amenazan el tiempo mismo.',
    'ElSeñorDelTiempo3ElOrdenYElcaos': 'La batalla final se desata en esta tercera entrega, donde los destinos se entrelazan y el orden y el caos se enfrentan en una épica confrontación.',
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
    '5HarryPotterYLaOrdendelFenix': 'Harry lidera un grupo de estudiantes que se oponen a la tiranía de Dolores Umbridge mientras Lord Voldemort planea su regreso.',
    '6HarryPotterYElMisterioDelPrincipe': 'En su sexto año en Hogwarts, Harry descubre más sobre el pasado de Lord Voldemort y se enfrenta a desafíos que cambiarán el rumbo de la historia mágica.',
    '7HarryPotterYLasReliquiasDeLaMuerte': 'La emocionante conclusión de la serie de Harry Potter, donde Harry y sus amigos buscan y luchan contra los Horrocruxes mientras enfrentan a Lord Voldemort.',
    '8HarryPotterYLaOtraHistoria': 'Un epílogo especial que sigue a los personajes principales de Harry Potter mientras envían a sus propios hijos a Hogwarts, cerrando el ciclo de la historia.',
    'ElRetornoDelReyI': 'La tercera parte de "El Señor de los Anillos" de J.R.R. Tolkien, donde la Compañía del Anillo se enfrenta a batallas épicas mientras se acerca el enfrentamiento final con Sauron.',
    'ElRetornoDelReyII': 'La emocionante conclusión de "El Señor de los Anillos", donde se deciden los destinos de los personajes y se enfrenta a Sauron en la Batalla de los Campos del Pelennor.',
    '62ModelosParaArmar': 'Una colección de cuentos de Julio Cortázar que exploran la imaginación y la realidad, desafiando las convenciones literarias.',
    'Bestiario': 'Cuentos de Julio Cortázar que exploran el mundo de lo extraño y lo misterioso a través de la lente de lo cotidiano.',
    'Historiasdecronopiosyfamas': 'Una colección de relatos breves de Julio Cortázar que juegan con la realidad y la fantasía a través de personajes llamados cronopios y famas.',
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
    'LIBRO1-CANCIONDEHIELOYFUEGO': 'El primer libro de la serie "Canción de Hielo y Fuego" de George R.R. Martin, que presenta un mundo de intriga política, traición y batallas en Westeros.',
    'LIBRO2-CHOQUEDEREYES': 'El segundo libro de la serie "Canción de Hielo y Fuego" de George R.R. Martin, donde continúan las luchas por el poder en Westeros y se desatan nuevas intrigas y traiciones.',
    'LIBRO3-TORMENTADEESPADASI': 'La tercera entrega de la serie "Canción de Hielo y Fuego" de George R.R. Martin, que presenta batallas, traiciones y desafíos en un mundo lleno de personajes memorables.',
    'LIBRO4-TORMENTADEESPADASII': 'La cuarta parte de la serie "Canción de Hielo y Fuego" de George R.R. Martin, que narra las consecuencias de las luchas por el trono de hierro y los peligros que acechan a Westeros.',
    'LIBRO5-DANZADEDRAGONES': 'El quinto libro de la serie "Canción de Hielo y Fuego" de George R.R. Martin, que continúa las historias entrelazadas de personajes en un mundo lleno de giros y sorpresas.',
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
    'ElCondeDeMontecristo': 'Una emocionante novela de aventuras de Alexandre Dumas que narra la historia de Edmond Dantès y su búsqueda de venganza tras ser traicionado y encarcelado injustamente.',
    'ElHuesped': 'Una novela de Albert Camus que sigue a un maestro de escuela que se ve envuelto en un crimen después de que un visitante arabe sea asesinado en su casa.',
    'ElPrincipito': 'Un cuento clásico de Antoine de Saint-Exupéry sobre un joven príncipe que viaja por diferentes planetas y aprende lecciones valiosas sobre la vida y el amor.',
    'ElVizcondeDeBragelonne': 'La tercera parte de la serie "Los Tres Mosqueteros" de Alexandre Dumas, que sigue las aventuras de DArtagnan y sus amigos en la corte de Luis XIV.',
    'LaCasadelosespiritus': 'Una novela de Isabel Allende que combina elementos de realismo mágico con una historia familiar y política en una casa llena de secretos.',
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
const categoria = {
    0 : "Accion",
    1 : "DanBrown",
    2 : "Fantasia",
    3 : "Ficcion",
    4 : "Hearthstopper",
    5 : "JuegoDeTronos",
    6 : "Misterio",
    7 : "Novelas",
    8 : "Romance",
    9 : "Terror",
    10 : "Recomendados"
}

// Funciones

// creadores
function libroInicio(rutaDeImagen, titulo, categoria) {
    libroElemento = document.createElement("li")
    libroElemento.classList.add("slide-visible")
    libroElemento.id = "lol"
    libroElemento.innerHTML = `
        <div class="book">
            <img src="${rutaDeImagen}" alt="portada de "${titulo}" " class="imgBook imgBTN">
            <div class="sectionBook abierto">
                <h3 class="titleBookTN titleBookT">${titulo}</h3>
                <button class="btnBook btnInfo info">+ informacion</button>
                <button class="btnBook btnLeer leerBTN">leer</button>
            </div>
        </div>
    `
    categoria.appendChild(libroElemento)
}

function libroBuscador(rutaDeImagen, titulo, sinopsis, categoria) {
    libroElemento = document.createElement("li")
    libroElemento.classList.add("list-group-item") 
    libroElemento.classList.add("itemList") 
    libroElemento.innerHTML = `
            <div class="container mt-1">
            <div class="row">
                <div class="col-2">
                    <img
                        src="${rutaDeImagen}"
                        alt="portada de "${titulo}""
                        class="img-fluid rounded imgPortada imgBTN">
                </div>
                <div class="col-10">
                    <h2 class="text-start itemTitle">${titulo}</h2>
                    <p>${sinopsis}</p>
                    <button class="btn btn-leer leerBTN">Leer</button>
                </div>
            </div>
            </div>
    `
    categoria.appendChild(libroElemento)
}

function libroRecomendados(elementoPadre, rutasDeImagen) {
    recomendados = document.createElement("div")
    recomendados.classList.add("top")
    recomendados.classList.add("mt-5")
    recomendados.innerHTML = `
    <div class="centrar-en-medio">
        <div class="rectangulo-nombre">Recomendados</div>
    </div>
    <div class="center mt-2">
        <div class="rectangulo-azul">
            <img class="imagen imgBTN" src="${rutasDeImagen[0]}" alt="Portada">
            <img class="imagen imgBTN" src="${rutasDeImagen[1]}" alt="Portada">
            <img class="imagen imgBTN" src="${rutasDeImagen[2]}" alt="Portada">
            <img class="imagen imgBTN" src="${rutasDeImagen[3]}" alt="Portada">
            <img class="imagen imgBTN" src="${rutasDeImagen[4]}" alt="Portada">
            <button class="boton1 leerBTN">Leer</button>
            <button class="boton2 info">+ Info</button>
            <button class="boton3 leerBTN">Leer</button>
            <button class="boton4 info">+ Info</button>
            <button class="boton5 leerBTN">Leer</button>
            <button class="boton6 info">+ Info</button>
            <button class="boton7 leerBTN">Leer</button>
            <button class="boton8 info">+ Info</button>
            <button class="boton9 leerBTN">Leer</button>
            <button class="boton10 info">+ Info</button>
        </div>
    </div>
    `
    elementoPadre.appendChild(recomendados)
}

// adicionales
function obtenerTitulo(text) {
    fraseSeparada = text.replace(/([A-Z])/g, ' $1');
    letraCapital = fraseSeparada[1]
    fraseSinPrimerLetra = fraseSeparada.substring(2).toLowerCase()
    fraseFinal = `${letraCapital}${fraseSinPrimerLetra}`
    return fraseFinal
}

function verificadorDeRuta() {
    rutaActual = window.location.href

    if (rutaActual.includes("buscador")) {
        return "buscador"
    }
    else if (rutaActual.includes("index") || rutaActual.includes("Proyecto")) {
        return "inicio"
    }
    else if (rutaActual.includes(categoria[key])) {
        return "categoria"
    }
}

function obtenerElementosDeCategoria() {
    const elementos = [];

    for (const key in categoria) {
        const id = categoria[key];
        const elemento = document.getElementById(id);

        if (elemento) {
            elementos.push(elemento);
        }
    }
    return elementos
}

function obtenerElementoCategoria(array, categoria) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id.includes(categoria)) {
        return i;
      }
    }
    return -1;
  }

function verificadorCategoria() {
    rutaActual = window.location.href

    for (const key in categoria) {
        if (rutaActual.includes(categoria[key])) {
            return categoria[key]
        }
    }
}

function obtenerCategoria(ruta) {
    for (const key in categoria) {
        if (ruta.includes(categoria[key])) {
            return key
        }
    }
}

function obtenerLibrosPorCategoria(categoria, diccionario) {
    const filtrado = {};
  
    for (const key in diccionario) {
      if (diccionario.hasOwnProperty(key)) {
        if (diccionario[key].includes(categoria)) {
          filtrado[key] = diccionario[key];
        }
      }
    }
    return filtrado;
}
  

// Ejecuciones
switch (verificacion = verificadorDeRuta()) {
    case "inicio":
        categorias = obtenerElementosDeCategoria()
        for (const key in categoria) {
            libros = obtenerLibrosPorCategoria(categoria[key], rutasImg)
            for (const keyLibro in libros) {
                libroTitulo = obtenerTitulo(keyLibro)
                libroImagen = libros[keyLibro]
                indiceCategoria = obtenerElementoCategoria(categorias, categoria[key])
                libroCategoria = categorias[indiceCategoria]
                
                console.log(libroCategoria)

                libroInicio(libroImagen, libroTitulo, libroCategoria)
            }

        }
        break;

    case "buscador":
        categorias = obtenerElementosDeCategoria()

        break;

    case "categoria":

        break;

    default:
        break;
}