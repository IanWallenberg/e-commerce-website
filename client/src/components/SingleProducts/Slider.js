import React from "react";
import "./Slider.css";
import { useLocation } from "react-router-dom";

export default function Slider({ slideIndex, numberOfImages, moveDot }) {
  const location = useLocation();
  const data = location.state;
  console.log("data = ", data);
  return (
    <div className="container-slider">
      <div className="slide">
        <img src={data.image1[slideIndex]} alt={data.brand} />
      </div>
      <div className="container-dots">
        {Array.from({ length: numberOfImages }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={slideIndex === index ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
