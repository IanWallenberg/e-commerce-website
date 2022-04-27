import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useFetchInEarProducts } from "../../hooks/useFetchInEarProducts";

const Header = styled.div`
  background-image: url("./assets/products-header.png");
  height: 30%;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const BigTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding: 30px 0;
`;

const Button = styled.button`
  font-size: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
  padding-left: 50px;
`;

export const InEarPage = () => {
  const inEarProducts = useFetchInEarProducts();
  return (
    <div>
      <Header />
      <BigTitle>IN EAR HEADPHONES</BigTitle>
      <Button>FILTER</Button>
      {inEarProducts.map(prod=>(
        <CardsContainer key={prod.id}>
        <Card {...prod}/>
      </CardsContainer>
      ))}
      </div>
  );
};
