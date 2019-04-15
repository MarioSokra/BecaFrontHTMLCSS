const http = require('http');
const fs = require('fs');   

var atenderPeticion = (request, response) => {
   response.writeHead(200, {"Content-Type": "text/html"});
   var contenido = fs.readFileSync('./index.html', 'utf8');
   var navegador = request.headers['user-agent'];
   
   
   var mensaje = " ";
    if(navegador.indexOf("Chrome")<0){
        mensaje="no usas chrome";
    }
    else{
        mensaje="usas Chrome";
    };
    contenido = contenido.replace('{mensaje}', mensaje);
    contenido = contenido.replace('{navegador}', navegador);
    response.write(contenido);

    if (request.url == '/') { 
        response.write("Página principal"); 
    } else if(request.url == '/bienvenida') 
    { 
        response.write("Bienvenido/a"); 
    } 
    else if(request.url == '/despedida') 
    { response.write("Hasta pronto"); }

    response.end();

}

http.createServer(atenderPeticion).listen(8080);
