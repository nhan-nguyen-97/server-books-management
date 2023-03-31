const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customer = new Schema(
  {
    username: { type: String },
    password: { type: String },
    fullName: { type: Number },
    gender: { type: String },
    email: { type: String },
    phoneNumber: {type: String},
    avatar: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", Customer);