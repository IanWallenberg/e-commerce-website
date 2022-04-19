import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from '../../OnEarHeadphones.json'

export default function Slider({slideIndex, itemIndex, numberOfImages, moveDot, nextSlide, prevSlide}) {

  return (
      <div className="container-slider">
        <div className={"slide"}>
            <img 
            src={dataSlider[itemIndex]["image" + (slideIndex + 1).toString()]}
            alt={dataSlider[itemIndex].name}
            />
        </div>
      
          {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"}/> */}

          <div className="container-dots">
              {Array.from({length: numberOfImages}).map((item, index) => (
                <div 
                  key={index}
                  onClick={() => moveDot(index)}
                  className={slideIndex === index ? "dot active" : "dot"}
                  ></div>
              ))}
          </div>
      </div>
  )
}