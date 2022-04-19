import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PaymentIcon from '../Categories/Img/paymentIcon.png';
import logoIcon from '../Categories/Img/logo.png';


const Container= styled.div`
display: flex;
background-color: white;

@media only screen and (max-width:380px) {
  flex-direction: column; 
    
}

`

const Left = styled.div`
flex:1;
display: flex;
flex-direction:column;
padding: 20px;`

const Logo = styled.div`

`

const Description =styled.p`
margin: 0px 0px;
font-family: verdana;
@media only screen and (max-width:380px) {
 font-size:12px;
    
}
`

const SocialContainer =styled.div`
display: flex;
margin-top: 10px;
font-family:verdana;`

const SocialIcon =styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;

@media only screen and (max-width:380px) {
  width: 30px;
  height: 30px;
    
}

`

const Center= styled.div`
flex:1;
padding: 20px;

@media only screen and (max-width:380px) {
   display: none; 
    
}
`

const Title =styled.h3`
margin-bottom: 10px;
margin-top: 20px;
font-family: Verdana;
font-size: 20px;

@media only screen and (max-width:380px) {
  font-size: 16px;
    
}

`

const List = styled.ul`
margin: 0;
padding: 0;
list-style:  none;
display:flex;
flex-wrap:wrap;
font-family:verdana;
margin-top: 20px;`


const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`


const Right= styled.div`
  flex: 1;
  padding: 20px;
  
  @media only screen and (max-width:380px) {
   background-color: #fff3f1 ; 
    
}`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-family:verdana;
  margin-top: 20px;
  font-size: 16px;

  @media only screen and (max-width:380px) {
    font-size: 14px ; 
    margin:15px 0px;
}
`

const Payment = styled.image`
width: 50%;
@media only screen and (max-width:380px) {
    width:80px; 
    
}

`

const Footer = () => {
  return ( 
    
    <Container>
      <Left> 
        <Logo> <img src ={logoIcon} style={{width:"60px"}} alt ="logo"></img> </Logo>
        <Description> Earphones in. Volume up. Ignore the world. </Description>
        <Title> Follow Us </Title>
        <SocialContainer> 
          <SocialIcon color="3b5999">
            <FacebookIcon/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon/>
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon/>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title> Products</Title>
        <List>
          <ListItem>Show All</ListItem>
          <ListItem>True Wireless</ListItem>
          <ListItem>On Ear</ListItem>
          <ListItem>In Ear</ListItem>
          <ListItem>Audiophile</ListItem>
          <ListItem>In-Ear Wired Earphones</ListItem>
          <ListItem>Noise-Cancelling Headphones</ListItem>
          <ListItem>Closed-back Headphones</ListItem>
        </List>
      </Center>


      <Right>
      <Title>Contact</Title>
        <ContactItem> <LocationOnIcon style={{marginRight:"10px"}}/>
           Fidelio, Virkesvägen, 120 30 Stockholm.
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> 08-744 30 50
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> contact@fidelio.com
        </ContactItem>
        <Payment><img src={PaymentIcon} alt="payment icon"></img></Payment>
        
      </Right>
      
    </Container>
   );
};
 
export default Footer;