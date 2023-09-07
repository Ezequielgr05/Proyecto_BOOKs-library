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

// + Informacion
// Leer

// btnBook

book[0].addEventListener('mouseenter', () => {
    sectionBook[0].classList.add("abierto")
    sectionBook[0].classList.remove("cerrado")
    setTimeout(() => {
        titleBook[0].classList.add("titleBookT")
        titleBook[0].classList.remove("titleBookN")
    }, 500);
});

book[0].addEventListener('mouseleave', () => {
    sectionBook[0].classList.remove("abierto")
    sectionBook[0].classList.add("cerrado")
    setTimeout(() => {
        titleBook[0].classList.remove("titleBookT")
        titleBook[0].classList.add("titleBookN")
    }, 500);
});