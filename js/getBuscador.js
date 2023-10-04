const inputSearch = document.querySelector("#inputSearch")
const linkSearch = document.querySelector("#btnSearch")

linkSearch.addEventListener("click", () => {
    e.preventDefault()
    var contenido = inputSearch.value
    sessionStorage.setItem('contenido', contenido)
    setTimeout(() => {
        window.location.href = "html/other/buscador.html";
    }, 100)
})