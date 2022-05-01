import React from 'react'
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Image from '../Categories/Img/logo.png';
import { Badge } from "@mui/material";
import ProfileIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom';


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
flex: 1;

`

const Logo = styled.div`
width: 100px;
height: 40px;
display: flex;
align-items:center;
justify-items: center;
align-items:center;
z-index: 10; 
padding-top:40px;
`
const Center = styled.div`
  flex: 2;
  text-align: center;
`
const Menu = styled.div`
display: flex;
list-style: none;
z-index: 10;
`

const MenuItem = styled.div`
margin-right: 30px;
font-size: 16px;
font-weight: bold;
color: #323232;
z-index: 10; 
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`  

const LogoImage = styled.p`
border: 1px solid white;
padding: 10px 10px;
background-color: none;
color: black;
font-weight: bold;
z-index: 10;

`
   

const NavBarLanding = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
        <Logo >
           <img src = {Image} className="w-100"  alt ="logo"></img>
         </Logo>
        </Left>
        <Center>
        <Menu>
          <MenuItem>Product</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>About Us</MenuItem>
        </Menu>
        </Center>
        <Right>
           <MenuItem> <SearchIcon/> </MenuItem>
           <MenuItem> <ProfileIcon/> </MenuItem>
           <MenuItem> 
           <ShoppingCartOutlinedIcon  />
           </MenuItem>
                
        </Right>

        
        <Link to = "/"><LogoImage>  <SearchIcon/>  </LogoImage></Link>
      
        <Link to = "/accountpage"><LogoImage><ProfileIcon/> </LogoImage></Link>
        
        <Link to = "/checkout-cart"><LogoImage><Badge>
                        <ShoppingCartOutlinedIcon  />
                        </Badge></LogoImage></Link>
    
        </Wrapper>
        </Container>
        
  )
}

export default NavBarLanding