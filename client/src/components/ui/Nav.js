import styled from "styled-components";
import React from "react";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ProfileIcon from "@mui/icons-material/PermIdentity";
import Image from "../Categories/Img/logo.png";
import { Link } from "react-router-dom";

// const Container = styled.div`
//   width: 100%;
//   height: 10vh;
//   background-color: #f8edeb;
//   justify-items: space-around;
// `;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8edeb;
  @media only screen and (max-width: 380px) {
    padding: 10px 10px;
  }
`;

const Left = styled.div``;

const Center = styled.div`
  text-align: center;
`;

const Menu = styled.div`
  display: flex;
  list-style: none;
  z-index: 10;
`;

const Logo = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-items: center;
`;

const MenuItem = styled.div`
  font-size: 1.05rem;
  cursor: pointer;
  margin-left: 25px;
  color: black;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Nav = () => {
  return (
    <Wrapper>
      <Left>
        <Link to="/">
          <Logo>
            <img src={Image} className="w-100" alt="logo"></img>
          </Logo>
        </Link>
      </Left>
      <Center>
        <Menu>
          <Link
            to="/categories"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <MenuItem>Products</MenuItem>
          </Link>
          <MenuItem>Support</MenuItem>
          <MenuItem>About Us</MenuItem>
        </Menu>
      </Center>
      <Right><Link to="/" style={{ textDecoration: "none" }}>
        <MenuItem>
        
          <SearchIcon />
        </MenuItem></Link>
        <Link to="/accountpage" style={{ textDecoration: "none" }}>
        <MenuItem>
          <ProfileIcon />
        </MenuItem>
        </Link>

        <Link to="/cart" style={{ textDecoration: "none" }}>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </MenuItem>
        </Link>
        
      </Right>
    </Wrapper>
  );
};

export default Nav;
