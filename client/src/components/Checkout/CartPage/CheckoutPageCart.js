import React from "react";
import "./styles/checkoutCart.css";

export const CheckoutPage = () => {
  return (
    <>
      <div
        id="Main__container"
        className="container-fluid bg-sucess d-flex justify-content-center align-items-center p-5"
      >
        <h3 className="text-center mx-2">Cart</h3>
        <h3 className="text-center mx-2">Delivery</h3>
        <h3 className="text-center mx-2">Payment</h3>
      </div>
      <div className="container fluid text-center">
      <i className="fa-solid fa-cart-shopping"/>
      </div>
    </>
  );
};
