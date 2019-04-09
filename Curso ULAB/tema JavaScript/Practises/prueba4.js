// let parrafos = document.getElementsByTagName("p");
// let enlaces = document.getElementsByTagName("a");
// let enlacesUltimoParrafo = parrafos[2].getElementsByTagName("a");
// let contadorDeParrafos = parrafos.length;
// let contadorDeEnlaces = enlaces.length;
// let contadorDeEnlacesUltimoParrafo = enlacesUltimoParrafo.length;
// console.log(contadorDeParrafos + " " + contadorDeEnlaces + " " + contadorDeEnlacesUltimoParrafo);

let pTotales = document.getElementsByTagName("p");
let aTotales = document.getElementsByTagName("a");
let aTotalesP1 = pTotales[0].getElementsByTagName("a");

document.write("Párrafos totales: " + pTotales.length + "<br>");
document.write("Enlaces totales: " + aTotales.length + "<br>");
document.write("Enlaces totales en el primer párrafo: " + aTotalesP1.length);