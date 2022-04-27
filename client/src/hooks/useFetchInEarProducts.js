import { getInEarHeadphones } from "../components/Helpers/GetInEarProducts";

import { useEffect, useState } from "react";

export const useFetchInEarProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getInEarHeadphones()
      .then((response) => {
        return response;
      })
      .then((products) => {
        setProducts(products);
      });
  }, []);
  return products;
};
