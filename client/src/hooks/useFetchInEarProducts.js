import { getOnEarProducts } from "../components/Helpers/getOnEarProducts";
import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getOnEarProducts()
      .then((response) => {
        return response;
      })
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return products;
};
