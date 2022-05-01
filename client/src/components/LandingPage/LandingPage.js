import React from 'react'
import styled from "styled-components";
import NavBarLanding from './NavBarLanding';
// import MainPage from './MainPage';
import Slider from './Slider';

const Container = styled.div`
height: 100vh;
overflow: hidden;
background-color: white;
`

const Shape = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
clip-path: polygon(73% 0%, 55% 100%, 0% 100%, 0% 0%);
z-index: 1;
background-color: #F8EDEB;
`

export const LandingPage = () => {

  const getInEarProducts = async () => {
    const url = "http://localhost:5000/products/inear";
    const response = await fetch(url);
    const data = response.json();
    console.log(data)
}
  getInEarProducts();
  return (
    <Container>
    <NavBarLanding/>
    {/* <MainPage/> */}
    <Slider/>
    {/* <Shape/> */}
    </Container>
  )
}
