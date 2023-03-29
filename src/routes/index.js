const booksRouter = require("./booksRouter");

function route(app) {
  app.use("/books", booksRouter);
}

module.exports = route;
