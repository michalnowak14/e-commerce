import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../features/cart/cartSlice";
import {
  selectCartItems,
  selectCartTotal,
} from "../../features/cart/cartSelectors";
import styles from "./CartStyles.module.css";

const Cart = ({ cartVisible, toggleCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div className={`${styles.cart} ${cartVisible ? styles.show : ""}`}>
      <button onClick={toggleCart} className={styles.closeButton}>
        close
      </button>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li key={`${item.id}-${item.size}`} className={styles.cartItem}>
              <img
                src={item.img}
                alt={item.name}
                className={styles.productImg}
              />
              <div className={styles.itemDetails}>
                <p>{item.name}</p>
                <p>{item.size}</p>
                <p>{item.price}$</p>
              </div>
              <div className={styles.quantityControls}>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        size: item.size,
                        quantity: item.quantity - 1,
                      })
                    )
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        size: item.size,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  dispatch(removeFromCart({ id: item.id, size: item.size }))
                }
                className={styles.removeButton}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className={styles.priceContainer}>
          <p>Total:</p>
          <p className={styles.price}>{totalPrice}$</p>
        </div>
      )}

      {cart.length > 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          className={styles.clearCart}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
