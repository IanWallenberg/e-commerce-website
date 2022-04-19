import React from 'react'
import styled from 'styled-components';
import Nav from '../ui/Nav';
import Footer from '../ui/Footer';
//import Sonyw4 from './Imgaes/sonyw4.png';

const Container = styled.div`
    width: 100vw;
    background-color: #F8EDEB; `

const Grid = styled.div`
    overflow: visible;
    grid-template-columns: 50% 50%;
    gap: 30px;
`

    const Div1 = styled.div`
    width:50vw;
    height:45vh;
    background-repeat:no-repeat;
    background-size: cover;
    background-position: right;
    `

    const Div2 = styled.div`
    width:50vw;
    height:45vh;
    background-repeat:no-repeat;
    background-size: cover;
    background-position: left;
    position = left;
    
    `
    

export const SingleDescription = () => {
  return (<Container>
    <Nav></Nav>

    <Grid>
    <Div1>
   <h4> Image</h4>
    </Div1>

    <Div2>
    <h4>WH-1000XM4 </h4>
    <p> Description</p>
    </Div2>
    </Grid>

    <Footer></Footer>
  </Container>

  )
}
