import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartStyles.module.css";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  return (
    <>
      <div className={styles.container}>
        <Logo />
        {/* <Navbar /> */}
        <div className={styles.cart}>
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
