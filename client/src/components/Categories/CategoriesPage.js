import React from 'react';
import styled from 'styled-components';
import Nav from '../ui/Nav';
import OnEar from './Img/man-onear.jpg';
import InEar from './Img/inear.jpg';
import OnEarOverLay from './Img/HP3a.png';
import InEarOverlay from './Img/EP3.png';
import Newsletter from '../Newsletter/Newsletter';

// Components for the page 

const Container = styled.div`
width: 100vw;
background-color: #F8EDEB;
`
const CategoriesOnEar = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
justify-items:center;`

const Div1 = styled.div`
width:50vw;
height:45vh;
background-image: url(${OnEar});
background-repeat:no-repeat;
background-size: cover;
background-position: right;

`

const Div2 = styled.div`
background-color: #F8EDEB;
width:50vw;
height:45vh;
display:flex;
justify-content: space-between;
align-items: center;
justify-items: center;
background-image: url(${OnEarOverLay});
background-repeat: no-repeat;
background-size: 400px;
background-position: right;
opacity: .5;

 `

const DivText = styled.div`
width: 100%;
height:20px;
margin-top:-200px;

`
const DivH1= styled.h1`
color: #FEC5BB;
margin-left:30px;
font-family:'verdana';
font-size: 50px;
font-weight:800;
z-index:2; `

const DivP= styled.p`
color: black;
font-family: verdana;
font-size:16px;
margin-left:30px;
`

const Button = styled.button`
background-color:  #FEC5BB;
width: 150px;
border: none;
font-size:14px;
font-weight: bold;
margin-left:30px;
color: black;
padding:10px 20px;
border-radius: 20px;
margin-top: -10px;

&:hover {
  background-color: #CEB2B2;
  transition: all 0.5s ease;
  
}
`


const CategoriesInEar = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
justify-items:center;`

const Div3 = styled.div`
background-color: #F8EDEB;
width:50vw;
height:45vh;
display:flex;
justify-content: space-between;
align-items: center;
justify-items: center;
background-image: url(${InEarOverlay});
background-repeat: no-repeat;
background-size: 300px;
background-position: right;
opacity: .5; `

const Div4 = styled.div`
width:50vw;
height:45vh;
background-image: url(${InEar});
background-repeat:no-repeat;
background-size: cover;
background-position: right ;

`


 const FooterContainer = styled.div`
 `

export const CategoriesPage = () => {
  return (
    <Container>
      <Nav/>
      <CategoriesOnEar>
       <Div1> </Div1>
       <Div2>
         <DivText>
           <DivH1>ON EAR</DivH1>
          <DivP> WH-1000XM4
JUST MUSIC. NOTHING ELSE.
It just you and the music when using the WH-1000XM4 headphones. Try the easy way to less noise and cleaner sound, where smart technology automatically makes the experience more personal. </DivP>
         <Button> SEE ALL </Button>
         </DivText> 
       </Div2>
      </CategoriesOnEar>
      <CategoriesInEar>
        <Div3>
        <DivText>
           <DivH1>IN EAR</DivH1>
          <DivP> WH-1000XM4
JUST MUSIC. NOTHING ELSE.
It just you and the music when using the WH-1000XM4 headphones. Try the easy way to less noise and cleaner sound, where smart technology automatically makes the experience more personal. </DivP>
         <Button> SEE ALL </Button>
         </DivText> 
        </Div3>
        <Div4></Div4>
      </CategoriesInEar> 
      <FooterContainer>
       <Newsletter/>  
      
      </FooterContainer>
       
    </Container>   
   
    
  )
}
