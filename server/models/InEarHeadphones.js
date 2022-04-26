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

<<<<<<< HEAD
const inEarHeadphones = mongoose.model("InEarHeadphones", inEarHeadphonesSchema);
=======
const inEarHeadphones = mongoose.model("inearheadphones", inEarHeadphonesSchema);
>>>>>>> c42ca6c8d2cc7dc491cc9074c48585090b0a725b
module.exports = inEarHeadphones;
