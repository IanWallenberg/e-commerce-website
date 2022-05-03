import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import Nav from "../ui/Nav";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: white;

`;

export const LandingPage = () => {
  const getInEarProducts = async () => {
    const url = "http://localhost:5000/products/inear";
    const response = await fetch(url);
    const data = response.json();
    console.log(data);
  };
  getInEarProducts();
  return (
    <Container>
      <Nav />
      <Slider />
    </Container>
  );
};
