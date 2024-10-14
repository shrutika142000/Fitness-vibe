import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Offer from "./components/Offer";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Offer />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
