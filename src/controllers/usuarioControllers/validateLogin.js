const { Usuario } = require("../../db");
const bcrypt = require('bcrypt');

const validateLogin = async (email, password) => {
  const emailFound = await Usuario.findOne({ where: { email: email } });

  const validatePassword = !emailFound ? false : await bcrypt.compare(password, emailFound.password);
  
  if(!validatePassword){
    return 'email o contrasena invalida'
  }

  return { access: true };
};

module.exports = validateLogin;
