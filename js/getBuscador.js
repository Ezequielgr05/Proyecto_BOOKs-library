const inputSearch = document.querySelector("#inputSearch")
const linkSearch = document.querySelector("#btnSearch")

linkSearch.addEventListener("click", (e) => {
    e.preventDefault()
    var contenido = inputSearch.value
    sessionStorage.setItem('contenido', contenido)
    setTimeout(() => {
        window.location.href = e.target.href;
    }, 100)
})