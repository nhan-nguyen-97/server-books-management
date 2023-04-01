const Book = require("../models/BookModel");

class BookController {
  //[GET] /books
  getList(req, res, next) {
    Book.find({})
      .then((books) => {
        res.status(200).json(books);
      })
      .catch(next);
  }
}

module.exports = new BookController();
