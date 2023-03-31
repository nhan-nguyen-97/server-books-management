const User = require("../models/UserModel");

class UserController {
  //[GET] /user
  getList(req, res, next) {
    User.find({})
      .then((users) => {
        res.json(users);
      })
      .catch(next);
  }
}

module.exports = new UserController();