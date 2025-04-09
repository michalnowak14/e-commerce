import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useState } from "react";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <BrowserRouter>
      {/* <CartProvider> */}
      <Provider store={store}>
        <Navbar toggleCart={toggleCart} />
        <Cart cartVisible={cartVisible} toggleCart={toggleCart} />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
        </Routes>
        <Footer />
      </Provider>
      {/* </CartProvider> */}
    </BrowserRouter>
  );
}

export default App;
