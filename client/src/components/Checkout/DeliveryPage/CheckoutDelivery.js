import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import "./styles/checkoutDelivery.css";
import Nav from "../../ui/Nav";

export const CheckoutDelivery = () => {
  return (
    <>
    <Nav/>
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
        <FontAwesomeIcon icon={faTruck} className="fs-1 p-5" />
      </div>
      {/* CONTAINER BEGINS */}
      <div className="container border rounded shadow-lg mb-5">
        <h1 id="title__Delivery" className="text-center fw-light mt-3">
          DELIVERY
        </h1>
        <h5 className="text-center mt-4 fw-bold"> ENTER YOUR E-MAIL</h5>
        <div className="d-flex justify-content-center mb-3">
          <input
            className="form-control form-control-lg w-50 justify-content-center "
            placeholder=""
            type="email"
          ></input>
        </div>

        <div className="container d-flex flex-wrap justify-content-between">
          <div className="column col-5 me-5">
            <h5 id="title__Delivery " className="fw-bold mb-3">
              DETAILS
            </h5>
            <p>
              First Name<strong className="">*</strong>
            </p>
            <input className="form-control form-control-lg"></input>
            <p>
              Last Name<strong>*</strong>
            </p>
            <input className="form-control form-control-lg"></input>
            <p>Company Name</p>
            <input className="form-control form-control-lg"></input>
            <p>Phone Number</p>
            <input className="form-control form-control-lg"></input>
          </div>
          <div className="column col-5 ms-5">
            <h5 id="title__Delivery " className="fw-bold mb-3">
              SHIPPING
            </h5>
            <p>
              Street Adress<strong>*</strong>
            </p>
            <input className="form-control form-control-lg"></input>
            <p>
              City<strong>*</strong>
            </p>
            <input className="form-control form-control-lg"></input>
            <p>
              ZIP Code<strong>*</strong>
            </p>
            <input className="form-control form-control-lg"></input>
          </div>
          <div className="container d-flex justify-content-center mt-5">
            <button
              id="proceed__Button"
              className="text-center btn btn-dark btn-lg shadow w-25 border-white mb-5"
            >
              PROCEED
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
