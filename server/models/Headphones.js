const mongoose = require("mongoose");

const HeadphonesSchema = mongoose.Schema({
  brand: String,
  brandModel: String,
  price: Number,
  color: {
    primary: {
      colorName: String,
      images: [],
      quantity: Number,
    },

    secondary: {
      colorName: String,
      images: [],
      quantity: Number,
    },
  },
});

const Headphones = mongoose.model("Headphones", HeadphonesSchema);
module.exports = Headphones;
