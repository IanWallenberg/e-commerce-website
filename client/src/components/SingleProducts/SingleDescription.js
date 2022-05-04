import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../ui/Nav";
import Slider from "./Slider";
import { useLocation } from "react-router-dom";
import { addToCart } from "../helpers/postToTheCart";
// import { useGetCartItems } from "../../hooks/useGetCartItems";

const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  background-color: #f8edeb;
`;

const pictureStyle = {
  width: "90%",
  objectFit: "cover",
  border: "5px orange solid",
};

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 100%;
  width: 50%;
  padding: 6%;
  background-color: #f8edeb;
  font-size: 18px;
`;

const Button = styled.button`
  background-color: #404040;
  color: white;
  margin-top: 5%;
  width: 10rem;
  height: 3rem;
  font-size: 900;
`;

export const SingleDescription = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(1);
  // const [quantityToBuy, setQuantityToBuy] = useState(1);
  const [numberOfImages, setNumberOfImages] = useState(2);

  const location = useLocation();
  const data = location.state;
  // data.quantityToBuy = quantityToBuy;
  // console.log("esta es la buena ", data);

  const nextSlide = () => {
    if (slideIndex !== numberOfImages - 1) {
      setSlideIndex(slideIndex + 1);
      //0 not is = 2-1 slidindex = 1
      // 1
      //1= 2-1 slideindex=0
    } else if (slideIndex === numberOfImages - 1) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(numberOfImages - 1);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  // const cartItems = useGetCartItems();
  // console.log("carrito", cartItems);

  // const validateProduct = () => {
  //   const exist = cartItems.includes(data.productId)
  //   console.log(data)
  //   console.log('pruebaaaaaaaaaaaaaaaa',exist)
  // }

  // validateProduct()

  return (
    <>
      <Nav />
      <MainContainer className="mainContainer">
        <Slider
          className="Slider"
          style={{ pictureStyle }}
          slideIndex={slideIndex}
          itemIndex={itemIndex}
          numberOfImages={numberOfImages}
          moveDot={moveDot}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        ></Slider>

        <DescriptionWrapper className="descriptionWrapper">
          <h2> {data.brand} </h2>
          <h5> {data.brandModel} </h5>
          <h6>
            COLOR : {data.color1} / {data.color2}
          </h6>

          <h5> PRICE : ${data.price}</h5>
          <Button className="addToCartBtn" onClick={() => addToCart(data)}>
            ADD TO CART
          </Button>
        </DescriptionWrapper>
      </MainContainer>
    </>
  );
};
