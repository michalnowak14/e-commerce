import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDisplay />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
