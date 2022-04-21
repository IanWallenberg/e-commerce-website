import React from 'react'
import styled from 'styled-components';
import Nav from '../ui/Nav';
import Footer from '../ui/Footer';

//import React, { useState } from "react";
// import Slider from "./Slider";
// import dataSlider from "../../OnEarHeadphones.json";
import Sonyw4 from './Images/sonyw4.png';

const Container = styled.div`
    width: 100vw;
    background-color: #F8EDEB;
    overflow: visible;
    grid-template-columns: 50% 50%;
    gap: 20px; `

    const GridContainer = styled.div`
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(2, 50%);
    justify-content: center;
    align-items: center;
    height:auto;
    padding: 20px;
    
    `

  const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  height: 100vh;
  width: 100%;
  padding: 6%;
  background-color: #f8edeb;
  font-size: 12px;
  padding : 30px
`

const Button = styled.button`
  background-color: #404040;
  color: white;
  margin-top: 5%;
  width: 10rem;
  height: 3rem;
  font-size: 900;
`;
    const SingleItemImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: right;
    background-color: white;
    position: relative;
    overflow: hidden;
    width:100%;
    height:100%;
    margin: 20px;

    `

export const SingleDescription2 = () => {
  return (
  
  <Container>
    <Nav></Nav>

    <GridContainer>
       <SingleItemImage className="SingleItemImage">
       <h2> </h2>
       <img src={Sonyw4} /> 
      </SingleItemImage>

    <DescriptionWrapper className="descriptionWrapper">
          <h2>Sony WH-1000XM4 </h2>
          <h6> Wireless Over-ear</h6>
          <p>
            (BLUETOOTH® COMMUNICATION) 20 Hz–20,000 Hz (44.1 kHz Sampling)/20
            Hz–40,000 Hz (LDAC 96 kHz Sampling, 990 kbps)
          </p>

          <h6>FREQUENCY RESPONSE</h6>
          <p> 4 Hz-40,000 Hz VOLUME CONTROL Touch Sensor</p>

          <h6>HEADPHONE TYPE</h6>
          <p> Closed, dynamic</p>

          <h3>3400.00 SEK (VAT)</h3>
          <Button className="addToCartBtn">ADD TO CART</Button>
        </DescriptionWrapper>

        </GridContainer>

    <Footer></Footer>
  </Container>

  )
}
