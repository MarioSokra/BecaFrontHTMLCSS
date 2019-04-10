let divElement = document.querySelector("div");
divElement.setAttribute("class", "resalta");
// divElement[2].cambiaNumeroFactura();
let acceso = divElement.children[2];
acceso.innerHTML = acceso.innerHTML + 1;