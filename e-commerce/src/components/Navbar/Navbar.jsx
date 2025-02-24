import React, { useContext } from "react";
import styles from "./NavbarStyles.module.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Navbar = ({ toggleCart }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div onClick={() => navigate("/")}>home</div>
          <div onClick={toggleCart}>cart {cart.length}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
