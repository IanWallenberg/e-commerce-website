const mongoose = require("mongoose");

const HeadphonesSchema = mongoose.Schema({
  name: String,
  image1: String,
  image2: String,
  price: Number,
  quantity: Number,
});

const Headphones = mongoose.model("Headphones", HeadphonesSchema);
module.exports = Headphones;
