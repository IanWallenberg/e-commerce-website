import styled from "styled-components";
import React from "react";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ProfileIcon from '@mui/icons-material/PermIdentity';
import Image from '../Categories/Img/logo.png';


const Container = styled.div`
width:100%;
height:10vh;
background-color: #F8EDEB;

`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items:center;
@media only screen and (max-width:380px) {
    padding: 10px 10px;
}

`

const Left = styled.div`
width:50%;
align-items:center;`


const Logo = styled.div`
width: 60px;
height: 40px;
display: flex;
align-items:center;
justify-items: center;
`;


const Right= styled.div`
display:flex; 
align-items:center; 
justify-content:flex-end;`

const MenuItem = styled.div`
font-size: 14px; 
cursor: pointer;
margin-left:25px;`


const Nav = () => {
    return ( 
        <Container> 
        <Wrapper>
            <Left>
                <Logo >
                    <img src = {Image} className="w-100"  alt ="logo"></img>
                </Logo>
                
            </Left>
            <Right> 
                    <MenuItem> <SearchIcon/> </MenuItem>
                    <MenuItem> <ProfileIcon/> </MenuItem>
                    <MenuItem> 
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon  />
                        </Badge>
                    </MenuItem>
                </Right>

        </Wrapper>
        </Container>
     );
}
 
export default Nav;