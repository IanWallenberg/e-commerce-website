import React from "react";
import './Card.css';

const Card = (product) => {
  return (
        <div className="card">
            <div className="colors">
                <div className="color red"></div>
                <div className="color blue"></div>
                <div className="color black"></div>
            </div>
            <img src={product.image1} alt="Product" className="product-img" />
            <div className="product-info">
            <h3 className="title">{product.brandModel}</h3>
            <div className="divider"></div>
            <h3 className="thin">{product.brand}</h3>
            <h3 className="price">{product.price} KR</h3>
            </div>

        </div>
  )
}

export default Card