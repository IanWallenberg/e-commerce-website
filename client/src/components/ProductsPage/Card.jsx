import React from "react";
import './Card.css';

const Card = () => {
  return (
        <div className="card">
            <div className="colors">
                <div className="color red"></div>
                <div className="color blue"></div>
                <div className="color black"></div>
            </div>
            <img src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_81357932/fee_786_587_png/JBL-TUNE-660-NC-ON-EAR---Svart" alt="Product" className="product-img" />
            <div className="product-info">
            <h3 className="title">JBL 2022</h3>
            <div className="divider"></div>
            <h3 className="thin">SONY</h3>
            <h3 className="price">2999 KR</h3>
            </div>

        </div>
  )
}

export default Card