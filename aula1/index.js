console.log("ola mundo");

console.log("Gerente ");

var client = "Diego";// variaveis criação

console.log("Cliente : "+client);//utilizando o console

var valProduct = 100;
var valDiscount = 37;

var discountFunc = require("./modulos/calDiscont.js");//fução modules
var finalValue = discountFunc(valProduct, valDiscount);
console.log("valor fina R$"+finalValue);