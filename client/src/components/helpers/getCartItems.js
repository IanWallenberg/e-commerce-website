export const getCartItems = async () => {
  const url = `http://localhost:5000/cart`;
  const resp = await fetch(url);
  const data = await resp.json();

  const cartItems = await data.map((cartItem) => {
    return {
      // productId: cartItem.productId,
      id: cartItem._id,
      price: cartItem.price,
      brand: cartItem.brand,
      brandModel: cartItem.brandModel,   
      image1: cartItem.image1,
      quantityToBuy: cartItem.quantityToBuy
    };
  });
  return cartItems;
};
