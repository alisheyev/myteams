// const continer = document.querySelector(".continer")
// const btnWhite = document.querySelector(".btnWhite")
// const btnDark = document.querySelector(".btnDark")
// const linkA = document.querySelector(".linka")
// btnWhite.addEventListener("click", function () {
//     whiteCon()
// })
// btnDark.addEventListener("click", function () {
//     blackCon()
// })
// function whiteCon() {
//     continer.style.backgroundColor = "white";
//     linkA.style.color = "red";
// }
// function blackCon() {
//     continer.style.backgroundColor = "black";
//     linkA.style.color = "yellow";
// }


// --------------------------------

document.getElementById("nav-open").addEventListener("click", openNavbar);
document.getElementById("nav-close").addEventListener("click", closeNavbar);

function openNavbar() {
    document.getElementById("nav-burger").style.right = "0";
}

function closeNavbar() {
    document.getElementById("nav-burger").style.right = "-100%";
}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.padding = "20px 0px";
        
    } else {
        document.getElementById("header").style.padding = "30px 0px";
    }
}