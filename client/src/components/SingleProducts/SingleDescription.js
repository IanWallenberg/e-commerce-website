import React,{useState} from "react";
import styled from "styled-components";
// import OnEar from "../Categories/Img/HP2.jpg";
import Nav from "../ui/Nav";
import Slider from "./Slider";


const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  ${"" /* border: 1px red solid; */}
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 90%;
  ${"" /* border: 5px yellow solid; */}
`;

// const Picture = styled.img`
//   width: 90%;
//   object-fit: cover;
//    border: 5px orange solid;
// `;

const pictureStyle = {
  width: "90%",
  objectFit: "cover",
  border: "5px orange solid"
};

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  ${"" /* border: 5px blue solid;  */}
  height: 95vh;
  width: 50%;
  padding: 6%;
  background-color: #f8edeb;
`;

const Button = styled.button`
  background-color: #404040;
  color: white;
  margin-top: 5%;
  width: 10rem;
  height: 3rem;
  font-size: 900;
`;

export const SingleDescription = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [itemIndex, setItemIndex] = useState(4)
  const [numberOfImages, setNumberOfImages] = useState(2)

  const nextSlide = () => {
    if(slideIndex !== numberOfImages - 1){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === numberOfImages - 1){
        setSlideIndex(0)
    }
}

const prevSlide = () => {
    if(slideIndex !== 0){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 0){
        setSlideIndex(numberOfImages - 1)
    }
}

const moveDot = index => {
    setSlideIndex(index)
}
  return (
    <>
      <Nav />

      <MainContainer>
        <PictureWrapper>
          <Slider style={{pictureStyle}} slideIndex={slideIndex} itemIndex={itemIndex} numberOfImages={numberOfImages} moveDot ={moveDot} nextSlide={nextSlide} prevSlide={prevSlide}></Slider>
        </PictureWrapper>

        <DescriptionWrapper>
          <h3>Bose quite comfort</h3>
          <h6> FREQUENCY RESh6ONSE </h6>
          <p>
            (BLUETOOTH® COMMUNICATION) 20 Hz–20,000 Hz (44.1 kHz Sampling)/20
            Hz–40,000 Hz (LDAC 96 kHz Sampling, 990 kbps)
          </p>

          <h6>FREQUENCY RESPONSE</h6>
          <p> 4 Hz-40,000 Hz VOLUME CONTROL Touch Sensor</p>

          <h6>HEADPHONE TYPE</h6>
          <p> Closed, dynamic</p>

          <h3>2800.00 SEK (VAT)</h3>
          <Button>ADD TO CART</Button>
        </DescriptionWrapper>
      </MainContainer>
    </>
  );
};
