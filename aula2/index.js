var  http = require('http');

http.createServer(function(req, res){//clianto um servido e startano para imprimir no Chome
    res.end("Ola Mundo !!!!");
}).listen(8080);