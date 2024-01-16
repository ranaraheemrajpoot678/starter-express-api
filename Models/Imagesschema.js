const mongoose = require("mongoose");

const Imagesschema = new mongoose.Schema({
  title: String,
  tags: Array,
  location: String,
  category: String,
  imgUrl: String,
  likes: Number,
  _id: String,
});
const imagesSchema = mongoose.model("images", Imagesschema);

module.exports = {
  imagesSchema,
};
