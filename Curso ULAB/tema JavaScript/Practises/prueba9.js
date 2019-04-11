let num1, num2, bueno;
let veces = 0, aciertos = 0, fallos = 0;
let pregunta, lista, terminado = false;
function Juego(){
    pregunta = document.querySelector("#pregunta");
    lista = document.querySelectorAll("li");

    lista.forEach(function(elem){elem.style.backgroundColor='transparent'});

    num1 = Math.floor((Math.random()*10)+1);
    num2 = Math.floor((Math.random()*10)+1);
    pregunta.innerHTML =": Cuanto es "+num1+ " X "+num2+"?";
    respuestaCorrecta = num1*num2;
    respuestaFalsa1 = Math.floor((Math.random()*10)+1);
    respuestaFalsa2 = Math.floor((Math.random()));
    let textButton;
    let btn;
    for(let index = 0; index<3;index++){
        btn = document.createElement("button");
        if(bueno == index){
            t = document.createTextNode(num1*num2);
        }
        else{
            
        }
    }
    
    console.log(respuestaCorrecta);
    console.log(respuestaFalsa1);
    console.log(respuestaFalsa2);
    bueno = Math.floor(Math.random()*3);
    console.log(bueno);
    for(let i=1;i<3;i++){
        if(i==bueno){
            
        }
    }

    let contadorDeRondas = 0;



}