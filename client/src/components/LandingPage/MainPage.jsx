import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: calc( 100vh - 50px);
background-color: #F8EDEB;
display: flex;
padding: 20px;
`
const Left = styled.div`
width: 60%;
background-color: #F8EDEB;
color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.div`
font-size: 60px;
width: 60%;

`
const Right = styled.div`
width: 40%;
background-color: #F8EDEB;
color: black;
`

const Desc = styled.p`
width: 60%;
font-sixe: 20px;
margin-top: 20px;
`

const Info = styled.div`
width: 60%;
display: flex;
`

const Button = styled.button`
padding: 10px;
color: black;
background-color: pink;
border-radius: 10px;
`


const MainPage = () => {
  return (
    <Container>
        <Left><Title>FIND YOUR SOUND</Title>
        <Desc>Check out the latest headphones from the best 
          brands like Sony, Senheisser, Beats and many more 
          - in one place! Only the best for the best.</Desc>
          <Info><Button>See Headphones</Button></Info></Left>
    <Right>Right</Right>
    </Container>
  )
}

export default MainPage