import React from 'react';
import styled from 'styled-components';
import Headphones from "../Categories/Img/HP2.png";
import { Link } from 'react-router-dom';

const Container = styled.div`
height: calc( 100vh - 50px);
background-color: white;
display: flex;
padding: 20px;
`
const Left = styled.div`
width: 60%;
background-color: white;
color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
font-size: 40px;
width: 60%;
margin-bottom: 80px;
z-index: 10;
`
const Right = styled.div`
width: 40%;
background-color: white;
color: black;`

const Desc = styled.p`
width: 60%;
font-size: 20px;
margin-top: 20px;
z-index: 20;
`

const Info = styled.div`
width: 60%;
display: flex;
z-index: 11;
`
const Button = styled.button`
background-color:  #fff;
width: 150px;
border: none;
font-size:14px;
font-weight: bold;
margin-left:30px;
color: black;
padding:10px 20px;
border-radius: 20px;
margin-top: 20px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease 0s;

@media only screen and (max-width:380px) {  
   font-size:10px;
   padding:10px;
   opacity: 1;
}

&:hover {
  background-color: #FEC5BB;
  box-shadow: 0px 15px 20px rgba(254, 197, 187, 0.4);
  transition: all 0.5s ease;
  
}
`

const Image = styled.img`
width: 120%;
height:80%;
margin-top: 50px;
padding-right: 100px;
z-index: 100;
position: relative;
`

const MainPage = () => {
  return (
    <Container>
        <Left><Title>FIND YOUR SOUND</Title>
        <Desc>Check out the latest headphones from the best 
          brands like Sony, Senheisser, Beats and many more 
          - in one place! Only the best for the best.</Desc>
          <Info><Link to = "/categories"><Button>See Headphones</Button></Link></Info></Left>
    <Right><Image src={Headphones}/></Right>
    </Container>
  )
}

export default MainPage