import React from "react";
import Nav from "../../ui/Nav";
import Footer from "../../ui/Footer";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useGetCartItems } from "../../../hooks/useGetCartItems";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300px;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 400;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px, 10px;
  padding: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 100px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr``;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 70vh;
  width: 40vw;
  margin-left: 40px;
`;

const SummaryTitle = styled.h1`
  font-weight: 100;
  font-size: 30px;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 40%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 300;
`;

const CartPage = () => {
  const cartItems = useGetCartItems(); // Get the Cart Items
  console.log("cartItems", cartItems);

  return (
    <Container>
      <Nav />
      <Wrapper>
        <Title> YOUR CART</Title>
        <Top>
          <Link to="/categories">
            <TopButton>CONTINUE SHOPPING </TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Cart (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
        </Top>
        {cartItems.map(
          (cartItem) => (
            console.log("estae s la buena ", cartItem),
            (
              <Bottom key={cartItem.id}>
                <Info>
                  <Product>
                    <ProductDetail>
                      <Image src={cartItem.image1}></Image>
                      <Details>
                        <ProductName>
                          <b>Brand:</b> {cartItem.brand}
                        </ProductName>
                        <ProductName>
                          <b>Model:</b> {cartItem.brandModel}
                        </ProductName>

                        <ProductColor color={cartItem.color} />
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <AddIcon />
                        <ProductAmount>{cartItem.quantityToBuy}</ProductAmount>
                        <RemoveIcon />
                      </ProductAmountContainer>
                      <ProductPrice> {cartItem.price}KR</ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </Info>
              </Bottom>
            )
          )
        )}
      </Wrapper>
      <Summary>
        <SummaryTitle> ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
          <SummaryItemText> Vat </SummaryItemText>
          <SummaryItemPrice> 60 KR </SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Estimated Shipping</SummaryItemText>
          <SummaryItemPrice> 30 KR </SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Shipping Discount</SummaryItemText>
          <SummaryItemPrice> -30 KR </SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type="total">
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice> 1760 KR</SummaryItemPrice>
        </SummaryItem>
        <Link to="/checkoutcart">
          <Button>CHECKOUT NOW</Button>
        </Link>
      </Summary>
      <Footer />
    </Container>
  );
};

export default CartPage;
