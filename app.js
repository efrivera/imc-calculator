var imc = require("./utils/imc");
var chalk = require('chalk');
var validate = require("./utils/validate");
var moment = require("moment");

(function init() {
  const systemDate = moment().format('LLLL'); 
  const imcResult = imc.calcIMC(process.argv[2], process.argv[3]); 
  const clasification = imc.findClasif(imcResult);
  const argvs = process.argv;


  if( validate.validateInput() ){
    console.log(  chalk.italic(systemDate) );
    console.log( chalk.underline.bold('Hola ' + process.env.USER) );
    console.log( 'Tu IMC es: ' + chalk.bold(imcResult) );
    console.log( 'Estás en: ' + clasification );
  } else {
    console.log( chalk.red('Por favor ingrese su altura(mt) y peso(kg) Ejm. "npm start 1.70 68"') );
  }

}());