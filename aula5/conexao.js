//Conexão Sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize('conta','root','',{
    host: 'localhost',
    dialect: 'mysql' /*| 'mariadb' | 'postgres' | 'mssql'*/
});

sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso');
}).catch(function(err){
    console.log('Erro ao realizar a conexão com BD: ' + err);
});

const Pagamento = sequelize.define('pagamento', {
    //atributos
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
    }

});

//criar tabela com sequelize
//Pagamento.sync({force: true});

//inserindo no banco criado
Pagamento.create({
    nome: "Energia",
    valor: 220
});