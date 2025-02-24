import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar toggleCart={toggleCart} />
        <Cart cartVisible={cartVisible} toggleCart={toggleCart} />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
