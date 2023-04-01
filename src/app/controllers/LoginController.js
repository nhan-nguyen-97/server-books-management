const Login = require("../models/LoginModel");

class LoginController {
  //[POST] /login
  login(req, res, next) {
    res.send("Login")
  }

}

module.exports = new LoginController();