import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import Cart from "./components/Cart";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  return (
    <Router>
      <Header setSearchTerm={setSearchTerm} />
      <Navbar setSelectedCategory={setSelectedCategory} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={<Products selectedCategory={selectedCategory} setCart={setCart} searchTerm={searchTerm} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;