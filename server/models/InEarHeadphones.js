const mongoose = require("mongoose");

const inEarHeadphonesSchema = mongoose.Schema({
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

const inEarHeadphones = mongoose.model("inearheadphones", inEarHeadphonesSchema);
module.exports = inEarHeadphones;
