const Customer = require("../models/CustomerModel");

class CustomerController {
  //[GET] /customers
  getList(req, res, next) {
    Customer.find({})
      .sort({ createdAt: -1 })
      .then((customers) => {
        res.json(customers);
      })
      .catch(next);
  }

  //[POST] /customers/register
  register(req, res, next) {
    req.body.avatar = "";
    const customer = new Customer(req.body);
    Customer.findOne({ username: req.body.username })
      .then((customerExist) => {
        if (!customerExist) {
          customer.save();
          res.status(200).json("Register Successfully");
        } else {
          res.status(400).json("Username already exist");
        }
      })
      .catch(next);
  }
}

module.exports = new CustomerController();
