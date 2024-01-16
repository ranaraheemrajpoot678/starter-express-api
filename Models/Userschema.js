const mongoose = require("mongoose");

const Userschema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", Userschema);
