import React from 'react'
import styled from 'styled-components'
import Headphones from "../LandingPage/Images/Blackheadphone.png"

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
font-size: 60px;
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
font-sixe: 20px;
margin-top: 20px;
z-index: 20;
`

const Info = styled.div`
width: 60%;
display: flex;
z-index: 11;
`

const Button = styled.button`
padding: 10px;
color: black;
background-color: pink;
border-radius: 10px;
z-index: 10;
`

const Image = styled.img`
width: 100%;
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
          <Info><Button>See Headphones</Button></Info></Left>
    <Right><Image src={Headphones}/></Right>
    </Container>
  )
}

export default MainPage