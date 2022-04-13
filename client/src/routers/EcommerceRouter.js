import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CheckoutPage } from "../components/Checkout/CartPage/CheckoutPageCart";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { LoginScreen } from "../components/Registration/LoginScreen";

export const EcommerceRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};
