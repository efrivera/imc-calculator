var chalk = require('chalk');

function validate() {
  var valid = false;

  if ( process.argv[2] && process.argv[3] ){
    valid = true;
  }

  return valid;
}

module.exports = {
  validateInput: validate
};