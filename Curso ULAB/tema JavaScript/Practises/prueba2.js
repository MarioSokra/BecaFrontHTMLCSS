
let numero1;
numero1=prompt("Ingrese un numero");
numero1=parseInt(numero1);

let numero2;
numero2=prompt("Ingrese otro numero");
numero2=parseInt(numero2);

document.write("<table border='1'>");

var x=0;

for (x = 1; x <= numero2; x++)
{
    tabel=numero1*x;
    document.write("<tr><td>");
    document.write(numero1+"x"+x+"="+ tabel + "<br>");
    document.write("</td></tr>");
}

document.write("</table>");