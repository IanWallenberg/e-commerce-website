import React from 'react'
import styled from "styled-components";
import NavBarLanding from './NavBarLanding';
import MainPage from './MainPage';

const Container = styled.div`
height: 100vh;
background-color: #F8EDEB;
`

export const LandingPage = () => {
  return (
    <Container>
    <NavBarLanding/>
    <MainPage/>
    </Container>
  )
}
