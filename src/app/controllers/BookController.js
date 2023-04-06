const Book = require("../models/BookModel");

class BookController {
  //[GET] /dashboard/books
  getList(req, res, next) {
    Book.find({})
      .sort({ createdAt: -1 })
      .then((books) => {
        res.status(200).json(books);
      })
      .catch(next);
  }

  //[POST] /dashboard/books/create
  create(req, res, next) {
    const book = new Book(req.body);
    book.save();
    res.status(200).json("Created Book successfully");
  }

  //[PUT] /dashboard/books/update/:id
  update(req, res, next) {
    Book.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.status(200).json("Updated Book successfully"))
      .catch(next);
  }

  //[DELETE] /dashboard/books/delete/:id
  delete(req, res, next) {
    Book.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json("Deleted Book successfully"))
      .catch(next);
  }
}

module.exports = new BookController();
