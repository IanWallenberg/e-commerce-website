
import { getInEarHeadphones } from "../components/Helpers/getInEarProducts";

import { useEffect, useState } from "react";

export const useFetchInEarProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getInEarHeadphones()
   
      .then((response) => {
        // console.log("response", response)
        return response;

      })
      .then((products) => {
        setProducts(products);
      });
  }, []);
  return products;
};
