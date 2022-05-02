// import React from "react";
// import styled from "styled-components";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import Image from "../Categories/Img/logo.png";
// import ProfileIcon from "@mui/icons-material/PermIdentity";
// import { Link } from "react-router-dom";

// const Container = styled.div`
//   height: 70px;
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   z-index: 10;
// `;

// const Left = styled.div`
//   width: 40%;
//   display: flex;
//   align-items: center;
//   flex: 1;
// `;

// const Logo = styled.div`
//   width: 100px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-items: center;
//   align-items: center;
//   z-index: 10;
//   padding-top: 30px;
// `;
// const Center = styled.div`
//   flex: 2;
//   text-align: center;
// `;
// const Menu = styled.div`
//   display: flex;
//   list-style: none;
//   z-index: 10;
// `;

// const MenuItem = styled.div`
//   margin-right: 30px;
//   font-size: 16px;
//   font-weight: bold;
//   color: #323232;
//   z-index: 10;
// `;

// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const Hamburger = styled.div`
//   width: 30px;
//   height: 30px;
//   display: none;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   cursor: pointer;
// `

// const NavBarLanding = () => {
//   return (
     
     
//     <Container>
//       <Wrapper>
//         <Left>
//           <Logo>
//             <img src={Image} className="w-100" alt="logo"></img>
//           </Logo>
//         </Left>
//         <Center>
//           <Menu>
//             <Link to="/categories" style={{ textDecoration: "none" }}>
//               <MenuItem>Products</MenuItem>
//             </Link>
//             <MenuItem>Support</MenuItem>
//             <MenuItem>About Us</MenuItem>
//           </Menu>
//         </Center>
//         <Right>
//           <Link to="/">
//             {" "}
//             <MenuItem>
//               {" "}
//               <SearchIcon />{" "}
//             </MenuItem>
//           </Link>
//           <Link to="/accountpage">
//             {" "}
//             <MenuItem>
//               {" "}
//               <ProfileIcon />{" "}
//             </MenuItem>
//           </Link>
//           <Link to="/checkout-cart">
//             <MenuItem>
//               {" "}
//               <ShoppingCartOutlinedIcon />
//             </MenuItem>
//           </Link>
//         </Right>
//       </Wrapper>
//     <Hamburger>
//       <div></div>
//       <div></div>
//       <div></div>
//       </Hamburger>
//     </Container>
//   );
// };

// export default NavBarLanding;



// const Navbar = ({click}) => {
//   // if clicked open up sidedrawer
//   }
 