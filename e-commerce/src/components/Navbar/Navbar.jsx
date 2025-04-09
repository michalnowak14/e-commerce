import React from "react";
import styles from "./NavbarStyles.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSelectors";

const Navbar = ({ toggleCart }) => {
  const cart = useSelector(selectCartItems);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div onClick={() => navigate("/")}>home</div>
        <div onClick={toggleCart}>cart {cart.length}</div>
      </div>
    </div>
  );
};

export default Navbar;
