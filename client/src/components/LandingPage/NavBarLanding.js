import React from 'react'
import styled from "styled-components";

const Container = styled.div`
height: 70px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`

const Left = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: space-around;
`

const Logo = styled.h1`
font-weight: bold;
text-decoration: underline crimson;
`
const Menu = styled.ul`
display: flex;
list-style: none;
`

const MenuItem = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;
`

const FlexDiv = styled.div`
display: flex;
align-items: stretch;
`

const LogoImage = styled.p`
border: 1px solid white;
padding: 10px 10px;
background-color: black;
color: white;
font-weight: bold;
`

const NavBarLanding = () => {
  return (
    <Container>
        <Wrapper>
        <Logo>Icon</Logo>
        <Left>
        <Menu>
<MenuItem>Product</MenuItem>
<MenuItem>Support</MenuItem>
<MenuItem>About Us</MenuItem>
        </Menu>
        </Left>
        <FlexDiv>
        <LogoImage>Cart</LogoImage>
        <LogoImage>Prof</LogoImage>
        <LogoImage>Sear</LogoImage>
        </FlexDiv>
        </Wrapper>
        </Container>
  )
}

export default NavBarLanding