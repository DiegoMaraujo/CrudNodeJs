//Conexão com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'conta'
});

connection.connect(function(err){
    if(err){
        consolle.error('error ao conectar ' + err.stack);
        return;
    }else{
        console.log('Conexão realizada com sucesso');
        return;
    }
    
});
//inserindo na tabela users 
connection.query("INSERT INTO users(nome,email) VALUES ('jose','jose@jose.com')",function(err,result){
    if(!err){
        console.log('Usuario cadastrado com sucesso!!');
    }else{
        console.log('Erro ao cadastrar'+ err.stack);
    }
});
//Editando o usuario 1 da tabela users
connection.query("UPDATE users SET nome='martis 1' WHERE id = 1 ",function(err){
    if(!err){
        console.log('Usuario Editado com sucesso!!');
    }else{
        console.log('Erro ao Editar'+ err.stack);
    }
});
//deletando o usuario 3 da tabela users
connection.query("DELETE FROM users WHERE id = 3",function(err){
    if(!err){
        console.log('Usuario Deletado  com sucesso!!');
    }else{
        console.log('Erro ao Deletar'+ err.stack);
    }
});

//Buscando todos usuaria na tabela users
connection.query("SELECT * FROM users",function(err,rows){
    if(!err){
        console.log('Busca realizada com sucesso');
        console.log('Resutado da busca',rows);
       
    }else{
        console.log('Erro ao realizar a busca'+ err.stack);
    }
});


