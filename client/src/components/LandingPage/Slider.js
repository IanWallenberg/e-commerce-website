import styled from "styled-components";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { sliderItems } from "./Images/sliderItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  /* flex:1; */
  clip-path: polygon(21% 0%, 100% 0%, 100% 100%, 0% 100%);
  @media only screen and (max-width: 380px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  @media only screen and (max-width: 380px) {
    background-image: url("/assets/HP3a.png");
    background-size: cover;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  @media only screen and (max-width: 380px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
  @media only screen and (max-width: 380px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: #ebc5c5;
  width: 250px;
  border: none;
  font-size: 20px;
  margin-left: 30px;
  color: black;
  padding: 10px 20px;
  border-radius: 20px;
  margin-top: -10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  @media only screen and (max-width: 380px) {
    font-size: 16px;
    padding: 10px;
    height: 40px;
    width: 200px;
  }

  &:hover {
    background-color: #fff;
    box-shadow: 0px 15px 20px rgba(254, 197, 187, 0.4);
    transition: all 0.5s ease;
  }
`;

const Slider = () => {
  //USE STATE HOOK
  const [slideIndex, setSlideIndex] = useState(0);

  // CLICK ARROW EVENT

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left");
        }}
      >
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <InfoContainer>
              <Title> {item.title} </Title>
              <Description>{item.description}</Description>
              <Link to="/categories">
                <Button> SEE HEADPHONES </Button>
              </Link>
            </InfoContainer>
            <ImageContainer>
              <Image src={item.image} />
            </ImageContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right");
        }}
      >
        {" "}
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
