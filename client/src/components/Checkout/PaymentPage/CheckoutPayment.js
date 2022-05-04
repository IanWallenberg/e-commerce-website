import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCardAlt } from "@fortawesome/free-solid-svg-icons";
import "./styles/checkoutPayment.css";
import Nav from "../../ui/Nav";

export const CheckoutPayment = () => {
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

          <span id="dot__Done" className="mx-2">
            <img
              id="done__Image"
              src="./assets/Checkout Assets/Done.png"
              alt="Done"
              className="w-100"
            />
          </span>
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
        <FontAwesomeIcon icon={faCreditCardAlt} className="fs-1 p-5" />
      </div>
      <div className="container border rounded shadow-lg d-flex justify-content-around">
        <div className="container">
          <h3 className="fw-bold p-3"> Order Summary </h3>
          <div className="card shadow">
            <h5 className="fw-bold"> DETAILS</h5>
            <img
              className="m-3 bg-dark w-25"
              src="./assets/Checkout Assets/Done.png"
              alt="Card cap"
            />
            <p id="name__product" className="mt-3">
              Sony -wh1000xm4 <br /> 3000 kr <br /> QTY: 30
            </p>
            <hr />
          </div>
        </div>
        <div className="container">
          <h3 className="fw-bold p-3"> Payment Details </h3>
          <div className="container">
            <p>Card holders name</p>
            <input type="text" className="form-control form-control-lg mb-3"></input>
            <p>Card Number</p>
            <input type="number" placeholder="1111 2222 3333 4444" className="form-control form-control-lg mb-3" ></input>
            <div className="contaniner d-flex ">
              <p className="col-5 me-5">Expiring</p>
              <p className="ms-5">CVC CODE</p>

            </div>
            <div className="d-flex">
              <input typer="number" placeholder="MM/YY" className="form-control form-control-lg w-50 me-5"></input>
              <input typer="number" placeholder="123" className="form-control form-control-lg w-50 ms-5"></input>
            </div>
            <div className="text-center">
            <button
              id="proceed__Button"
              className="text-center btn btn-dark btn-lg shadow w-50 border-white my-5"
            >
              PROCEED
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
