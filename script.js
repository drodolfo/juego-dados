//Cambiar dado 1 al recargar

var dado1 = (Math.floor(Math.random()*6 )+1);

var dado1Imagen = "images/" + "dice" + dado1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", dado1Imagen);

//Cambiar dado 2 al recargar

var dado2 = (Math.floor(Math.random()*6)+1);

var dado2Imagen = "images/" + "dice" + dado2 + ".png";

document.querySelectorAll("img") [1].setAttribute("src", dado2Imagen);

//Detallar quién es el ganador

if (dado1 > dado2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 is the winner"
}else if (dado2 > dado1) {
    document.querySelector("h1").innerHTML ="Player 2 is the winner 🚩"
}else {
    document.querySelector("h1").innerHTML="Draw"
}

//Recargar página al hacer click en las imagenes

document.querySelectorAll("img")[0].addEventListener("click", reload)
document.querySelectorAll("img")[1].addEventListener("click", reload)

function reload () {
    location.reload()
}
