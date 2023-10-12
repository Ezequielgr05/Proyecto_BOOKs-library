var matrizDeLibros = JSON.parse(localStorage.getItem("librosLeyendo"));
const rutaRedireccion = localStorage.getItem("rutaRedireccion");
var rutaDelArchivo = matrizDeLibros[matrizDeLibros.length - 1][0];
var tituloDelLibro = matrizDeLibros[matrizDeLibros.length - 1][1];
const pdfView = document.querySelector(".pdfview");
const titulo = document.querySelector("#titulo");
const botonVolver = document.querySelector(".navbar-brand");

function creadorDeElementos(titulo, ruta, id) {
  let list = document.querySelector("#lista");

  if (titulo == tituloDelLibro) {
    let elemento = document.createElement("li");
    elemento.classList.add("nav-item");
    elemento.innerHTML = `
            <button class="nav-link active leyendo" aria-current="page" data-ruta="${ruta}">${titulo}</button>
            <button class="nav-link active terminado" data-id="${id}" aria-current="page">Terminado</button>
            `;

    list.appendChild(elemento);
  } else {
    let elemento = document.createElement("li");
    elemento.classList.add("nav-item");
    elemento.innerHTML = `
            <button class="nav-link active" aria-current="page" data-ruta="${ruta}">${titulo}</button>
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

function crearBotonEliminar(id, iterable) {
  const item = Array.from(document.querySelectorAll(".nav-item"));
  if (iterable >= 0 && iterable < item.length) {
    const clases = ["nav-link", "active", "terminado"];
    const botonEliminar = document.createElement("button");

    for (const i of clases) {
      botonEliminar.classList.add(i);
    }

    botonEliminar.setAttribute("aria-current", "page");
    botonEliminar.textContent = "Terminado";
    botonEliminar.setAttribute("data-id", id)

    item[iterable].appendChild(botonEliminar);
  }
}

pdfView.setAttribute("src", rutaDelArchivo);
titulo.innerText = tituloDelLibro;
botonVolver.setAttribute("href", rutaRedireccion);

for (let i = 0; i < matrizDeLibros.length; i++) {
  (i => {
    let ruta = matrizDeLibros[i][0];
    let titulo = matrizDeLibros[i][1];

    creadorDeElementos(titulo, ruta, i);
  })(i);
}

let botones = Array.from(document.querySelectorAll(".nav-link"));

for (x = 0; x < botones.length - 1; x++) {
  (x => {
    botones[x].addEventListener("click", () => {
      if (!botones[x].classList.contains("leyendo")) {
        botonTerminado = document.querySelector(".terminado")
        

        for (let y = 0; y < botones.length; y++) {
          if (botones[y].classList.contains("leyendo")) {
            botones[y].classList.remove("leyendo")
            botonTerminado.remove()
          }
        }
          

        textoBoton = botones[x].textContent;
        urlBoton = botones[x].getAttribute("data-ruta");
        urlImagen = matrizDeLibros[x][2]

        botones[x].classList.add("leyendo");

        crearBotonEliminar(x, x)

        pdfView.setAttribute("src", urlBoton);
        titulo.innerText = textoBoton;

        libroLeyendoAhora = [urlBoton, textoBoton, urlImagen];
        actualizarLocalStorage(libroLeyendoAhora);
      }
    });
  })(x);
}

// Agrega un manejador de eventos al elemento superior que contiene los botones "Terminado"
document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("terminado")) {
    const botonTerminado = event.target;
    const id = botonTerminado.getAttribute("data-id");
    const botonOriginal = botones[id];
    const tituloAEliminar = botonOriginal.textContent;

    if (matrizDeLibros.length === 1) {
      matrizDeLibros = matrizDeLibros.filter(libro => libro[1] !== tituloAEliminar);
      localStorage.setItem("librosLeyendo", JSON.stringify(matrizDeLibros));
      window.location.href = "/index.html";
    } else {
      matrizDeLibros = matrizDeLibros.filter(libro => libro[1] !== tituloAEliminar);
      localStorage.setItem("librosLeyendo", JSON.stringify(matrizDeLibros));
      location.reload();
    }
  }
});


// botonTerminado.addEventListener("click", () => {
//   id = botonTerminado.getAttribute("data-id");
//   botonOriginal = botones[id];
//   tituloAEliminar = botonOriginal.textContent;

//   if (matrizDeLibros.length === 1) {
//     // Si es el último libro en la lista, eliminarlo y redirigir a la página de inicio
//     matrizDeLibros = matrizDeLibros.filter(libro => libro[1] !== tituloAEliminar);
//     localStorage.setItem("librosLeyendo", JSON.stringify(matrizDeLibros));
//     window.location.href = "/index.html";
//   } else {
//     // Si hay más libros en la lista, simplemente eliminar el libro
//     matrizDeLibros = matrizDeLibros.filter(libro => libro[1] !== tituloAEliminar);
//     localStorage.setItem("librosLeyendo", JSON.stringify(matrizDeLibros));
//     location.reload();
//   }
// });

