const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const moment = require('moment');
const session = require('express-session')
const flash = require('connect-flash')
const Pagamento = require("./model/Pagamento");

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date)=>{
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))
app.set('view engine', 'handlebars')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())


//Sessão
app.use(session({
    secret: 'session',
    resave: true,
    saveUninitialized: true
}))


app.use(flash())

//Middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next();
})





//Rotas
app.get('/pagamento', function(req, res){
    //pegando a constate e pegando tosos os dados para enviar para a view listar pagamento
    Pagamento.findAll({order: [['id', 'DESC']]}).then(function(pagamentos){
        res.render('pagamento',{pagamentos: pagamentos});
    })
   
});


app.get('/cad-add-pagamento', function(req, res){
    res.render('cad-add-pagamento');
});
app.post('/add-pagamento', function(req, res){
    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function () {
        req.flash("success_msg", "Pagamento cadastrado com sucesso")
        res.redirect('/pagamento')
    }).catch(function (erro) {
        req.flash("error_msg", "Erro: Pagamento não foi cadastrado com sucesso!")
    })
    //res.send("Nome: " +req.body.nome + "<br>Valor:" +req.body.valor +"<br>")
});

//Carregar formulário editar de pagamento
app.get('/editar-pagamento/:id', function (req, res) {
    Pagamento.findByPk(req.params.id)
        .then(post => {
            res.render('editar-pagamento', {
                id: req.params.id,
                nome: post.nome,
                valor: post.valor
            })
        })
        .catch(function (erro) {
            req.flash("error_msg", "Erro: Pagamento não encontrado!")
        })
})

//Editar no banco de dados o pagamento
app.post('/update-pagamento/:id', function (req, res) {
    Pagamento.update({
        nome: req.body.nome,
        valor: req.body.valor
    }, {
        where: { id: req.params.id }
    }).then(function () {
        req.flash("success_msg", "Pagamento editado com sucesso")
        res.redirect('/pagamento')
    }).catch(function (erro) {
        req.flash("error_msg", "Erro: Pagamento não foi editado com sucesso!")
    })

})

//Visualizar detalhes do pagamento
app.get('/visu-pagamento/:id', function (req, res) {
    Pagamento.findByPk(req.params.id)
        .then(post => {
            res.render('visu-pagamento', {
                id: req.params.id,
                nome: post.nome,
                valor: post.valor
            })
        })
        .catch(function (erro) {
            req.flash("error_msg", "Erro: Pagamento não encontrado!")
        })
})

//delete 
app.get('/del-pagamento/:id',function(req, res){
    Pagamento.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        
        req.flash("success_msg", "Pagamento apagado com sucesso!")
        res.redirect('/pagamento');
    }).catch(function (erro) {
        req.flash("error_msg", "Pagamento não foi apagado com sucesso!")
    })
})
app.listen(8080);