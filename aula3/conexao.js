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
        consolle.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM users',function(err, rows,fields){
    if(!err){
        console.log("Resultado: ",rows);
    }else{
        console.log("Erro ao realizar a consuta");
    }

});
