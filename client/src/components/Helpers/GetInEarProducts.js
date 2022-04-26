// export const getProducts = async () => {
//     const url = `http://localhost:9000/api/products`;
//     const resp = await fetch(url);
//     const { data } = await resp.json();

export const GetInEarHeadphones = async () => {
  const url = "http://localhost:5000/products/inear";
  const response = await fetch(url);
  const data = await response.json();
  const getInEarProducts = await data.map((product) => {
    return {
      id: product._id,
      brand: product.brand,
      brandModel: product.brandModel,
      color: product.color.primary.colorName,
      image1: product.image1,
      image2: product.image2,
      price: product.price,
      quantity: product.quantity,
    };
  });
  console.log("GetInEarHeadphones in func", getInEarProducts);
  return getInEarProducts;
};

GetInEarHeadphones();

//     "color": {
//       "primary": {
//         "colorName": "Navy Blue",
//         "images": [
//           "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/7J1A6656x_1200x1200.jpg?v=1610731869",
//           "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/7J1A6741x_1200x1200.jpg?v=1610731869"
//         ],
//         "quantity": 20
//       },
//       "secondary": {
//         "colorName": "Metal Black",
//         "images": [
//           "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/7J1A6656x_1200x1200.jpg?v=1610731869",
//           "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/7J1A6741x_1200x1200.jpg?v=1610731869"
//         ],
//         "quantity": 18
//       }
//     }
//   },
