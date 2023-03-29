const continer = document.querySelector(".continer")
const btnWhite = document.querySelector(".btnWhite")
const btnDark = document.querySelector(".btnDark")
const linkA = document.querySelector(".linka")
btnWhite.addEventListener("click", function () {
    whiteCon()
})
btnDark.addEventListener("click", function () {
    blackCon()
})
function whiteCon() {
    continer.style.backgroundColor = "white";
    linkA.style.color = "red";
}
function blackCon() {
    continer.style.backgroundColor = "black";
    linkA.style.color = "yellow";
}
