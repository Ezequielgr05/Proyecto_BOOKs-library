const inputSearch = document.querySelector("#inputSearch")
const btnSearch = document.querySelector("#btnSearch")

btnSearch.addEventListener("click", () => {
    var contenido = inputSearch.value
    sessionStorage.getItem('contenido', contenido)
})