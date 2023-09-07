book = document.querySelectorAll(".book")
sectionBook = document.querySelectorAll(".sectionBook")
btnInfo = document.querySelectorAll(".btnInfo")
btnLeer = document.querySelectorAll(".btnLeer")
titleBook = document.querySelectorAll(".titleBook")

book = Array.from(book)
sectionBook = Array.from(sectionBook)
btnInfo = Array.from(btnInfo)
btnLeer = Array.from(btnLeer)
titleBook = Array.from(titleBook)

let hoverActivo = false;

book[0].addEventListener('mouseenter', () => {
    sectionBook[0].classList.add("abierto")
    sectionBook[0].classList.remove("cerrado")
    setTimeout(() => {
        titleBook[0].classList.add("titleBookT")
        titleBook[0].classList.remove("titleBookN")
    }, 500);
    setTimeout(() => {
        btnInfo[0].classList.add("btnBook")
        btnInfo[0].classList.remove("btnBookNo")
        btnInfo[0].innerHTML = "+ Informacion"
        btnLeer[0].classList.add("btnBook")
        btnLeer[0].classList.remove("btnBookNo")
        btnLeer[0].innerHTML = "Leer"
    }, 800);
});

book[0].addEventListener('mouseleave', () => {
    sectionBook[0].classList.remove("abierto")
    sectionBook[0].classList.add("cerrado")
    setTimeout(() => {
        titleBook[0].classList.remove("titleBookT")
        titleBook[0].classList.add("titleBookN")
    }, 500);
    setTimeout(() => {
        btnInfo[0].classList.remove("btnBook")
        btnInfo[0].classList.add("btnBookNo")
        btnInfo[0].innerHTML = " "
        btnLeer[0].classList.remove("btnBook")
        btnLeer[0].classList.add("btnBookNo")
        btnLeer[0].innerHTML = " "
    }, 100);
});