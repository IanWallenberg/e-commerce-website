import { getOnEarHeadphones } from "../components/Helpers/getOnEarHeadphones";
import { useState, useEffect } from "react";

export const useFetchOnEarProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getOnEarHeadphones()
      .then((response) => {
        return response;
      })
      .then((products) => {
        setProducts(products);
      });
  }, []);
  return products;
};
