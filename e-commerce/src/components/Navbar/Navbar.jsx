import React from "react";
import styles from "./NavbarStyles.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div onClick={() => navigate("/")}>menu</div>
          <div onClick={() => navigate("/cart/")}>koszyk 0</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
