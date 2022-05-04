export const addToCart = (body) => {
  console.log('test', body);
  fetch("http://localhost:5000/cart", {
    // Adding method type
    method: "POST",
  
    // Adding body or contents to send
    body: JSON.stringify({
      brand: body.brand,
      price: body.price,
      brandModel: body.brandModel,
      image1: body.image1[0],
      // quantityToBuy: body.quantityToBuy
    }),

    // Adding headers to the request
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
};
