const express = require("express");

const app = express();


app.get("/",function(req, res){
    res.sendFile(__dirname + "/src/index.html");
    //C:\Users\Diego Martins Souza\Desktop\node_js\aula3/src/index.html
});

app.get("/sobre-empresa", function(req, res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.get("/blog", function(req, res){
    res.send("Pagina blog");
});

app.get("/contatos", function(req, res){
    res.send("Pagina de contato");
});


//localhost:8080
app.listen(8080);