export const getCartItems = async () => {
  const url = `http://localhost:5000/cart`;
  const resp = await fetch(url);
  const data = await resp.json();

  const cartItems = await data.map((cartItem) => {
    return {
      id: cartItem._id,
      brand: cartItem.brand,
      brandModel: cartItem.brandModel,
      price: cartItem.price,
      color1: cartItem.color.primary.colorName,
      image1: cartItem.color.primary.images,
      quantity1: cartItem.color.primary.quantity,
      color2: cartItem.color.secondary.colorName,
      image2: cartItem.color.secondary.images,
      quantity2: cartItem.color.secondary.quantity,
    };
  });
  return cartItems;
};
