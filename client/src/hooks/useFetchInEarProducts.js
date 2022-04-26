import { getInEarProducts } from "../components/Helpers/GetInEarProducts";

import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getInEarProducts()
      .then((response) => {
        return response;
      })
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return products;
};
