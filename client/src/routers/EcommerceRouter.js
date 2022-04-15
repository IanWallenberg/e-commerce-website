import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CheckoutCart } from "../components/Checkout/CartPage/CheckoutCart";
import { CheckoutDelivery } from "../components/Checkout/DeliveryPage/CheckoutDelivery";
import { CheckoutPayment } from "../components/Checkout/PaymentPage/CheckoutPayment";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { LoginScreen } from "../components/Registration/LoginScreen";

export const EcommerceRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/checkout-Cart" element={<CheckoutCart />} />
        <Route path="/checkout-Delivery" element={<CheckoutDelivery />} />
        <Route path="/checkout-Payment" element={<CheckoutPayment />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};


