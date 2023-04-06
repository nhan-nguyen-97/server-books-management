const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Author = new Schema(
  {
    name: { type: String },
    dateOfBirth: { type: Date },
    died: { type: Date },
    gender: { type: String },
    placeOrigin: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", Author);
