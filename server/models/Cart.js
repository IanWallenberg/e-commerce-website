const mongoose = require("mongoose");
mongoose.pluralize(null);

const CartSchema = new mongoose.Schema({
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

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
