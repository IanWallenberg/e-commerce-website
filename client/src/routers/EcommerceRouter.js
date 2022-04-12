import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../components/LandingPage/LandingPage";

export const EcommerceRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};
