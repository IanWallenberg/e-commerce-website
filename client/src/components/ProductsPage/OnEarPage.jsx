import React from "react";
import styled from "styled-components";
import { useFetchOnEarProducts } from "../../hooks/useFetchOnEarProduct";
import Card from "./Card";
import { Link } from "react-router-dom";
import Nav from '../ui/Nav';

const Header = styled.div`
  background-image: url("./assets/products-header.png");
  height: 30%;
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const linkStyle = {
  textDecoration: "none",
  color: "black"
};
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

const Div = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`

export const OnEarPage = () => {
  const onEarProducts = useFetchOnEarProducts();

  return (
    <>
    <Nav/>
      <Header />
      <BigTitle>On Ear Products</BigTitle>
      <Button>FILTER</Button>
      <Div>
      {onEarProducts.map((product) => (
        <CardsContainer key={product.id}>
          <Link to={`/product/${product.id}`} style={linkStyle} state={product}>
            <Card {...product} />
          </Link>
        </CardsContainer>
      ))}
      </Div>
    </>
  );
};
