import React from "react";
import "./styles/checkoutCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CheckoutCart = () => {
  return (
    <>
    {/* THE NAVBAR */}
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
      {/* CART ICON */}
      <div className="container text-center">
        <FontAwesomeIcon icon={faCartShopping} className="fs-1 p-5" />
      </div>
      {/* CART AND CART PRODUCT */}
      <div className="container d-flex">
        <div className="row card shadow-lg border rounded ">
          <div className="">
            <img
              className=" img-thumbnail bg-dark w-25 ms-5 mt-4 col-3"
              src="./assets/Checkout Assets/Done.png"
              alt="Card cap"
            />
            <p className="me-5 mt-4 col-3">Sony XM3</p>
            <p className="me-5 mt-4 col-3">Sony XM3</p>
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
      {/* REEDEM CODE */}
      <div className="container p-5 d-flex flex-nowrap justify-content-center">
        <h3 id="Bottom_Title" className="px-5 align-text-bottom">
          REEDEM CODE:
        </h3>
        <input className="w-50 rounded"></input>
        <button id="Button_Ok" className="btn mx-2 fs-5">
          OK
        </button>
      </div>
      {/* TOTAL PRICES */}
      <div className="container w-100">
        <div className="row">
        <h3 className="col-6" id="bottom_Titles_Prices">TOTAL AMOUNT OF PRODUCTS:</h3>
        <h3 className="col-6 text-end pe-3" id="bottom_Titles_Prices">3</h3>
        <hr className="w-100 bg-dark"/>
        <h3 className="col-6" id="bottom_Titles_Prices">TOTAL PRICE:</h3>
        <h3 className="col-6 text-end pe-3" id="bottom_Titles_Prices">3</h3>
        <hr className="w-100"/>
        <h3 className="col-6" id="bottom_Titles_Prices">SAVINGS:</h3>
        <h3 className="col-6 text-end pe-3" id="bottom_Titles_Prices">3</h3>
        <hr className="w-100"/>
        </div>  
        {/* FINAL BUTTON */} 
      <div className="container d-flex justify-content-center mt-5">
        <button id="proceed__Button" className="text-center btn btn-dark btn-lg shadow-sm w-25 border-white">PROCEED</button>
      </div>
      </div>
    </>
  );
};
