import React from 'react'
import styled from "styled-components";
import { Badge } from "@mui/material";
import ProfileIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
// import Fidelio from "../LandingPage/LogoFidelio.png"

// console.log(Fidelio);

const Container = styled.div`
height: 70px;
`

const Fidelio = styled.img`
background-image: url(./LogoFidelio.png)
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 10;

`

const Left = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: space-around;
z-index: 10;

`

const Logo = styled.h1`
font-weight: bold;
text-decoration: underline crimson;
z-index: 10;
`
const Menu = styled.ul`
display: flex;
list-style: none;
z-index: 10;
`

const MenuItem = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;
z-index: 10;
`

const FlexDiv = styled.div`
display: flex;
align-items: stretch;
z-index: 10;

`

const LogoImage = styled.p`
border: 1px solid white;
padding: 10px 10px;
background-color: none;
color: black;
font-weight: bold;
z-index: 10;

`

// function Image() {
//     // Import result is the URL of your image
    

const NavBarLanding = () => {
  return (
    <Container>
        <Wrapper>
        <Logo>Fidelio
            {/* <Fidelio/> */}
            
            </Logo>
        <Left>
        <Menu>
<MenuItem>Product</MenuItem>
<MenuItem>Support</MenuItem>
<MenuItem>About Us</MenuItem>
        </Menu>
        </Left>
        <FlexDiv>
        <Link to = "/"><LogoImage>  <SearchIcon/>  </LogoImage></Link>
      
        <Link to = "/accountpage"><LogoImage><ProfileIcon/> </LogoImage></Link>
        
        <Link to = "/checkout-cart"><LogoImage><Badge>
                        <ShoppingCartOutlinedIcon  />
                        </Badge></LogoImage></Link>
        </FlexDiv>
        </Wrapper>
        {/* <Fidelio></Fidelio> */}
        </Container>
        
  )
}

export default NavBarLanding