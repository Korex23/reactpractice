import React from "react";
import { NavBar } from "../components/Nav";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/Hero";
import { MultipleCards } from "../components/cards";
import { MultipleCards2 } from "../components/cards";

const HomePage = () => {
  return (
    <div>
      <NavBar className="navagator" />
      <HeroSection />
      <div className="products">
        <br />
        <h2 className="text-white text-center mt-3 mb-3">
          Products and Services
        </h2>
        <MultipleCards />
      </div>
      <div>
        <h2 className="text-success text-center mt-5 mb-5">Learners Hub</h2>
        <MultipleCards2 />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
