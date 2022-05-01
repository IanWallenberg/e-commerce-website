// import styled from "styled-components";
// import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import Headphones from "../Categories/Img/EP2.jpg";

// const Container = styled.div`
// width: 100%;
// height: 100vh;
// display: flex;
// position:relative;
// overflow: hidden;`

// const Arrow = styled.div`
// width: 50px;
// height: 50px;
// background-color: #fff7f7;
// border-radius: 50%;
// display: flex;
// align-items: center;
// justify-content:center;
// position:absolute;
// top:0;
// bottom:0;
// margin:auto;
// left: ${props=> props.direction === "left" && "10px"};
// right: ${props=> props.direction === "right" && "10px"};
// cursor: pointer;
// opacity: 1;
// z-index:2;`

// const Wrapper = styled.div`
// height: 100%;
// background-color: yellow;
// display: flex;
// padding: 20px;
// transform: translateX(00vw);

// /* clip-path: polygon(0 0, 0% 100%, 100% 0); */

// `

// const Slide = styled.div`
// width:100vw;
// height:100vh;
// display: flex;
// align-items:center;
// background-color: blue;
// clip-path: polygon(73% 0, 100% 0%, 100% 100%, 0% 100%);
// position: relative;

// `

// const InfoContainer = styled.div`
// flex:1;
// padding: 50px;
// width: 60%;
// background-color: white;
// color: black;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// position: absolute;

// /* position: absolute;  */
// /* height:100%;
// width:100%; */
// /* top:0;
// left:0; */
// z-index: 100;
// background-color: pink;



// `
// const Title = styled.h1`
// font-size:40px;
// z-index: 10;
// width: 60%;
// margin-bottom: 40px;

// `

// const Description = styled.p`

// font-size: 20px;
// letter-spacing:3px;
// font-weight: 500;
// width: 60%;
// z-index: 10;
// `


// const Button = styled.button`
// width: 20%;
// z-index: 2;
// font-size:14px;
// background-color:  #fff;
// width: 180px;
// border: none;
// font-weight: bold;
// margin-left:-180px;
// color: #323232;
// padding:10px 20px;
// border-radius: 20px;
// margin-top: 20px;
// box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
// transition: all 0.3s ease 0s;
// cursor: pointer;

// &:hover {
//   background-color: #FEC5BB;
//   box-shadow: 0px 15px 20px rgba(254, 197, 187, 0.4);
//   transition: all 0.5s ease;
  
// }`


// const ImgContainer = styled.div`
// height:100%;
// flex:1;
// `

// const Image = styled.img`
// height: 80%;
// width: 100%;
// padding: 0px;
// margin-left:20px;`


// const Slider = ()=>{

//     const handleClick = (direction) =>{

//     }

//     return ( 
//         <Container>
//             <Arrow direction = "left" onClick = {handleClick("left")}>
//             <ArrowBackIosOutlinedIcon/> 
//             </Arrow>
//             <Wrapper>
//                 <Slide>
//                 <InfoContainer>
//                     <Title>FIND YOUR SOUND</Title> 
//                     <Description>
//                         Check out the latest headphones from the best 
//                         brands like Sony, Senheisser, Beats and many more 
//                         in one place! Only the best for the best.
//                     </Description>
//                     <Button> ALL HEADPHONES</Button>
//                 </InfoContainer>  
//                 <ImgContainer>  
//                 <Image src= {Headphones}></Image>
//                 </ImgContainer> 
//                 </Slide>
//                 <Slide>
//                 <InfoContainer>
//                     <Title>FIDELIO</Title> 
//                     <Description>
//                         Perfect Classic HeadPhones
//                     </Description>
//                     <Button> ALL HEADPHONES</Button>
//                 </InfoContainer>  
//                 <ImgContainer>  
//                 <Image src= {Headphones}></Image>
//                 </ImgContainer> 
//                 </Slide>
//                 <Slide>
//                 <InfoContainer>
//                     <Title>FIND YOUR SOUND</Title> 
//                     <Description>
//                         Check out the latest headphones from the best 
//                         brands like Sony, Senheisser, Beats and many more 
//                         in one place! Only the best for the best.
//                     </Description>
//                     <Button> ALL HEADPHONES</Button>
//                 </InfoContainer>  
//                 <ImgContainer>  
//                 <Image src= {Headphones}></Image>
//                 </ImgContainer> 
//                 </Slide>
                
//             </Wrapper> 
            
//             <Arrow direction = "right" onClick = {handleClick("left")}>
//             <ArrowForwardIosOutlinedIcon/> 
//             </Arrow>
//         </Container>
//     )
// }

// export default Slider;



import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from './Images/sliderItem';
import { useState } from 'react';



const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position:relative;
overflow: hidden;
`


const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index:2;`


const Wrapper = styled.div`
height:100%;
display:flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);
 `

const Slide = styled.div`
width:100vw;
height:100vh;
display: flex;
align-items:center;
background-color: #${props => props.bg};

`

const ImageContainer = styled.div`
height:100%;
/* flex:1; */
clip-path: polygon(21% 0%, 100% 0%, 100% 100%, 0% 100%);

`

const Image = styled.img`
height: 100%;`


const InfoContainer = styled.div`
flex:1;
padding: 50px;

`

const Title = styled.h1`
font-size:70px;`


const Description = styled.p`
margin: 50px  0px;
font-size: 20px;
letter-spacing:3px;
font-weight: 500;`


const Button = styled.button`
padding:10px;
cursor:pointer;
background-color:  #ebc5c5;
width: 250px;
border: none;
font-size:20px;
margin-left:30px;
color: black;
padding:10px 20px;
border-radius: 20px;
margin-top: -10px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease 0s;

@media only screen and (max-width:380px) {  
   font-size:10px;
   padding:10px;
   opacity: 1;
}

&:hover {
  background-color: #FFF;
  box-shadow: 0px 15px 20px rgba(254, 197, 187, 0.4);
  transition: all 0.5s ease;
  
}
`






const Slider = () => {
//USE STATE HOOK
const [slideIndex, setSlideIndex] = useState(0);


// CLICK ARROW EVENT

const   handleClick = (direction)=>{

    if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 :2 );
    } else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
    }
};

    return (  
        <Container>
            <Arrow direction="left" onClick={()=> {handleClick("left")}} >
            <ArrowBackIosOutlinedIcon/>         
            </Arrow >
            <Wrapper slideIndex ={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide bg={item.bg}>
                <InfoContainer>
                    <Title> {item.title} </Title>
                    <Description>{item.description}</Description>
                    <Button> SEE HEADPHONES </Button>
                </InfoContainer>
                <ImageContainer>
                    <Image src= {item.image}/>
                </ImageContainer>
                </Slide>
                ))}

           </Wrapper>
            <Arrow direction="right" onClick={()=> {handleClick("right")}}> <ArrowForwardIosOutlinedIcon/></Arrow>
        </Container>
    );
}
 
export default Slider;