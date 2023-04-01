const loginRouter = require("./loginRouter");
const booksRouter = require("./booksRouter");
const usersRouter = require("./usersRouter");
const customersRouter = require("./customersRouter");

function route(app) {
  app.use("/books", booksRouter);
  app.use("/users", usersRouter);
  app.use("/customers", customersRouter);
  app.use("/login", loginRouter);
}

module.exports = route;
