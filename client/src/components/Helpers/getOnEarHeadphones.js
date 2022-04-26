export const GetOnEarHeadphones = async () => {
  const url = `http://localhost:5000/products/onear`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const products = data.map((product) => {
    return {
      id: product._id,
      brand: product.brand,
      brandModel: product.brandModel,
      price: product.price,
      color: product.color.primary.colorName,
      images: product.color.primary.images,
      quantity: product.color.primary.quantity,
      color: product.color.secondary.colorName,
      images: product.color.secondary.images,
      quantity: product.color.secondary.quantity,
    };
  });
  return products;
};
