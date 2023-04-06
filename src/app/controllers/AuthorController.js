const Author = require("../models/AuthorModel");

class AuthorController {
  //[GET] /dashboard/authors
  getList(req, res, next) {
    Author.find({})
      .sort({ createdAt: -1 })
      .then((authors) => {
        res.status(200).json(authors);
      })
      .catch(next);
  }

  //[POST] /dashboard/authors/create
  create(req, res, next) {
    const author = new Author(req.body);
    author.save();
    res.status(200).json("Created Author successfully");
  }

  //[PUT] /dashboard/authors/update/:id
  update(req, res, next) {
    Author.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.status(200).json("Updated Author successfully"))
      .catch(next);
  }

  //[DELETE] /dashboard/authors/delete/:id
  delete(req, res, next) {
    Author.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json("Deleted Author successfully"))
      .catch(next);
  }
}

module.exports = new AuthorController();
