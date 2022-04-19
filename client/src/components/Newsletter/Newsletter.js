import React from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import Footer from '../ui/Footer';



const Container = styled.div`
height:60vh;
background-color: #fcd5ce;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;

@media only screen and (max-width:380px) {
   width: 100%;
   
    
} 

`
const Title = styled.h1`
font-size: 50px;
margin-bottom: 20px;
font-weight: 500;
margin-bottom: 20px;
font-family: Verdana;
@media only screen and (max-width:380px) {
   text-align: center;
   font-size:30px;   
} 

`
const Description = styled.div`
font-size: 16px;
font-family: Verdana;
margin-bottom: 20px;

@media only screen and (max-width:380px) {
   text-align: center; 
    
} `

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;

@media only screen and (max-width:380px) {
   width: 80%;
   
    
} 
`

const Input =styled.input`
border: none;
flex: 8;
padding-left: 20px;
`

const Button =styled.button`
flex:.5;
border:none;
background-color: #f8edeb;

&:hover {
  background-color: #fae1dd;
  box-shadow: 0px 15px 20px rgba(254, 197, 187, 0.4);
  transition: all 0.5s ease;
  
}
`


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