const contenido = sessionStorage.getItem('contenido')
const inputSearch = document.querySelector("#inputSearch")
const listTitle = Array.from(document.querySelectorAll(".itemTitle"))
const listItem = Array.from(document.querySelectorAll(".itemList"))
const listImg = Array.from(document.querySelectorAll(".imgBTN"))

function obtenerItemsDeCategoria() {
    const elementos = [];

    for (const key in categoria) {
        const clase = "." + categoria[key];
        const elemento = document.querySelector(clase);

        if (elemento) {
            elementos.push(elemento);
        }
    }
    return elementos
}

function obtenerItemsSinDNonePorCategoria(categoria) {
    items = []
    for (let i = 0; i < listImg.length; i++) {
        let rutaPartida = listImg[i].getAttribute("src").split("/")
        if (rutaPartida[4] == categoria && !listItem[i].classList.contains("d-none")) {
            items.push(listItem[i])
        }
    }
    return items
}

function verificarSiQuedanItemsEnCategorias() {
    itemsCategoria = obtenerItemsDeCategoria()

    for (const key in categoria) {
        categoriaAUsar = categoria[key]
        if (categoriaAUsar !== "Recomendados") {
            filtrados = obtenerItemsSinDNonePorCategoria(categoriaAUsar)
            if (filtrados.length >= 1) {
                itemsCategoria[key].classList.remove("d-none")
            } else {
                itemsCategoria[key].classList.add("d-none")
            }
        }
    }
}

function buscador(substring) {
    var cumplen = [];
    
    for (var i = 0; i < listItem.length; i++) {
        var list = listTitle[i].innerText;
        if (list.toLowerCase().includes(substring.toLowerCase())) {
            cumplen.push(listItem[i]);
        }
    }

    return cumplen;
}

function filtrar(datos){
    if (inputSearch.value == ""){
        for (i of listItem){
            i.classList.remove("d-none")
        }
    }else{
        for (i of listItem){
            i.classList.add("d-none")
        }
        for (i of datos){
            i.classList.remove("d-none")
        }
    }
}


if (contenido != '') {
    inputSearch.value = contenido;
    filtrar(buscador(contenido))
    verificarSiQuedanItemsEnCategorias()
}

inputSearch.addEventListener("input", () => {
    substring = inputSearch.value
    filtrar(buscador(substring))
    verificarSiQuedanItemsEnCategorias()
})