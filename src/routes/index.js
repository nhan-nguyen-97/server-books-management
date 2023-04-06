const booksRouter = require("./booksRouter");
const usersRouter = require("./usersRouter");
const customersRouter = require("./customersRouter");
const authorsRouter = require("./authorsRouter")

function route(app) {
  app.use("/dashboard/books", booksRouter);
  app.use("/dashboard/users", usersRouter);
  app.use("/dashboard/authors", authorsRouter);
  app.use("/dashboard/customers", customersRouter);
}

module.exports = route;
