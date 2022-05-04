import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { CategoriesPage } from "../components/Categories/CategoriesPage";
import { LoginScreen } from "../components/Registration/LoginScreen";
import { RegisterScreen } from "../components/Registration/RegisterScreen";
import { SingleDescription } from "../components/SingleProducts/SingleDescription";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/ui/Footer";
import CartPage from "../components/Checkout/CartPage/Cart";
import { CheckoutCart } from "../components/Checkout/CartPage/CheckoutCart";

import { AccountPage } from "../components/ProfilePage/AccountPage";

import { OnEarPage } from "../components/ProductsPage/OnEarPage";
import { InEarPage } from "../components/ProductsPage/InEarPage";

export const EcommerceRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories" element={<Newsletter />} />
        <Route path="/categories" element={<Footer />} />
        <Route path="/product/onear" element={<OnEarPage />} />
        <Route path="/product/inear" element={<InEarPage />} />
        <Route path="/product/:pid" element={<SingleDescription />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registerscreen" element={<RegisterScreen />} />
        <Route path="/accountpage" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkoutcart" element={<CheckoutCart />} />
      </Routes>
    </Router>
  );
};
