import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Header = styled.div`
background-image: url('./assets/products-header.png');
height: 30%;
`
const CardsContainer = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;

`

const BigTitle = styled.h1`
text-align: center;
font-size: 3rem;
padding: 30px 0;
`

const Button = styled.button`
font-size: 1.8rem;
background: none;
border: none;
cursor: pointer;
padding-left: 50px;

`

const getInEarProducts = async () => {
  const url = "http://localhost:5000/products/inear";
  const response = await fetch(url);
  const data = response.json();
  console.log(data)
}
getInEarProducts();



const InEarPage = () => {
  return (
    <div>
        <Header/>
        <BigTitle>IN EAR HEADPHONES</BigTitle>
        <Button>FILTER</Button>
        <CardsContainer>
            <Card/>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardsContainer>
    </div>
  )
}

export default InEarPage