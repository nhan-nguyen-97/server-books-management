const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://nhan030797:nhanlatao01@cluster0.0ehdowm.mongodb.net/books_management?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect DB Successfully");
  } catch (error) {
    console.log("Connect DB Failure");
  }
}

module.exports = { connect };