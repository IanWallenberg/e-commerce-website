import { GetOnEarHeadphones } from "../components/Helpers/GetOnEarHeadphones";
import { GetInEarHeadphones } from "../components/Helpers/GetInEarProducts";

import { useState, useEffect } from "react";

import React from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GetOnEarHeadphones()
      .then((response) => {
        return response;
      })
      .then((products) => {
        setProducts(products);
      });
  }, []);
  return products;
};

export const useFetchInEarProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GetInEarHeadphones()
      .then((response) => {
        return response;
      })
      .then((products) => {
        setProducts(products);
      });
  }, []);
  return products;
};
