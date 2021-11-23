import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer ";

function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
