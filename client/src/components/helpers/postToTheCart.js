// export const addToCart = (body) => {
//   const URL = `http://localhost:5000/cart`;
//   return fetch({
//     method: "post",
//     url: `${URL}/`,
//     headers: {
//       " Accept": "application/json",
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify(body),
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

// POST request using fetch()

export const addToCart = (body) => {
  fetch("http://localhost:5000/cart", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      brand: body.brand,
      price: body.price,
    }),

    // Adding headers to the request
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
};
