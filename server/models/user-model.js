const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model of a user object, Typescript-like
const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
