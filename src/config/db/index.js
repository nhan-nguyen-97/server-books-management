const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/books_management", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect DB Successfully");
  } catch (error) {
    console.log("Connect DB Failure");
  }
}

module.exports = { connect };