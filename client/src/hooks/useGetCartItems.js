import { getCartItems } from "../components/helpers/getCartItems";

import { useEffect, useState } from "react";

export const useGetCartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartItems()
      .then((response) => {
        return response;
      })
      .then((cartItem) => {
        setCartItems(cartItem);
      });
  }, []);
  // console.log(cartItems)
  return cartItems;
};
