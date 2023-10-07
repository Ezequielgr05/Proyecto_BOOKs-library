const contenido = sessionStorage.getItem('contenido')
const inputSearch = document.querySelector("#inputSearch")
const listTitle = Array.from(document.querySelectorAll(".itemTitle"))
const listItem = Array.from(document.querySelectorAll(".itemList"))


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
}

inputSearch.addEventListener("input", () => {
    substring = inputSearch.value
    filtrar(buscador(substring))
})