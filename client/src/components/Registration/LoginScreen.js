import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  width: 450px;
  height: 400px;
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

const Paragraph = styled.p`
  color: black;
  padding-top: 10px;
`;

const Form = styled.input`
  background-color: lightgrey;
  padding: 1rem;
  width: 350px;
  height: 10px;
  opacity: 0.7;
  border-radius: 5px;
`;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding: 20px;
  font-size: 15px;
`;

const NavLink = styled(Link)`
  color: black;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginScreen = () => {
  return (
    <Background>
      <Flex>
        <Title>Log in</Title>
        <Paragraph>Username:</Paragraph>
        <Form type="text" name="uname" required />
        <Paragraph>Password:</Paragraph>
        <Form type="text" name="uname" required />
        <DIV>
          <NavLink to="/Password">Forgot your password?</NavLink>
          <NavLink to="/RegisterScreen" color="black">
            Create Account
          </NavLink>
        </DIV>
        <ButtonWrapper>
          <Button>Log in</Button>
        </ButtonWrapper>
      </Flex>
    </Background>
  );
};
