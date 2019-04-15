const http = require('http');


var atenderPeticion= (request, response) => { 
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write("Bienvenido/a\n"); 
    response.write("Tienes este navegador: " + request.headers['user-agent']); 
    var userAgent = request.headers['user-agent'];
    if(userAgent.indexOf("Chrome")<0){
        console.log("no usas chrome");
    }
    else{
        console.log("usas Chrome");
    };
    
    

    response.end(); 
    

}




http.createServer(atenderPeticion).listen(8080);