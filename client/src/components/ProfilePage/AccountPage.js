import React from "react";
import styled from "styled-components";

const Background = styled.html`
  background-color: #f8edeb;
  min-height: 100vh;
  min-width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Flex = styled.div`
// display: flex;
// flex-direction: row;
background-color: white;
  // justify-content: center;
  // align-items: center;
  padding: 50px;
  width: 500px;
  height 550px;
`;

// const Box = styled.div`
//   color: black;
//   width: 200px;
//   height: 200px;
//   background-color: orange;
//   border: black 1px solid;;
//   `

const Title = styled.h1`
  font-size: 2em;
  color: black;
  // text-align: center;
`;

const Header = styled.h2`
  font-size: 1.5em;
  color: black;
  padding-top: 10px;
`;

const Paragraph = styled.p`
  color: black;
`;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  //text-decoration: none;
  padding: 20px 0px;
  //font-size: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  //padding-top: 50px;
  padding-left: 120px;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  color: black;
  background-color: #ffe5d9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const AccountPage = () => {
  return (
    <Background>
      <Flex>
        <Title>Account</Title>
        <Paragraph>First name: Oliver</Paragraph>

        <Paragraph>Last name: Hegardt </Paragraph>

        <Paragraph>Email adress: oliver.hegardt@gmail.com</Paragraph>

        <Header>Shipping Adress:</Header>

        <Paragraph>Address: Bråvallavägen 15H</Paragraph>

        <Paragraph>City: Djursholm</Paragraph>

        <Paragraph>Country: Sweden</Paragraph>
        <Paragraph>Postal Code: 182 66</Paragraph>
        <Paragraph>Phone: 070-7721901</Paragraph>

        <DIV>
          <ButtonWrapper>
            <Button>Edit Account</Button>
          </ButtonWrapper>
        </DIV>
      </Flex>
    </Background>
  );
};
