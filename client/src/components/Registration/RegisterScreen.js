import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../Registration/Register.css";

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

const Form = styled.input`
  background-color: lightgrey;
  padding: 1rem;
  width: 350px;
  height: 10px;
  opacity: 0.7;
  border-radius: 5px;
`;

const Paragraph = styled.p`
  color: black;
`;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding: 20px;
  font-size: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
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

export const RegisterScreen = () => {
  return (
    <Background>
      <Flex>
        <Title>Create Account</Title>
        <Paragraph>First name:</Paragraph>
        <Form type="text" name="uname" required />
        <Paragraph>Last name:</Paragraph>
        <Form type="text" name="uname" required />
        <Paragraph>Email adress:</Paragraph>
        <Form type="text" name="uname" required />
        <Paragraph>Password:</Paragraph>
        <Form type="text" name="uname" required />
        <DIV>
          <Paragraph>
            I accept the <Link to="/Terms">Terms</Link>
          </Paragraph>
          <input type="checkbox" checked="unchecked" />

          <ButtonWrapper>
            <Button>Create Account</Button>
          </ButtonWrapper>
        </DIV>
      </Flex>
    </Background>
  );
};
