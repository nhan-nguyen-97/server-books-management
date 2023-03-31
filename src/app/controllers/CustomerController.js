const Customer = require("../models/CustomerModel");

class CustomerController {
  //[GET] /user
  getList(req, res, next) {
    Customer.find({})
      .then((users) => {
        res.json(users);
      })
      .catch(next);
  }
}

module.exports = new CustomerController();