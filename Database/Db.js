const mongoose = require("mongoose");
const colors = require("colors");

const Db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://raheemrajpoot678:rajpoot123@stock-images.of7efpy.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("databse connection established".bgGreen);
  } catch (er) {
    console.log(er);
  }
};

module.exports = Db;
