export const getOnEarHeadphones = async () => {
  const url = `http://localhost:5000/products/onear`;
  const resp = await fetch(url);
  const data = await resp.json();

  const products = await data.map((product) => {
    return {
      id: product._id,
      // productId: product.productId,
      brand: product.brand,
      brandModel: product.brandModel,
      price: product.price,
      color1: product.color.primary.colorName,
      image1: product.color.primary.images,
      quantity1: product.color.primary.quantity,
      color2: product.color.secondary.colorName,
      image2: product.color.secondary.images,
      quantity2: product.color.secondary.quantity,
    };
  });
  return products;
};
