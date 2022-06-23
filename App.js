import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { BtnStyle1 } from "./components/Button";

import HomePage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/Products";
import LearnerHubPage from "./pages/LearnersHub";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="Login" element={<LoginPage />} />
        <Route path="SignUp" element={<SignUpPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="About" element={<AboutUs />} />
        <Route path="Products" element={<ProductsPage />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Learners" element={<LearnerHubPage />} />
        <Route path="Contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
