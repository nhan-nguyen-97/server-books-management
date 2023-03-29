const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema(
  {
    name: { type: String },
    author: { type: String },
    price: { type: Number },
    published: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", Book);
