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


// --------------------------------

document.querySelector("nav-open").addEventListener("click", openNavbar);
document.querySelector("nav-close").addEventListener("click", closeNavbar);

function openNavbar() {
    document.querySelector("nav-burger").style.right = "0";
}

function closeNavbar() {
    document.querySelector("nav-burger").style.right = "-100%";
}