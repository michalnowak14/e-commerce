import React from "react";
import styles from "./FooterStyles.module.css";
import logo from "../../assets/logo1.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyrightContainer}>
        <p>©Alien 2025</p>
        <p>All rights reserved</p>
      </div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
