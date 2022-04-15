import React from "react";
import "./styles/checkoutCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CheckoutCart = () => {
  return (
    <>
      <div id="Main__container" className="container-fluid">
        <div className="container-sm flex-nowrap d-flex justify-content-center align-items-center p-3">
          <span id="dot__Done" className="mx-2">
            <img
              id="done__Image"
              src="./assets/Checkout Assets/Done.png"
              alt="Done"
              className="w-100"
            />
          </span>
          <span id="with-line"></span>

          <span id="dot" className="mx-2"></span>
          <span id="with-line"></span>

          <span id="dot" className="mx-2"></span>
        </div>
        <div className="container-sm d-flex flex-nowrap justify-content-center align-items-center">
          <h3 id="Title" className="text-start pe-5">
            Cart
          </h3>

          <h3 id="Title" className="text-center ms-5 ps-5">
            Delivery
          </h3>

          <h3 id="Title" className="text-center ms-5">
            Payment
          </h3>
        </div>
      </div>
      <div className="container text-center">
        <FontAwesomeIcon icon={faCartShopping} className="fs-1 p-5" />
      </div>
      <div className="container d-flex">
        <div className="w-25 card shadow-lg border rounded">
          <div className="d-flex justify-content-between">
          <img
            className="bg-dark w-25 ms-5 mt-4"
            src="./assets/Checkout Assets/Done.png"
            alt="Card cap"
          />
          <p className="me-5 mt-4">Sony XM3</p>
          </div>
          <hr className="mx-5" />
          <div className="card-body  d-flex justify-content-around">
            <h5 className="card-title strong">Price</h5>
            <p className="card-text">300 KR</p>
          </div>
          <div className="card-body  d-flex justify-content-around">
            <h5 className="card-title strong">Price</h5>
            <p className="card-text">300 KR</p>
          </div>
        </div>
      </div>
    </>
  );
};
