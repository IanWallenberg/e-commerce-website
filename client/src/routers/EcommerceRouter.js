import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CheckoutCart } from "../components/Checkout/CartPage/CheckoutCart";
import { CheckoutDelivery } from "../components/Checkout/DeliveryPage/CheckoutDelivery";
import { CheckoutPayment } from "../components/Checkout/PaymentPage/CheckoutPayment";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { CategoriesPage } from "../components/Categories/CategoriesPage";
import { LoginScreen } from "../components/Registration/LoginScreen";
import { RegisterScreen } from "../components/Registration/RegisterScreen";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/ui/Footer";

export const EcommerceRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/checkout-Cart" element={<CheckoutCart />} />
        <Route path="/checkout-Delivery" element={<CheckoutDelivery />} />
        <Route path="/checkout-Payment" element={<CheckoutPayment />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories" element={<Newsletter />} />
        <Route path="/categories" element={<Footer />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </Router>
  );
};
