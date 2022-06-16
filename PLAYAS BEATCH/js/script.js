window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

var contador = 1;

function animaciones(){
    document.querySelector("#imgcab").style.opacity="0.5";
    document.querySelector("#imgcab").style.transition="all 1s";
    setTimeout("carrusel()",1000);
}
function carrusel(){
    contador++;
    if(contador>6){contador=1;}
    document.querySelector("#imgcab").setAttribute("src","img/ban" + contador + ".jpg");
    document.querySelector("#imgcab").style.opacity="1";
    document.querySelector("#imgcab").style.transition="all 1s";
    setTimeout("animaciones()",2000);

}
document.body.setAttribute("onload", "carrusel()");


function cambia_de_pagina(){
    alert("Gracias por visitar nuestra pagina, nos vamos a el mirador de la serrania")
    location.href='../index.html'
  }