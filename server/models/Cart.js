const mongoose = require("mongoose");
mongoose.pluralize(null);

const CartSchema = new mongoose.Schema({
  brand: String,
  brandModel: String,
  price: Number,
  image1: String,
  color: {
    primary: {
      colorName: String,
      quantity: Number,
    }
}});

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
