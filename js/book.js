book = document.querySelectorAll(".book");
sectionBook = document.querySelectorAll(".sectionBook");
btnInfo = document.querySelectorAll(".btnInfo");
btnLeer = document.querySelectorAll(".btnLeer");
titleBook = document.querySelectorAll(".titleBook");
imgBook = document.querySelectorAll(".imgBook")

book = Array.from(book);
sectionBook = Array.from(sectionBook);
btnInfo = Array.from(btnInfo);
btnLeer = Array.from(btnLeer);
titleBook = Array.from(titleBook);
imgBook = Array.from(imgBook)

let hoverActivo = false;
let bookActivo;

for (let i in book) {
    book[i].addEventListener("mouseenter", () => {
        // Cuando se hace hover, actualizamos el valor de bookActivo
        let bookActivo = i;

        // Verificar si el índice es válido
        if (bookActivo >= 0 && bookActivo < sectionBook.length) {
            // Lógica para mostrar/ocultar elementos aquí
            sectionBook[bookActivo].classList.toggle("abierto");
            sectionBook[bookActivo].classList.toggle("cerrado");
            imgBook[bookActivo].classList.toggle("imgBookAbierto");

            setTimeout(() => {
                titleBook[bookActivo].classList.toggle("titleBookT");
                titleBook[bookActivo].classList.toggle("titleBookN");
            }, 500);

            setTimeout(() => {
                btnInfo[bookActivo].classList.toggle("btnBook");
                btnInfo[bookActivo].classList.toggle("btnBookNo");
                btnInfo[bookActivo].textContent = "+ Informacion";

                btnLeer[bookActivo].classList.toggle("btnBook");
                btnLeer[bookActivo].classList.toggle("btnBookNo");
                btnLeer[bookActivo].textContent = "Leer";
            }, 400);
        }
    });

    book[i].addEventListener('mouseleave', () => {
        // Verificar si el índice es válido
        if (i >= 0 && i < sectionBook.length) {
            // Lógica para restaurar elementos cuando se sale del hover
            sectionBook[i].classList.toggle("abierto");
            sectionBook[i].classList.toggle("cerrado");

            imgBook[i].classList.toggle("imgBookAbierto")

            setTimeout(() => {
                btnInfo[i].classList.toggle("btnBook");
                btnInfo[i].classList.toggle("btnBookNo");
                btnInfo[i].textContent = " ";

                btnLeer[i].classList.toggle("btnBook");
                btnLeer[i].classList.toggle("btnBookNo");
                btnLeer[i].textContent = " ";
            }, 401)
           
            setTimeout(() => {
                titleBook[i].classList.toggle("titleBookT");
                titleBook[i].classList.toggle("titleBookN");
            }, 500);
        }
    });
}