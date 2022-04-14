import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../components/LandingPage/LandingPage";
import {CategoriesPage} from '../components/Categories/CategoriesPage';

export const EcommerceRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
};
