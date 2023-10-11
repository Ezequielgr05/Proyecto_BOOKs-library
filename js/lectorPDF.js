const matrizDeLibros = JSON.parse(localStorage.getItem("librosLeyendo"));
const rutaRedireccion = localStorage.getItem("rutaRedireccion")
const rutaDelArchivo = matrizDeLibros[matrizDeLibros.length - 1][0];
const tituloDelLibro = matrizDeLibros[matrizDeLibros.length - 1][1];
const pdfView = document.querySelector(".pdfview");
const titulo = document.querySelector("#titulo");
const botonVolver = document.querySelector(".navbar-brand")
 

function creadorDeElementos(titulo, ruta, id) {
    let list = document.querySelector("#lista");

    if (titulo == tituloDelLibro) {
        let elemento = document.createElement("li");
        elemento.classList.add("nav-item");
        elemento.innerHTML = `
            <button class="nav-link active leyendo" id="${id}" aria-current="page" data-ruta="${ruta}">${titulo}</a>
        `;
    
        list.appendChild(elemento);
    } else {
        let elemento = document.createElement("li");
        elemento.classList.add("nav-item");
        elemento.innerHTML = `
            <button class="nav-link active" id="${id}" aria-current="page" data-ruta="${ruta}">${titulo}</button>
        `;
    
        list.appendChild(elemento);
    }
    
}

function actualizarLocalStorage(nuevoLibro) {
    const matrizDeLibros = JSON.parse(localStorage.getItem("librosLeyendo"));
    const index = matrizDeLibros.findIndex(libro => libro[1] === nuevoLibro[1]);
    if (index !== -1) {
        matrizDeLibros.splice(index, 1);
    }

    matrizDeLibros.push(nuevoLibro);
    localStorage.setItem("librosLeyendo", JSON.stringify(matrizDeLibros));
}


pdfView.setAttribute("src", rutaDelArchivo);
titulo.innerText = tituloDelLibro;
botonVolver.setAttribute("href", rutaRedireccion)

for (let i = 0; i < matrizDeLibros.length; i++) {
    ((i) => {
        let ruta = matrizDeLibros[i][0];
        let titulo = matrizDeLibros[i][1];

        creadorDeElementos(titulo, ruta, i);
    })(i)
}

let botones = Array.from(document.querySelectorAll(".nav-link"))

for ( x = 0; x < botones.length; x++) {
    ((x) => {
        botones[x].addEventListener("click", () => {
            if (!botones[x].classList.contains("leyendo")) {
                textoBoton = botones[x].textContent
                urlBoton = botones[x].getAttribute("data-ruta")
                urlImagen = matrizDeLibros[x][2];

                for ( y = 0; y < botones.length; y++) {
                    if(botones[y].classList.contains("leyendo")){
                        botones[y].classList.remove("leyendo")
                    }
                }

                botones[x].classList.add("leyendo")

                pdfView.setAttribute("src", urlBoton);
                titulo.innerText = textoBoton;

                libroLeyendoAhora = [urlBoton, textoBoton, urlImagen]
                actualizarLocalStorage(libroLeyendoAhora)
            }
        })
    })(x)
}
