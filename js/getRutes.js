function cargarDatos() {
    var rutasEnCache = JSON.parse(localStorage.getItem('rutas'));

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/rutas.json', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var rutasEnJSON = JSON.parse(xhr.responseText);

                // Compara los datos en caché con los nuevos datos
                if (JSON.stringify(rutasEnCache) !== JSON.stringify(rutasEnJSON)) {
                    // Los datos son diferentes, actualiza la caché
                    localStorage.setItem('rutas', JSON.stringify(rutasEnJSON));
                    console.log('Datos cargados y almacenados en la caché:', rutasEnJSON);
                } else {
                    // Los datos son iguales, utiliza los datos de la caché
                    console.log('Datos recuperados de la caché:', rutasEnCache);
                }
            } else {
                console.error('Error en la solicitud HTTP:', xhr.status);
            }
        }
    };

    xhr.send();
}

cargarDatos();


// var rutas = JSON.parse(localStorage.getItem('rutas')) para obtener los datos

