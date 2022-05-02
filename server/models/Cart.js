const mongoose = require("mongoose");
mongoose.pluralize(null);

const CartSchema = new mongoose.Schema({
  brand: String,
  // brandModel: String,
  // color1: String,
  // color2: String,
  // id: String,
  // image1: [],
  // image2: [],
  price: Number,
});

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
