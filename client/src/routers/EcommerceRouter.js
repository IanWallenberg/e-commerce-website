import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CheckoutPage } from "../components/Checkout/CartPage/CheckoutPageCart";
import { LandingPage } from "../components/LandingPage/LandingPage";
import {CategoriesPage} from '../components/Categories/CategoriesPage';
import { LoginScreen } from "../components/Registration/LoginScreen";
import { RegisterScreen } from "../components/Registration/RegisterScreen";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/ui/Footer";

export const EcommerceRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories" element={<Newsletter />} />
        <Route path="/categories" element={<Footer />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registerscreen" element={<RegisterScreen />} />

      </Routes>
    </Router>
  );
};
