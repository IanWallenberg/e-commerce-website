import React from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import Footer from '../ui/Footer';



const Container = styled.div`
height:60vh;
background-color: #F8EDEB;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;


`
const Title = styled.h1`
font-style: 70px;
margin-bottom: 20px;
font-weight: 500;
margin-bottom: 20px;
font-family: Verdana;

`
const Description = styled.div`
font-size: 16px;
font-family: Verdana;
margin-bottom: 20px;`

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
`

const Input =styled.input`
border: none;
flex: 8;
padding-left: 20px;
`

const Button =styled.button`
flex:.5;
border:none;
background-color: #FEC5BB;`


 const Newsletter = () => {
  return (
    <div>
      <Container>
        <Title> JOIN THE FIDELIO SOUND CLUB! </Title>
          <Description> Get timely updates from your favorite products. </Description>
          <InputContainer>
            <Input placeholder = "Your Email"></Input>
            <Button> <SendIcon/> </Button>
          </InputContainer>
      </Container>
      <Footer/>
    </div>
  )
}

export default Newsletter;