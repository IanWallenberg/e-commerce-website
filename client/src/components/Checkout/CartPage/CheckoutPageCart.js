import React from "react";
import "./styles/checkoutCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CheckoutPage = () => {
  return (
    <>
      <div id="Main__container" className="container-fluid">
        <div className="container-sm flex-wrap d-flex justify-content-center align-items-center p-3">
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
          <div className="container-sm d-flex justify-content-center align-items-center mt-3 w-75">
            <div className="row w-75">
              <h3 id="Title" className="text-center col-5">
                Cart
              </h3>

              <h3 id="Title" className="text-center col-2 ">
                Delivery
              </h3>

              <h3 id="Title" className="text-center col-5">
                Payment
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container fluid text-center">
        <FontAwesomeIcon icon={faCartShopping} className="fs-1 p-5" />
      </div>
      <div className="container"></div>
    </>
  );
};
